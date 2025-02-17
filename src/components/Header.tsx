"use client"; // Ensure it's a Client Component

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname(); // Get current path

  return (
    <header
      className="bg-white shadow-md h-28 fixed top-0 left-0 right-0 z-10"
      style={{
        backgroundImage: "url(/images/tentruong.jpg)",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto pl-2 py-6 flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/images/tentruong.jpg" alt="Logo" width={150} height={50} style={{ display: "none" }} />
          </Link>
        </div>
        <nav className="bg-white bg-opacity-20 backdrop-blur-md px-6 py-2 rounded-lg">
          <ul className="flex space-x-6">
            {[
              { name: "Trang chủ", path: "/" },
              { name: "Tài Liệu", path: "/book" },
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
    </header>
  );
}
