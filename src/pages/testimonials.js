export default function Testimonials() {
  const testimonials = [
    {
      name: "Ava Johnson",
      text: "The quality and speed of delivery exceeded my expectations. Chamber Modular made my dream home a reality.",
    },
    {
      name: "Liam Chen",
      text: "Exceptional service and modern design. It was truly a stress-free experience from start to finish.",
    },
    {
      name: "Elena Martinez",
      text: "Their team guided me through the entire process. My home is efficient, beautiful, and built to last.",
    },
  ];

  return (
    <main className="pt-24 pb-16 px-6 max-w-5xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">
        What Our Customers Are Saying
      </h1>
      <p className="text-lg text-gray-500 mb-10">
        Real stories from real people who chose Chamber Modular.
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-left"
          >
            <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
            <div className="text-sm font-semibold text-gray-900">
              — {testimonial.name}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}