import SoftCTA from '../components/SoftCTA'; 

export default function Home() {
  return (
    <main className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Chamber Modular</h1>
      <p className="text-lg mb-12">Modular Homes Designed for Resilience and Style</p>

      {/* Insert the Soft CTA here */}
      <SoftCTA />
    </main>
  );
}