"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
    <div className="bg-zinc-900 min-h-[50vh] py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 
          className="text-4xl text-white font-bold text-center mb-12"
          ref={headingRef}
        >
          What Our Clients Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div
            className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            ref={(el) => { testimonialCardsRef.current[0] = el; }}
          >
            {/* Avatar */}
            <div className="w-16 h-16 mx-auto mb-4">
              <Image
                src="/images/avatar1.jpg" // Replace with actual path
                alt="John Doe Avatar"
                className="rounded-full"
                width={64}
                height={64}
              />
            </div>
            {/* Testimonial Text */}
            <p className="text-gray-800 leading-relaxed italic mb-4">
              &quot;The Edge has been instrumental in transforming our business. Their expertise and dedication are unmatched.&quot;
            </p>
            <p className="text-sm text-gray-500">- John Doe, CEO of XYZ Corp</p>
          </div>

          {/* Testimonial 2 */}
          <div
            className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            ref={(el) => { testimonialCardsRef.current[1] = el; }}
          >
            {/* Avatar */}
            <div className="w-16 h-16 mx-auto mb-4">
              <Image
                src="/images/avatar2.jpg" // Replace with actual path
                alt="Jane Smith Avatar"
                className="rounded-full"
                width={64}
                height={64}
              />
            </div>
            {/* Testimonial Text */}
            <p className="text-gray-800 leading-relaxed italic mb-4">
            &quot;Their innovative approach and attention to detail helped us exceed our growth targets in record time.&quot;
            </p>
            <p className="text-sm text-gray-500">- Jane Smith, CFO of ABC Inc</p>
          </div>

          {/* Testimonial 3 */}
          <div
            className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            ref={(el) => { testimonialCardsRef.current[2] = el; }}
          >
            {/* Avatar */}
            <div className="w-16 h-16 mx-auto mb-4">
              <Image
                src="/images/avatar3.jpg" // Replace with actual path
                alt="Michael Lee Avatar"
                className="rounded-full"
                width={64}
                height={64}
              />
            </div>
            {/* Testimonial Text */}
            <p className="text-gray-800 leading-relaxed italic mb-4">
            &quot;Working with The Edge was a game-changer. Their insights and guidance took our operations to the next level.&quot;
            </p>
            <p className="text-sm text-gray-500">- Michael Lee, COO of QRS Enterprises</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
