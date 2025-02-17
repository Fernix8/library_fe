"use client"; // Ensure it's a Client Component

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname(); // Get current path

  return (
    <header
      className="bg-white shadow-md h-32 fixed top-0 left-0 right-0 z-10 flex items-center"
      style={{
        backgroundImage: "linear-gradient(to left, rgb(0, 123, 255), rgb(255, 255, 255))",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center w-full">
        {/* Logo (Moved Left & Rounded) */}
        <Link href="/">
          <Image
            src="/images/Logo.jpg" // Change this to your school's logo
            alt="School Logo"
            width={80} // Adjust size as needed
            height={80}
            className="rounded-full border border-white shadow-lg" // Make it circular
          />
        </Link>

        {/* Title & Slogan */}
        <div className="text-center flex-1">
          <h1 className="text-2xl font-bold text-white drop-shadow-lg">
            THƯ VIỆN TRƯỜNG THPT PHAN CHÂU TRINH
          </h1>
          <p className="text-lg text-white italic drop-shadow-md">
            “ĐỌC MỘT CUỐN SÁCH, ĐI MUÔN DẶM ĐƯỜNG.”
          </p>
        </div>

        {/* Navigation */}
        <nav className="bg-white bg-opacity-20 backdrop-blur-md px-6 py-2 rounded-lg">
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
                    className={`px-4 py-2 rounded-md font-semibold cursor-pointer transition ${pathname === item.path
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
    </header>
  );
}
