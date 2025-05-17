// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TestimonialBubble from "./components/TestimonialBubble"; // ✅ Import here
import PhotoSlider from "./components/PhotoSlider";
import FAQ from "./pages/faq";
import Reserve from "./pages/reserve";
import Shipping from "./pages/shipping";
import Register from "./pages/register";
import BuildYourHome from "./pages/build-your-home";
import Gallery from "./pages/gallery";
import Testimonials from "./pages/testimonials";
import Support from "./pages/support";

function Home() {
  return (
    <main className="pt-[120px] p-8 text-center space-y-12" role="main">
      <PhotoSlider />

      <header className="mb-6">
        <h1 className="text-5xl font-extrabold text-gray-900">
          Modern. Resilient. Yours.
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mt-4">
          At Chamber Modular, we design innovative homes that reflect your needs, values, and future.
          Built to last. Built for you.
        </p>
      </header>

      <a href="/build-your-home">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
          Let's Build Together
        </button>
      </a>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto pt-12">
        <a href="/register" className="block p-6 border rounded-xl hover:shadow-lg transition">
          <h3 className="font-semibold text-lg mb-2 text-gray-900">Register</h3>
          <p className="text-gray-600 text-sm">Sign up to get early updates and exclusive offers.</p>
        </a>
        <a href="/contact" className="block p-6 border rounded-xl hover:shadow-lg transition">
          <h3 className="font-semibold text-lg mb-2 text-gray-900">Contact Us</h3>
          <p className="text-gray-600 text-sm">Got questions? Reach out to our team anytime.</p>
        </a>
        <a href="/build-your-home" className="block p-6 border rounded-xl hover:shadow-lg transition">
          <h3 className="font-semibold text-lg mb-2 text-gray-900">Build Your Home</h3>
          <p className="text-gray-600 text-sm">Use our form to get a personalized estimate.</p>
        </a>
        <a href="/gallery" className="block p-6 border rounded-xl hover:shadow-lg transition">
          <h3 className="font-semibold text-lg mb-2 text-gray-900">Gallery</h3>
          <p className="text-gray-600 text-sm">Browse sample interiors and floor plans.</p>
        </a>
      </section>
    </main>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/build-your-home" element={<BuildYourHome />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <TestimonialBubble /> {/* ✅ Always visible on every page */}
    </>
  );
}

export default App;

