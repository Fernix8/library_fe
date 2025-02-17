import Image from "next/image";
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
            <span className="material-symbols-outlined text-5xl mb-4 text-blue-500">location_on</span>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Địa Chỉ</h3>
            <p className="text-gray-600">123 Đường Thư Viện</p>
            <p className="text-gray-600">TP. Đà Nẵng, Việt Nam</p>
          </div>

          {/* Opening Hours Card */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <span className="material-symbols-outlined text-5xl mb-4 text-blue-500">schedule</span>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Giờ Mở Cửa</h3>
            <p className="text-gray-600">Thứ Hai - Thứ Sáu:</p>
            <p className="text-gray-600 mb-2">9:00 AM - 8:00 PM</p>
            <p className="text-gray-600">Thứ Bảy - Chủ Nhật:</p>
            <p className="text-gray-600">10:00 AM - 6:00 PM</p>
          </div>

          {/* Contact Info Card */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <span className="material-symbols-outlined text-5xl mb-4 text-blue-500">phone</span>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Thông Tin Liên Hệ</h3>
            <p className="text-gray-600">Điện thoại: (0511) 3810381 - 3818579</p>
            <p className="text-gray-600">Email: <Link href="mailto:thuvienpct2021@gmail.com"><span className="text-blue-400">thuvienpct2021@gmail.com</span></Link></p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-12 pt-8 border-t flex justify-center space-x-8">
          <a
            href="https://www.facebook.com/pct.edu.vn/"
            target="_blank"
            className="text-3xl text-blue-600 hover:text-blue-800 transition duration-300 transform hover:scale-110"
          >
            <i className="fa-brands fa-facebook" />
          </a>
          <a
            href="https://twitter.com/pct.edu.vn"
            target="_blank"
            className="text-3xl text-blue-400 hover:text-blue-600 transition duration-300 transform hover:scale-110"
          >
            <i className="fa-brands fa-twitter" />
          </a>
          <a
            href="https://www.instagram.com/pct.edu.vn/"
            target="_blank"
            className="text-3xl text-pink-600 hover:text-pink-800 transition duration-300 transform hover:scale-110"
          >
            <i className="fa-brands fa-instagram" />
          </a>
          <a
            href="https://www.linkedin.com/school/pct-edu-vn"
            target="_blank"
            className="text-3xl text-blue-500 hover:text-blue-700 transition duration-300 transform hover:scale-110"
          >
            <i className="fa-brands fa-linkedin" />
          </a>
        </div>
      </div>
    </section>
  );
}
