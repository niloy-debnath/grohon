import { useState, useRef } from "react";
import thelagari from "../../assets/customer-top.png";
import quote from "../../assets/reviewQuote.png";
import { Swiper, SwiperSlide } from "swiper/react";

// IMPORT ALL NECESSARY SWIPER STYLES
import "swiper/css";
import "swiper/css/autoplay"; // Ensure the autoplay style sub-sheet is explicitly loaded

import { Autoplay } from "swiper/modules";

const Testimonials = () => {
  // Added a 4th item so desktop 'slidesPerView: 3' has a target index to slide toward!
  const reviews = [
    {
      id: 1,
      text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
      name: "Rasel Ahamed",
      role: "CTO",
      avatar: "",
    },
    {
      id: 2,
      text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
      name: "Awlad Hossin",
      role: "Senior Product Designer",
      avatar: "",
    },
    {
      id: 3,
      text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
      name: "Nasir Uddin",
      role: "CEO",
      avatar: "",
    },
    {
      id: 4,
      text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
      name: "Arif Rayhan",
      role: "Lead Developer",
      avatar: "",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section className="w-[91%] max-w-7xl mx-auto py-16 md:py-24 text-center font-urbanist rounded-4xl my-6 overflow-hidden relative">
      {/* DECORATIVE TOP VECTOR ILLUSTRATION */}
      <div className="mb-6 flex justify-center items-center h-16 text-[#00A6ED]/80 select-none">
        <img src={thelagari} alt="" />
      </div>

      {/* HEADER SECTION LAYOUT */}
      <div className="max-w-2xl mx-auto mb-14 md:mb-16 px-4">
        <h2 className="text-3xl md:text-[40px] font-extrabold text-[#0D2C54] tracking-tight mb-4">
          What our customers are sayings
        </h2>
        <p className="text-[#0D2C54] font-normal text-sm sm:text-base leading-relaxed">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro.
        </p>
      </div>

      {/* FIXED SWIPER CONTAINER */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative mb-12">
        <Swiper
          modules={[Autoplay]} // Bound safely here
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          initialSlide={0}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // Optional: Pauses autoplay when user hovers card
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
          className="py-8 !overflow-visible"
        >
          {reviews.map((review, index) => {
            const isCenter = index === activeIndex;

            return (
              <SwiperSlide key={review.id}>
                <div
                  className={`flex flex-col items-start text-left rounded-3xl p-8 transition-all duration-300 h-full relative ${
                    isCenter
                      ? "bg-white border border-gray-100 shadow-xl shadow-gray-200/60 scale-100 opacity-100 z-10"
                      : "scale-95 opacity-50 bg-white/60"
                  }`}
                >
                  <div className="mb-4">
                    <img src={quote} alt="" />
                  </div>

                  <p
                    className={`text-sm sm:text-[15px] leading-relaxed mb-6 font-medium ${isCenter ? "text-gray-600" : "text-gray-400"}`}
                  >
                    {review.text}
                  </p>

                  <div className="w-full border-t border-dashed border-gray-200/80 pt-6 mt-auto mb-6" />

                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-sm select-none ${isCenter ? "bg-[#0D2C54]" : "bg-slate-300"}`}
                    >
                      {review.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-base font-extrabold text-[#0D2C54] leading-tight tracking-tight">
                        {review.name}
                      </h4>
                      <span className="text-xs sm:text-sm text-gray-400 font-medium mt-0.5">
                        {review.role}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* CAROUSEL NAVIGATION AND PAGINATION */}
      <div className="flex items-center justify-center gap-6 mt-4 select-none">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#0D2C54] hover:text-[#0D2C54] transition-colors bg-white group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-4 h-4 transition-transform group-hover:-translate-x-0.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {reviews.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => swiperRef.current?.slideToLoop(dotIdx)}
              className={`h-2 rounded-full transition-all duration-300 ${dotIdx === activeIndex ? "w-6 bg-[#0D2C54]" : "w-2 bg-gray-200"}`}
            />
          ))}
        </div>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="w-10 h-10 rounded-full bg-[#FFB400] hover:bg-[#e09e00] flex items-center justify-center text-black font-bold transition-transform hover:scale-105 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
