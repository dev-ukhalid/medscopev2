'use client';

import React, { useState, useEffect } from 'react';
import { Truck, Shield, Brain, HeadphonesIcon } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Image from 'next/image';

export interface Feature {
  icon: string;
  title: string;
  description: string;
  gradient: string;
  bgPattern: string;
  image: string;
}

interface FeatureData {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  bgPattern: string;
  image: string;
}

const features: FeatureData[] = [
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Quick and reliable delivery to your doorstep",
    gradient: "from-sky-400/95 to-sky-600/95",
    bgPattern: "radial-gradient(circle at 20% 50%, rgba(56, 189, 248, 0.1) 0%, transparent 50%)",
    image: "/our2.png" // Replace with your actual image path
  },
  {
    icon: Shield,
    title: "Trust",
    description: "100% secure and verified equipment",
    gradient: "from-sky-500/95 to-sky-700/95",
    bgPattern: "radial-gradient(circle at 30% 20%, rgba(56, 189, 248, 0.1) 0%, transparent 50%)",
    image: "/our1.png" // Replace with your actual image path
  },
  {
    icon: Brain,
    title: "Expertise",
    description: "Professional guidance and consultation",
    gradient: "from-sky-600/95 to-sky-800/95",
    bgPattern: "radial-gradient(circle at 80% 20%, rgba(56, 189, 248, 0.1) 0%, transparent 50%)",
    image: "/our2.png" // Replace with your actual image path
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock customer assistance",
    gradient: "from-sky-700/95 to-sky-900/95",
    bgPattern: "radial-gradient(circle at 50% 20%, rgba(56, 189, 248, 0.1) 0%, transparent 50%)",
    image: "/our3.png" // Replace with your actual image path
  }
] as const;

const FeatureCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handleSlideChange = (index: number): void => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section className="w-full max-w-4xl mx-auto p-6  bg-sky-50" aria-label="Feature Carousel">
      <div className="relative h-96 overflow-hidden rounded-xl shadow-xl">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className={`absolute w-full h-full transform transition-all duration-500 ease-in-out ${
                index === currentSlide 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-full opacity-0'
              }`}
              aria-hidden={index !== currentSlide}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={feature.image}
                  alt={`${feature.title} background`}
                  fill
                  className="object-cover"
                  priority={index === currentSlide}
                />
              </div>

              {/* Gradient Overlay */}
              <div 
                className={`absolute inset-0 bg-gradient-to-r ${feature.gradient}`}
                style={{
                  backgroundImage: feature.bgPattern
                }}
              />

              {/* Content */}
              <div className="relative z-10 h-full w-full p-8 flex flex-col items-center justify-center text-white">
                <div className="mb-4 transform transition-all duration-300 hover:scale-110 bg-white/10 p-4 rounded-full backdrop-blur-sm">
                  <Icon className="w-12 h-12 text-sky-50" />
                </div>
                <div className="text-center backdrop-blur-sm bg-black/20 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/90 max-w-md mx-auto">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        {/* Navigation Arrows */}
        <button 
          onClick={() => handleSlideChange((currentSlide - 1 + features.length) % features.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm transition-all duration-300"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 text-white" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={() => handleSlideChange((currentSlide + 1) % features.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm transition-all duration-300"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 text-white" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Slide Indicators */}
      <div className="flex justify-center mt-4 gap-2" role="tablist">
        {features.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:bg-sky-400 ${
              index === currentSlide ? 'bg-sky-500 w-6' : 'bg-sky-300'
            }`}
            aria-selected={index === currentSlide}
            aria-label={`Slide ${index + 1}`}
            role="tab"
          />
        ))}
      </div>
    </section>
  );
};

export default FeatureCarousel;