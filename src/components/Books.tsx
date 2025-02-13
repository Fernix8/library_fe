import Image from "next/image"
import Link from "next/link"

export default function Books() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          Our <span className="text-blue-600">Books</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <Image src="/images/book-1.jpg" alt="Book 1" width={300} height={400} className="rounded-lg shadow-lg" />
          <Image src="/images/book-2.jpg" alt="Book 2" width={600} height={400} className="rounded-lg shadow-lg" />
          <Image src="/images/book-1.jpg" alt="Book 3" width={300} height={400} className="rounded-lg shadow-lg" />
        </div>
        <p className="text-center text-gray-700 mb-8">Discover our wide selection of books for every reader.</p>
        <div className="text-center">
          <Link href="/books" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Read More
          </Link>
        </div>
      </div>
    </section>
  )
}

