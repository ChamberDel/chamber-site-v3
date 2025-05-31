import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("/api/register", { email });

      if (response.status === 200) {
        setSuccess(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <label className="block mb-4">
          <span className="block text-gray-700 font-medium mb-1">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </label>
        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}
        {success ? (
          <p className="text-green-600">Confirmation email sent successfully!</p>
        ) : (
          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white w-full py-2 px-4 rounded hover:bg-gray-900 transition"
          >
            {loading ? "Submitting..." : "Register"}
          </button>
        )}
      </form>
    </div>
  );
}
