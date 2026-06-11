import { Outlet } from "react-router";
import Logo from "../components/shared/logo/Logo";
import authImg from "../assets/authImg.png";

const AuthLayout = () => {
  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 font-sans bg-white">
      {/* LEFT SIDE: DYNAMIC AUTH FORMS CONTAINER */}
      <div className="flex flex-col justify-center  py-12 relative bg-white">
        {/* Absolute branding token matching your design coordinates */}
        <div className="absolute top-8 left-6 sm:left-12 md:left-20 lg:left-24 xl:left-32">
          <Logo />
        </div>

        {/* Active Child Route (Login / Register Views Injection Point) */}
        <div className="w-full max-w-md mx-auto mt-12 lg:mt-0">
          <Outlet />
        </div>
      </div>

      {/* RIGHT SIDE: FIXED SECURE ILLUSTRATION PANEL */}
      {/* Added bg-[#F9FBF6] to fulfill full-height coloring, and increased max-w container size */}
      <div className="hidden lg:flex items-center justify-center    select-none">
        <div className="w-full max-w-xl xl:max-w-2xl transition-all duration-300 transform hover:scale-[1.01]">
          <img
            src={authImg}
            alt="Grohon Secure Logistics Dispatch Delivery"
            className="w-full h-auto object-contain mx-auto"
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
