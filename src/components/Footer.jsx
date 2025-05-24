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
          <p>Quick Links</p>
          <ul>
            <li className="ml-4">
              <Link to="/">Home</Link>
            </li>
            <li className="ml-4">
              <Link to="/deadline">Deadlines</Link>
            </li>
          </ul>
          <ul className="mt-2">
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
