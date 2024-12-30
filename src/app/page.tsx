"use client";
import { useState, useEffect } from "react";
import AnimatedHero from "../app/components/AnimatedHero";
import Navigation from "./components/Nav";
import WhoWeAreAndMission from "./components/WhoWeAreAndMission";
import ProductsSection from "./components/products";
import LeadershipSection from "./components/executives";
import Footer from "./components/footer";
import LoadingCube from "./components/LoadingCube";
import MapSection from "./components/MapSection";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for your actual data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingCube />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <div className="w-full">
          <AnimatedHero />
        </div>
        
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <section id="about" className="py-12 md:py-16">
            <WhoWeAreAndMission />
          </section>
          
          <section className="py-12 md:py-16">
            <ProductsSection />
          </section>
          
          <section className="py-12 md:py-16">
            <LeadershipSection />
          </section>
          
          <section className="py-12 md:py-16">
            <MapSection />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}