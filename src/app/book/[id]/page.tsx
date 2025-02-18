"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { fetchBookById, borrowBookRequest } from "@/utils/api";

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
    const [isBorrowModalOpen, setIsBorrowModalOpen] = useState(false);
    const [borrowData, setBorrowData] = useState({
        cardNumber: "",
        fullName: "",
        classOrDepartment: "",
        email: "",
        phone: "",
        note: "",
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

    if (!book) return <p className="text-center text-gray-700">Không tìm thấy sách.</p>;

    // Handle form input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBorrowData({ ...borrowData, [e.target.name]: e.target.value });
    };

    const handleBorrowSubmit = async () => {
        if (!borrowData.cardNumber || !borrowData.fullName || !borrowData.classOrDepartment || !borrowData.email || !borrowData.borrowDate) {
            alert("⚠️ Vui lòng điền đầy đủ thông tin bắt buộc!");
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
                email: borrowData.email,
                phone: borrowData.phone,
                note: borrowData.note,
            };

            const result = await borrowBookRequest(borrowRequest);

            if (result) {
                alert("✅ Mượn sách thành công!");
                setIsBorrowModalOpen(false); // Close modal after success
                setBorrowData({
                    cardNumber: "",
                    fullName: "",
                    classOrDepartment: "",
                    email: "",
                    phone: "",
                    note: "",
                    borrowDate: new Date().toISOString().split("T")[0],
                });  // Reset form
            } else {
                alert("❌ Không thể mượn sách. Vui lòng thử lại.");
            }
        } catch (error) {
            console.error("Lỗi:", error);
            alert("⚠️ Đã xảy ra lỗi. Vui lòng thử lại.");
        }
    };

    return (
        <section className="py-40 bg-gray-100">
            <div className="container mx-auto px-4 max-w-3xl bg-white p-6 rounded-lg shadow-lg">
                <button onClick={() => router.push("/book")} className="text-blue-600 mb-4">← Quay lại sách</button>

                <h2 className="text-3xl font-bold text-orange-400 text-center mb-5">{book.title}</h2>

                {/* Book Information Section */}
                <div className="mb-4 text-black grid grid-cols-2 gap-4">
                    <div>
                        <p>📖 <strong>Tác giả:</strong> {book.author || "Chưa có thông tin"}</p>
                        <p>📝 <strong>Dịch giả:</strong> {book.translator || "Chưa có thông tin"}</p>
                        <p>📅 <strong>Năm xuất bản:</strong> {book.publishedYear || "Chưa có thông tin"}</p>
                        <p>📦 <strong>Số lượng sách có sẵn:</strong> {book.quantity || "Chưa có thông tin"}</p>
                        <p>📜 <strong>Tập:</strong> {book.volume || "Chưa có thông tin"} ({book.volumeTitle || "Chưa có thông tin"})</p>
                        <p>🏷️ <strong>Mã sách:</strong> {book.bookCode || "Chưa có thông tin"}</p>
                        <p>📄 <strong>Số trang:</strong> {book.paper || "Chưa có thông tin"}</p>
                        <p>🗒️ <strong>Chú thích:</strong> {book.footnote || "Chưa có thông tin"}</p>
                        <p>📝 <strong>Ghi chú:</strong> {book.note || "Chưa có thông tin"}</p>
                        <p>🌍 <strong>Nơi xuất bản:</strong> {book.manufacturingPlace || "Chưa có thông tin"}</p>
                        <p>🔤 <strong>Tùng thư:</strong> {book.letter || "Chưa có thông tin"}</p>
                    </div>

                    <div>
                        <p>📚 <strong>Đồng tác giả:</strong> {book.coAuthor || "Chưa có thông tin"}</p>
                        <p>🏢 <strong>Nhà xuất bản:</strong> {book.publisher || "Chưa có thông tin"}</p>
                        <p>💰 <strong>Giá:</strong> ${book.price || "Chưa có thông tin"}</p>
                        <p>📖 <strong>Mô tả:</strong> {book.description || "Chưa có thông tin"}</p>
                        <p>📘 <strong>Kho sách:</strong> {book.librarySection || "Chưa có thông tin"}</p>
                        <p>💼 <strong>Mã phân loại:</strong> {book.classificationCode || "Chưa có thông tin"}</p>
                        <p>📏 <strong>Kích thước:</strong> {book.size || "Chưa có thông tin"}</p>
                        <p>💡 <strong>Chủ đề:</strong> {book.topic || "Chưa có thông tin"}</p>
                        <p>📒 <strong>Tên song song:</strong> {book.parallelTitle || "Chưa có thông tin"}</p>
                        <p>📚 <strong>Số sổ DKTQ:</strong> {book.dktq || "Chưa có thông tin"}</p>
                    </div>
                </div>

                {/* Borrow Button */}
                <button
                    onClick={() => setIsBorrowModalOpen(true)}
                    className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                    Mượn sách
                </button>
            </div>

            {/* Borrow Book Modal */}
            {isBorrowModalOpen && (
                <div className="fixed inset-0 flex items-start justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:max-w-md md:max-w-4xl max-h-[90vh] overflow-hidden mt-14 sm:mt-16 z-50">
                        <h3 className="text-xl font-bold mb-4 text-center text-black">Mượn sách</h3>

                        {/* Scrollable content area */}
                        <div className="sm:max-h-[60vh] overflow-y-auto max-h-[70vh]">
                            {/* Form Fields */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-black">
                                <div>
                                    <label className="block mb-2 text-blue-600">👤 Họ và tên:</label>
                                    <input type="text" name="fullName" value={borrowData.fullName} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded mb-3" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-blue-600">✉️ Email:</label>
                                    <input type="email" name="email" value={borrowData.email} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded mb-3" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-blue-600">📞 Số điện thoại:</label>
                                    <input type="tel" name="phone" value={borrowData.phone} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded mb-3" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-blue-600">📌 Số thẻ / Mã giáo viên:</label>
                                    <input type="text" name="cardNumber" value={borrowData.cardNumber} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded mb-3" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-blue-600">🏫 Lớp/Tổ chuyên môn:</label>
                                    <input type="text" name="classOrDepartment" value={borrowData.classOrDepartment} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded mb-3" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-blue-600">📖 Mã sách:</label>
                                    <input
                                        type="text"
                                        value={book.bookId}
                                        readOnly
                                        className="w-full p-2 border border-gray-300 rounded mb-3 bg-gray-100"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-blue-600">📚 Tên sách:</label>
                                    <input
                                        type="text"
                                        value={book.title}
                                        readOnly
                                        className="w-full p-2 border border-gray-300 rounded mb-3 bg-gray-100"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-blue-600">📅 Ngày mượn:</label>
                                    <input
                                        type="date"
                                        name="borrowDate"
                                        value={borrowData.borrowDate}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border border-gray-300 rounded mb-3"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-blue-600">📝 Ghi chú:</label>
                                    <input name="note" value={borrowData.note} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded mb-3" />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between space-x-2 mt-4">
                            <button onClick={() => setIsBorrowModalOpen(false)} className="px-4 py-2 bg-gray-400 text-white rounded">Hủy</button>
                            <button onClick={handleBorrowSubmit} className="px-4 py-2 bg-green-600 text-white rounded">Xác nhận mượn</button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default BookDetail;
