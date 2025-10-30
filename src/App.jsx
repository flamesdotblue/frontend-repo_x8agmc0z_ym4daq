import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedGrid from "./components/FeaturedGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <FeaturedGrid />
        <section id="how" className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">How it works</h2>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-sm uppercase tracking-wide text-slate-500">Step 1</div>
                  <h3 className="mt-1 font-medium">List your item</h3>
                  <p className="mt-2 text-sm text-slate-600">Snap a few photos, set a fair price, and publish instantly.</p>
                </div>
                <div>
                  <div className="text-sm uppercase tracking-wide text-slate-500">Step 2</div>
                  <h3 className="mt-1 font-medium">Get matched with buyers</h3>
                  <p className="mt-2 text-sm text-slate-600">Our smart search connects you with people looking for exactly what you sell.</p>
                </div>
                <div>
                  <div className="text-sm uppercase tracking-wide text-slate-500">Step 3</div>
                  <h3 className="mt-1 font-medium">Ship and get paid</h3>
                  <p className="mt-2 text-sm text-slate-600">Print labels, track delivery, and receive funds securely once delivered.</p>
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
