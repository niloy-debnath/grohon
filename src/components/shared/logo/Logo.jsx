import { Link } from "react-router";
import logo from "../../../assets/logo.png";

const Logo = () => {
  return (
    <Link to={"/"}>
      <div className="flex items-center -m-6 ">
        <div className="flex items-center">
          {/* Set a specific width like w-12 (3rem/48px) or w-32 (8rem/128px) */}
          <img
            src={logo}
            alt="Company Logo"
            className="w-30 h-auto object-contain"
          />
        </div>
        <div>
          <h1 className="text-4xl  font-russo -ml-10 ">rohon</h1>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
