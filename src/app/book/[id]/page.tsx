"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { fetchBookById } from "@/utils/api";

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

const BookDetail = () => {
    const { id } = useParams();
    const [book, setBook] = useState<Book | null>(null);
    const router = useRouter();

    useEffect(() => {
        const getBookDetails = async () => {
            const data = await fetchBookById(id as string);
            setBook(data);
        };
        if (id) getBookDetails();
    }, [id]);

    if (!book) return <p className="text-center text-gray-700">Book not found.</p>;

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4 max-w-3xl bg-white p-6 rounded-lg shadow-lg">
                <button onClick={() => router.push("/")} className="text-blue-600 mb-4">← Back to Books</button>
                <Image src={book.imageUrl || "/images/default_book.jpg"} alt={book.title} width={300} height={400} className="rounded-lg mb-4" />
                <h2 className="text-3xl font-bold text-orange-400">{book.title}</h2>
                {book.parallelTitle && <p className="text-gray-500">({book.parallelTitle})</p>}
                <p>📖 Author: {book.author}</p>
                <p>🏢 Published by: {book.publisher} ({book.publishedYear})</p>
                <p>💰 Price: ${book.price}</p>
                <p>📦 Available Copies: {book.quantity}</p>
                {book.description && <p>📝 Description: {book.description}</p>}
            </div>
        </section>
    );
};

export default BookDetail;
