import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/citizens">Citizens</NavLink>
      </li>
      <li>
        <NavLink to="/CitizenForm">Add Citizen</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      <div className="navbar-start">
        <Link to="/" className="text-xl font-bold">
          Union Citizen App
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end lg:hidden dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost">
          Menu
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52"
        >
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;