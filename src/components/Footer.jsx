import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Trackr. All rights reserved.
          </p>
        </div>

        <div className="container mx-auto mt-4 flex-col">
          <ul className="flex justify-center gap-10">
            <li >
              <Link to="/">Home</Link>
            </li>
            <li >
              <Link to="/deadline">Deadlines</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
