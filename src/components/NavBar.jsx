import { useState } from "react";
import { Link } from "react-router-dom";
import { User, LogOut } from "lucide-react";

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-gray-900 px-8 py-4 text-white">
    {/* Left Side */}
    <div className="flex items-center gap-8">
        <Link to="/" className="text-2xl font-bold">
            Trackr
        </Link>
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
            <button
                onClick={() => setDropdownOpen((open) => !open)}
                className="focus:outline-none"
                aria-label="Open Menu"
            >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
            <Link to="/" className="hover:text-gray-300">
                Home
            </Link>
            <Link to="/announcements" className="hover:text-gray-300">
                Announcements
            </Link>
            <Link to="/deadlines" className="hover:text-gray-300">
                Deadlines
            </Link>
        </div>
    </div>
    {/* Mobile Dropdown Menu */}
    {dropdownOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-900 z-20 flex flex-col items-start px-8 py-4 gap-2 shadow-lg">
            <Link to="/" className="hover:text-gray-300 w-full py-2" onClick={() => setDropdownOpen(false)}>
                Home
            </Link>
            <Link to="/announcements" className="hover:text-gray-300 w-full py-2" onClick={() => setDropdownOpen(false)}>
                Announcements
            </Link>
            <Link to="/deadlines" className="hover:text-gray-300 w-full py-2" onClick={() => setDropdownOpen(false)}>
                Deadlines
            </Link>
        </div>
    )}
      <div className="flex items-center gap-4 relative">
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-semibold">
          Dashboard
        </button>
        {/* User Dropdown */}
        <div className="relative">
          <button
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-800"
            onClick={() => setDropdownOpen((open) => !open)}
          >
            <User size={20} />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-gray-900 rounded shadow-lg z-10">
              <button className="w-full flex items-center px-4 py-2 hover:bg-gray-100">
                Setting
              </button>
              <button className="w-full flex items-center px-4 py-2 hover:bg-gray-100">
                <LogOut size={18} className="mr-2" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
