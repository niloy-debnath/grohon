import { useState } from "react";

const FAQ = () => {
  const faqData = [
    {
      id: 1,
      question: "How does this posture corrector work?",
      answer:
        "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
    },
    {
      id: 2,
      question: "Is it suitable for all ages and body types?",
      answer:
        "Yes! Our product is fully adjustable to fit a wide range of body frames, sizes, and ages. It provides targeted alignment support regardless of your daily physical layout or lifestyle routine.",
    },
    {
      id: 3,
      question: "Does it really help with back pain and posture improvement?",
      answer:
        "Absolutely. By gently training your muscle memory and shifting your shoulder carriage back into its natural alignment, regular use relieves pressure off your lower back and cervical spine.",
    },
    {
      id: 4,
      question: "Does it have smart features like vibration alerts?",
      answer:
        "This version focuses on mechanical ergonomics and material durability to reinforce muscle support without relying on electric battery charges or sensor calibration loops.",
    },
    {
      id: 5,
      question: "How will I be notified when the product is back in stock?",
      answer:
        "You can sign up directly via our homepage waitlist or check the dedicated dashboard notification tray to instantly receive real-time email or SMS updates the moment fresh inventory arrives.",
    },
  ];

  // Defaulting the first item open to mirror the state in Frame 2087326207.png
  const [openId, setOpenId] = useState(1);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-[91%] max-w-4xl mx-auto py-16 md:py-24 text-center font-urbanist  rounded-4xl my-6 px-4">
      {/* HEADER SECTION */}
      <div className="max-w-2xl mx-auto mb-12 md:mb-16">
        <h2 className="text-3xl md:text-[40px] font-extrabold text-[#0D2C54] tracking-tight mb-4">
          Frequently Asked Question (FAQ)
        </h2>
        <p className="text-[#0D2C54] font-normal text-sm sm:text-base leading-relaxed">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      {/* ACCORDION ACCENT STACK */}
      <div className="flex flex-col gap-4 max-w-3xl mx-auto text-left">
        {faqData.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={`rounded-2xl border transition-all duration-300 ${
                isOpen
                  ? "border-[#00A6ED] bg-[#f2fafc]" // Custom active outline background tint
                  : "border-gray-200 bg-white"
              }`}
            >
              {/* ACCORDION HEADER TRIGGER */}
              <button
                onClick={() => toggleFaq(item.id)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left select-none"
              >
                <span className="text-base md:text-lg font-bold text-[#0D2C54] pr-4 tracking-tight leading-snug">
                  {item.question}
                </span>

                {/* UP/DOWN FLUID CHEVRON ARROW */}
                <span
                  className={`text-[#0D2C54] transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>

              {/* ACCORDION BODY TRANSITION CONTAINER */}
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {/* Horizontal border division separator rule inside active accordion item */}
                <div className="mx-5 md:mx-6 border-t border-[#00A6ED]/20" />
                <p className="p-5 md:p-6 text-sm sm:text-[15px] font-normal text-gray-500 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* COMPOSITE CTA REDIRECT BUTTON LAYER */}
      <div className="mt-12 flex justify-center select-none">
        <button className="flex items-center bg-[#FFB400] hover:bg-[#FFB400] text-[#09252a] p-1 pl-6 pr-1 rounded-full transition-all duration-200 shadow-sm font-bold text-base gap-3 group">
          <span>See More FAQ's</span>
          {/* Circular Accent Arrow Container matching mockup layout */}
          <div className="w-10 h-10 rounded-full bg-[#0D2C54] flex items-center justify-center text-white transition-transform group-hover:rotate-45">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
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
      </div>
    </section>
  );
};

export default FAQ;
