// src/App.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import TestimonialBubble from "./components/TestimonialBubble";
import PhotoSlider from "./components/PhotoSlider";
import FAQ from "./pages/faq";
import Reserve from "./pages/reserve";
import Shipping from "./pages/shipping";
import Register from "./pages/register";
import BuildYourHome from "./pages/build-your-home";
import Gallery from "./pages/gallery";
import Testimonials from "./pages/testimonials";
import Support from "./pages/support";
import ChamberProducts from "./pages/chamberproducts"; // <-- Imported here

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

      <Link 
        to="/build-your-home"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
      >
        Let's Build Together
      </Link>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto pt-12">
        <Link to="/chamber-products" className="block p-6 border rounded-xl hover:shadow-lg transition">
          <h3 className="font-semibold text-lg mb-2 text-gray-900">Chamber Products</h3>
          <p className="text-gray-600 text-sm">Explore all our modular home models and specifications.</p>
        </Link>

        <Link to="/register" className="block p-6 border rounded-xl hover:shadow-lg transition">
          <h3 className="font-semibold text-lg mb-2 text-gray-900">Register</h3>
          <p className="text-gray-600 text-sm">Sign up to get early updates and exclusive offers.</p>
        </Link>

        <Link to="/support" className="block p-6 border rounded-xl hover:shadow-lg transition">
          <h3 className="font-semibold text-lg mb-2 text-gray-900">Contact Us</h3>
          <p className="text-gray-600 text-sm">Got questions? Reach out to our team anytime.</p>
        </Link>

        <Link to="/build-your-home" className="block p-6 border rounded-xl hover:shadow-lg transition">
          <h3 className="font-semibold text-lg mb-2 text-gray-900">Build Your Home</h3>
          <p className="text-gray-600 text-sm">Use our form to get a personalized estimate.</p>
        </Link>

        <Link to="/gallery" className="block p-6 border rounded-xl hover:shadow-lg transition">
          <h3 className="font-semibold text-lg mb-2 text-gray-900">Gallery</h3>
          <p className="text-gray-600 text-sm">Browse sample interiors and floor plans.</p>
        </Link>
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
        <Route path="/chamber-products" element={<ChamberProducts />} /> {/* 👈 Added here */}
        <Route path="/register" element={<Register />} />
        <Route path="/build-your-home" element={<BuildYourHome />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <TestimonialBubble />
    </>
  );
}

export default App;