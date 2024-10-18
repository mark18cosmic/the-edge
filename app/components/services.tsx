import React from 'react';
import { FaConciergeBell, FaUtensils, FaCalendarAlt } from 'react-icons/fa'; // Icons for each service

const Services = () => {
  return (
    <section className="bg-zinc-900 py-16" id="services">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-12">Our Services</h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Hotel Management */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
            <div className="mb-4 text-indigo-400 text-4xl">
              <FaConciergeBell />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Hotel Management</h3>
            <p className="text-gray-300">
              We offer comprehensive hotel management services to help streamline your operations, from front desk to housekeeping.
            </p>
          </div>

          {/* Restaurant Management */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
            <div className="mb-4 text-indigo-400 text-4xl">
              <FaUtensils />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Restaurant Management</h3>
            <p className="text-gray-300">
              Our restaurant management services provide expert guidance on everything from menu development to guest satisfaction.
            </p>
          </div>

          {/* Event Planning */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
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
