"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const OurTeam = () => {
  const textSectionRef = useRef<HTMLDivElement | null>(null);
  const imageSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      textSectionRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textSectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      imageSectionRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageSectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="our-team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div ref={textSectionRef}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Meet <span className="">Our Team</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our multinational team includes full-time professionals,
              international partners, freelancers, and technical specialists
              from various disciplines. From food and beverage experts to
              engineers, our diverse team collaborates to provide comprehensive
              recruitment solutions that cater to the diverse needs of luxury
              resort hotels.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Through our specialized branches like Edge Executive and our
              international remote teams, we ensure top-tier recruitment for
              both leadership roles and general talent across the globe.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full h-full" ref={imageSectionRef}>
            <Image
              src="/images/pexels-fauxels-3184360.jpg"
              alt="Our Team"
              className="w-full h-auto rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
