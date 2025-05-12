import PhotoSlider from "./PhotoSlider";

export default function Home() {
  return (
    <main className="pt-24 px-4 text-center" role="main">
      <header className="mb-6">
        <h1 className="text-5xl font-extrabold text-gray-900">
          Modern. Resilient. Yours.
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mt-4">
          At Chamber Modular, we design innovative homes that reflect your needs, values, and future. 
          Built to last. Built for you.
        </p>
      </header>

      <a 
        href="/contact" 
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition" 
        aria-label="Contact us to start building your modular home"
      >
        Let's Build Together
      </a>

      <PhotoSlider />
    </main>
  );
}