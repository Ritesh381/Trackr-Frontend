import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { User, LogOut, Menu, X } from "lucide-react";
import { LoginContext } from "../context/Login";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { isLoggedIn, logout } = useContext(LoginContext);
  const userMenuRef = useRef(null);

  const user_logout = () => {
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
    <nav className="bg-gray-900 text-white px-6 py-4 relative">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-2xl font-bold">
            Trackr
          </Link>
          <div className="hidden md:flex gap-4">
            <Link to="/deadline" className="hover:bg-gray-800 px-3 py-2 rounded">
              Deadlines
            </Link>
            <Link to="/search" className="hover:bg-gray-800 px-3 py-2 rounded">
              Search
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/dashboard"
            className="hidden md:inline-block bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-semibold"
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
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    Settings
                  </Link>
                  <button
                    className="w-full flex items-center px-4 py-2 hover:bg-gray-100"
                    onClick={user_logout}
                  >
                    <LogOut size={18} className="mr-2" />
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

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden ml-2 focus:outline-none"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              setIsUserMenuOpen(false);
            }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-gray-800 rounded p-4 space-y-2">
          <Link
            to="/dashboard"
            className="block px-4 py-2 rounded hover:bg-gray-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to="/deadline"
            className="block px-4 py-2 rounded hover:bg-gray-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Deadlines
          </Link>
          <Link
            to="/search"
            className="block px-4 py-2 rounded hover:bg-gray-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Search
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
