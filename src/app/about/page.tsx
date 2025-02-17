import Image from "next/image"
import Link from "next/link"

export default function About() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">
          Giới thiệu về <span className="text-orange-500">Trường THPT Phan Châu Trinh</span>
        </h2>

        {/* Introduction Section */}
        <div className="text-lg text-gray-700 mb-10">
          <p className="mb-6">
            Trường THPT Phan Châu Trinh-Đà Nẵng được thành lập vào tháng 9 năm 1952, cơ sở đặt tại trường Tiểu học Phù Đổng hiện nay.
            Năm học 1954-1955, trường được xây dựng tại 167 Lê Lợi và chính thức được mang tên trường trung học Phan Châu Trinh.
            Từ năm học 2004-2005, trường xây dựng thêm cơ sở mới tại 154 Lê Lợi.
          </p>
          <p className="mb-6">
            Trải qua 70 năm xây dựng và phát triển, Trường THPT Phan Châu Trinh đã trở thành một trong những ngôi trường có chất lượng giáo dục uy tín tại Đà Nẵng, góp phần xây dựng thành phố trở thành trung tâm kinh tế, văn hóa và giáo dục.
          </p>
        </div>

        {/* Image Section */}
        <div className="mb-10 flex justify-center items-center">
          <Image
            src="/images/gioithieu.jpg"
            alt="Trường THPT Phan Châu Trinh"
            width={1000}
            height={220}
            className="rounded-lg shadow-xl w-full h-auto"
          />
        </div>


        {/* Historical Milestones */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold text-center text-blue-600 mb-4">
            Lịch sử hình thành và phát triển
          </h3>
          <ul className="list-inside text-lg text-gray-700">
            <li className="mb-4">
              <strong>1952</strong>: Thành lập Trường THPT Phan Châu Trinh tại Tiểu học Phù Đổng.
            </li>
            <li className="mb-4">
              <strong>1975-1976</strong>: Trường chính thức trở thành trường cấp 3, sau khi tiếp nhận các lớp cấp 3 từ các trường lân cận.
            </li>
            <li className="mb-4">
              <strong>2002-2003</strong>: Trường tròn 50 năm thành lập, với 74 lớp học và gần 4000 học sinh.
            </li>
            <li className="mb-4">
              <strong>2012-2013</strong>: Trường tròn 60 năm thành lập, có 98 lớp và hơn 4700 học sinh.
            </li>
            <li className="mb-4">
              <strong>2022-2023</strong>: Trường có 93 lớp học và gần 3900 học sinh.
            </li>
          </ul>
        </div>

        {/* Achievements and Contributions */}
        <div className="mb-10">
          <h3 className="text-3xl font-semibold text-center text-blue-600 mb-4">
            Thành tựu và đóng góp
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Trường THPT Phan Châu Trinh đã đạt được nhiều thành tích xuất sắc trong các kỳ thi học sinh giỏi quốc gia và quốc tế. Một số học sinh tiêu biểu:
          </p>
          <ul className="list-disc pl-8 text-lg text-gray-700 mb-6">
            <li>Giải khuyến khích Vật lý quốc tế (1981) – Lê Văn Hoàng</li>
            <li>Giải ba Vật lý quốc tế (1982) – Trần Hữu Huấn</li>
            <li>Giải nhì Toán quốc tế (1983) – Trần Nam Dũng</li>
            <li>Giải nhì Toán quốc tế (1984) – Nguyễn Văn Hưng</li>
            <li>Giải ba Toán quốc tế (1984) – Võ Thu Tùng</li>
            <li>Giải nhì Toán quốc tế (1985) – Lâm Tùng Giang</li>
            <li>Giải nhì Toán quốc tế (1986) – Nguyễn Hùng Sơn</li>
          </ul>
          <p className="text-lg text-gray-700">
            Với phương châm "Chất lượng giáo dục là yếu tố quan trọng nhất", trường luôn phát triển không ngừng về mọi mặt, đặc biệt là công tác giảng dạy và đào tạo nhân tài cho đất nước.
          </p>
        </div>

        {/* Awards Section */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold text-center text-blue-600 mb-4">
            Các danh hiệu và phần thưởng
          </h3>
          <ul className="list-inside text-lg text-gray-700">
            <li className="mb-4">
              - Cờ luân lưu Đơn vị dẫn đầu ngành giáo dục (1981) của Hội đồng Bộ trưởng
            </li>
            <li className="mb-4">
              - Cờ Đơn vị tiên tiến xuất sắc của UBND thành phố Đà Nẵng nhiều năm liền
            </li>
            <li className="mb-4">
              - Huân chương Lao động hạng Nhất (2003), Huân chương Lao động hạng Nhì (1996)
            </li>
            <li className="mb-4">
              - Huân chương Độc lập hạng Ba (2013)
            </li>
            <li className="mb-4">
              - Bằng khen của Bộ trưởng Bộ GD&ĐT về thành tích xuất sắc trong phong trào thi đua "Dạy tốt - Học tốt"
            </li>
            <li className="mb-4">
              - Bằng khen của Chủ tịch UBND thành phố Đà Nẵng về hoàn thành xuất sắc nhiệm vụ nhiều năm liền.
            </li>
          </ul>
        </div>

        {/* Community and Alumni Section */}
        <div className="text-lg text-gray-700">
          <h3 className="text-3xl font-semibold text-center text-blue-600 mb-4">
            Cộng đồng và Cựu học sinh
          </h3>
          <p className="mb-6">
            Học sinh trường THPT Phan Châu Trinh làm việc và sinh sống trên khắp mọi miền đất nước, luôn hướng về trường và tham gia vào các hoạt động khuyến học, khuyến tài của nhà trường.
            Nhiều suất học bổng giá trị được trao tặng cho học sinh có hoàn cảnh khó khăn, học sinh có thành tích cao trong học tập.
          </p>
        </div>

        {/* Conclusion */}
        <div className="text-center mt-8">
          <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-semibold">
            Liên hệ với chúng tôi
          </Link>
        </div>
      </div>
    </section>
  )
}
