"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  {
    href: "/#about",
    label: "About Us",
  },
  {
    href: "/#services",
    label: "Our Services",
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
      className={`fixed top-0 left-0 w-full z-50 transition-all   duration-300 ease-in-out ${isScrolled ? "bg-zinc-900 shadow-md" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto flex justify-between items-center py-1 px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-white text-2xl font-extrabold tracking-wide hover:text-gray-300 transition duration-300 ease-in-out"
        >
          <Image
            src="/images/logo.png"
            className="object-contain h-24 w-auto"
            alt="The Edge"
            width={200}
            height={200}
          />        </Link>

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
