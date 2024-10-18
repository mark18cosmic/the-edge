import React from "react";
import Image from "next/image";
import heroImage from "@/app/images/pexels-fauxels-3184360.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div
      className="relative w-full h-[100vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/pexels-fauxels-3184360.jpg')",
        filter: "grayscale(100%)",
      }}
      aria-label="Hero Section"
    >
      {/* Overlay for darkening the background */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 space-y-6 animate-fade-in-up">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide drop-shadow-2xl">
          The Edge
        </h1>
        <p className="mt-4 text-xl md:text-2xl lg:text-3xl font-medium text-gray-200 tracking-wide drop-shadow-lg">
          Empowering Excellence in the Hospitality Industry
        </p>

        {/* Optional Call to Action Button */}
        <Button
          className="mt-8 px-8 py-4 text-lg font-bold text-black bg-white hover:bg-gray-200 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          aria-label="Learn More"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default Hero;
