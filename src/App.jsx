import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from './pages/index.jsx';
import Reserve from "./pages/Reserve";
import Shipping from "./pages/Shipping";
import FAQ from "./pages/FAQ";
import Support from "./pages/Support";
import Testimonials from "./pages/Testimonials";
import TestimonialBubble from "./components/TestimonialBubble";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<Index />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/support" element={<Support />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      <TestimonialBubble />
    </Router>
  );
}