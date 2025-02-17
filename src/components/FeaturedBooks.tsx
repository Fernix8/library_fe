'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchTop5Books } from "../utils/api"; // Adjust the import as needed

interface Book {
  _id: string;
  bookCode: string; // Mã sách
  title: string;    // Tên sách
  author: string;   // Tác giả
  publisher?: string; // Nhà xuất bản
  publishedYear?: string; // Năm xuất bản
  imageUrl?: string; // Ảnh sách
}

export default function FeaturedBooks() {
  const [featuredBooks, setFeaturedBooks] = useState<Book[]>([]);

  useEffect(() => {
    const getTopBooks = async () => {
      const books = await fetchTop5Books();
      setFeaturedBooks(books);
    };

    getTopBooks();
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-sky-300 font-bold text-center mb-8">
          🌟 Tài liệu mới
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {featuredBooks.length > 0 ? (
            featuredBooks.map((book) => (
              <div key={book._id} className="bg-white p-4 rounded-lg shadow-lg">
                <Image
                  src={book.imageUrl || "/images/default_book.jpg"}
                  alt={book.title}
                  width={300}
                  height={400}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-orange-400">📖 Tên sách: {book.title}</h3>
                <p className="text-gray-700">📚 Mã sách: {book.bookCode}</p>
                <p className="text-gray-700">✍ Tác giả: {book.author}</p>
                {book.publisher && <p className="text-gray-500 text-sm">🏢 Nhà xuất bản: {book.publisher}</p>}
                {book.publishedYear && <p className="text-gray-500 text-sm">📅 Năm xuất bản: {book.publishedYear}</p>}

                {/* 🔍 View Details Button */}
                <button
                  onClick={() => window.location.href = `/book/${book._id}`}
                  className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Xem chi tiết
                </button>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </section>
  );
}
