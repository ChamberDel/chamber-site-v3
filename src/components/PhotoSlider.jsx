import { useState, useEffect } from "react";

// Local images stored in public/images
const images = [
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  // Add more image paths as needed
];

export default function PhotoSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 10000); // Slide every 10 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full mt-12 overflow-hidden rounded-xl shadow-lg">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full flex-shrink-0 h-64 object-cover"
          />
        ))}
      </div>
    </div>
  );
}