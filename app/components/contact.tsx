import React from "react";
import { Input } from "@/components/ui/input"; // Assuming you're using ShadCN's Input component
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <section id="Contact" className="py-20 bg-zinc-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Get in Touch
            </h3>
            <p className="text-lg mb-6">
              Have any questions or inquiries? We&apos;d love to hear from you. Fill
              out the form or reach us directly through the contact information
              below.
            </p>

            <div className="mb-4">
              <h4 className="font-bold">Phone</h4>
              <p>+1 123 456 7890</p>
            </div>
            <div className="mb-4">
              <h4 className="font-bold">Email</h4>
              <p>info@theedge.com</p>
            </div>
            <div className="mb-4">
              <h4 className="font-bold">Address</h4>
              <p>123 Recruitment St, City, Country</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              {/* Name Field */}
              <div className="flex flex-col space-y-2">
                <Label htmlFor="name" className="font-semibold">
                  Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col space-y-2">
                <Label htmlFor="email" className="font-semibold">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full"
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col space-y-2">
                <Label htmlFor="message" className="font-semibold">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Your Message"
                  rows={5}
                  className="w-full"
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full bg-[#d41212] text-white hover:bg-[#b1190D] transition duration-300">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
