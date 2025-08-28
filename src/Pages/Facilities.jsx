import React from 'react';
import Footer from '../Components/Layouts/Footer';
import Navbar from '../Components/Layouts/Navbar';

const Facilities = () => {
  const facilities = [
    {
      id: 1,
      title: "Lockers",
      description: "Keep your precious things in safe and secure vault.",
      icon: "/assets/images/facilities/lockers.png",
      gradient: "bg-gradient-to-br from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      title: "First Aid",
      description: "In case of any emergency, First Aid facilities is available for visitors.",
      icon: "/assets/images/facilities/hospital.png",
      gradient: "bg-gradient-to-br from-red-500 to-pink-600"
    },
    {
      id: 3,
      title: "Canopy",
      description: "Shelter from sun shine and stay with your family and loved ones.",
      icon: "/assets/images/facilities/canopy.png",
      gradient: "bg-gradient-to-br from-teal-500 to-cyan-600"
    },
    {
      id: 4,
      title: "Prayer Area",
      description: "Where you can perform your religious obligation.",
      icon: "/assets/images/facilities/prayer.png",
      gradient: "bg-gradient-to-br from-amber-500 to-orange-600"
    },
    {
      id: 5,
      title: "Changing Rooms",
      description: "Separate changing and shower rooms are available for Ladies and Gents.",
      icon: "/assets/images/facilities/room.png",
      gradient: "bg-gradient-to-br from-purple-500 to-violet-600"
    },
    {
      id: 6,
      title: "Tuck Shop",
      description: "Where you can enjoy snacks, cold drinks etc.",
      icon: "/assets/images/facilities/shop.png",
      gradient: "bg-gradient-to-br from-green-500 to-emerald-600"
    }
  ];

  return (
<>
<Navbar/>
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl text-blue-600 font-normal">
            Our <span className="text-indigo-800">Facilities</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Enjoy world-class amenities designed for your comfort and convenience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility) => (
            <div 
              key={facility.id}
              className={`relative  rounded-2xl shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl ${facility.gradient} text-white`}
            >
              <div className="p-8 text-center">
                <div className="flex justify-center -mt-16">
                  <div className="bg-white p-4 rounded-full shadow-lg">
                    <img 
                      src={facility.icon} 
                      alt={facility.title}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mt-6 mb-3">{facility.title}</h3>
                <p className="text-blue-100 leading-relaxed mb-6">{facility.description}</p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white bg-opacity-30"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
</>
  );
};

export default Facilities;
