import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testimonials from "./components/testimonials";
import Services from "./components/services";
import FAQ from "./components/faq";
import About from "./components/About";
import Contact from "./components/contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}


// Navbar
// Hero
// Testimonials
// Footer
// Services
// About
// Contact
// Blog
// FAQ
