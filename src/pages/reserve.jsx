import { useState } from "react";

export default function Reserve() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    model: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = `Phone: ${form.phone}\nModel: ${form.model}\nMessage: ${form.message}`;

    await fetch("https://email-server-git-main-william-barrys-projects.vercel.app/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        subject: "Reservation",
        message,
      }),
    });

    alert("Reservation submitted! We'll contact you shortly.");
    setForm({ name: "", email: "", phone: "", model: "", message: "" });
  };

  return (
    <div className="max-w-2xl mx-auto mt-24 px-4">
      <h1 className="text-4xl font-bold text-center mb-6">Reserve Your Modular Home</h1>
      <p className="text-center text-gray-600 mb-8">Fill out the form below to reserve a unit. A representative will follow up with next steps.</p>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow-md">
        <div>
          <label className="block font-medium mb-1">Full Name</label>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Email Address</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Phone Number</label>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Select Model</label>
          <select
            name="model"
            value={form.model}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="">-- Choose One --</option>
            <option value="Custom">Custom - up to 800 sq ft</option>
            <option value="1-bedroom">1 Bedroom - 400 sq ft</option>
            <option value="2-bedroom">2 Bedroom - 800 sq ft</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">Additional Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="4"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Anything specific we should know?"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Reservation
        </button>
      </form>
    </div>
  );
}
