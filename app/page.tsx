"use client";
import React from "react";
import CustomNavbar from "../components/navbar";
import HeroSection from "../components/herosection";
import BestSellers from "../components/bestsellers"; 
import CTASection from "../components/ctasection";  
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <CustomNavbar />
      <main>
        {}
        <HeroSection />
        <BestSellers />
        <CTASection />
        {}
      </main>
      <Footer />
    </div>
  );
}