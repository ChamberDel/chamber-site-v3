import Register from './pages/Register';
import Contact from './pages/Contact';
import BuildYourHome from './pages/BuildYourHome';
import Gallery from './pages/Gallery';

<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/register" element={<Register />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/build-your-home" element={<BuildYourHome />} />
  <Route path="/gallery" element={<Gallery />} />

  {/* Existing Routes */}
  <Route path="/reserve" element={<Reserve />} />
  <Route path="/shipping" element={<Shipping />} />
  <Route path="/faq" element={<FAQ />} />
  <Route path="/support" element={<Support />} />
  <Route path="/testimonials" element={<Testimonials />} />

  {/* Optional fallback */}
  <Route path="*" element={<Index />} />
</Routes>