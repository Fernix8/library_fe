const Benefits = () => {
    return (
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-sky-300 mb-6">🎯 Tại sao chọn chúng tôi?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-200 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-red-300">📚 Hàng ngàn cuốn sách</h3>
              <p className="mt-2 text-gray-600">Kho sách phong phú đủ mọi thể loại.</p>
            </div>
            <div className="p-6 bg-gray-200 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-indigo-700">🚀 Tìm kiếm dễ dàng</h3>
              <p className="mt-2 text-gray-600">Công cụ tra cứu nhanh chóng, tiện lợi.</p>
            </div>
            <div className="p-6 bg-gray-200 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-emerald-600">💡 Mượn sách linh hoạt</h3>
              <p className="mt-2 text-gray-600">Yêu cầu mượn sách online mọi lúc mọi nơi.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Benefits;
  