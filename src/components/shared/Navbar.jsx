import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Users,
  UserPlus,
  LogIn,
  ShieldCheck,
  LogOut,
} from "lucide-react";
import { AuthContext } from "../Auth/AuthProvider";
import { FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, userLogOut } = useContext(AuthContext);
  const navigate = useNavigate();

  // ✅ Logout
  const handleLogout = async () => {
    try {
      await userLogOut();
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  // ✅ Close mobile menu
  const closeMenu = () => setIsOpen(false);

  // ✅ Active link style
  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition ${
      isActive
        ? "bg-primary text-white shadow-md"
        : "text-gray-600 hover:text-primary hover:bg-gray-100"
    }`;

  const navLinks = (
    <>
      <NavLink to="/" onClick={closeMenu} className={navLinkClass}>
        <Home size={18} />
        Home
      </NavLink>

      <NavLink to="/citizens" onClick={closeMenu} className={navLinkClass}>
        <Users size={18} />
        Citizens
      </NavLink>

      <NavLink to="/CitizenForm" onClick={closeMenu} className={navLinkClass}>
        <UserPlus size={18} />
        Add Citizen
      </NavLink>
      <NavLink to="/dashboard" onClick={closeMenu} className={navLinkClass}>
        <UserPlus size={18} />
        Dashboard
      </NavLink>
    </>
  );

  // ✅ Avatar fallback
  const getInitial = () => user?.displayName?.charAt(0)?.toUpperCase() || "U";

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* LOGO */}
          <div className="flex items-center gap-2 mb-5">
            <FaShoppingBag className="text-3xl text-primary" />
            <h2 className="text-2xl font-bold ">ShopEase</h2>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-2">{navLinks}</div>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-4">
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="flex items-center gap-2 text-gray-600 hover:text-primary"
                >
                  <LogIn size={18} />
                  Login
                </Link>

                <Link
                  to="/register"
                  className="px-4 py-2 rounded-xl bg-primary text-white text-sm font-medium"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                {/* USER INFO */}
                <div className="flex items-center gap-3">
                  {/* PHOTO / AVATAR */}
                  {user?.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="user"
                      className="w-10 h-10 rounded-full object-cover border"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                      {getInitial()}
                    </div>
                  )}

                  {/* NAME + EMAIL */}
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-semibold text-gray-800">
                      {user?.displayName || "User"}
                    </p>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                  </div>
                </div>

                {/* LOGOUT */}
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500 text-white text-sm hover:bg-red-600"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </>
            )}
          </div>

          {/* MOBILE BUTTON */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden border-t bg-white px-4 pb-4">
          <div className="flex flex-col gap-2 mt-3">
            {navLinks}

            <hr className="my-2" />

            {!user ? (
              <>
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="px-4 py-2 text-gray-600"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  onClick={closeMenu}
                  className="px-4 py-2 bg-primary text-white rounded-xl text-center"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                {/* USER MOBILE INFO */}
                <div className="flex items-center gap-3 px-4 py-2 bg-gray-50 rounded-lg">
                  {user?.photoURL ? (
                    <img
                      src={user.photoURL}
                      className="w-10 h-10 rounded-full object-cover"
                      alt="user"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                      {getInitial()}
                    </div>
                  )}

                  <div>
                    <p className="text-sm font-semibold">
                      {user?.displayName || "User"}
                    </p>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                  </div>
                </div>

                {/* LOGOUT */}
                <button
                  onClick={() => {
                    handleLogout();
                    closeMenu();
                  }}
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded-xl"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
