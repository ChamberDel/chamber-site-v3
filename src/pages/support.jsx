import React from "react";
import Resources from "../components/Resources";
import SupportForm from "../components/SupportForm"; //

const Support = () => {
  return (
    <main className="pt-[120px] p-8 max-w-6xl mx-auto space-y-12">
      <h1 className="text-4xl font-bold text-gray-900 text-center">Support</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto">
        We're here to help. Browse FAQs or reach out directly through the form below.
      </p>

      <SupportForm />

      <section className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Explore More Resources
        </h2>
        <Resources />
      </section>
    </main>
  );
};

export default Support;
