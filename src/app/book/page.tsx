"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { fetchBooks, searchBooks } from "@/utils/api";

interface Book {
  _id: string;
  bookCode: string; // Mã sách
  title: string;    // Tên sách
  author: string;   // Tác giả
  publisher?: string; // Nhà xuất bản
  publishedYear?: string; // Năm xuất bản
  imageUrl?: string; // Ảnh sách
}

const Books = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchBy, setSearchBy] = useState<"title" | "author">("title");
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1); // Số trang tổng cộng
  const limit = 6;
  const router = useRouter();

  // Fetch books on initial load and pagination change
  useEffect(() => {
    const getBooks = async () => {
      setLoading(true);
      const data = await fetchBooks(searchTerm, page, limit); // Lấy sách với phân trang
      setBooks(data?.books || []);
      setTotalPages(data?.totalPages || 1); // Cập nhật số trang tổng
      setLoading(false);
    };
    getBooks();
  }, [searchTerm, page]); // Khi tìm kiếm hoặc trang thay đổi, sẽ gọi lại API

  // Debounced Search Function
  useEffect(() => {
    const delayDebounce = setTimeout(async () => {
      if (searchTerm) {
        setLoading(true);
        const results = await searchBooks(searchTerm, searchBy); // Tìm kiếm theo tiêu chí
        setBooks(results);
        setTotalPages(1); // Không có phân trang khi tìm kiếm
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
        <div className="mb-8 flex justify-center items-center space-x-6 bg-gray-50 p-4 rounded-lg shadow-lg">
          {/* Search Type Dropdown */}
          <select
            value={searchBy}
            onChange={(e) => setSearchBy(e.target.value as "title" | "author")}
            className="p-3 border border-blue-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 bg-white hover:bg-blue-50 transition-all"
          >
            <option value="title">TÊN SÁCH</option>
            <option value="author">TÁC GIẢ</option>
          </select>

          {/* Search Input */}
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder={`Tìm kiếm sách`}
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setPage(1); // Quay lại trang 1 khi thay đổi tìm kiếm
              }}
              className="w-full p-3 pl-10 border border-blue-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 bg-white hover:bg-blue-50 transition-all"
            />
            {/* Search Icon */}
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
        </div>


        {loading ? (
          <p className="text-center text-gray-700">Đang tải sách...</p>
        ) : books.length === 0 ? (
          <p className="text-center text-gray-700">Sách không tồn tại.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {books.map((book) => (
              <div key={book._id} className="bg-white p-4 rounded-lg shadow-lg">
                <Image
                  src={book.imageUrl || "/images/default_book.jpg"}
                  alt={book.title}
                  width={300}
                  height={400}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-orange-400">📖Tên sách: {book.title}</h3>
                <p className="text-gray-700">📚 Mã sách: {book.bookCode}</p>
                <p className="text-gray-700">✍ Tác giả: {book.author}</p>
                {book.publisher && <p className="text-gray-500 text-sm">🏢 Nhà xuất bản: {book.publisher}</p>}
                {book.publishedYear && <p className="text-gray-500 text-sm">📅 Năm xuất bản: {book.publishedYear}</p>}

                {/* 🔍 View Details Button */}
                <button
                  onClick={() => router.push(`/book/${book._id}`)}
                  className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Xem chi tiết
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
            <span className="text-lg font-semibold text-black">{`Page ${page} of ${totalPages}`}</span>
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
