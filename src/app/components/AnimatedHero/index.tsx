'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const backgroundImages = [
  "bg1.jpg",
  "bg2.jpg",
  "bg4.jpg"
];

const AnimatedHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { scrollY } = useScroll();
  
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.3, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.6, ease: "easeOut" }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2, ease: "easeInOut" }
    },
    tap: { scale: 0.95 }
  };

  const scrollIndicatorVariants = {
    initial: { y: -5, opacity: 0.5 },
    animate: {
      y: 5,
      opacity: 1,
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      style={{ opacity }}
      className="relative overflow-hidden min-h-screen"
    >
      {/* Static overlay background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-blue-500/85 to-blue-400/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]" />
      </div>

      {/* Animated background images */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{ y: backgroundY }}
          className="absolute inset-0 -z-10"
        >
          <img 
            src={backgroundImages[currentImageIndex]}
            alt="Medical Equipment"
            className="absolute w-full h-full object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Content container */}
      <div className="relative max-w-6xl mx-auto px-4 py-24 min-h-screen flex items-center">
        <div className="text-center space-y-8 w-full">
          <motion.h1 
            variants={titleVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6"
          >
            <motion.div
              className="relative inline-block"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 1
              }}
            >
              <span>MedScope</span>
              <motion.svg
                className="absolute -bottom-2 left-0 w-full"
                height="20"
                viewBox="0 0 200 20"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <motion.path
                  d="M0,10 Q50,0 100,10 T200,10"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </motion.svg>
            </motion.div>
            <span className="block">Medical Services</span>
          </motion.h1>

          <motion.p 
            variants={subtitleVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto"
          >
            We are not only the best healthcare equipment provider but also the best in terms of experience.
          </motion.p>

          <div className="space-y-4">
            <motion.button
              variants={buttonVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              whileHover="hover"
              whileTap="tap"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold 
                       shadow-lg backdrop-blur-sm hover:bg-blue-50 transition-colors
                       flex items-center justify-center mx-auto space-x-2"
            >
              <span>Discover More</span>
              <motion.div
                variants={scrollIndicatorVariants}
                initial="initial"
                animate="animate"
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Animated wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <motion.svg
          style={{ y: backgroundY }}
          viewBox="0 0 1440 120"
          className="w-full h-12 md:h-24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            fill="#f9fafb"
          />
        </motion.svg>
      </div>
    </motion.div>
  );
};

export default AnimatedHero;