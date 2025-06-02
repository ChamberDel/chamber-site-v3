import React from "react";
import { motion } from "framer-motion";

const models = [
  {
    name: "Chamber Studio",
    size: "300–400 sq ft",
    description:
      "Minimal footprint. Maximum impact. The Chamber Studio combines comfort and utility in a sleek, self-contained unit. Perfect for remote retreats, backyard ADUs, or entry-level housing.",
    features: [
      "Open-plan design",
      "Kitchenette + bathroom",
      "Modular storage solutions",
      "Energy-efficient systems"
    ],
    image: "/images/chamber-studio-placeholder.jpg"
  },
  {
    name: "Chamber One",
    size: "450–600 sq ft",
    description:
      "Modern living with privacy. Includes a private bedroom, open kitchen-living space, and a full bath. Efficient and elegant.",
    features: [
      "Fully insulated for all climates",
      "Smart-home capable",
      "Optimized natural lighting",
      "Vertical ribbed black cladding exterior"
    ],
    image: "/images/chamber-one-placeholder.jpg"
  },
  {
    name: "Chamber Two",
    size: "800 sq ft",
    description:
      "Our flagship model offers flexible living for families or shared housing.",
    features: [
      "Two full bedrooms",
      "Spacious living area",
      "Full kitchen & bath",
      "Wind-rated up to 200mph",
      "Built for rapid deployment and lasting durability"
    ],
    image: "/images/chamber-two-placeholder.jpg"
  },
  {
    name: "Chamber Custom",
    size: "Varies",
    description:
      "Infinite possibilities, one strong foundation. From healthcare clinics to retail spaces or multigenerational living solutions.",
    features: [
      "Choose from Chamber Flex or build from scratch",
      "Design support available",
      "Bulk/developer orders welcome"
    ],
    image: "/images/chamber-custom-placeholder.jpg"
  }
];

export default function ChamberModelsPage() {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Models – Built to Fit Your Life</h1>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Every Chamber unit is precision-engineered to withstand 200mph winds and crafted to meet national building, electrical, and plumbing codes. Whether you're starting with a studio or scaling to a fully custom space, your Chamber home adapts to your lifestyle.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {models.map((model, index) => (
          <motion.div
            key={model.name}
            className="border rounded-2xl overflow-hidden shadow-md bg-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <img
              src={model.image}
              alt={model.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-1">{model.name}</h2>
              <p className="text-gray-500 text-sm mb-3">{model.size}</p>
              <p className="text-gray-700 mb-4">{model.description}</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                {model.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">Get a Quote</button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Compare Table */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-6">Compare Models</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-xl text-sm text-left">
            <thead>
              <tr>
                <th className="border px-4 py-2">Model</th>
                <th className="border px-4 py-2">Size</th>
                <th className="border px-4 py-2">Bedrooms</th>
                <th className="border px-4 py-2">Key Features</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Chamber Studio</td>
                <td className="border px-4 py-2">300–400 sq ft</td>
                <td className="border px-4 py-2">Open-plan</td>
                <td className="border px-4 py-2">Compact, Efficient, Modular</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Chamber One</td>
                <td className="border px-4 py-2">450–600 sq ft</td>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">Smart-ready, Climate optimized</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Chamber Two</td>
                <td className="border px-4 py-2">800 sq ft</td>
                <td className="border px-4 py-2">2</td>
                <td className="border px-4 py-2">Wind-resistant, Spacious</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Chamber Custom</td>
                <td className="border px-4 py-2">Varies</td>
                <td className="border px-4 py-2">Custom</td>
                <td className="border px-4 py-2">Bespoke, Flexible layout</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}