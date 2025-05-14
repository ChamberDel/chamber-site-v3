export default function BuildYourHome() {
  return (
    <main className="pt-32 p-8 text-center space-y-6">
      <h1 className="text-4xl font-bold text-gray-900">Build Your Modular Home</h1>
      <p className="text-gray-600 max-w-xl mx-auto">
        Use this quick form to tell us what you’re looking for, and we’ll provide an estimate.
      </p>

      <form className="max-w-md mx-auto mt-8 space-y-4">
        <select className="w-full border p-3 rounded">
          <option value="">Select Home Type</option>
          <option value="studio">Studio</option>
          <option value="1-bedroom">1 Bedroom</option>
          <option value="2-bedroom">2 Bedroom</option>
          <option value="custom">Custom</option>
        </select>

        <input
          type="text"
          placeholder="Preferred Delivery Location"
          className="w-full border p-3 rounded"
        />
        <input
          type="text"
          placeholder="Budget (USD)"
          className="w-full border p-3 rounded"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
        >
          Get a Quote
        </button>
      </form>
    </main>
  );
}