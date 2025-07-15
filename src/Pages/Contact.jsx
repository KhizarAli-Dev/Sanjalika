import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { MdAccessTimeFilled } from "react-icons/md";
import Navbar from "../Components/Layouts/Navbar";
import Footer from "../Components/Layouts/Footer";
const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-normal bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or want to book a visit? Reach out to us anytime!
          </p>
        </div>

        {/* Contact Form and Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Contact Form - Gradient Card */}
          <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl shadow-2xl p-8 transform hover:scale-[1.01] transition duration-300">
            <h2 className="text-2xl font-normal text-white text-center mb-8 flex items-center justify-center">
              <IoMdSend className="mr-3 text-3xl" />
              Send Us a Message
            </h2>

            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 py-4 rounded-xl bg-white/90 focus:outline-none focus:ring-2 focus:ring-purple-300 placeholder-gray-600"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-5 py-4 rounded-xl bg-white/90 focus:outline-none focus:ring-2 focus:ring-purple-300 placeholder-gray-600"
                  required
                />
              </div>

              <div>
                <textarea
                  placeholder="Your Message..."
                  className="w-full px-5 py-4 rounded-xl bg-white/90 h-40 focus:outline-none focus:ring-2 focus:ring-purple-300 placeholder-gray-600"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-indigo-600 font-normal py-4 px-6 rounded-xl hover:bg-gray-100 transition duration-300 flex items-center justify-center text-lg shadow-lg"
              >
                Send Message
                <IoMdSend className="ml-2" />
              </button>
            </form>
          </div>

          {/* Contact Info - Colorful Card */}
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-2xl p-8 transform hover:scale-[1.01] transition duration-300">
            <h2 className="text-2xl font-normal text-white text-center mb-8">
              Contact Information
            </h2>

            <div className="space-y-8 text-white">
              <div className="flex items-start bg-white/10 p-5 rounded-xl backdrop-blur-sm">
                <FaMapMarkerAlt className="text-2xl mt-1 mr-5 flex-shrink-0 text-yellow-300" />
                <div>
                  <h3 className="font-normal text-lg mb-1">Our Location</h3>
                  <p className="font-medium">
                    Highway, Karachi, Jamshoro, Sindh 75090
                  </p>
                </div>
              </div>

              <div className="flex items-center bg-white/10 p-5 rounded-xl backdrop-blur-sm">
                <FaPhoneAlt className="text-2xl mr-5 flex-shrink-0 text-green-300" />
                <div>
                  <h3 className="font-normal text-lg mb-1">Phone Number</h3>
                  <p className="font-medium">0324-4424222</p>
                </div>
              </div>

              <div className="flex items-start bg-white/10 p-5 rounded-xl backdrop-blur-sm">
                <MdAccessTimeFilled className="text-2xl mt-1 mr-5 flex-shrink-0 text-pink-300" />
                <div>
                  <h3 className="font-normal text-lg mb-1">Working Hours</h3>
                  <p className="font-medium">
                    Monday - Saturday: 10:00am - 8:00pm
                  </p>
                  <p className="font-medium">Sunday: 08:00am - 10:00pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location Map Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-normal text-center mb-8 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
            Find Us On Map
          </h2>

          <div className="rounded-2xl overflow-hidden shadow-2xl border-8 border-white transform hover:scale-[1.005] transition duration-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14444.722027632975!2d67.6831882!3d25.1633822!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc14d294ce06d11ee!2sSANJALIKA%20WATER%20PARK!5e0!3m2!1sen!2s!4v1643201469943!5m2!1sen!2s"
              className="w-full h-96 md:h-[500px]"
              allowFullScreen=""
              loading="lazy"
              title="Our Location on Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
