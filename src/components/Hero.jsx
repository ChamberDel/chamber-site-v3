export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-50 pt-16">
      <img src="/chamber-icon.png" alt="Chamber Logo" className="w-20 h-20 mb-4" />
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Precision Living. Delivered.</h1>
      <div className="flex space-x-4">
        <a href="#models" className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800">View Models</a>
        <a href="#reserve" className="px-6 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-300">Reserve Now</a>
      </div>
    </section>
  );
}
