import serviceIcon from "../../assets/service.png";
const Services = () => {
  const serviceList = [
    {
      id: 1,
      title: "Express & Standard Delivery",
      description:
        "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
      isHighlighted: false,
    },
    {
      id: 2,
      title: "Nationwide Delivery",
      description:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 4–8-72 hours.",
      isHighlighted: true, // This card gets the unique lime background
    },
    {
      id: 3,
      title: "Fulfillment Solution",
      description:
        "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
      isHighlighted: false,
    },
    {
      id: 4,
      title: "Cash on Home Delivery",
      description:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
      isHighlighted: false,
    },
    {
      id: 5,
      title: "Corporate Service / Contract In Logistics",
      description:
        "Customized corporate services which includes warehouse and inventory management support.",
      isHighlighted: false,
    },
    {
      id: 6,
      title: "Parcel Return",
      description:
        "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
      isHighlighted: false,
    },
  ];

  return (
    <section className="w-[91%] max-w-7xl mx-auto bg-[#0D2C54] rounded-4xl py-16 px-6 sm:px-12 md:px-16 my-12 text-center font-urbanist overflow-hidden">
      {/* HEADER SECTION */}
      <div className="max-w-2xl mx-auto mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
          Our Services
        </h2>
        <p className="text-gray-300 font-normal text-sm sm:text-base leading-relaxed opacity-90">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      {/* CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {serviceList.map((service) => (
          <div
            key={service.id}
            className={`flex flex-col items-center justify-start text-center p-8 rounded-3xl transition-all duration-300 hover:scale-[1.02] shadow-sm bg-white hover:bg-[#FFB400]`}
          >
            {/* ILLUSTRATION DECORATIVE ACCENT ICON */}
            <div className="mb-6 w-16 h-16 rounded-full bg-gradient-to-tr from-blue-50 to-indigo-100 flex items-center justify-center relative overflow-hidden select-none">
              <div className="absolute inset-0 bg-blue-400 opacity-10 animate-pulse" />
              {/* Dynamic minimal vector mimicking the package/truck icon theme */}
              <img src={serviceIcon} alt="" />
            </div>

            {/* SERVICE CARD TITLE */}
            <h3 className="text-xl font-extrabold mb-4 px-2 leading-snug tracking-tight">
              {service.title}
            </h3>

            {/* SERVICE CARD DESCRIPTION */}
            <p
              className={`text-sm sm:text-[15px] font-medium leading-relaxed ${
                service.isHighlighted ? "text-[#243f11]" : "text-gray-500"
              }`}
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
