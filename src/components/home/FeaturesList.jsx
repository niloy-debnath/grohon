// Replace these asset paths with your actual project illustration files
import trackingImg from "../../assets/live-tracking.png";
import safeImg from "../../assets/safe-delivery.png";
import supportImg from "../../assets/safe-delivery.png";

const FeaturesList = () => {
  const items = [
    {
      id: 1,
      title: "Live Parcel Tracking",
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
      image: trackingImg,
    },
    {
      id: 2,
      title: "100% Safe Delivery",
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
      image: safeImg,
    },
    {
      id: 3,
      title: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
      image: supportImg,
    },
  ];

  return (
    <section className="w-full max-w-11/12 mx-auto py-16 md:py-4 font-urbanist flex flex-col gap-4  rounded-4xl px-6 sm:px-12 md:px-16 my-20">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col md:flex-row items-center md:items-start justify-between  w-full bg-white  p-4 rounded-2xl"
        >
          {/* LEFT SIDE: ILLUSTRATION & DASHED DIVIDER */}
          <div className="w-full md:w-[35%] flex items-center justify-between pr-0 md:pr-4">
            {/* Illustration Frame Container */}
            <div className="w-full max-w-[240px] md:max-w-[280px] aspect-[4/3] flex items-center justify-center select-none mx-auto md:mx-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* The Vertical Dashed Line Element visible only on desktop */}
            <div className="hidden md:block h-32 border-r-2 border-dashed border-slate-300 self-center ml-4" />
          </div>

          {/* RIGHT SIDE: TEXT METADATA */}
          <div className="w-full md:w-[65%] flex flex-col justify-center text-left pt-2 md:pt-6">
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#0D2C54] mb-4 tracking-tight leading-snug">
              {item.title}
            </h3>
            <p className="text-gray-500 font-normal text-sm sm:text-base leading-relaxed max-w-3xl">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeaturesList;
