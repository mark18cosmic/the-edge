"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { useRef, useEffect, useState } from "react"; // Import useState
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const FAQ = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const faqItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const galleryImagesRef = useRef<(HTMLDivElement | null)[]>([]);

  const [imageCount, setImageCount] = useState(6); // Default to show 6 images

  const faqs = [
    {
      question: "What services does The Edge offer?",
      answer:
        "The Edge specializes in recruitment services for the hospitality industry, helping connect top talent with leading employers.",
    },
    {
      question: "How can I apply for a job?",
      answer:
        "You can apply by visiting our job listings section and submitting your resume for the relevant positions.",
    },
    {
      question: "Do you offer international placements?",
      answer:
        "Yes, The Edge partners with global employers and offers opportunities both locally and internationally.",
    },
    {
      question: "What industries do you recruit for?",
      answer:
        "We focus primarily on the hospitality industry but also have opportunities in other service-related sectors.",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for the FAQ section fade-in and slide-up
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

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

    // Animation for each accordion item to fade in when it appears
    faqItemsRef.current.forEach((item, index) => {
      if (item) {
        gsap.fromTo(
          item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            delay: 0.1 * index,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setImageCount(window.innerWidth <= 640 ? 4 : 6);
    };

    // Set initial count on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <section className="container mx-auto my-20 px-4">
        {/* Gallery Section */}
        <div className="height-[50vh] bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
              Our Gallery
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* Gallery Images */}
              {[
                "/images/pexels-fauxels-3184360.jpg",
                "/images/pexels-fauxels-3184360.jpg",
                "/images/pexels-fauxels-3184360.jpg",
                "/images/pexels-fauxels-3184360.jpg",
                "/images/pexels-fauxels-3184360.jpg",
                "/images/pexels-fauxels-3184360.jpg",
              ]
                .slice(0, imageCount) // Use state to determine the number of images
                .map((src, index) => (
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

      <section
        ref={sectionRef}
        className="max-w-4xl mx-auto my-20 px-4"
      >
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold text-center mb-10 text-zinc-900 relative">
          Frequently Asked Questions
        </h2>

        {/* Accordion Component */}
        <Accordion type="multiple" className="space-y-6">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="border border-gray-200 rounded-lg"
              ref={el => { faqItemsRef.current[index] = el }} // Reference each accordion item
            >
              <AccordionTrigger className="text-xl font-semibold py-3 px-5 hover:bg-gray-100 transition-colors rounded-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-5 py-3 text-gray-700">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}

export default FAQ;
