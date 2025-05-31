import { useState } from "react";

export default function BuildYourHome() {
  const [form, setForm] = useState({
    homeType: "",
    location: "",
    budget: "",
    email: "",
    name: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = `Home Type: ${form.homeType}\nDelivery Location: ${form.location}\nBudget: ${form.budget}`;

    await fetch("https://email-server-git-main-william-barrys-projects.vercel.app/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name || "Unknown",
        email: form.email,
        subject: "Build Your Home",
        message,
      }),
    });

    alert("Quote request submitted!");
    setForm({ homeType: "", location: "", budget: "", email: "", name: "" });
  };

  return (
    <main className="pt-32 p-8 text-center space-y-6">
      <h1 className="text-4xl font-bold text-gray-900">Build Your Modular Home</h1>
      <p className="text-gray-600 max-w-xl mx-auto">
        Use this quick form to tell us what you’re looking for, and we’ll provide an estimate.
      </p>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />
        <select
          name="homeType"
          value={form.homeType}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded"
        >
          <option value="">Select Home Type</option>
          <option value="studio">Studio</option>
          <option value="1-bedroom">1 Bedroom</option>
          <option value="2-bedroom">2 Bedroom</option>
          <option value="custom">Custom</option>
        </select>
        <input
          name="location"
          type="text"
          placeholder="Preferred Delivery Location"
          value={form.location}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />
        <input
          name="budget"
          type="text"
          placeholder="Budget (USD)"
          value={form.budget}
          onChange={handleChange}
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
