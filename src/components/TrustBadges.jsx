import { ShieldCheck, Truck, BadgeCheck } from "lucide-react";

const badges = [
  {
    title: "Protected checkout",
    desc: "Encrypted payments and dispute support.",
    icon: ShieldCheck,
  },
  {
    title: "Integrated shipping",
    desc: "USPS labels and pickup scheduling.",
    icon: Truck,
  },
  {
    title: "Verified sellers",
    desc: "Profiles, ratings, and verifications.",
    icon: BadgeCheck,
  },
];

export default function TrustBadges() {
  return (
    <section className="bg-[#06040b] pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {badges.map((b, i) => (
              <div key={i} className="flex items-start gap-4 p-4">
                <div className="mt-1 h-10 w-10 shrink-0 rounded-lg bg-gradient-to-br from-fuchsia-500 to-indigo-500 flex items-center justify-center">
                  <b.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium">{b.title}</h4>
                  <p className="text-sm text-slate-400">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
