"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const aboutTextRef = useRef(null);
  const aboutImageRef = useRef(null);
  const galleryImagesRef = useRef<(HTMLDivElement | null)[]>([]);

  // Register ScrollTrigger plugin with GSAP
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for the About section text
    gsap.fromTo(
      aboutTextRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutTextRef.current,
          start: "top 80%", // Start animation when 80% of the element is in view
          toggleActions: "play none none none", // Play animation once
        },
      }
    );

    // Animation for the About section image
    gsap.fromTo(
      aboutImageRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5,
        scrollTrigger: {
          trigger: aboutImageRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animation for the gallery images
    gsap.fromTo(
      galleryImagesRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: galleryImagesRef.current[0], // Trigger on first image
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      // Cleanup ScrollTrigger when the component unmounts
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* About Text */}
          <div ref={aboutTextRef}>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              About <span className="text-red-600">The Edge</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At The Edge, we are committed to empowering excellence in the hospitality industry. 
              With years of experience, we specialize in connecting talented individuals with 
              leading employers. Our focus is on creating opportunities for both local and 
              international job seekers, making us the trusted partner for recruitment solutions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is to ensure that every placement is a perfect match, contributing to the 
              long-term success of both candidates and companies. Join us at The Edge, where we 
              redefine the future of hospitality recruitment.
            </p>
          </div>

          {/* About Image */}
          <div className="w-full h-full" ref={aboutImageRef}>
            <Image
              src="/images/pexels-fauxels-3184360.jpg"
              alt="About The Edge"
              className="w-full h-auto rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-16 bg-white mt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
            Our <span className="text-red-600">Gallery</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Gallery Images */}
            {[
              "/images/pexels-fauxels-3184360.jpg",
              "/images/pexels-fauxels-3184360.jpg",
              "/images/pexels-fauxels-3184360.jpg",
              "/images/pexels-fauxels-3184360.jpg",
              "/images/pexels-fauxels-3184360.jpg",
              "/images/pexels-fauxels-3184360.jpg",
            ].map((src, index) => (
              <div
                key={index}
                className="relative w-full h-64"
                ref={(el) => {
                  if (el) galleryImagesRef.current[index] = el;
                }}
              >
                <Image
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  className="rounded-lg shadow-md object-cover transform transition duration-500 hover:scale-105"
                  layout="fill"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
