"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiOutlineChatAlt2, HiOutlineClipboardList, HiScale } from 'react-icons/hi';
const Services = () => {
  const serviceCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  // Register ScrollTrigger plugin with GSAP
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
        once: true, // Ensures the animation runs only once
      },
    });

    // Animate the heading
    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      }
    );

    // Animate the service cards
    tl.fromTo(
      serviceCardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2, // Stagger each card's animation
      },
      "-=0.5" // Overlap card animation with the heading
    );
  }, []);


  return (
    <section className="bg-zinc-900 pt-10" id="services">
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
            className="bg-[#2e2e2e] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
            ref={(el) => { serviceCardsRef.current[0] = el; }}
          >
            <div className="mb-4 text-[#555555] text-4xl">
            <HiOutlineChatAlt2 />            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Arrangement of Direct Interview </h3>
            <p className="text-gray-300">
              We arrange direct interviews with potential clients via Phone, Google Meet, Whatsapp or even in person.</p>
          </div>

          {/* Restaurant Management */}
          <div
            className="bg-[#2e2e2e] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
            ref={(el) => { serviceCardsRef.current[1] = el; }}
          >
            <div className="mb-4 text-[#555555] text-4xl">
            <HiScale />            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Handle Recruitment Formalities</h3>
            <p className="text-gray-300">
              We handle formalities such as Work Permits, Immigration, Airport Reception and Transfers.</p>
          </div>

          {/* Event Planning */}
          <div
            className="bg-[#2e2e2e] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
            ref={(el) => { serviceCardsRef.current[2] = el; }}
          >
            <div className="mb-4 text-[#555555] text-4xl">
              <HiOutlineClipboardList />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Comprehensive HR Management Solutions</h3>
            <p className="text-gray-300">
              We provide comprehensive solutions for all your HR management needs available for outsourced services.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
