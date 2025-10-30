export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-violet-200/80">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-fuchsia-500 via-violet-600 to-indigo-500" />
            <span className="font-semibold text-white">Circa</span>
          </div>
          <p className="mt-3 max-w-sm">A minimalist marketplace for community-to-community commerce. Buy and sell verified goods with confidence.</p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-medium text-white">Marketplace</h4>
            <ul className="mt-3 space-y-2">
              <li><a className="hover:text-white" href="#">Categories</a></li>
              <li><a className="hover:text-white" href="#">Top sellers</a></li>
              <li><a className="hover:text-white" href="#">New arrivals</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-white">Support</h4>
            <ul className="mt-3 space-y-2">
              <li><a className="hover:text-white" href="#">Help center</a></li>
              <li><a className="hover:text-white" href="#">Safety</a></li>
              <li><a className="hover:text-white" href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="md:text-right">
          <p className="text-violet-200/70">&copy; {new Date().getFullYear()} Circa, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
