import merchant from "../../assets/location-merchant.png";
import bg from "../../assets/Group.png";
const CallToAction = () => {
  return (
    <section className="w-[91%] max-w-7xl mx-auto bg-[#0D2C54] rounded-4xl pt-16 pb-12 md:py-20 px-6 sm:px-12 md:px-16 my-10 relative overflow-hidden font-urbanist flex flex-col md:flex-row items-center justify-between gap-12">
      {/* BACKGROUND WAVE VECTOR DECORATION */}
      <div className="absolute top-0 left-0 right-0 h-24 opacity-100 pointer-events-none select-none z-100">
        <img src={bg} alt="" />
      </div>

      {/* LEFT CONTENT COLUMN */}
      <div className="w-full md:w-[55%] flex flex-col items-start text-left relative z-10">
        {/* Main Heading Text */}
        <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-white leading-[1.2] mb-6 tracking-tight">
          Merchant and Customer Satisfaction <br className="hidden lg:block" />
          is Our First Priority
        </h2>

        {/* Description Copy */}
        <p className="text-gray-300 font-normal text-sm sm:text-base max-w-xl leading-relaxed mb-10 opacity-90">
          We offer the lowest delivery charge with the highest value along with
          100% safety of your product. Pathao courier delivers your parcels in
          every corner of Bangladesh right on time.
        </p>

        {/* Action Button Group */}
        <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
          {/* Primary Lime Button */}
          <button className="w-full sm:w-auto px-8 py-3.5 bg-[#FFB400] hover:bg-[#FFB400]/80 text-[#0D2C54] font-bold text-[15px] sm:text-base rounded-full transition-colors duration-200 shadow-sm">
            Become a Merchant
          </button>

          {/* Secondary Outlined Button */}
          <button className="w-full sm:w-auto px-8 py-3.5 border-2 border-[#FFB400]/40 hover:border-[#FFB400] text-[#FFB400] font-bold text-[15px] sm:text-base rounded-full bg-transparent transition-colors duration-200">
            Earn with ZapShift Courier
          </button>
        </div>
      </div>

      {/* RIGHT ILLUSTRATION COLUMN */}
      <div className="w-full md:w-[45%] flex justify-center md:justify-end items-center relative z-10 select-none">
        <div className="w-full max-w-[360px] md:max-w-[420px] aspect-[4/3] flex items-center justify-center">
          {/* Inline Abstract 3D Package Outline Vector Representation */}
          <img src={merchant} alt="" />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
