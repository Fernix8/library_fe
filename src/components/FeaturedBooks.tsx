import Image from "next/image"
import Link from "next/link"

const featuredBooks = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", cover: "/images/book-1.jpg" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", cover: "/images/book-2.jpg" },
  { id: 3, title: "1984", author: "George Orwell", cover: "/images/book-3.jpg" },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen", cover: "/images/book-4.jpg" },
]

export default function FeaturedBooks() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-sky-300 font-bold text-center mb-8">
        🌟 Tài liệu mới
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {featuredBooks.map((book) => (
            <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={book.cover || "/placeholder.svg"}
                alt={book.title}
                width={300}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{book.title}</h3>
                <p className="text-gray-600 mb-4">{book.author}</p>
                <Link href={`/book/${book.id}`} className="text-blue-600 hover:text-blue-800 font-semibold">
                  Xem chi tiết
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}