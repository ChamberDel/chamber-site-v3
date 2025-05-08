import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Reserve from "./pages/reserve";
import Shipping from "./pages/shipping";
import FAQ from "./pages/faq";
import Testimonials from "./pages/testimonials";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/faq" element={<FAQ />} />
		<Route path="/testimonials" element={<testimonials />} />
      </Routes>
    </Router>
  );
}

export default App;