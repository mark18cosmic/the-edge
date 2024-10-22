"use client"

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Clients() {
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]); // Array of refs for cards

    const addToRefs = (el: HTMLAnchorElement) => {
        if (el && !cardRefs.current.includes(el)) {
            cardRefs.current.push(el);
        }
    };

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

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section className="py-10 pb-20 ">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2
                    className="text-4xl font-bold text-center text-white mb-12"
                    ref={headingRef}
                >
                    Our Clients
                </h2>
                {/* Clients */}
                <div className="grid grid-cols-2 justify-center items-center gap-12 md:grid-cols-3 xl:grid-cols-none xl:flex xl:justify-between">
                    <a ref={addToRefs} href="#" className="flex justify-center items-center">
                        {/* Client logo or content */}
                    </a>
                    <a ref={addToRefs} href="#" className="flex justify-center items-center">
                        {/* Client logo or content */}
                    </a>
                    <a ref={addToRefs} href="#" className="flex justify-center items-center">
                        {/* Client logo or content */}
                    </a>
                    <a ref={addToRefs} href="#" className="flex justify-center items-center">
                        {/* Client logo or content */}

                    </a>
                </div>
            </div>
        </section>
    );
}
