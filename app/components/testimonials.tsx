"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Clients from './clients';

const Testimonials = () => {
  const testimonialCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  // Register ScrollTrigger plugin with GSAP
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for the testimonial cards
    gsap.fromTo(
      testimonialCardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2, // Stagger the animation for each card
        scrollTrigger: {
          trigger: testimonialCardsRef.current[0], // Start the trigger when the first card is visible
          start: 'top 80%', // Trigger when the first card is 80% into the viewport
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
    <div className="bg-zinc-900 py-10">
      <Clients />

      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2
          className="text-4xl text-white font-bold text-center mb-12"
          ref={headingRef}
        >
          What Our Clients Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-8">


          {/* Testimonial 2 */}
          <div
            className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            ref={(el) => { testimonialCardsRef.current[1] = el; }}
          >
            {/* Testimonial Text */}
            <p className="text-gray-800 leading-relaxed italic mb-4">
              &quot;The quality of services from THE EDGE remains consistent, ensuring smooth operations at our resorts.&quot;
            </p>
            <p className="text-sm text-gray-500">- Corporate Director of Human Resources
              Universal Enterprises Pvt. Ltd
            </p>
          </div>
          {/* Testimonial 1 */}
          <div
            className="bg-white p-8 rounded-lg shadow-lg items-center justify-center transform transition duration-300 hover:scale-105"
            ref={(el) => { testimonialCardsRef.current[0] = el; }}
          >
            {/* Testimonial Text */}
            <p className="text-gray-800 leading-relaxed italic mb-4">
              &quot;We have been recruiting from The Edge almost from the inception of our company, and their service is reliable, consistent and prompt,&quot;
            </p>
            <p className="text-sm text-gray-500">- Mohamed Khaleel,
              Managing Director of Reollo Group. Reollo Investments & Manta Air,
              Director of Kandinma Holdings Pvt. Ltd</p>
          </div>

          {/* Testimonial 3 */}
          <div
            className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            ref={(el) => { testimonialCardsRef.current[2] = el; }}
          >
            {/* Testimonial Text */}
            <p className="text-gray-800 leading-relaxed italic mb-4">
              &quot;We have relied on THE EDGE for recruitment across our resorts, and their professionalism is unmatched.&quot;
            </p>
            <p className="text-sm text-gray-500 ">- Ibrahim Mohamed
              Director of Human Resources, Villa Group</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Testimonials;
