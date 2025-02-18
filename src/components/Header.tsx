"use client"; // Ensure it's a Client Component

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname(); // Get current path
  const [menuOpen, setMenuOpen] = useState(false); // Control mobile menu

  return (
    <header
      className="bg-white shadow-md fixed top-0 left-0 right-0 z-10 flex flex-col md:flex-row items-center h-20 md:h-32 px-4 transition-all"
      style={{
        backgroundImage: "linear-gradient(to left, rgb(0, 123, 255), rgb(255, 255, 255))",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto flex justify-between items-center w-full">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/Logo.jpg"
            alt="School Logo"
            width={60} // Smaller logo on mobile
            height={60}
            className="md:w-20 md:h-20 rounded-full border border-white shadow-lg transition-all"
          />
        </Link>

        {/* Title & Slogan (Hidden on small screens) */}
        <div className="hidden md:flex flex-1 text-center">
          <h1 className="text-lg md:text-2xl font-bold text-white drop-shadow-lg">
            THƯ VIỆN TRƯỜNG THPT PHAN CHÂU TRINH
          </h1>
          <p className="text-sm md:text-lg text-white italic drop-shadow-md">
            “ĐỌC MỘT CUỐN SÁCH, ĐI MUÔN DẶM ĐƯỜNG.”
          </p>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            // Close Icon
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* Navigation (Desktop) */}
        <nav className="hidden md:block bg-white bg-opacity-20 backdrop-blur-md px-6 py-2 rounded-lg">
          <ul className="flex space-x-6">
            {[
              { name: "Trang chủ", path: "/" },
              { name: "Tra cứu", path: "/book" },
              { name: "Giới thiệu", path: "/about" },
              { name: "Liên hệ", path: "/contact" },
            ].map((item) => (
              <li key={item.path}>
                <Link href={item.path} className="no-underline">
                  <span
                    className={`px-4 py-2 rounded-md font-semibold cursor-pointer transition ${
                      pathname === item.path
                        ? "bg-blue-600 text-white"
                        : "text-black hover:text-white"
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation (Collapsible) */}
      {menuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
          <ul className="flex flex-col items-center space-y-4">
            {[
              { name: "Trang chủ", path: "/" },
              { name: "Tra cứu", path: "/book" },
              { name: "Giới thiệu", path: "/about" },
              { name: "Liên hệ", path: "/contact" },
            ].map((item) => (
              <li key={item.path}>
                <Link href={item.path} className="no-underline">
                  <span
                    className={`block px-6 py-3 text-lg rounded-md font-semibold cursor-pointer transition ${
                      pathname === item.path
                        ? "bg-blue-600 text-white"
                        : "text-black hover:text-blue-600"
                    }`}
                    onClick={() => setMenuOpen(false)} // Close menu on click
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
