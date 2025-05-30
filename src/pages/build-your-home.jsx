import { useState } from "react";

export default function BuildYourHome() {
  const [form, setForm] = useState({
    homeType: "",
    location: "",
    budget: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: "noreply@chamber-site.com",
      message: `Build Your Home Form:
Home Type: ${form.homeType}
Location: ${form.location}
Budget: ${form.budget}`,
    };

    const response = await fetch("https://email-server-git-main-william-barrys-projects.vercel.app/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Your request has been submitted!");
      setForm({ homeType: "", location: "", budget: "" });
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="pt-32 p-8 text-center space-y-6">
      <h1 className="text-4xl font-bold text-gray-900">Build Your Modular Home</h1>
      <p className="text-gray-600 max-w-xl mx-auto">
        Use this quick form to tell us what you’re looking for, and we’ll provide an estimate.
      </p>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 space-y-4">
        <select
          name="homeType"
          value={form.homeType}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        >
          <option value="">Select Home Type</option>
          <option value="studio">Studio</option>
          <option value="1-bedroom">1 Bedroom</option>
          <option value="2-bedroom">2 Bedroom</option>
          <option value="custom">Custom</option>
        </select>

        <input
          type="text"
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Preferred Delivery Location"
          className="w-full border p-3 rounded"
          required
        />
        <input
          type="text"
          name="budget"
          value={form.budget}
          onChange={handleChange}
          placeholder="Budget (USD)"
          className="w-full border p-3 rounded"
          required
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
