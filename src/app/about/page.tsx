import Image from "next/image"
import Link from "next/link"

export default function About() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          About <span className="text-blue-600">Us</span>
        </h2>
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <Link href="/about" className="text-blue-600 hover:text-blue-800 font-semibold">
              Read More
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <Image src="/images/about.png" alt="About Us" width={500} height={300} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}

