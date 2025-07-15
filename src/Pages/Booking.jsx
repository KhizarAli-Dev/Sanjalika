import React, { useState } from "react";
import Navbar from "../Components/Layouts/Navbar";
import Footer from "../Components/Layouts/Footer";
import { FaCheck, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const Booking = () => {
  const [formData, setFormData] = useState({
    date: "",
    name: "",
    email: "",
    phone: "",
    nic: "",
    adults: "",
    children: "",
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thank you for your booking! Your tickets will be emailed to you within 24 hours."
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Book Your Visit
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Secure your tickets to Sanjalika Water Park for an unforgettable
              experience
            </p>
            <div className="w-20 h-1 bg-teal-500 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Booking Form Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  Booking Information
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Visit Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                        placeholder="+92-300-1234567"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        NIC Number
                      </label>
                      <input
                        type="text"
                        name="nic"
                        value={formData.nic}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                        placeholder="12345-6789012-3"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Adults (12+ years)
                      </label>
                      <select
                        name="adults"
                        value={formData.adults}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                        required
                      >
                        <option value="" disabled>
                          Select quantity
                        </option>
                        <option value="1">1 Adult - Rs. 1200</option>
                        <option value="2">2 Adults - Rs. 2400</option>
                        <option value="3">3 Adults - Rs. 3600</option>
                        <option value="4">4 Adults - Rs. 4800</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Children (3-11 years)
                      </label>
                      <select
                        name="children"
                        value={formData.children}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                        required
                      >
                        <option value="" disabled>
                          Select quantity
                        </option>
                        <option value="0">0 Children</option>
                        <option value="1">1 Child - Rs. 1200</option>
                        <option value="2">2 Children - Rs. 2400</option>
                        <option value="3">3 Children - Rs. 3600</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        name="agreed"
                        checked={formData.agreed}
                        onChange={handleChange}
                        className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="font-medium text-gray-700">
                        I agree to the{" "}
                        <a
                          href="#terms"
                          className="text-teal-600 hover:text-teal-500"
                        >
                          Terms & Conditions
                        </a>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition duration-300 shadow-md hover:shadow-lg"
                  >
                    Confirm Booking
                  </button>
                </form>
              </div>
            </div>

            {/* Pricing & Terms Card */}
            <div className="space-y-6">
              {/* Pricing Summary */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 bg-gradient-to-r from-blue-500 to-blue-600">
                  <h3 className="text-xl font-semibold text-white">
                    Pricing Summary
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Adults (x1)</span>
                      <span className="font-medium">Rs. 1200</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Children (x0)</span>
                      <span className="font-medium">Rs. 0</span>
                    </div>
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span>Rs. 1200</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms & Conditions */}
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                id="terms"
              >
                <div className="p-6 bg-gradient-to-r from-amber-500 to-amber-600">
                  <h3 className="text-xl font-semibold text-white">
                    Terms & Conditions
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Masks are mandatory for entry</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Properly dispose of used tissues</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Present printed e-ticket at counter</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Use hand sanitizer before entering Food Zone</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Digital tickets on devices not accepted</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Park Information */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 bg-gradient-to-r from-green-600 to-green-700">
                  <h3 className="text-xl font-semibold text-white">
                    Park Information
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-start">
                      <FaClock className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Operating Hours:</p>
                        <p>Monday-Saturday: 10:00 AM - 8:00 PM</p>
                        <p>Sunday: 8:00 AM - 10:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FaMapMarkerAlt className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Location:</p>
                        <p>Highway, Karachi, Jamshoro, Sindh 75090</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Booking;