import { useState, useEffect } from "react";

const images = [
  "https://via.placeholder.com/1200x300?text=Slide+1",
  "https://via.placeholder.com/1200x300?text=Slide+2",
    // Add more image paths here
];

export default function PhotoSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // Slide every 4 seconds
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
            alt={`Slide ${index}`}
            className="w-full flex-shrink-0 h-64 object-cover"
          />
        ))}
      </div>
    </div>
  );
}