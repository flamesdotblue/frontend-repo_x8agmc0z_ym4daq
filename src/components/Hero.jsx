import Spline from "@splinetool/react-spline";
import { Star } from "lucide-react";

export default function Hero({ sceneUrl }) {
  return (
    <section className="relative min-h-[78vh] overflow-hidden bg-[#06040b]">
      {/* 3D scene */}
      {sceneUrl ? (
        <div className="absolute inset-0">
          <Spline scene={sceneUrl} style={{ width: '100%', height: '100%' }} />
        </div>
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(168,85,247,0.18),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.18),transparent_40%)]" />
      )}

      {/* subtle grid + glow overlays (non-interactive to not block Spline) */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="pointer-events-none absolute -inset-x-20 -top-40 h-80 blur-3xl bg-gradient-to-r from-fuchsia-600/25 via-purple-600/20 to-indigo-600/25" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/90 backdrop-blur">
            <Star className="h-3.5 w-3.5 text-yellow-400" />
            <span className="font-medium">4.9</span>
            <span className="text-slate-400">on the App Store</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            The fastest, all-in-one tool for selling secondhand online.
          </h1>
          <p className="mt-5 text-lg text-slate-300">
            Use data‑driven tools to create listings in seconds and track inventory across your favorite marketplaces — all in one place.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#get" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 px-5 py-3 text-sm font-medium text-white shadow-[0_0_25px_rgba(168,85,247,0.45)] hover:shadow-[0_0_35px_rgba(168,85,247,0.65)] transition-shadow">
              Get SellRaze free
            </a>
            <a href="#sales" className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200 hover:bg-white/10 transition-colors">
              Talk to sales
            </a>
          </div>
          <p className="mt-4 text-sm text-slate-400">Join 200,000+ sellers</p>
        </div>
      </div>
    </section>
  );
}
