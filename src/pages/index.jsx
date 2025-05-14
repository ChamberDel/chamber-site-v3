import PhotoSlider from "@/components/PhotoSlider";

export default function Home() {
  return (
    <main className="pt-32 p-8 text-center space-y-16" role="main">
      {/* Photo Slider */}
      <PhotoSlider />

      {/* Hero Section */}
      <header className="mb-6">
        <h1 className="text-5xl font-extrabold text-gray-900">
          Modern. Resilient. Yours.
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mt-4">
          At Chamber Modular, we design innovative homes that reflect your needs, values, and future. 
          Built to last. Built for you.
        </p>
      </header>

      {/* CTA Button */}
      <a 
        href="/contact" 
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition" 
        aria-label="Contact us to start building your modular home"
      >
        Let's Build Together
      </a>

      {/* Why Choose Section */}
      <section className="bg-gray-100 py-16 px-6 sm:px-12 mt-24 rounded-xl shadow-inner text-left">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Why Choose Chamber Modular?
          </h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-start">
              <span className="text-green-500 mr-3 text-xl">✅</span>
              Built for 200mph Winds
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 text-xl">✅</span>
              Free Shipping to Select Ports
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 text-xl">✅</span>
              Fast Delivery: 8–10 Weeks
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 text-xl">✅</span>
              Customizable Interiors
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 text-xl">✅</span>
              Financing Options Coming Soon
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}