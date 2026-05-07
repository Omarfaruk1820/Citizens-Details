import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaImage,
} from "react-icons/fa";
import { AuthContext } from "./AuthProvider";
import SignInGoogle from "./SignInGoogle";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const password = watch("password");

  // ✅ Submit
  const onSubmit = async (data) => {
    try {
      await createUser(
        data.email,
        data.password,
        data.name,
        data.photoURL // optional
      );

      toast.success("Account created successfully 🎉");
      reset();

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      toast.error(error.message || "Registration failed!");
    }
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-gray-100">
      <Toaster />

      {/* LEFT SIDE */}
      <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-primary to-indigo-600 text-white p-10">
        <h1 className="text-4xl font-bold mb-4">Welcome 👋</h1>
        <p className="text-lg opacity-90 text-center max-w-sm">
          Create your account and start your journey.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

          {/* HEADER */}
          <h2 className="text-2xl font-bold text-center mb-6">
            Create Account
          </h2>

          {/* FORM */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

            {/* NAME */}
            <div className="relative">
              <FaUser className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full pl-10 py-2.5 border rounded-lg"
                {...register("name", { required: "Name required" })}
              />
              {errors.name && (
                <p className="text-xs text-red-500">{errors.name.message}</p>
              )}
            </div>

            {/* EMAIL */}
            <div className="relative">
              <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-10 py-2.5 border rounded-lg"
                {...register("email", { required: "Email required" })}
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* PHOTO URL (IMPORTANT for avatar) */}
            <div className="relative">
              <FaImage className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Photo URL (optional)"
                className="w-full pl-10 py-2.5 border rounded-lg"
                {...register("photoURL")}
              />
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <FaLock className="absolute top-3 left-3 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full pl-10 pr-10 py-2.5 border rounded-lg"
                {...register("password", {
                  required: "Password required",
                  minLength: { value: 6, message: "Min 6 characters" },
                })}
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>

              {errors.password && (
                <p className="text-xs text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="relative">
              <FaLock className="absolute top-3 left-3 text-gray-400" />
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full pl-10 pr-10 py-2.5 border rounded-lg"
                {...register("confirmPassword", {
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />

              <span
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-3 cursor-pointer"
              >
                {showConfirm ? <FaEyeSlash /> : <FaEye />}
              </span>

              {errors.confirmPassword && (
                <p className="text-xs text-red-500">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* SUBMIT */}
            <button
              disabled={isSubmitting}
              className="w-full py-2.5 bg-primary text-white rounded-lg"
            >
              {isSubmitting ? "Creating..." : "Create Account"}
            </button>
          </form>

          {/* GOOGLE */}
          <div className="mt-5">
            <SignInGoogle />
          </div>

          {/* LOGIN */}
          <p className="text-center text-sm mt-4">
            Already have account?{" "}
            <Link className="text-primary" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;