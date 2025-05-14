export default function Register() {
  return (
    <main className="pt-32 p-8 text-center space-y-6">
      <h1 className="text-4xl font-bold text-gray-900">Register Your Interest</h1>
      <p className="text-gray-600 max-w-xl mx-auto">
        Get early access to product launches, updates, and special offers.
      </p>

      <form className="max-w-md mx-auto mt-8 space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-3 rounded"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full border p-3 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
        >
          Submit Interest
        </button>
      </form>
    </main>
  );
}