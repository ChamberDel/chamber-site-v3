import React from "react";

const ResourceCard = ({ title, description, link, type }) => {
  return (
    <div className="border rounded-xl p-4 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        {type === "video" ? "Watch Video" : "View Resource"}
      </a>
    </div>
  );
};

const Resources = () => {
  const resources = [
    {
      title: "How Modular Homes Are Built (3D Walkthrough)",
      description: "A full 3D animated walkthrough showing the stages of modular home construction.",
      link: "https://www.youtube.com/watch?v=U1LtVnG-B-I",
      type: "video",
    },
    {
      title: "Why Modular Homes Are the Future",
      description: "Real-world video explanation and case study on why modular homes are cost-efficient and durable.",
      link: "https://www.youtube.com/watch?v=Z-Ly9sV4hJc",
      type: "video",
    },
    {
      title: "Container Home Living - Real Family Tour",
      description: "Tour a real family's custom-built container home for inspiration.",
      link: "https://www.youtube.com/watch?v=uwZcUAV8pUQ",
      type: "video",
    },
    {
      title: "PDF: Site Prep Guide for Modular Homes",
      description: "Downloadable checklist and step-by-step guide for preparing your land for a modular build.",
      link: "https://example.com/site-prep-guide.pdf",
      type: "pdf",
    },
    {
      title: "Animated Explainer: The Future of Green Housing",
      description: "A short animation on how modular housing supports sustainability goals.",
      link: "https://www.youtube.com/watch?v=JkqE1gZPvRY",
      type: "video",
    },
  ];

  return (
    <main className="pt-[120px] p-8 max-w-6xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold text-center text-gray-900">Helpful Resources</h1>
      <p className="text-center text-gray-600 max-w-xl mx-auto">
        Browse our collection of guides, walkthroughs, and videos to learn more about the modular building process.
      </p>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((res, index) => (
          <ResourceCard key={index} {...res} />
        ))}
      </section>
    </main>
  );
};

export default Resources;
