import React from 'react';

function InfoSection() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-normal text-center text-gray-800 mb-12">
          PARK <span className="text-blue-600">ESSENTIALS</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Hours Card */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2">
            <div className="bg-blue-600 p-4 text-center">
              <svg className="w-10 h-10 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">OPERATING HOURS</h3>
              <div className="space-y-3 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-700">Weekdays (Mon-Sat)</p>
                  <p>10:00 AM - 8:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Weekends (Sun)</p>
                  <p>8:00 AM - 10:00 PM</p>
                </div>
              </div>
              <a 
                className="inline-block mt-6 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                href="About.html"
              >
                Learn More About Us
              </a>
            </div>
          </div>

          {/* Info Card */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2">
            <div className="bg-amber-500 p-4 text-center">
              <svg className="w-10 h-10 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-center text-gray-800 mb-4">PARK POLICIES</h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                Sanjalika Water Park offers exciting adventures for all ages, featuring thrilling slides, relaxing pools, and family-friendly attractions. 
                As a family-oriented destination, we maintain a balanced environment requiring groups to comprise at least 40% female members. 
                Children under 12 must be accompanied by adults at all times.
              </p>
            </div>
          </div>

          {/* Map Card */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2">
            <div className="bg-green-600 p-4 text-center">
              <svg className="w-10 h-10 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-center text-gray-800 mb-4">FIND US</h3>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.180507384549!2d67.6809995150021!3d25.163382183912038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394cbda72b6ce0c7%3A0xc14d294ce06d11ee!2sSANJALIKA%20WATER%20PARK!5e0!3m2!1sen!2s!4v1644966757437!5m2!1sen!2s" 
                  className="w-full h-64"
                  allowFullScreen
                  loading="lazy"
                  title="Sanjalika Water Park Location"
                ></iframe>
              </div>
              <p className="text-center text-gray-600 mt-3">
                Easily accessible from downtown with ample parking available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;