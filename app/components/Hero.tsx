// components/Hero.tsx

import React from "react";
import Image from "next/image";
import heroImage from "@/app/images/pexels-fauxels-3184360.jpg";

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('images/pexels-fauxels-3184360.jpg')",
        filter: "grayscale(100%)"
     }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-5xl font-bold">The Edge</h1>
        <p className="mt-4 text-2xl">Empowering excellence in the Hospitality industry</p>
      </div>
    </div>
  );
};

export default Hero;
