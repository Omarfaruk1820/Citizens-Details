import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Users,
  UserPlus,
  LogIn,
  UserPlus2,
  ShieldCheck,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Active Nav Style
  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
      isActive
        ? "bg-primary text-white shadow-md"
        : "text-gray-600 hover:text-primary hover:bg-gray-100"
    }`;

  const navLinks = (
    <>
      <NavLink to="/" className={navLinkClass}>
        <Home size={18} />
        Home
      </NavLink>

      <NavLink to="/citizens" className={navLinkClass}>
        <Users size={18} />
        Citizens
      </NavLink>

      <NavLink to="/CitizenForm" className={navLinkClass}>
        <UserPlus size={18} />
        Add Citizen
      </NavLink>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-gradient-to-r from-primary to-indigo-600 text-white shadow-md">
              <ShieldCheck size={20} />
            </div>
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
              Union Citizen
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks}
          </div>

          {/* Right Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/login"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary transition"
            >
              <LogIn size={18} />
              Login
            </Link>

            <Link
              to="/register"
              className="flex items-center gap-2 px-5 py-2 rounded-xl bg-primary text-white text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition"
            >
              <UserPlus2 size={18} />
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t shadow-sm px-4 pb-4">
          <div className="flex flex-col gap-2 mt-3">
            
            {navLinks}

            <hr className="my-2" />

            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              <LogIn size={18} />
              Login
            </Link>

            <Link
              to="/register"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-primary text-white font-medium"
            >
              <UserPlus2 size={18} />
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;