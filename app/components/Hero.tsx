"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const heroTitleRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const heroButtonRef = useRef(null);

  useEffect(() => {
    // Animation timeline
    const tl = gsap.timeline({ defaults: { ease: "power3.in", duration: 1 } });

    tl.fromTo(
      heroTitleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
      .fromTo(
        heroSubtitleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" },
        "-=0.7" // Start slightly before the title animation ends
      )
      .fromTo(
        heroButtonRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.5" // Overlap with the subtitle animation
      );

      console.log(window.innerWidth);

  }, []);
  return (
    <div
      className="relative w-full h-[100vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/photo_2024-10-23_05-16-59.jpg')",
        filter: "grayscale(100%)",
      }}
      aria-label="Hero Section"
    >
      {/* Overlay for darkening the background */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 space-y-6">
        <h1
          ref={heroTitleRef}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide drop-shadow-2xl"
        >
          The Edge
        </h1>
        <p
          ref={heroSubtitleRef}
          className="mt-4 text-xl md:text-2xl lg:text-3xl font-medium text-gray-200 tracking-wide drop-shadow-lg"
        >
          Empowering Excellence in the Hospitality Industry
        </p>

        {/* Optional Call to Action Button */}
        <Button
          ref={heroButtonRef}
          className="mt-8 px-8 py-4 text-lg font-bold text-black bg-white hover:bg-gray-200 rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          aria-label="Learn More"
          onClick={() => {
            const targetSection = document.getElementById("about"); // Replace with your target section's ID
            if (targetSection) {
              targetSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Learn More
        </Button>

      </div>
    </div>
  );
};

export default Hero;
