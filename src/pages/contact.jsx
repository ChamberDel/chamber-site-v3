export default function Contact() {
  return (
    <main className="pt-32 p-8 text-center space-y-6">
      <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
      <p className="text-gray-600 max-w-xl mx-auto">
        We’d love to hear from you. Fill out the form below and we’ll be in touch shortly.
      </p>

      <form className="max-w-md mx-auto mt-8 space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full border p-3 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border p-3 rounded h-32"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 transition"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}