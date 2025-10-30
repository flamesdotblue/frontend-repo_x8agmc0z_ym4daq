import Spline from "@splinetool/react-spline";
import { Rocket, Shield, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[72vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        {/* Soft gradient edges to improve text contrast without blocking interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/10 to-white/90" />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs text-slate-600 shadow-sm backdrop-blur">
              <Shield className="h-3.5 w-3.5 text-emerald-600" /> Buyer & Seller Protection
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-900">
              A modern C2C marketplace for premium second‑hand goods
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              List items in minutes, reach buyers worldwide, and get paid fast. Minimal, secure, and built for the next generation of e‑commerce.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#featured"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-white shadow-sm hover:bg-indigo-500 transition-colors"
              >
                <Rocket className="h-4 w-4" /> Start selling
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-slate-700 hover:bg-slate-50"
              >
                Learn more
              </a>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm text-slate-600">
              <Star className="h-4 w-4 text-amber-500" /> Trusted by thousands of community sellers
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
