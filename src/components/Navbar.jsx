import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  const navLinkClass = ({ isActive }) =>
    `font-medium transition-colors duration-200 ${
      isActive ? "text-[#7c3aed]" : "text-gray-600 hover:text-[#7c3aed]"
    }`;

  return (
    <div className="navbar bg-white shadow-sm sticky top-0 z-50 px-4 md:px-16">

      {/* Left - Logo */}
      <div className="navbar-start">
        <NavLink to="/" className="flex items-center gap-2">
          <span className="text-xl font-extrabold" style={{ color: "#7c3aed" }}>
            DigiTools
          </span>
        </NavLink>
      </div>

      {/* Center - Nav Links */}
      <div className="navbar-center hidden md:flex">
        <ul className="flex items-center gap-8">
          <li><NavLink to="/" end className={navLinkClass}>Products</NavLink></li>
          <li><NavLink to="/features" className={navLinkClass}>Features</NavLink></li>
          <li><NavLink to="/pricing" className={navLinkClass}>Pricing</NavLink></li>
          <li><NavLink to="/testimonials" className={navLinkClass}>Testimonials</NavLink></li>
          <li><NavLink to="/faq" className={navLinkClass}>FAQ</NavLink></li>
        </ul>
      </div>

      {/* Right */}
      <div className="navbar-end flex items-center gap-4">

        {/* Cart Icon */}
        <div className="relative cursor-pointer">
          {cartCount > 0 && (
            <span className="absolute -top-3 -right-3 w-5 h-5 rounded-full text-white text-xs font-bold flex items-center justify-center" style={{ backgroundColor: "#7c3aed" }}>
              {cartCount}
            </span>
          )}
          <FiShoppingCart size={20} />
        </div>

        {/* Login */}
        <button className="font-medium text-gray-600 hover:text-[#7c3aed] transition-colors duration-200 hidden md:block cursor-pointer">
          Login
        </button>

        {/* Get Started */}
        <button
          className="hidden md:block font-semibold text-white px-5 py-2 rounded-full transition-all duration-200 
          h-11 w-32 hover:opacity-90 cursor-pointer"
          style={{ backgroundColor: "#7c3aed" }}
        >
          Get Started
        </button>

        {/* Mobile Hamburger */}
        <div className="dropdown dropdown-end md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-52 p-2 shadow">
            <li><NavLink to="/" end className={navLinkClass}>Products</NavLink></li>
            <li><NavLink to="/features" className={navLinkClass}>Features</NavLink></li>
            <li><NavLink to="/pricing" className={navLinkClass}>Pricing</NavLink></li>
            <li><NavLink to="/testimonials" className={navLinkClass}>Testimonials</NavLink></li>
            <li><NavLink to="/faq" className={navLinkClass}>FAQ</NavLink></li>
            <li><a className="font-medium text-gray-600">Login</a></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;