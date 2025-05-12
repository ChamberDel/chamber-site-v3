import { Link } from "react-router-dom";

export default function TestimonialBubble() {
  return (
    <Link 
      to="/testimonials"
      className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition z-50"
    >
      💬 Testimonials
    </Link>
  );
}