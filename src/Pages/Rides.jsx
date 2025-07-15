import React from "react";
import Navbar from "../Components/Layouts/Navbar";
import Footer from "../Components/Layouts/Footer";
import { Link } from "react-router-dom";

const Rides = () => {
  const rides = [
    {
      id: 1,
      name: "TURBO CYCLONE",
      image: "../../public/assets/images/rides/turbo.jpg.png",
      description:
        "Experience the thrilling twists and turns of our high-speed water coaster",
    },
    {
      id: 2,
      name: "Pendulam",
      image: "../../public/assets/images/rides/Pendulam.png",
      description:
        "Swing back and forth on this exciting pendulum-style water ride",
    },
    {
      id: 3,
      name: "BOOMRENGO",
      image: "../../public/assets/images/rides/Boomrengo.png",
      description: "A bouncy, splashy adventure for the whole family",
    },
    {
      id: 4,
      name: "Big Monster",
      image: "../../public/assets/images/rides/Big-Monstar.png",
      description: "Our largest slide with multiple drops and surprises",
    },
    {
      id: 5,
      name: "Rainbow",
      image: "../../public/assets/images/rides/RainBow.png",
      description: "Colorful slides with gentle curves perfect for all ages",
    },
    {
      id: 6,
      name: "Free Fall",
      image: "../../public/assets/images/rides/FreeFall.png",
      description: "Plunge straight down at heart-stopping speeds",
    },
    {
      id: 7,
      name: "Wave Pool",
      image: "../../public/assets/images/rides/WavePool.png",
      description: "Experience ocean-like waves in our massive wave pool",
    },
    {
      id: 8,
      name: "Cyclone",
      image: "../../public/assets/images/rides/Cyclone.png",
      description: "Spin through swirling waters in this funnel-shaped ride",
    },
    {
      id: 9,
      name: "Aquatic Island + Lazy River",
      image: "../../public/assets/images/rides/Aquatic-Island-Lazy-River.png",
      description:
        "Relaxing float through tropical landscapes and interactive water features",
    },
    {
      id: 10,
      name: "Rim Jhim",
      image: "../../public/assets/images/rides/Rim-Jhim.png",
      description: "Gentle water play area with sprinklers and small slides",
    },
    {
      id: 11,
      name: "Family Slides",
      image: "../../public/assets/images/rides/FamilySlide.png",
      description: "Race down side-by-side slides with your loved ones",
    },
    {
      id: 12,
      name: "The Jungle",
      image: "../../public/assets/images/rides/The-Jungle.png",
      description: "Adventure through tropical-themed water obstacles",
    },
    {
      id: 13,
      name: "Aqua Play",
      image: "../../public/assets/images/rides/Aqua-Play.png",
      description: "Interactive water playground for younger visitors",
    },
    {
      id: 14,
      name: "Mini Titanic Ship",
      image: "../../public/assets/images/rides/Titanic-Ship.png",
      description: "Climb aboard our ship-themed water play structure",
    },
    {
      id: 15,
      name: "Cyclone Pool",
      image: "../../public/assets/images/rides/Cyclone-Pool.png",
      description: "Whirlpool-style attraction with swirling currents",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="py-6">
        {/* Header Section */}
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-normal  ">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              RIDES & SLIDES
            </span>
          </h1>
        </div>

        {/* Rides Grid */}
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rides.map((ride) => (
              <div
                key={ride.id}
                className="bg-white bg-opacity-5 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:bg-opacity-10 border border-white border-opacity-10"
              >
                <div className="relative overflow-hidden h-60 group">
                  <img
                    src={ride.image}
                    alt={ride.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                  <h3 className="absolute bottom-0 left-0 right-0 text-center text-2xl font-bold text-white p-4">
                    {ride.name}
                  </h3>
                </div>
                <div className="p-6">
                  <p className=" mb-4">{ride.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="container mx-auto px-4 text-center py-12">
          <div className="bg-gradient-to-r from-slate-800 to-blue-900 rounded-2xl p-8 shadow-xl border border-cyan-500 border-opacity-20">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Ready for Adventure?
            </h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto text-gray-300">
              Book your tickets today and experience the thrill of Sanjalika's
              water attractions!
            </p>
            <Link to="/Booking">
              <button className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl">
                Book Your Visit Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Rides;
