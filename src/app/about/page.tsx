import Image from "next/image"
import Link from "next/link"

export default function Library() {
  return (
    <section className="py-32 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 mt-3">
          {["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"].map((img, index) => (
            <div key={index} className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg group">
              <Image
                src={`/images/${img}`}
                alt={`Thư viện ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-110"
              />
            </div>
          ))}
        </div>


        <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">
          <span className="text-orange-500">Thư viện trường THPT Phan Châu Trinh</span>
        </h2>

        {/* Introduction Section */}
        <div className="text-lg text-gray-700 mb-10">
          <h3 className="text-3xl font-semibold text-blue-600 mb-4">I. Vài nét khái quát</h3>
          <p className="mb-6">
            Trong suốt quá trình tồn tại và phát triển của mình, thư viện trường THPT Phan Châu Trinh đã khẳng định vị trí quan trọng trong các hoạt động dạy – học của giáo viên và học sinh nhà trường.
            Thư viện có tác động tích cực đến nhiều hoạt động, phát huy khả năng học tập độc lập, tự mở rộng kiến thức của học sinh.
            Đồng thời, thư viện cũng đóng vai trò quan trọng trong việc bồi dưỡng tư tưởng chính trị và xây dựng nếp sống văn hóa cho các thành viên trong nhà trường.
          </p>
          <p className="mb-6">
            Thư viện được bố trí tại tầng 1 khu B với tổng diện tích 200m², chia thành 2 phòng: phòng đọc và phòng kho.
            Đây là không gian rộng rãi, thoáng mát và yên tĩnh, mang lại hiệu quả tối ưu cho việc đọc sách và nghiên cứu.
          </p>
          <p className="mb-6">
            Ban đầu, vốn tài liệu của thư viện rất khiêm tốn, được quyên góp từ giáo viên và học sinh.
            Đến nay, thư viện đã có hơn 30.000 đầu sách, bao gồm sách tham khảo, sách giáo khoa, sách nghiệp vụ và nhiều loại sách thuộc các lĩnh vực khác nhau như:
            Toán học, Hóa học, Vật lí, Ngoại ngữ, Văn học, Lịch sử, Địa lí, Sinh học, Nghệ thuật, Thể dục thể thao.
            Ngoài ra, thư viện thường xuyên cập nhật tài liệu theo xu hướng đọc của thanh thiếu niên, bao gồm tủ sách văn học dành cho tuổi mới lớn và tủ sách kỹ năng sống.
          </p>
        </div>

        {/* Organization Section */}
        <div className="mb-10">
          <h3 className="text-3xl font-semibold text-blue-600 mb-4">II. Tổ chức, sắp xếp</h3>
          <p className="text-lg text-gray-700 mb-6">
            Thư viện nhà trường được tổ chức theo 2 hình thức: kho đóng và kho mở.
            Trong phòng đọc, học sinh có thể tự do lựa chọn các loại sách để đọc tại chỗ.
            Trong khi đó, phòng kho chứa các loại sách phong phú và đa dạng, được sắp xếp khoa học, giúp học sinh dễ dàng tìm kiếm và mượn sách về nhà.
          </p>
        </div>

        {/* Activities Section */}
        <div className="mb-10">
          <h3 className="text-3xl font-semibold text-blue-600 mb-4">III. Một số hoạt động</h3>
          <p className="text-lg text-gray-700 mb-6">
            Ngay từ những ngày đầu thành lập, cán bộ thư viện đã phối hợp với giáo viên tổ chức nhiều hoạt động bổ ích để thu hút học sinh đến với sách.
          </p>
          <ul className="list-disc pl-8 text-lg text-gray-700 mb-6">
            <li>Hưởng ứng “Ngày sách và văn hóa đọc Việt Nam” (21/4)</li>
            <li>Cuộc thi “Thiết kế góc sách mở”</li>
            <li>Cuộc thi “Vẽ sáng tạo bìa sách em yêu thích nhất”</li>
          </ul>
          <p className="text-lg text-gray-700 mb-6">
            Ngoài ra, thư viện còn kết hợp với tổ Văn và câu lạc bộ Văn học để tổ chức các chương trình ngoại khóa hấp dẫn.
            Đặc biệt, cuộc thi “Đại sứ văn hóa đọc” được tổ chức thường niên đã góp phần xây dựng thói quen đọc sách trong nhà trường.
            Nhiều học sinh đạt thành tích cao trong cuộc thi này, như:
          </p>
          <ul className="list-disc pl-8 text-lg text-gray-700 mb-6">
            <li>Học sinh Cung Minh Hiền Trang (lớp 11/13) – Giải “Đại sứ văn hóa đọc Đà Nẵng 2021”</li>
            <li>Học sinh Dương Nhật Khánh (lớp 10/31) – Giải khuyến khích “Đại sứ văn hóa đọc Đà Nẵng 2022”</li>
          </ul>
          <p className="text-lg text-gray-700 mb-6">
            Nhiều năm liền, bài thi của học sinh nhà trường được chọn tham dự vòng thi cấp Bộ.
            Đây là thành quả của sự quan tâm sâu sát từ Ban giám hiệu nhà trường và nỗ lực không ngừng của cán bộ thư viện.
          </p>
        </div>

        {/* Book Donation Campaign */}
        <div className="mb-10">
          <h3 className="text-3xl font-semibold text-blue-600 mb-4">
            Phong trào quyên góp sách
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Đặc biệt, thư viện đã phát động phong trào quyên góp sách nhằm tạo điều kiện cho học sinh thể hiện tình yêu với sách và chia sẻ tri thức.
            Các sách quyên góp được sẽ được dán nhãn, bao bọc và trưng bày trong 2 tủ sách mở của trường.
          </p>
          <ul className="list-disc pl-8 text-lg text-gray-700 mb-6">
            <li>Năm học 2020-2021: Quyên góp được 1.505 cuốn sách</li>
            <li>Năm học 2021-2022: Quyên góp được 2.050 cuốn sách</li>
          </ul>
          <p className="text-lg text-gray-700 mb-6">
            Nhờ hoạt động này, thư viện liên tục được bổ sung tài liệu phong phú.
            Đồng thời, nhiều học sinh cũng trở thành cộng tác viên đắc lực, hỗ trợ thư viện trong việc xử lý sách và tuyên truyền văn hóa đọc.
          </p>
        </div>

        {/* Conclusion */}
        <div className="mb-10">
          <h3 className="text-3xl font-semibold text-blue-600 mb-4">Kết luận</h3>
          <p className="text-lg text-gray-700 mb-6">
            Nhận thức được vai trò quan trọng của công tác thư viện, cán bộ thư viện luôn đổi mới và cải tiến phương pháp phục vụ nhằm nâng cao chất lượng hoạt động.
            Thư viện đã trở thành điểm đến thân thiện, gần gũi và hữu ích cho học sinh, giáo viên, đóng góp tích cực vào công tác giảng dạy và học tập của nhà trường.
          </p>
        </div>

        {/* Contact Section */}
        <div className="text-center mt-8">
          <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-semibold">
            Liên hệ với thư viện
          </Link>
        </div>
      </div>
    </section>
  )
}
