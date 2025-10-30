import { Rocket, ScanBarcode, Shield, Truck, BarChart3, ListChecks } from "lucide-react";

const features = [
  {
    title: "List in seconds",
    desc: "Go from image, text, or barcode to multi-marketplace listings fast.",
    icon: ScanBarcode,
    accent: "from-fuchsia-500 to-pink-500",
  },
  {
    title: "Smart pricing",
    desc: "Instantly learn item value and monitor your gross inventory.",
    icon: BarChart3,
    accent: "from-indigo-500 to-blue-500",
  },
  {
    title: "Protected checkout",
    desc: "Secure payments and verified sellers for peace of mind.",
    icon: Shield,
    accent: "from-emerald-500 to-teal-500",
  },
  {
    title: "Integrated shipping",
    desc: "Create labels and schedule USPS pickup without leaving.",
    icon: Truck,
    accent: "from-amber-500 to-orange-500",
  },
  {
    title: "Crosslist everywhere",
    desc: "Publish to Facebook, eBay, Depop, Mercari, and more.",
    icon: Rocket,
    accent: "from-purple-500 to-violet-500",
  },
  {
    title: "Manage buyers",
    desc: "Conversations and offers in one organized inbox.",
    icon: ListChecks,
    accent: "from-rose-500 to-fuchsia-500",
  },
];

export default function FeaturedGrid() {
  return (
    <section id="features" className="relative bg-[#06040b] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Mission control for your entire inventory</h2>
          <p className="mt-2 text-slate-400">Crosslist, negotiate, monitor value. All in one place.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="relative rounded-xl border border-white/10 bg-white/5 p-5 transition-transform hover:-translate-y-1 hover:bg-white/7.5">
              <div className={`h-10 w-10 rounded-md bg-gradient-to-br ${f.accent} flex items-center justify-center shadow-[0_0_24px_rgba(255,255,255,0.08)]`}>
                <f.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-white font-medium">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
