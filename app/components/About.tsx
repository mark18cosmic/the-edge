import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* About Text */}
          <div>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              About <span className="text-indigo-600">The Edge</span>
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
          <div className="w-full h-full">
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
            Our <span className="text-indigo-600">Gallery</span>
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
              <div key={index} className="relative w-full h-64">
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
