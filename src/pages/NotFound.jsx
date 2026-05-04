import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200 px-4">
      <div className="text-center max-w-xl w-full">
        {/* 404 Animation */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-7xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600"
        >
          404
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-bold text-gray-800 mt-4"
        >
          Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-500 mt-3 text-sm md:text-base"
        >
          Sorry, the page you are looking for doesn’t exist or has been moved.
          Please check the URL or go back to the homepage.
        </motion.p>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="my-8"
        >
          <img
            src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
            alt="404 Illustration"
            className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 transition"
          >
            <Home size={18} />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 hover:scale-105 transition"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
