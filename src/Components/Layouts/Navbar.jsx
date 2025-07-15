import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import navlogo from "./../../../public/assets/images/navlogo.jpg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navbarRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md" ref={navbarRef}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 font-sans">
        {/* Brand */}
        <a
          href="/"
          className="flex items-center text-xl font-semibold text-blue-600 hover:text-blue-700 transition-colors"
        >
          <img src={navlogo} alt="Logo" className="w-9 h-7 mr-2 rounded" />
          SANJALIKA WATER PARK
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>

        {/* Links */}
        <div
          className={`${
            menuOpen
              ? "block absolute top-full left-0 right-0 bg-white shadow-lg lg:shadow-none"
              : "hidden"
          } lg:flex lg:items-center w-full lg:w-auto mt-0 lg:mt-0 border-t lg:border-t-0`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-8 space-y-2 lg:space-y-0 font-medium text-gray-700 px-4 py-2 lg:p-0">
            <li>
              <Link
                to="/"
                className="block py-2 lg:py-0 hover:text-blue-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/Foods"
                className="block py-2 lg:py-0 hover:text-blue-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                FOOD ZONE
              </Link>
            </li>

            {/* Dropdown */}
            <li
              className="relative"
              onMouseEnter={() =>
                window.innerWidth >= 1024 && setDropdownOpen(true)
              }
              onMouseLeave={() =>
                window.innerWidth >= 1024 && setDropdownOpen(false)
              }
            >
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center w-full lg:w-auto py-2 lg:py-0 hover:text-blue-600 transition-colors focus:outline-none"
                aria-expanded={dropdownOpen}
                aria-label="Toggle dropdown"
              >
                MORE
                <svg
                  className={`ml-1 w-4 h-4 transform transition-transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.71-3.48a.75.75 0 111.04 1.08l-4.25 4a.75.75 0 01-1.04 0l-4.25-4a.75.75 0 01-.02-1.06z" />
                </svg>
              </button>
              <div
                className={`lg:absolute left-0 mt-0 lg:mt-2 bg-white border rounded-md shadow-lg w-full lg:w-48 transform transition-all duration-300 ease-in-out z-40 ${
                  dropdownOpen
                    ? "block opacity-100 translate-y-0"
                    : "hidden lg:block lg:opacity-0 lg:translate-y-2 lg:invisible"
                }`}
              >
                <Link
                  to="/Facilities"
                  className="block px-4 py-2 hover:bg-blue-50 transition-colors"
                  onClick={() => {
                    setDropdownOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  FACILITIES
                </Link>
                <Link
                  to="/Booking"
                  className="block px-4 py-2 hover:bg-blue-50 transition-colors"
                  onClick={() => {
                    setDropdownOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  BOOKING TICKETS
                </Link>
              </div>
            </li>

            <li>
              <Link
                to="/Rides"
                className="block py-2 lg:py-0 hover:text-blue-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                RIDES & SLIDES
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className="block py-2 lg:py-0 hover:text-blue-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className="block py-2 lg:py-0 hover:text-blue-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
