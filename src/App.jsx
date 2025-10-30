import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedGrid from "./components/FeaturedGrid";
import Footer from "./components/Footer";
import { Shield, Truck, BadgeCheck } from "lucide-react";

function CategoryMarquee() {
  const cats = [
    "Gaming Gear",
    "Collectibles",
    "Audio",
    "Creator Tools",
    "Streetwear",
    "Home Office",
    "PC Parts",
    "Photography",
    "Sneakers",
    "Vintage Tech",
  ];
  return (
    <section aria-label="Trending categories" className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none]" style={{ WebkitOverflowScrolling: "touch" }}>
          <div className="flex gap-3 min-w-max py-2" style={{ scrollSnapType: "x proximity" }}>
            {cats.concat(cats).map((c, i) => (
              <a
                key={i}
                href="#featured"
                className="shrink-0 scroll-ml-4 scroll-mr-4 scroll-snap-align-start rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-violet-100 hover:bg-white/[0.08] backdrop-blur"
              >
                {c}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsStrip() {
  const stats = [
    { k: "1.2M+", v: "Items discovered" },
    { k: "98%", v: "5★ rated sellers" },
    { k: "24h", v: "Avg. time to sell" },
    { k: "$0", v: "Listing fee" },
  ];
  return (
    <section aria-label="Key stats" className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-semibold text-white">{s.k}</div>
              <div className="mt-1 text-sm text-violet-200/80">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustBadges() {
  const items = [
    {
      icon: <Shield className="h-5 w-5 text-emerald-300" />,
      title: "Protected checkout",
      desc: "Funds are held until delivery is confirmed.",
    },
    {
      icon: <Truck className="h-5 w-5 text-violet-300" />,
      title: "Integrated shipping",
      desc: "Print labels and track parcels in one place.",
    },
    {
      icon: <BadgeCheck className="h-5 w-5 text-fuchsia-300" />,
      title: "Verified sellers",
      desc: "Reputation and reviews you can rely on.",
    },
  ];
  return (
    <section aria-label="Why choose us" className="pt-4 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                {it.icon}
                <h3 className="font-medium text-white">{it.title}</h3>
              </div>
              <p className="mt-2 text-sm text-violet-200/80">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
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
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#06040b] text-white">
      {/* Subtle grid + glow background */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.08] [background-image:radial-gradient(1px_1px_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-fuchsia-500/10 via-transparent to-indigo-500/10" />

      <Navbar />
      <main>
        <Hero />
        <CategoryMarquee />
        <StatsStrip />
        <FeaturedGrid />
        <TrustBadges />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}

export default App;
