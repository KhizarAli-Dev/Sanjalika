import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white bg-gradient-to-br from-slate-800 to-slate-900 mt-12">
      {/* Social Media Section */}
      <div className="bg-slate-900 py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-sm md:text-base font-medium text-slate-300">
              Connect with us on social media:
            </span>
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-slate-300 hover:text-teal-400 transition-colors text-xl"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-slate-300 hover:text-teal-400 transition-colors text-xl"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-slate-300 hover:text-teal-400 transition-colors text-xl"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              className="text-slate-300 hover:text-teal-400 transition-colors text-xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Policies Column */}
            <div className="mb-8 lg:mb-0">
              <h6 className="text-lg font-semibold uppercase mb-4 text-teal-400 border-b border-teal-400 pb-2">
                Park Policies
              </h6>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2">•</span>
                  <span>Pan, Chewing Tobacco strictly prohibited</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2">•</span>
                  <span>Weapons are not allowed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2">•</span>
                  <span>Stoves and burning items prohibited</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2">•</span>
                  <span>Pet animals not allowed</span>
                </li>
              </ul>
            </div>

            {/* Explore Column */}
            <div className="mb-8 lg:mb-0">
              <h6 className="text-lg font-semibold uppercase mb-4 text-teal-400 border-b border-teal-400 pb-2">
                Explore
              </h6>
              <div className="flex flex-col space-y-3">
                <a
                  href="Facilities.html"
                  className="text-slate-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="text-teal-400 mr-2">→</span>
                  FACILITIES
                </a>
                <a
                  href="About.html"
                  className="text-slate-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="text-teal-400 mr-2">→</span>
                  ABOUT US
                </a>
                <a
                  href="Gallery.html"
                  className="text-slate-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="text-teal-400 mr-2">→</span>
                  GALLERY
                </a>
                <a
                  href="Contact.html"
                  className="text-slate-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="text-teal-400 mr-2">→</span>
                  CONTACT US
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="mb-8 lg:mb-0">
              <h6 className="text-lg font-semibold uppercase mb-4 text-teal-400 border-b border-teal-400 pb-2">
                Quick Links
              </h6>
              <div className="flex flex-col space-y-3">
                <a
                  href="Booking.html"
                  className="text-slate-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="text-teal-400 mr-2">→</span>
                  BOOKING TICKETS
                </a>
                <a
                  href="Food.html"
                  className="text-slate-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="text-teal-400 mr-2">→</span>
                  FOOD ZONE
                </a>
                <a
                  href="RidesSlides.html"
                  className="text-slate-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="text-teal-400 mr-2">→</span>
                  RIDES & SLIDES
                </a>
              </div>
            </div>

            {/* Contact Column */}
            <div>
              <h6 className="text-lg font-semibold uppercase mb-4 text-teal-400 border-b border-teal-400 pb-2">
                Contact Us
              </h6>
              <address className="not-italic text-slate-300 space-y-4">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-teal-400 mt-1 mr-3 flex-shrink-0" />
                  <span>Highway, Karachi, Jamshoro, Sindh 75090</span>
                </div>
                <div className="flex items-center">
                  <FaPhoneAlt className="text-teal-400 mr-3" />
                  <span>0324-4424222</span>
                </div>
                <div className="flex items-start">
                  <FaClock className="text-teal-400 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p>Monday-Saturday: 10:00am-8:00pm</p>
                    <p>Sunday: 08:00am-10:00pm</p>
                  </div>
                </div>
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-slate-950 py-4">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Sanjalika Water Park. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;