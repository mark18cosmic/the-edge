"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  {
    href: "/#services",
    label: "Our Services",
  },
  {
    href: "/#about",
    label: "About",
  },
  {
    href: "/#Contact",
    label: "Contact",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-zinc-900 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-white text-2xl font-extrabold tracking-wide hover:text-gray-300 transition duration-300 ease-in-out"
        >
          The Edge
        </Link>

        {/* Links */}
        <ul className=" space-x-8 hidden md:flex text-lg font-medium text-white">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-gray-300 transition duration-300 ease-in-out"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
