"use client";

import { AboutMe } from "@/data/mocks/about";

const AboutSection = () => {
  return (
    <div className="">
      <div className="">
        <p className="text-[15px] text-gray-300 px-7 text-justify">
          Tôi mong muốn phát triển sự nghiệp trong lĩnh vực System
          Administration với mục tiêu trở thành một IT Administrator có khả năng
          quản lý, vận hành và tối ưu hệ thống hạ tầng CNTT ổn định, an toàn và
          hiệu quả. Tôi luôn chủ động học hỏi các công nghệ mới liên quan đến hệ
          thống mạng, máy chủ, bảo mật, cloud và quản trị hệ thống nhằm nâng cao
          kỹ năng chuyên môn. Trong thời gian tới, tôi muốn tích lũy thêm kinh
          nghiệm thực tế về Windows/Linux Server, virtualization, monitoring và
          cloud platform để có thể đóng góp vào việc xây dựng hạ tầng IT bền
          vững cho doanh nghiệp. Xa hơn, tôi định hướng phát triển lên vị trí
          System Engineer hoặc Cloud Administrator.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-6">
        {AboutMe.map((item, index) => (
          <button
            key={index}
            onClick={() => {}}
            className="h-25 w-full bg-gray-900 hover:bg-gray-500 hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center border-2 border-orange-300 rounded-xl gap-3"
          >
            <span className="text-3xl">{item.icon}</span>

            <p className="text-[10px] lg:text-[15px] text-white font-bold text-center">
              {item.name}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
