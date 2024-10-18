"use client";

import React, { useEffect, useRef } from 'react';
import { FaConciergeBell, FaUtensils, FaCalendarAlt } from 'react-icons/fa'; // Icons for each service
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Services = () => {
  const serviceCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  // Register ScrollTrigger plugin with GSAP
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for the service cards
    gsap.fromTo(
      serviceCardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2, // Stagger the animation for each card
        scrollTrigger: {
          trigger: serviceCardsRef.current[0], // Start the trigger when the first card is visible
          start: 'top 80%', // Trigger when the top of the first card is 80% into the viewport
          toggleActions: 'play none none none', // Play animation once
        },
      }
    );

    // Animation for the heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%', // Trigger when the heading is 80% into the viewport
          toggleActions: 'play none none none', // Play animation once
        },
      }
    );

    return () => {
      // Cleanup ScrollTrigger when the component unmounts
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section className="bg-zinc-900 py-16" id="services">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 
          className="text-4xl font-bold text-white mb-12" 
          ref={headingRef}
        >
          Our Services
        </h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Hotel Management */}
          <div
            className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
            ref={(el) => { serviceCardsRef.current[0] = el; }}
          >
            <div className="mb-4 text-indigo-400 text-4xl">
              <FaConciergeBell />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Hotel Management</h3>
            <p className="text-gray-300">
              We offer comprehensive hotel management services to help streamline your operations, from front desk to housekeeping.
            </p>
          </div>

          {/* Restaurant Management */}
          <div
            className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
            ref={(el) => { serviceCardsRef.current[1] = el; }}
          >
            <div className="mb-4 text-indigo-400 text-4xl">
              <FaUtensils />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Restaurant Management</h3>
            <p className="text-gray-300">
              Our restaurant management services provide expert guidance on everything from menu development to guest satisfaction.
            </p>
          </div>

          {/* Event Planning */}
          <div
            className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
            ref={(el) => { serviceCardsRef.current[2] = el; }}
          >
            <div className="mb-4 text-indigo-400 text-4xl">
              <FaCalendarAlt />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Event Planning</h3>
            <p className="text-gray-300">
              We specialize in planning and executing unforgettable events, tailored to meet your specific needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
