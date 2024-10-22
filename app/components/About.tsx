"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WhyUs from "./WhyUs";
import Team from "./team";

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
    <>
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 flex items-center justify-center md:p-10">
          {/* About Section */}
          <div className="max-w-3xl text-center" ref={aboutTextRef}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              About <span className="">The Edge</span>
            </h2>
            <p className="text-lg text-justify text-gray-600 mb-6 leading-relaxed">
              Established in 1996, THE EDGE Pvt. Ltd. has been committed to providing recruitment solutions that give our clients in the hospitality industry a distinct competitive advantage. We achieve this through fast, efficient recruitment services, access to specialized talent, cost-effective processes, and strategic insights, all aimed at upholding high service standards and enhancing the guest experience.
            </p>
            <p className="text-lg text-justify text-gray-600 leading-relaxed">
              As the global labor market evolves, finding the right talent has become increasingly challenging, particularly with the rise of skill shortages. At THE EDGE, we help our clients navigate these challenges through effective talent acquisition and team development, ensuring they maintain their competitive edge in the luxury hospitality sector.
            </p>
          </div>
        </div>
        {/* Why Us Section */}
        <WhyUs />
        <Team />
      </section>
    </>
  );
};

export default About;
