import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("https://email-server-git-main-william-barrys-projects.vercel.app/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        subject: "Register",
        message: "",
      }),
    });
    alert("Thank you for registering your interest!");
    setForm({ name: "", email: "" });
  };

  return (
    <main className="pt-32 p-8 text-center space-y-6">
      <h1 className="text-4xl font-bold text-gray-900">Register Your Interest</h1>
      <p className="text-gray-600 max-w-xl mx-auto">
        Get early access to product launches, updates, and special offers.
      </p>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded"
        />
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
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
m
