"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { fetchBooks, searchBooks } from "@/utils/api";

interface Book {
  _id: string;
  stt: number;
  bookCode: string;
  bookId: string;
  title: string;
  parallelTitle?: string;
  librarySection?: string;
  description?: string;
  volume?: number;
  volumeTitle?: string;
  author: string;
  coAuthor?: string;
  translator?: string;
  manufacturingPlace?: string;
  publisher?: string;
  publishedYear?: string;
  quantity?: number;
  edition?: number;
  price?: number;
  classificationCode?: number;
  paper?: number;
  size?: number;
  letter?: string;
  footnote?: string;
  dktq?: string;
  topic?: string;
  note?: string;
  imageUrl?: string;
}

const Books = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchBy, setSearchBy] = useState<"title" | "author">("title");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const limit = 6;
  const router = useRouter();

  // Fetch books on initial load and pagination change
  useEffect(() => {
    const getBooks = async () => {
      setLoading(true);
      const data = await fetchBooks(searchTerm, page, limit);
      setBooks(data?.books || []);
      setTotalPages(data?.totalPages || 1);
      setLoading(false);
    };
    getBooks();
  }, [searchTerm, page]);

  // Debounced Search Function
  useEffect(() => {
    const delayDebounce = setTimeout(async () => {
      if (searchTerm) {
        setLoading(true);
        const results = await searchBooks(searchTerm, searchBy);
        setBooks(results);
        setTotalPages(1); // No pagination for search results
        setLoading(false);
      }
    }, 500); // 500ms delay

    return () => clearTimeout(delayDebounce);
  }, [searchTerm, searchBy]);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          Library <span className="text-blue-600">Books</span>
        </h2>

        {/* 🔍 Search Bar */}
        <div className="mb-6 flex justify-center space-x-4">
          <select
            value={searchBy}
            onChange={(e) => setSearchBy(e.target.value as "title" | "author")}
            className="p-2 border border-gray-300 rounded-lg"
          >
            <option value="title">Search by Title</option>
            <option value="author">Search by Author</option>
          </select>
          <input
            type="text"
            placeholder={`Search books by ${searchBy}...`}
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setPage(1);
            }}
            className="p-2 border border-gray-300 rounded-lg w-1/2"
          />
        </div>

        {loading ? (
          <p className="text-center text-gray-700">Loading books...</p>
        ) : books.length === 0 ? (
          <p className="text-center text-gray-700">No books available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {books.map((book) => (
              <div key={book.stt} className="bg-white p-4 rounded-lg shadow-lg">
                <Image
                  src={book.imageUrl || "/images/default_book.jpg"}
                  alt={book.title}
                  width={300}
                  height={400}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-orange-400">{book.title}</h3>
                {book.parallelTitle && <p className="text-gray-500 text-sm">({book.parallelTitle})</p>}
                <p className="text-gray-700">📚 Section: {book.librarySection || "N/A"}</p>
                <p className="text-gray-700">✍ Author: {book.author}</p>
                {book.translator && <p className="text-gray-700">📝 Translator: {book.translator}</p>}
                <p className="text-gray-500 text-sm">🏢 {book.publisher} ({book.publishedYear})</p>
                <p className="text-blue-600 font-bold mt-2">💰 Price: ${book.price}</p>
                <p className="text-green-600 font-bold">📦 Available: {book.quantity} copies</p>

                {/* 🔍 View Details Button */}
                <button
                  onClick={() => router.push(`/book/${book._id}`)}
                  className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-6 space-x-4">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className={`px-4 py-2 rounded-lg ${page === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
            >
              Previous
            </button>
            <span className="text-lg font-semibold">{`Page ${page} of ${totalPages}`}</span>
            <button
              onClick={() => setPage((prev) => (prev < totalPages ? prev + 1 : prev))}
              disabled={page === totalPages}
              className={`px-4 py-2 rounded-lg ${page === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Books;
