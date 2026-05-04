import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaSignInAlt,
} from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    // এখানে backend API call করবেন
  };

  return (
    <div className="min-h-screen  flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200 px-4 sm:px-6 lg:px-8">
      
      <div className="w-full max-w-md">
        
        {/* Card */}
        <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-6 sm:p-8">
          
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Welcome Back 👋
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Login to your account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            
            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Email Address
              </label>

              <div className="mt-1 flex items-center border rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-primary">
                <FaEnvelope className="text-gray-400 mr-2" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full outline-none text-sm bg-transparent"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
              </div>

              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Password
              </label>

              <div className="mt-1 flex items-center border rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-primary">
                <FaLock className="text-gray-400 mr-2" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full outline-none text-sm bg-transparent"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Minimum 6 characters required",
                    },
                  })}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="checkbox checkbox-sm" />
                Remember me
              </label>

              <Link
                to="/forgot-password"
                className="text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-70"
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

          {/* Social Button */}
          <button className="w-full py-2.5 rounded-xl border text-sm font-medium hover:bg-gray-100 transition">
            Continue with Google
          </button>

          {/* Register */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-primary font-medium hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;