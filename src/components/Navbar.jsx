import { Search, ShoppingCart, User } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [query, setQuery] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Searching:", query);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-fuchsia-500 via-violet-600 to-indigo-500 shadow-[0_0_24px_-6px_rgba(139,92,246,0.8)]" />
          <span className="text-lg font-semibold tracking-tight text-white">Circa — C2C Marketplace</span>
        </div>

        <form onSubmit={onSubmit} className="hidden md:flex items-center gap-2 w-full max-w-xl">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-violet-300/70" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products, brands, or sellers"
              className="w-full pl-10 pr-3 py-2 rounded-lg bg-white/5 border border-white/10 text-violet-50 placeholder:text-violet-300/50 focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500/60"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-violet-600 text-white hover:bg-violet-500 transition-colors"
          >
            Search
          </button>
        </form>

        <nav className="flex items-center gap-4">
          <a href="#" className="hidden sm:inline text-violet-100 hover:text-white">Sell</a>
          <a href="#" className="hidden sm:inline text-violet-100 hover:text-white">Orders</a>
          <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/5 text-violet-50">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Sign in</span>
          </button>
          <button className="relative p-2 rounded-lg border border-white/10 hover:bg-white/5 text-violet-50">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 text-[10px] bg-fuchsia-500 text-white px-1.5 py-0.5 rounded-full">2</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
