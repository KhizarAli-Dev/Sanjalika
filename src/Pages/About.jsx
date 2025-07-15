import React from "react";
import Navbar from "../Components/Layouts/Navbar";
import Footer from "../Components/Layouts/Footer";
import { FaBolt, FaShieldAlt, FaUsers, FaCheck, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-blue-600 py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('../../public/assets/images/5.jpg')] bg-cover bg-center opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-normal text-white mb-4">
              About Sanjalika
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Where unforgettable water adventures begin
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <img
                  src="../../public/assets/images/2.jpg"
                  alt="Water park fun"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Founded in 2010, Sanjalika Water Park has grown to become
                    Karachi's premier water adventure destination. What began as
                    a single slide attraction has blossomed into a 15-acre
                    wonderland of aquatic excitement.
                  </p>
                  <p>
                    Our mission is simple: to provide safe, thrilling water
                    experiences that create lasting memories for families and
                    friends. Every year, we welcome over 500,000 visitors who
                    come to beat the heat and experience our world-class
                    attractions.
                  </p>
                  <p>
                    From adrenaline-pumping slides to relaxing lazy rivers,
                    Sanjalika offers something for every age and adventure
                    level. Our commitment to innovation means we're always
                    adding new attractions to keep the excitement fresh.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Why Choose Sanjalika
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaBolt className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Thrilling Attractions
                </h3>
                <p className="text-gray-600">
                  30+ water slides and attractions including 5 extreme thrill
                  rides for adventure seekers
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaShieldAlt className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Safety First</h3>
                <p className="text-gray-600">
                  Certified lifeguards at every attraction and state-of-the-art
                  water filtration systems
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Family Friendly</h3>
                <p className="text-gray-600">
                  Dedicated kids' zones and family attractions perfect for all
                  ages
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Water Management */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
              <div className="lg:w-1/2">
                <img
                  src="../../public/assets/images/4.jpg"
                  alt="Water filtration system"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Water Quality Commitment
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    At Sanjalika, we take water quality seriously. Our advanced
                    filtration systems ensure crystal clear water while
                    conserving this precious resource.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FaCheck className="text-blue-500 mr-2 mt-0.5" />
                      <span>
                        100% of pool water is recycled and purified daily
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-blue-500 mr-2 mt-0.5" />
                      <span>
                        Separate filtration systems for each attraction
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-blue-500 mr-2 mt-0.5" />
                      <span>Automated chemical monitoring 24/7</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-blue-500 mr-2 mt-0.5" />
                      <span>Water quality reports available to guests</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing & Hours */}
        <div className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Plan Your Visit
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  Pricing
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b pb-2">
                    <span>General Admission (12+)</span>
                    <span className="font-medium">Rs. 1200</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>Children (3-11)</span>
                    <span className="font-medium">Rs. 900</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>Seniors (60+)</span>
                    <span className="font-medium">Rs. 800</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Infants (0-2)</span>
                    <span className="font-medium">Free</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  Hours
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b pb-2">
                    <span>Monday - Thursday</span>
                    <span className="font-medium">10 AM - 6 PM</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>Friday - Saturday</span>
                    <span className="font-medium">10 AM - 8 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">8 AM - 10 PM</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-700">
                    *Extended hours during summer holidays and special events
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;