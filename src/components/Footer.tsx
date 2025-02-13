import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">library</h3>
            <p className="text-gray-400">Your gateway to knowledge and imagination.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/catalog" className="hover:text-blue-400">
                  Book Catalog
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-blue-400">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-blue-400">
                  Donate
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="hover:text-blue-400">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-blue-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-400">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:opacity-75">
                <Image src="/icon/facebook.png" alt="Facebook" width={32} height={32} />
              </a>
              <a href="#" className="hover:opacity-75">
                <Image src="/icon/Twitter.png" alt="Twitter" width={32} height={32} />
              </a>
              <a href="#" className="hover:opacity-75">
                <Image src="/icon/instagram.png" alt="Instagram" width={32} height={32} />
              </a>
            </div>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-3 py-2 rounded-l-md text-gray-800"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-gray-700 pt-8">
        </div>
      </div>
    </footer>
  )
}

