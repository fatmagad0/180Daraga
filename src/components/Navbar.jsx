import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
function Navbar() {
  return (
    <nav className="bg-neutral-800 flex justify-center text-[#cbc8c8]">
      <div className="w-full max-w-7xl flex items-center justify-between px-16 md:px-40 py-1">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-18 h-auto" />
        </div>
        <div className="flex items-center space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white transition-colors"
                : "hover:text-white transition-colors"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              isActive
                ? "text-white transition-colors"
                : "hover:text-white transition-colors"
            }
          >
            Events
          </NavLink>
          <NavLink
            to="/team"
            className={({ isActive }) =>
              isActive
                ? "text-white transition-colors"
                : "hover:text-white transition-colors"
            }
          >
            Team Hierarchy
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive
                ? "text-white transition-colors"
                : "hover:text-white transition-colors"
            }
          >
            Blogs
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
