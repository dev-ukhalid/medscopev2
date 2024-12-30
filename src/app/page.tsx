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
    return <LoadingCube />;
  }

  return (
    <>
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <Navigation />
          <AnimatedHero />
          <div id="about">
            <WhoWeAreAndMission />
          </div>
          <ProductsSection />
          <LeadershipSection />
          <MapSection />
          <Footer />
        </div>
      </section>
    </>
  );
}
