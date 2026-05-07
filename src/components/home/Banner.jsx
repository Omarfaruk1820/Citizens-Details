import React, { useEffect, useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

// ✅ Scalable Data Structure (API-ready)
const slides = [
  {
    id: 1,
    title: "Upgrade Your Style",
    subtitle: "Discover the latest fashion trends",
    image:
      "https://images.unsplash.com/photo-1521335629791-ce4aec67dd53?q=80&w=1600",
    buttonText: "Shop Now",
    link: "/shop",
  },
  {
    id: 2,
    title: "Electronics Mega Sale",
    subtitle: "Up to 50% off on gadgets",
    image:
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=1600",
    buttonText: "Explore Deals",
    link: "/category/electronics",
  },
  {
    id: 3,
    title: "Beauty & Skincare",
    subtitle: "Premium products for your glow",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1600",
    buttonText: "Shop Beauty",
    link: "/category/beauty",
  },
  {
    id: 4,
    title: "Home & Living",
    subtitle: "Make your home stylish & modern",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600",
    buttonText: "Discover",
    link: "/category/home-living",
  },
  {
    id: 5,
    title: "Kids Collection",
    subtitle: "Comfortable & trendy outfits",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1600",
    buttonText: "Shop Kids",
    link: "/category/kids",
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  // ✅ Auto Slide (safe cleanup)
  useEffect(() => {
    resetTimer();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => resetTimer();
  }, [current]);

  const resetTimer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  // ✅ Navigation
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative w-full overflow-hidden">
      
      {/* ✅ Responsive Height */}
      <div className="relative h-[60vh] sm:h-[65vh] md:h-[75vh] lg:h-[85vh]">
        
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* IMAGE */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

            {/* CONTENT */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 text-white">
                
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
                  {slide.title}
                </h1>

                <p className="text-sm sm:text-base md:text-lg mb-5 max-w-md text-gray-200">
                  {slide.subtitle}
                </p>

                <Link
                  to={slide.link}
                  className="inline-block bg-primary text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:opacity-90 transition"
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* ✅ Arrows (hidden on small screens for UX) */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-primary text-white p-3 rounded-full transition z-20"
        >
          <FaArrowLeft />
        </button>

        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-primary text-white p-3 rounded-full transition z-20"
        >
          <FaArrowRight />
        </button>

        {/* ✅ Dots Indicator */}
        <div className="absolute bottom-4 w-full flex justify-center gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === current
                  ? "bg-primary w-6"
                  : "bg-white/50 w-2.5"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;