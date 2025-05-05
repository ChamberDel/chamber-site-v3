import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-white px-4 pt-20 text-center">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Welcome to Chamber Modular Homes</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">Quality housing, built fast.</p>
        <Link to="/reserve" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
          Reserve Now
        </Link>
      </div>
    </div>
  );
}