import { useState, useEffect } from "react";

const images = [
  "/images/photo1.jpg",
  "/images/photo2.jpg",
  "/images/photo3.jpg",
];

export default function PhotoSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full mt-12 overflow-hidden rounded-xl shadow-lg h-80">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full flex-shrink-0 h-80 object-cover"
          />
        ))}
      </div>
    </div>
  );
}