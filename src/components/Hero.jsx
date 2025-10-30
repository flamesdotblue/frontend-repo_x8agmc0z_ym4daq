import Spline from "@splinetool/react-spline";
import { Rocket, Shield, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[86vh] overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Y7DK6OtMHusdC345/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        {/* Dark neon glaze and vignette that keeps scene interactive */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(107,33,168,0.18),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      </div>

      {/* Copy and CTAs */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-28">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-white/5 px-3 py-1 text-xs text-violet-200 shadow-sm backdrop-blur">
              <Shield className="h-3.5 w-3.5 text-emerald-300" /> Buyer & Seller Protection
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
              Next‑gen C2C marketplace with neon‑smooth vibes
            </h1>
            <p className="mt-4 text-violet-200/80 text-base sm:text-lg">
              List rare finds, reach gamers and creators worldwide, and trade securely. Designed for speed, trust, and modern taste.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#featured"
                className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-2.5 text-white shadow-[0_0_0_0_rgba(0,0,0,0)] hover:bg-violet-500 focus:ring-2 focus:ring-violet-400/40 transition-colors"
              >
                <Rocket className="h-4 w-4" /> Start selling
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-violet-100 hover:bg-white/10"
              >
                Learn more
              </a>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm text-violet-200/80">
              <Star className="h-4 w-4 text-amber-400" /> Trusted by thousands of community sellers
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
