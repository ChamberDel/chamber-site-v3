export default function SoftCTA() {
  return (
    <section className="bg-gray-100 py-12 px-6 rounded-2xl shadow-md text-center mt-16">
      <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
      <p className="text-gray-600 mb-6">We’re here to help guide you every step of the way.</p>
      <a
        href="/contact"
        className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300"
      >
        Contact Us
      </a>
    </section>
  );
}