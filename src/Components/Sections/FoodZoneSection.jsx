// FoodZoneSection.jsx
import React from 'react';

function FoodZoneSection() {
  return (
    <section className="w-full py-12 bg-gradient-to-r from-[#DA4453] to-[#89216B]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 lg:order-2 rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="/assets/images/main/foodzone.jpg" 
              alt="Food zone at water park" 
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="lg:col-span-8 lg:order-1 space-y-6">
            <h2 className="text-3xl  font-normal text-white">
              <span className="text-amber-200">DELICIOUS</span> FOOD ZONE
            </h2>
            <p className="text-lg text-amber-100 leading-relaxed">
              Our spacious restaurant caters events with delicious and diverse cuisine. 
              Treat your family to an unforgettable experience with options ranging from 
              traditional local dishes to spicy fast food favorites. We guarantee a 
              fantastic, fun-filled day complemented by excellent dining options for all tastes.
            </p>
            <div>
              <a 
                className="inline-flex items-center px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-all shadow-lg hover:shadow-xl"
                href="/Foods"
              >
                View Menu Options
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FoodZoneSection;
