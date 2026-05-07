import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SignInGoogle = ({ fullWidth = true }) => {
  const { signInGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);

      await signInGoogle();

      toast.success("Signed in with Google 🎉");

      navigate("/");
    } catch (error) {
      console.error("Google Sign-in Error:", error);
      toast.error("Google sign-in failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      disabled={loading}
      className={`${
        fullWidth ? "w-full" : "w-auto"
      } flex items-center justify-center gap-3 px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-gray-700 text-sm font-medium shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed`}
    >
      {/* Google Logo */}
      <svg
        width="18"
        height="18"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#FFC107"
          d="M43.6 20.5H42V20H24v8h11.3C33.6 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 
          12-12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.6 6.1 29.6 4 24 4 12.9 4 4 12.9 4 
          24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"
        />
        <path
          fill="#FF3D00"
          d="M6.3 14.7l6.6 4.8C14.5 16.1 18.9 12 24 12c3 0 5.7 1.1 
          7.8 2.9l5.7-5.7C34.6 6.1 29.6 4 24 4c-7.7 0-14.3 4.3-17.7 10.7z"
        />
        <path
          fill="#4CAF50"
          d="M24 44c5.1 0 9.8-1.9 13.3-5.1l-6.1-5c-2.1 1.5-4.7 
          2.4-7.2 2.4-5.2 0-9.6-3.3-11.2-7.9l-6.5 5C9.7 39.6 16.3 44 24 44z"
        />
        <path
          fill="#1976D2"
          d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.2-3.4 5.7-6.1 
          7.1l6.1 5c-.4.4 8.7-6.5 8.7-16.1 0-1.3-.1-2.3-.4-3.5z"
        />
      </svg>

      {/* Text */}
      <span>
        {loading ? "Signing in..." : "Continue with Google"}
      </span>
    </button>
  );
};

export default SignInGoogle;