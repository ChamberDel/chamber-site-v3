export default function Register() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      email: formData.get("email"),
      message: `Name: ${formData.get("name")}`,
    };

    const response = await fetch("https://email-server-git-main-william-barrys-projects.vercel.app/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Thank you for registering your interest!");
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="pt-32 p-8 text-center space-y-6">
      <h1 className="text-4xl font-bold text-gray-900">Register Your Interest</h1>
      <p className="text-gray-600 max-w-xl mx-auto">
        Get early access to product launches, updates, and special offers.
      </p>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full border p-3 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full border p-3 rounded"
          required
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
