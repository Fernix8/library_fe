import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex flex-wrap justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Link href="/">
            <Image src="/images/logo.png" alt="Logo" width={150} height={50} />
          </Link>
        </div>
        <div className="w-full md:w-auto flex-grow md:flex md:items-center md:justify-end">
          <form className="flex mb-4 md:mb-0 md:mr-4">
            <input
              type="text"
              placeholder="Search books..."
              className="flex-grow px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">
              <Search className="w-5 h-5" />
            </button>
          </form>
          <nav>
            <ul className="flex flex-wrap space-x-6">
              <li>
                <Link href="/" className="text-gray-800 hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-gray-800 hover:text-blue-600">
                  Book
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-800 hover:text-blue-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-800 hover:text-blue-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-800 hover:text-blue-600">
                  My Account
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

