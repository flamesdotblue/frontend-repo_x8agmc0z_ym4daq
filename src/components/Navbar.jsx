export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-slate-200">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded bg-gradient-to-br from-fuchsia-500 to-indigo-500" />
          <span className="text-lg font-semibold tracking-tight">SellRaze</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#product" className="hover:text-white transition-colors">Product</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#resources" className="hover:text-white transition-colors">Resources</a>
          <a href="#mobile" className="hover:text-white transition-colors">Mobile</a>
        </nav>

        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 rounded-md text-sm text-slate-200 hover:text-white hover:bg-white/5 transition-colors">
            Sign in
          </button>
          <button className="px-3 py-1.5 rounded-md text-sm font-medium text-white bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 shadow-[0_0_20px_rgba(168,85,247,0.35)] hover:shadow-[0_0_30px_rgba(168,85,247,0.55)] transition-shadow">
            Get SellRaze free
          </button>
        </div>
      </div>
    </header>
  );
}
