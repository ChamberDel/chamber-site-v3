import React from 'react';
import { useRouter } from 'next/router';

export default function SoftCTA() {
  const router = useRouter();

  return (
    <section className="bg-white py-12 px-6 text-center shadow-sm rounded-2xl mt-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Still have questions?
      </h2>
      <p className="text-gray-600 mb-6">
        We’re here to help — no pressure, just answers.
      </p>
      <button
        onClick={() => router.push('/contact')}
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-full transition duration-200"
      >
        Contact Us
      </button>
    </section>
  );
}