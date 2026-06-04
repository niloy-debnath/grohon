import booking from "../../assets/bookingIcon.png";

const Features = () => {
  const featureList = [
    {
      id: 1,
      title: "Booking Pick & Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 2,
      title: "Cash On Delivery",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 3,
      title: "Delivery Hub",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 4,
      title: "Booking SME & Corporate",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
  ];

  return (
    <section className="w-[91%] max-w-7xl mx-auto py-12 md:py-16 font-urbanist">
      {/* SECTION TITLE */}
      <div className="mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D2C54] tracking-tight">
          How it Works
        </h2>
      </div>

      {/* FEATURES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {featureList.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col items-start text-left group bg-white p-6 rounded-2xl"
          >
            {/* DYNAMIC DELIVERY TRUCK & PIN SVG ICON */}
            <div className="mb-6 h-14 w-14 text-[#0D2C54] relative flex items-center justify-start">
              <img src={booking} alt="" />
            </div>

            {/* FEATURE TITLE */}
            <h3 className="text-xl font-bold text-[#0D2C54] mb-3 leading-snug">
              {feature.title}
            </h3>

            {/* FEATURE DESCRIPTION */}
            <p className="text-gray-500 font-normal text-sm sm:text-base leading-relaxed max-w-[260px] sm:max-w-none">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
