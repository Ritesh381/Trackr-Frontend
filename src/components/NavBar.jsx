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
      <div className="flex items-center gap-8">
        <Link to="/" className="text-2xl font-bold">
          Trackr
        </Link>
      </div>

      <div className="hidden md:flex w-full max-w-md justify-center">
  <input
    type="text"
    placeholder="Search Colleges..."
    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>


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
