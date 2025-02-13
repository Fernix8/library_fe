import Image from "next/image"
import Link from "next/link"

export default function Slider() {
  return (
    <section className="relative h-screen">
      <Image src="/images/banner.jpg" alt="Library Banner" layout="fill" objectFit="cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">
            The Best Libraries That
            <br /> Every Book Lover Must
            <br /> Visit!
          </h1>
          <p className="mb-8">Discover the world's most beautiful and inspiring libraries.</p>
          <Link href="/about" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Read More
          </Link>
        </div>
      </div>
    </section>
  )
}

