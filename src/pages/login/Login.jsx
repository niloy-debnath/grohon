import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange", // Triggers visual error feedback instantly during user input
  });

  const handleRegister = (data) => {
    console.log("Valid Form Data Payload:", data);
  };

  return (
    <div className="w-full max-w-md mx-auto text-[#041E42]">
      {/* HEADER SECTION */}
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2 select-none font-urbanist">
          Welcome Back
        </h1>
        <p className="text-gray-500 text-sm font-medium font-urbanist">
          Login with Grohon
        </p>
      </div>

      {/* VALIDATION DATA FORM CONTAINER */}
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="space-y-5 font-urbanist"
        noValidate // Disables native browser alert tooltips so custom Tailwind UI handles errors smoothly
      >
        {/* EMAIL INPUT FIELD */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className="text-sm font-bold tracking-wide text-gray-800"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="Email"
            className={`w-full px-4 py-3 border rounded-lg text-base placeholder-gray-400 focus:outline-none transition-all bg-white ${
              errors.email
                ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                : "border-gray-200 focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
            }`}
            {...register("email", {
              required: "Email address is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter a valid email address",
              },
            })}
          />
          {/* Email Contextual Error Prompt */}
          {errors.email && (
            <p className="text-red-500 text-xs font-semibold tracking-wide mt-0.5 animate-fadeIn">
              ⚠ {errors.email.message}
            </p>
          )}
        </div>

        {/* PASSWORD INPUT FIELD */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="password"
            className="text-sm font-bold tracking-wide text-gray-800"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            placeholder="Password"
            className={`w-full px-4 py-3 border rounded-lg text-base placeholder-gray-400 focus:outline-none transition-all bg-white ${
              errors.password
                ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                : "border-gray-200 focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
            }`}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must run at least 6 characters long",
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,}$/,
                message:
                  "Password must contain at least one letter and one number",
              },
            })}
          />
          {/* Password Contextual Error Prompt */}
          {errors.password && (
            <p className="text-red-500 text-xs font-semibold tracking-wide mt-0.5 animate-fadeIn">
              ⚠ {errors.password.message}
            </p>
          )}
        </div>

        {/* FORGOT PASSWORD ANCHOR */}
        <div className="text-left mt-1">
          <Link
            to="/forgot-password"
            className="text-gray-500 hover:text-gray-700 text-sm font-medium underline underline-offset-4 decoration-gray-400"
          >
            Forget Password?
          </Link>
        </div>

        {/* PRIMARY SUBMIT ACTION */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full py-3.5 bg-[#FFB400] text-[#041E42] font-bold text-base rounded-lg shadow-sm hover:bg-[#e09e00] active:scale-[0.99] transition-all cursor-pointer"
          >
            Login
          </button>
        </div>

        {/* ACCOUNT REGISTRATION REDIRECT */}
        <p className="text-center text-gray-500 text-sm font-medium pt-1">
          Don’t have any account?{" "}
          <Link
            to="/register"
            className="text-[#FFB400] hover:text-[#e09e00] font-semibold ml-1"
          >
            Register
          </Link>
        </p>

        {/* VISUAL DIVIDER */}
        <div className="relative flex py-2 items-center">
          <div className="flex-grow border-t border-gray-100"></div>
          <span className="flex-shrink mx-4 text-gray-400 text-sm font-medium">
            Or
          </span>
          <div className="flex-grow border-t border-gray-100"></div>
        </div>

        {/* THIRD PARTY OAUTH GOOGLE ACTION BUTTON */}
        <div>
          <button
            type="button"
            onClick={() => {
              /* Handle Federated Google Auth Strategy */
            }}
            className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#EAEFF4] hover:bg-[#e1e7ed] active:scale-[0.99] font-bold text-sm rounded-lg transition-all text-[#041E42] cursor-pointer"
          >
            <FcGoogle className="text-xl" />
            Login with google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
