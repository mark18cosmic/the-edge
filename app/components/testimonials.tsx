import React from 'react';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <div className="bg-zinc-900 py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl text-white font-bold text-center mb-12">
          What Our Clients Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
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
          <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
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
          <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
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
