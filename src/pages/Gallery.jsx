import React from "react";

const galleryItems = [
  { id: 1, src: "/images/home1.jpg", alt: "Modern modular home exterior" },
  { id: 2, src: "/images/home2.jpg", alt: "Interior view of a modular living space" },
  { id: 3, src: "/images/home3.jpg", alt: "Modular kitchen design" },
  { id: 4, src: "/images/home4.jpg", alt: "Compact and stylish bedroom" },
];

export default function Gallery() {
  return (
    <main className="pt-32 px-6 pb-16 text-center space-y-8" role="main">
      <h1 className="text-4xl font-bold text-gray-900">Gallery</h1>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Explore our modular homes—designed for strength, beauty, and comfort.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {galleryItems.map((item) => (
          <div key={item.id} className="overflow-hidden rounded-xl shadow-md">
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </main>
  );
}