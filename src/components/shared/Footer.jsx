import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaShoppingBag,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-20">
      
      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <FaShoppingBag className="text-3xl text-primary" />
            <h2 className="text-2xl font-bold text-white">ShopEase</h2>
          </div>

          <p className="text-sm leading-relaxed text-slate-400">
            Your trusted e-commerce platform for quality products, fast delivery,
            and secure payments. Shop smart, live better.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-6 text-lg">
            <a href="#" className="hover:text-primary transition duration-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-primary transition duration-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-primary transition duration-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-primary transition duration-300">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <Link to="/" className="block hover:text-primary transition mb-2">Home</Link>
          <Link to="/shop" className="block hover:text-primary transition mb-2">Shop</Link>
          <Link to="/cart" className="block hover:text-primary transition mb-2">Cart</Link>
          <Link to="/orders" className="block hover:text-primary transition">My Orders</Link>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Customer Service</h3>
          <Link to="/contact" className="block hover:text-primary transition mb-2">Contact Us</Link>
          <Link to="/faq" className="block hover:text-primary transition mb-2">FAQ</Link>
          <Link to="/returns" className="block hover:text-primary transition mb-2">Returns</Link>
          <Link to="/privacy" className="block hover:text-primary transition">Privacy Policy</Link>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-white font-semibold mb-4">Newsletter</h3>
          <p className="text-sm text-slate-400 mb-4">
            Get the latest updates, offers & deals.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-md bg-slate-800 text-white border border-slate-700 focus:outline-none"
            />
            <button className="bg-primary text-white px-4 rounded-r-md hover:opacity-90 transition">
              Subscribe
            </button>
          </div>

          {/* PAYMENTS */}
          <div className="flex gap-4 mt-6 text-2xl text-slate-400">
            <FaCcVisa className="hover:text-white transition" />
            <FaCcMastercard className="hover:text-white transition" />
            <FaCcPaypal className="hover:text-white transition" />
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-slate-700 py-5 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} <span className="text-white font-medium">ShopEase</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;