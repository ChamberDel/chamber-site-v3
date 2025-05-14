export default function FAQ() {
  return (
    <div className="max-w-4xl mx-auto mt-24 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold">What is a modular home?</h2>
          <p className="text-gray-700">A modular home is a prefabricated structure built off-site in sections, then transported and assembled on your property. It's built to the same standards as traditional homes, but much faster and often more affordable.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">How long does it take to build and deliver?</h2>
          <p className="text-gray-700">Our average production time is 4–6 weeks. Shipping and final setup can take an additional 1–2 weeks depending on your location.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Can I customize my modular home?</h2>
          <p className="text-gray-700">Yes, you can choose from a selection of finishes and optional add-ons. However, our designs are optimized for speed and affordability, so full customization is limited.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Do I need a building permit?</h2>
          <p className="text-gray-700">Yes. We recommend checking with your local authorities. We can provide engineering drawings and specifications to support your application.</p>
        </div>
      </div>
    </div>
  );
}