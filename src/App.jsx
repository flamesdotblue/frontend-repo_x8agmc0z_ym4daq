import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedGrid from "./components/FeaturedGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#06040b] text-white">
      {/* Subtle grid + glow background */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.08] [background-image:radial-gradient(1px_1px_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-fuchsia-500/10 via-transparent to-indigo-500/10" />

      <Navbar />
      <main>
        <Hero />
        <FeaturedGrid />

        {/* How it works */}
        <section id="how" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">How it works</h2>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-violet-200/90">
                <div>
                  <div className="text-sm uppercase tracking-wide text-violet-300/70">Step 1</div>
                  <h3 className="mt-1 font-medium text-white">List your item</h3>
                  <p className="mt-2 text-sm">Snap a few photos, set a fair price, and publish instantly.</p>
                </div>
                <div>
                  <div className="text-sm uppercase tracking-wide text-violet-300/70">Step 2</div>
                  <h3 className="mt-1 font-medium text-white">Get matched with buyers</h3>
                  <p className="mt-2 text-sm">Our smart search connects you with people looking for exactly what you sell.</p>
                </div>
                <div>
                  <div className="text-sm uppercase tracking-wide text-violet-300/70">Step 3</div>
                  <h3 className="mt-1 font-medium text-white">Ship and get paid</h3>
                  <p className="mt-2 text-sm">Print labels, track delivery, and receive funds securely once delivered.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
