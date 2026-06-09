import { Outlet } from "react-router";
import Logo from "../components/shared/logo/Logo";
import authImg from "../assets/authImg.png";

const AuthLayout = () => {
  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 font-sans bg-white">
      {/* LEFT SIDE: DYNAMIC AUTH FORMS CONTAINER */}
      <div className="flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-24 xl:px-32 py-12 relative">
        {/* Absolute branding token matching your design coordinates */}
        <div className="absolute top-8 left-6 sm:left-12 md:left-20 lg:left-24 xl:left-32">
          <Logo></Logo>
        </div>

        {/* Active Child Route (Login / Register Views Injection Point) */}
        <div className="w-full max-w-md mx-auto mt-12 lg:mt-0">
          <Outlet />
        </div>
      </div>

      {/* RIGHT SIDE: SECURE & STABLE ILLUSTRATION BACKDROP */}
      <div className="hidden lg:flex items-center justify-center bg-[#F9FBF6] p-12 select-none border-l border-gray-100">
        <div className="w-full max-w-lg transition-all duration-300 transform hover:scale-[1.01]">
          <img
            src={authImg}
            alt="ZapShift Secure Logistics Dispatch Delivery"
            className="w-full h-auto object-contain mx-auto"
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
