import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Thư viện thông tin */}
          <div>
            <h3 className="text-2xl font-bold mb-4">THƯ VIỆN</h3>
            <p className="text-gray-400">TRƯỜNG THPT PHAN CHÂU TRINH</p>
            <p className="text-gray-400 mt-2">Cung cấp sách, tài liệu học tập và nghiên cứu cho học sinh, sinh viên.</p>
          </div>

          {/* Các liên kết */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Liên Kết</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <span className="text-gray-400 hover:text-white">Giới thiệu</span>
                </Link>
              </li>
              <li>
                <Link href="/search">
                  <span className="text-gray-400 hover:text-white">Tìm kiếm sách</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-gray-400 hover:text-white">Liên hệ</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Liên hệ */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Liên Hệ</h3>
            <p className="text-gray-400">Email: <Link href="mailto:thuvien@gmail.com"><span className="text-blue-400">thuvienpct2021@gmail.com</span></Link></p>
            <p className="text-gray-400 mt-2">Điện thoại: <span className="text-blue-400">0511. 3810381 - 3818579</span></p>
          </div>

          {/* Mạng xã hội */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Mạng Xã Hội</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://pct.edu.vn/" passHref>
                  <span className="text-gray-400 hover:text-white">Website</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center border-t border-gray-700 pt-8">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Thư viện Trường THPT Phan Châu Trinh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
