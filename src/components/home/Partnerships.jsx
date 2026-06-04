import randstad from "../../assets/randstad.png";
import moonstar from "../../assets/moonstar.png";
import startpeople from "../../assets/start_people.png";

const Partnerships = () => {
  //   const partners = [
  //     {
  //       name: "CASIO",
  //       logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Casio_logo.svg",
  //     },
  //     {
  //       name: "amazon",
  //       logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  //     },
  //     { name: "moonstar", logo: "" }, // Placeholder if using internal SVG / text
  //     { name: "STAR+", logo: "" },
  //     { name: "startpeople", logo: "" },
  //     {
  //       name: "randstad",
  //       logo: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Randstad_logo.svg",
  //     },
  //   ];

  return (
    <section className="w-[91%] max-w-7xl mx-auto py-12 md:py-16 text-center font-urbanist  rounded-4xl my-6">
      {/* HEADER SECTION TITLE */}
      <h2 className="text-2xl md:text-3xl font-extrabold text-[#0D2C54] tracking-tight mb-10 md:mb-12">
        We've helped thousands of sales teams
      </h2>

      {/* BRAND LOGOS GRID */}
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 px-4 opacity-80">
        {/* CASIO */}
        <div className="h-7 flex items-center justify-center text-[#003399] font-black tracking-tighter text-3xl font-sans">
          CASIO
        </div>

        {/* AMAZON */}
        <div className="h-7 flex items-center justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon"
            className="h-6 object-contain"
          />
        </div>

        {/* MOONSTAR (Custom Minimal Typography Render) */}
        <div className="h-7 flex items-center justify-center text-slate-600 font-bold tracking-widest text-xl">
          <img src={moonstar} alt="" />
        </div>

        {/* STAR+ */}
        <div className="h-7 flex items-center justify-center text-black font-black text-2xl tracking-tight">
          ST<span className="text-orange-500">★</span>R+
        </div>

        {/* STARTPEOPLE */}
        <div className="h-7 flex items-center justify-center text-black font-bold text-xl tracking-tight">
          <img src={startpeople} alt="" />
        </div>

        {/* RANDSTAD */}
        <div className="h-7 flex items-center justify-center">
          <img src={randstad} alt="Randstad" className="h-6 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
