import React from "react";
import Navbar from "../Components/Layouts/Navbar";
import Footer from "../Components/Layouts/Footer";

const Foods = () => {
  // Food categories data
 const foodCategories = [
  {
    title: "FAST FOOD DEALS",
    mainImage: "/assets/images/foodzone/price.png",
    items: [
      { name: "Zinger Burger", image: "/assets/images/fastfood/zinger.jpg" },
      { name: "Beef Burger", image: "/assets/images/fastfood/beef.jpg" },
      { name: "Chicken Nuggets", image: "/assets/images/fastfood/nuggets.jpg" },
      { name: "French Fries", image: "/assets/images/fastfood/fries.jpg" },
    ],
  },
  {
    title: "PAKISTANI FOOD",
    mainImage: "/assets/images/pakistanifood/main.jpg",
    items: [
      { name: "Biryani", image: "/assets/images/pakistanifood/biryani.jpg" },
      { name: "Pulao", image: "/assets/images/pakistanifood/pulao.png" },
      { name: "Haleem", image: "/assets/images/pakistanifood/haleem.jpg" },
      { name: "Nihari", image: "/assets/images/pakistanifood/nihari.jpg" },
    ],
  },
  {
    title: "BEVERAGES",
    mainImage: "/assets/images/baverage/baverages.jpg",
    items: [
      { name: "Tea", image: "/assets/images/baverage/tea.jpg" },
      { name: "Coffee", image: "/assets/images/baverage/coffee.jpg" },
      { name: "Juice", image: "/assets/images/baverage/JUICE.jpg" },
      { name: "Cold Drinks", image: "/assets/images/baverage/colddrinks.jpg" },
    ],
  },
];


  return (
    <>
      <Navbar />
      <div className="bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-800 to-teal-700 py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-2xl md:text-4xl font-semibold text-white mb-6">
              Restaurants
            </h1>
            <p className="text-md md:text-lg text-blue-100 font-normal max-w-4xl mx-auto">
              Sanjalika Water Park's spacious restaurant can cater your events
              with delicious food. We offer your family an unforgettable treat
              with options ranging from traditional dishes to extra spicy fast
              food. We guarantee everyone will have a fantastic, fun-filled day.
            </p>
          </div>
        </div>

        {/* Food Categories */}
        <div className="max-w-7xl mx-auto px-4">
          {foodCategories.map((category, index) => (
            <div key={index} className="mb-20">
              {/* Category Title */}
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-white mb-6">
                  {category.title}
                </h2>
                <img
                  src={category.mainImage}
                  alt={category.title}
                  className="mx-auto rounded-lg shadow-xl max-w-full h-auto"
                />
              </div>

              {/* Food Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="group relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                  >
                    <div className="overflow-hidden h-80">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <h3 className="text-xl font-semibold text-white">
                        {item.name}
                      </h3>
                    </div>
                    <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Foods;
