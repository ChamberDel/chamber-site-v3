import PhotoSlider from "@/components/PhotoSlider";
import { Link } from "react-router-dom";

export default function Home() {
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

      {/* Primary CTA */}
      <Link to="/build-your-home">
        <button
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          aria-label="Start building your modular home"
        >
          Let's Build Together
        </button>
      </Link>

      {/* Secondary CTA Options */}
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