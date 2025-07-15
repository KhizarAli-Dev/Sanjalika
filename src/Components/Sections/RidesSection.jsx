import React from 'react';

function RidesSection() {
  return (
    <section className="w-full py-12 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="../../../public/assets/images/main/img1.jpg" 
              alt="Water park rides" 
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-3xl  font-normal text-white">
              <span className="text-cyan-300">THRILLING</span> RIDES & SLIDES
            </h2>
            <p className="text-lg text-blue-100 leading-relaxed">
              Experience meter-high waves in our wave pool and relax in the lazy river. 
              For adrenaline seekers, our aqua loop rides including free falls and cyclone 
              will get your heart racing. The Rainbow, Rim Jim, Raft and Spiral slides 
              offer the ultimate surfing experience for all ages.
            </p>
            <div>
              <a 
                className="inline-flex items-center px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-all shadow-lg hover:shadow-xl"
                href="RidesSlides.html"
              >
                Explore All Rides
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

export default RidesSection;