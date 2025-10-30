import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedGrid from "./components/FeaturedGrid";
import TrustBadges from "./components/TrustBadges";

export default function App() {
  return (
    <div className="min-h-screen bg-[#06040b] text-slate-200">
      <Navbar />
      {/* Pass a Spline scene URL below to enable the 3D hero. Leave empty to use gradient. */}
      <Hero sceneUrl="" />
      <TrustBadges />
      <FeaturedGrid />

      <footer className="bg-[#06040b] py-12 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-gradient-to-br from-fuchsia-500 to-indigo-500" />
            <span className="text-sm text-slate-400">© SellRaze {new Date().getFullYear()}</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href="#terms" className="hover:text-white">Terms</a>
            <a href="#privacy" className="hover:text-white">Privacy</a>
            <a href="#community" className="hover:text-white">Community</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
