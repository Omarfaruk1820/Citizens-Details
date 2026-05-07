import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaSignInAlt,
} from "react-icons/fa";
import { AuthContext } from "./AuthProvider";
import SignInGoogle from "./SignInGoogle";

const Login = () => {
  const { userLogin, resetPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm();

  // ✅ Error handler
  const getErrorMessage = (error) => {
    if (error.code === "auth/user-not-found") return "User not found!";
    if (error.code === "auth/wrong-password") return "Wrong password!";
    if (error.code === "auth/invalid-email") return "Invalid email!";
    return error.message || "Login failed!";
  };

  // ✅ Login
  const onSubmit = async (data) => {
    try {
      await userLogin(data.email, data.password);

      toast.success("Login successful 🎉");

      setTimeout(() => navigate("/"), 1000);
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  };

  // ✅ Forgot Password Handler
  const handleForgotPassword = async () => {
    const email = getValues("email");

    if (!email) {
      return toast.error("Please enter your email first!");
    }

    try {
      await resetPassword(email);
      toast.success("Password reset email sent 📩");
    } catch (error) {
      toast.error("Failed to send reset email!");
    }
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-gray-100">
      <Toaster position="top-center" />

      {/* LEFT SIDE */}
      <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-primary to-indigo-600 text-white p-10">
        <h1 className="text-4xl font-bold mb-4">Welcome Back 👋</h1>
        <p className="text-lg opacity-90 text-center max-w-sm">
          Login to continue your journey.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

          {/* Header */}
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800">Login</h2>
            <p className="text-gray-500 text-sm mt-1">
              Enter your credentials
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

            {/* Email */}
            <div>
              <div className="relative">
                <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full pl-10 pr-3 py-2.5 border rounded-lg text-sm focus:ring-2 focus:ring-primary outline-none"
                  {...register("email", {
                    required: "Email is required",
                  })}
                />
              </div>
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <div className="relative">
                <FaLock className="absolute top-3 left-3 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full pl-10 pr-10 py-2.5 border rounded-lg text-sm focus:ring-2 focus:ring-primary outline-none"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />

                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 cursor-pointer text-gray-400"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            {/* Forgot */}
            <div className="flex justify-end text-sm">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-primary hover:underline"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-primary text-white"
            >
              <FaSignInAlt />
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="px-3 text-gray-400 text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Google */}
          <SignInGoogle />

          {/* Register */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Don’t have an account?{" "}
            <Link to="/register" className="text-primary font-medium">
              Register
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;