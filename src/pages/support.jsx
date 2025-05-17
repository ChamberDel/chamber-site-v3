export default function Support() {
  return (
    <main className="pt-24 px-4 text-center min-h-screen" role="main">
      <h1 className="text-4xl font-bold mb-4">Support</h1>
      <p className="text-lg text-gray-600 max-w-xl mx-auto mb-6">
        Need help? We're here for you. Contact us or browse our resources for guidance.
      </p>
      <a
        href="/contact"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        aria-label="Contact Support"
      >
        Contact Support
      </a>
    </main>
  );
}