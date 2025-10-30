import { Star, Truck, Shield } from "lucide-react";

const demoItems = [
  {
    id: 1,
    title: "Minimalist Leather Wallet",
    price: 42,
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1200&auto=format&fit=crop",
    badge: "Like New",
  },
  {
    id: 2,
    title: "Wireless Noise‑Canceling Headphones",
    price: 180,
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1518443895914-6d41a0b4cd50?q=80&w=1200&auto=format&fit=crop",
    badge: "Verified",
  },
  {
    id: 3,
    title: "Ergonomic Office Chair",
    price: 260,
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1582582621959-48d9a9a3d6c1?q=80&w=1200&auto=format&fit=crop",
    badge: "Great Deal",
  },
  {
    id: 4,
    title: "Mechanical Keyboard (65%)",
    price: 120,
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
    badge: "Hot",
  },
];

function ItemCard({ item }) {
  return (
    <a href="#" className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] shadow-sm hover:shadow-lg hover:shadow-violet-500/10 transition-shadow backdrop-blur">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.img}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-black/60 backdrop-blur px-2 py-1 text-xs text-violet-100 border border-white/10 shadow">
          {item.badge}
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-medium text-white line-clamp-2">{item.title}</h3>
          <span className="shrink-0 rounded-lg bg-violet-600/20 px-2 py-1 text-sm font-semibold text-violet-200">${item.price}</span>
        </div>
        <div className="mt-2 flex items-center gap-1 text-amber-400">
          <Star className="h-4 w-4 fill-current" />
          <span className="text-sm text-violet-200/80">{item.rating}</span>
        </div>
      </div>
    </a>
  );
}

export default function FeaturedGrid() {
  return (
    <section id="featured" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Featured listings</h2>
            <p className="mt-1 text-violet-200/80">Curated finds from trusted community sellers</p>
          </div>
          <a href="#" className="text-violet-300 hover:text-white">View all</a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {demoItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-emerald-300" />
              <h3 className="font-medium text-white">Secure payments</h3>
            </div>
            <p className="mt-2 text-sm text-violet-200/80">Escrow-style checkout keeps transactions safe for buyers and sellers.</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
            <div className="flex items-center gap-3">
              <Truck className="h-5 w-5 text-violet-300" />
              <h3 className="font-medium text-white">Integrated shipping</h3>
            </div>
            <p className="mt-2 text-sm text-violet-200/80">Print labels in one click and track parcels right from your dashboard.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
