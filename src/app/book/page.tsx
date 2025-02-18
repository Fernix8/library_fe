"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchBooks, searchBooks } from "@/utils/api";

interface Book {
  _id: string;
  bookCode: string; 
  title: string;    
  author: string;   
  publisher?: string;
  publishedYear?: string;
  imageUrl?: string; 
}

const Books = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchBy, setSearchBy] = useState<"title" | "author">("title");
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const limit = 6;
  const router = useRouter();

  useEffect(() => {
    const getBooks = async () => {
      setLoading(true);
      const data = await fetchBooks("", page, limit);
      setBooks(data?.books || []);
      setTotalPages(data?.totalPages || 1);
      setLoading(false);
    };
    getBooks();
  }, [page]);

  const handleSearch = async () => {
    if (!searchTerm) return;
    setLoading(true);
    const results = await searchBooks(searchTerm, searchBy);
    setBooks(results);
    setTotalPages(1);
    setLoading(false);
  };

  return (
    <section className="py-8 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8">
          Library <span className="text-blue-600">Books</span>
        </h2>

        {/* 🔍 Responsive Search Bar */}
        <div className="mb-6 md:mb-8 flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-4 bg-gray-50 p-4 rounded-lg shadow-lg">
          {/* Dropdown */}
          <select
            value={searchBy}
            onChange={(e) => setSearchBy(e.target.value as "title" | "author")}
            className="p-3 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 bg-white hover:bg-blue-50 transition-all w-full md:w-auto"
          >
            <option value="title">TÊN SÁCH</option>
            <option value="author">TÁC GIẢ</option>
          </select>

          {/* Search Input */}
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              placeholder="Tìm kiếm sách"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 pl-10 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 bg-white hover:bg-blue-50 transition-all"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3 top-3 w-5 h-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 17a6 6 0 100-12 6 6 0 000 12zm0 0l5 5m-5-5H5"
              />
            </svg>
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-lg shadow w-full md:w-auto"
          >
            Tìm kiếm
          </button>
        </div>

        {/* 🔄 Loading / No Results / Books Display */}
        {loading ? (
          <p className="text-center text-gray-700">Đang tải sách...</p>
        ) : books.length === 0 ? (
          <p className="text-center text-gray-700">Sách không tồn tại.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {books.map((book) => (
              <div key={book._id} className="bg-white p-4 rounded-lg shadow-lg">
                <h3 className="text-lg md:text-xl font-semibold text-orange-400">
                  📖Tên sách: {book.title}
                </h3>
                <p className="text-gray-700 text-sm md:text-base">📚 Mã sách: {book.bookCode}</p>
                <p className="text-gray-700 text-sm md:text-base">✍ Tác giả: {book.author}</p>
                {book.publisher && (
                  <p className="text-gray-500 text-xs md:text-sm">
                    🏢 Nhà xuất bản: {book.publisher}
                  </p>
                )}
                {book.publishedYear && (
                  <p className="text-gray-500 text-xs md:text-sm">
                    📅 Năm xuất bản: {book.publishedYear}
                  </p>
                )}

                {/* 🔍 View Details Button */}
                <button
                  onClick={() => router.push(`/book/${book._id}`)}
                  className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm md:text-base"
                >
                  Xem chi tiết
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && books.length > 0 && (
          <div className="flex justify-center mt-6 space-x-2 md:space-x-4">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className={`px-3 md:px-4 py-2 text-sm md:text-base rounded-lg ${
                page === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Lùi lại
            </button>
            <span className="text-sm md:text-lg font-semibold text-black">
              {`Trang ${page} / ${totalPages}`}
            </span>
            <button
              onClick={() => setPage((prev) => (prev < totalPages ? prev + 1 : prev))}
              disabled={page === totalPages}
              className={`px-3 md:px-4 py-2 text-sm md:text-base rounded-lg ${
                page === totalPages
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Trang tiếp
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Books;
