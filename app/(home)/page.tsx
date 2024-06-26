import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function page() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative h-screen">
        <div className="max-w-7xl mx-auto p-5">
          <Navbar className="py-10 flex justify-between item-center" />
          <HeroSection />
        </div>
        <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-16 bott left-0 xl:-bottom-0 w-full"></div>
      </div>
      <section className="max-w-7xl mx-auto p-5 mt-20">
        <Skills />
        <Projects />
        <Footer />
      </section>
    </div>
  );
}
