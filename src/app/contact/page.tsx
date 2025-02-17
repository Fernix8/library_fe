import Link from "next/link";

export default function Contact() {
    return (
        <section className="py-40 bg-gray-100">
            <div className="py-20 bg-white rounded-lg shadow-lg p-8 max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col items-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Liên Hệ</h1>
                    <p className="text-lg text-gray-600">Hãy liên hệ với đội ngũ thư viện của chúng tôi</p>
                </div>

                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Visit Us Card */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Địa Chỉ</h3>
                        <p className="text-gray-600">154 Lê Lợi,</p>
                        <p className="text-gray-600">TP. Đà Nẵng, Việt Nam</p>
                    </div>

                    {/* Opening Hours Card */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Giờ Mở Cửa</h3>
                        <p className="text-gray-600 mb-4">Thứ Hai - Thứ Bảy:</p>
                        <p className="text-gray-600 mb-2">Buổi sáng: 7h30-11h00</p>
                        <p className="text-gray-600">Buổi chiều: 13h30-16h30</p>
                    </div>

                    {/* Contact Info Card */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Thông Tin Liên Hệ</h3>
                        <p className="text-gray-600">Điện thoại: (0236) 3810381 - 3818579</p>
                        <p className="text-gray-600">Email: <Link href="mailto:thuvienpct2021@gmail.com"><span className="text-blue-400">thuvienpct2021@gmail.com</span></Link></p>
                    </div>
                </div>

                {/* Website Link Section */}
                {/* Website Link Section */}
                <div className="mt-12 pt-8 border-t flex justify-center">
                    <a
                        href="https://pct.edu.vn/"
                        target="_blank"
                        className="px-8 py-3 text-2xl font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
                    >
                        Truy cập website Trường THPT Phan Châu Trinh
                    </a>
                </div>


            </div>
        </section>
    );
}
