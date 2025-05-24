import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { User, LogOut } from "lucide-react";
import { LoginContext } from "../context/Login";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { isLoggedIn, logout } = useContext(LoginContext);
  const userMenuRef = useRef(null);

  const user_logOut = () => {
    logout();
    setIsUserMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <nav className="flex items-center justify-between bg-gray-900 px-8 py-4 text-white relative">
      {/* Left side  */}
      <div className="flex items-center gap-8">
        <Link to="/" className="text-2xl font-bold">
          Trackr
        </Link>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => {
              setIsMobileMenuOpen((prev) => !prev);
              setIsUserMenuOpen(false);
            }}
            className="focus:outline-none"
            aria-label="Open Menu"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex gap-6">
          <Link to="/home" className="hover:text-gray-300">
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
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-900 z-20 flex flex-col items-start px-8 py-4 gap-2 shadow-lg">
          <Link
            to="/"
            className="hover:text-gray-300 w-full py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/announcements"
            className="hover:text-gray-300 w-full py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Announcements
          </Link>
          <Link
            to="/deadlines"
            className="hover:text-gray-300 w-full py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Deadlines
          </Link>
        </div>
      )}

      {/* Right Side */}
      <div className="flex items-center gap-4 relative z-30">
        <Link
          to="/dashboard"
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-semibold"
        >
          Dashboard
        </Link>

        <div className="relative" ref={userMenuRef}>
          <button
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-800"
            onClick={() => {
              setIsUserMenuOpen((prev) => !prev);
              setIsMobileMenuOpen(false);
            }}
          >
            <User size={20} />
          </button>
          {isUserMenuOpen &&
            (isLoggedIn ? (
              <div className="absolute right-0 mt-2 w-40 bg-white text-gray-900 rounded shadow-lg z-10">
                <Link
                  to="/settings"
                  className="w-full flex items-center px-4 py-2 hover:bg-gray-100"
                >
                  Settings
                </Link>
                <button className="w-full flex items-center px-4 py-2 hover:bg-gray-100">
                  <LogOut size={18} className="mr-2" onClick={user_logOut} />
                  Logout
                </button>
              </div>
            ) : (
              <div className="absolute right-0 mt-2 w-40 bg-white text-gray-900 rounded shadow-lg z-10">
                <Link
                  to="/login"
                  className="w-full block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setIsUserMenuOpen(false)}
                >
                  Login/Signup
                </Link>
              </div>
            ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
