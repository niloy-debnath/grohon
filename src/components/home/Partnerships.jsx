import randstad from "../../assets/randstad.png";
import moonstar from "../../assets/moonstar.png";
import startpeople from "../../assets/start_people.png";
import casio from "../../assets/casio.png";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Partnerships = () => {
  return (
    <section className="w-[91%] max-w-7xl mx-auto py-12 md:py-16 text-center font-urbanist rounded-4xl my-6">
      <h2 className="text-2xl md:text-3xl font-extrabold text-[#0D2C54] tracking-tight mb-10 md:mb-12">
        We've helped thousands of sales teams
      </h2>

      <div className="flex items-center gap-x-16 px-4 opacity-80">
        <Swiper
          autoplay={{
            delay: 50,
            disableOnInteraction: false,
          }}
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="h-7 flex items-center justify-center text-[#003399] font-black tracking-tighter text-3xl font-sans mx-4">
              <img src={casio} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-7 flex items-center justify-center text-[#003399] font-black tracking-tighter text-3xl font-sans mx-4">
              <img src={moonstar} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-7 flex items-center justify-center text-[#003399] font-black tracking-tighter text-3xl font-sans mx-4">
              <img src={startpeople} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-7 flex items-center justify-center text-[#003399] font-black tracking-tighter text-3xl font-sans mx-4">
              <img src={randstad} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-7 flex items-center justify-center text-[#003399] font-black tracking-tighter text-3xl font-sans mx-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                alt="Amazon"
                className="h-6 object-contain"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Partnerships;
