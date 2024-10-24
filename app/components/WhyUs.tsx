"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const WhyUs = () => {
    const aboutTextRef = useRef(null);
    const aboutImageRef = useRef(null);

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
    }, []);


    return (
        <div className="container height-[50vh] mx-auto py-16 px-4">
            {/* Why us Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
                {/* why us Image */}
                <div className="w-full h-full" ref={aboutImageRef}>
                    <Image
                        src="/images/pexels-fauxels-3184360.jpg"
                        alt="About The Edge"
                        className="w-full h-auto rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
                        width={600}
                        height={400}
                    />
                </div>

                {/* Why us Text */}
                <div ref={aboutTextRef} className="text-justify">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl text-center md:text-left font-bold text-gray-800 mb-6">
                        Why us?
                    </h2>
                    <ul className="list-disc text-justify md:text-left list-inside text-lg md:text-xl space-y-4 text-gray-600 mb-6 leading-relaxed">
                        <li className="text-lg flex items-start">
                            <span className="mr-2 text-[#b1190D]">&#x2713;</span> Access to Specialized Talent
                        </li>
                        <li className="text-lg flex items-start">
                            <span className="mr-2 text-[#b1190D]">&#x2713;</span> Efficient Hiring Process
                        </li>
                        <li className="text-lg flex items-start">
                            <span className="mr-2 text-[#b1190D]">&#x2713;</span> Tailored Recruitment Solutions
                        </li>
                        <li className="text-lg flex items-start">
                            <span className="mr-2 text-[#b1190D]">&#x2713;</span> Reduced Recruitment Costs and Risks
                        </li>
                        <li className="text-lg flex items-start">
                            <span className="mr-2 text-[#b1190D]">&#x2713;</span> Scalability and Seasonal Hiring
                        </li>
                        <li className="text-lg flex items-start">
                            <span className="mr-2 text-[#b1190D]">&#x2713;</span> Access to Passive Candidates
                        </li>
                        <li className="text-lg flex items-start">
                            <span className="mr-2 text-[#b1190D]">&#x2713;</span> High-Quality Screening and Vetting
                        </li>
                        <li className="text-lg flex items-start">
                            <span className="mr-2 text-[#b1190D]">&#x2713;</span> Track Record of Success
                        </li>
                        <li className="text-lg flex items-start">
                            <span className="mr-2 text-[#b1190D]">&#x2713;</span> Service Guarantee
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default WhyUs;
