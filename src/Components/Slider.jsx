import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Slider = () => {
  const slides = [
    {
      id: 1,
      image: "../../public/assets/images/slider/slider1.jpg",
      alt: "First Slide",
      heading1: "Welcome To",
      heading2: "SANJALIKA WATER PARK",
    },
    {
      id: 2,
      image: "../../public/assets/images/slider/slider2.jpg",
      alt: "Second Slide",
      heading1: "Welcome To",
      heading2: "SANJALIKA WATER PARK",
    },
    {
      id: 3,
      image: "../../public/assets/images/slider/slider3.jpg",
      alt: "Third Slide",
      heading1: "Welcome To",
      heading2: "SANJALIKA WATER PARK",
    },
  ];

  return (
    <div className="relative h-[700px] w-full">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
        }}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              <img
                src={slide.image}
                alt={slide.alt}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white  bg-opacity-30">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  {slide.heading1}
                </h2>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                  {slide.heading2}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation buttons */}
        <div className="swiper-button-prev swiper-button-white"></div>
        <div className="swiper-button-next swiper-button-white"></div>
      </Swiper>
    </div>
  );
};

export default Slider;
