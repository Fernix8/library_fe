"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { fetchBookById, borrowBookRequest } from "@/utils/api";

interface Book {
    _id: string;
    stt: number;
    bookCode: string;
    bookId: string;
    title: string;
    author: string;
    publisher?: string;
    publishedYear?: string;
    quantity?: number;
    price?: number;
    description?: string;
    imageUrl?: string;
}

const BookDetail = () => {
    const { id } = useParams();
    const [book, setBook] = useState<Book | null>(null);
    const [isBorrowModalOpen, setIsBorrowModalOpen] = useState(false);
    const [borrowData, setBorrowData] = useState({
        cardNumber: "",
        fullName: "",
        classOrDepartment: "",
        borrowDate: new Date().toISOString().split("T")[0], // Default to today's date
    });

    const router = useRouter();

    useEffect(() => {
        const getBookDetails = async () => {
            const data = await fetchBookById(id as string);
            setBook(data);
        };
        if (id) getBookDetails();
    }, [id]);

    if (!book) return <p className="text-center text-gray-700">Book not found.</p>;

    // Handle form input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBorrowData({ ...borrowData, [e.target.name]: e.target.value });
    };

    const handleBorrowSubmit = async () => {
        if (!borrowData.cardNumber || !borrowData.fullName || !borrowData.classOrDepartment) {
            alert("⚠️ Please fill in all required fields!");
            return;
        }

        try {
            const borrowRequest = {
                cardNumber: borrowData.cardNumber,
                fullName: borrowData.fullName,
                classOrDepartment: borrowData.classOrDepartment,
                bookId: book.bookId,
                bookTitle: book.title,
                borrowDate: borrowData.borrowDate,
            };

            const result = await borrowBookRequest(borrowRequest);

            if (result) {
                alert("✅ Book borrowed successfully!");
                setIsBorrowModalOpen(false); // Close modal after success
                setBorrowData({
                    cardNumber: "",
                    fullName: "",
                    classOrDepartment: "",
                    borrowDate: new Date().toISOString().split("T")[0],
                }); // Reset form
            } else {
                alert("❌ Failed to borrow the book. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("⚠️ An error occurred. Please try again.");
        }
    };

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4 max-w-3xl bg-white p-6 rounded-lg shadow-lg">
                <button onClick={() => router.push("/")} className="text-blue-600 mb-4">← Back to Books</button>

                <Image src={book.imageUrl || "/images/default_book.jpg"} alt={book.title} width={300} height={400} className="rounded-lg mb-4" />

                <h2 className="text-3xl font-bold text-orange-400">{book.title}</h2>
                <p>📖 Author: {book.author}</p>
                <p>🏢 Published by: {book.publisher} ({book.publishedYear})</p>
                <p>💰 Price: ${book.price}</p>
                <p>📦 Available Copies: {book.quantity}</p>
                {book.description && <p>📝 Description: {book.description}</p>}

                {/* Borrow Button */}
                <button
                    onClick={() => setIsBorrowModalOpen(true)}
                    className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                    Borrow Book
                </button>
            </div>

            {/* Borrow Book Modal */}
            {isBorrowModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
                        <h3 className="text-xl font-bold mb-4 text-center">Borrow Book</h3>

                        <label className="block mb-2">📌 Card Number / Teacher ID:</label>
                        <input
                            type="text"
                            name="cardNumber"
                            value={borrowData.cardNumber}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded mb-3"
                        />

                        <label className="block mb-2">👤 Full Name:</label>
                        <input
                            type="text"
                            name="fullName"
                            value={borrowData.fullName}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded mb-3"
                        />

                        <label className="block mb-2">🏫 Class / Department:</label>
                        <input
                            type="text"
                            name="classOrDepartment"
                            value={borrowData.classOrDepartment}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded mb-3"
                        />

                        <label className="block mb-2">📖 Book ID:</label>
                        <input
                            type="text"
                            value={book.bookId}
                            readOnly
                            className="w-full p-2 border border-gray-300 rounded mb-3 bg-gray-100"
                        />

                        <label className="block mb-2">📚 Book Title:</label>
                        <input
                            type="text"
                            value={book.title}
                            readOnly
                            className="w-full p-2 border border-gray-300 rounded mb-3 bg-gray-100"
                        />

                        <label className="block mb-2">📅 Borrow Date:</label>
                        <input
                            type="date"
                            name="borrowDate"
                            value={borrowData.borrowDate}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded mb-3"
                        />

                        <div className="flex justify-end space-x-2">
                            <button
                                onClick={() => setIsBorrowModalOpen(false)}
                                className="px-4 py-2 bg-gray-400 text-white rounded"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleBorrowSubmit}
                                className="px-4 py-2 bg-green-600 text-white rounded"
                            >
                                Confirm Borrow
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default BookDetail;
