import bgright from "../../assets/hero-right.png";
import deliveryman from "../../assets/tiny-deliveryman.png";

const Hero = () => {
  return (
    <section className=" bg-white px-4 sm:px-8 md:px-14 py-2 md:py-10 flex flex-col md:flex-row items-center justify-between   overflow-hidden  w-full  rounded-4xl my-10 w-full mx-auto">
      {/* LEFT CONTENT COLUMN */}
      <div className="w-full md:w-1/2 flex flex-col  items-start text-left relative">
        {/* Tiny Deliveryman Decorative Illustration */}
        <div className="mb-6 h-[70px] opacity-90 select-none">
          <img src={deliveryman} alt="" />
        </div>

        {/* Main Heading Accentuated Layout */}
        <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-[#0D2C54] leading-[1.15] mb-6">
          We Make Sure Your <br />
          <span className="text-[#00A6ED]">Parcel Arrives</span> On Time <br />
          <span className="inline-block">— No Fuss.</span>
        </h1>

        {/* Subtitle Description */}
        <p className="text-gray-500 font-normal text-sm sm:text-base max-w-lg leading-relaxed mb-10">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>

        {/* Call to Actions Layer */}
        <div className="flex flex-wrap items-center gap-4 mb-12 w-full sm:w-auto">
          {/* Main Action using updated color FFB400 */}
          <button className="flex items-center justify-between gap-3 bg-[#FFB400] text-black font-bold pl-6 pr-2 py-2 rounded-full hover:bg-[#e09e00] transition-colors group w-full sm:w-auto shadow-sm">
            <span className="text-[15px]">Track Your Parcel</span>
            <div className="bg-[#1c2229] text-[#FFB400] w-9 h-9 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          </button>

          {/* Secondary Action */}
          <button className="w-full sm:w-auto px-8 py-3.5 rounded-2xl border border-gray-200 font-bold text-gray-800 text-[15px] hover:bg-gray-50 hover:border-gray-300 transition-all">
            Be A Rider
          </button>
        </div>

        {/* Carousel Indicators Grid */}
        <div className="flex items-center gap-2 select-none">
          <div className="w-9 h-1.5 bg-[#207c7c] rounded-full" />
          <div className="w-5 h-1.5 bg-gray-200 rounded-full" />
          <div className="w-5 h-1.5 bg-gray-200 rounded-full" />
          <div className="w-5 h-1.5 bg-gray-200 rounded-full" />
        </div>
      </div>

      {/* RIGHT ILLUSTRATION COLUMN */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center relative">
        <div className="w-full max-w-[500px] lg:max-w-[560px] aspect-square flex items-center justify-center">
          {/* Custom vector composition matching the structural lines of big-deliveryman.png */}
          <img src={bgright} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
