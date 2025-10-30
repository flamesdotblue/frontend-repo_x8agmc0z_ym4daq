export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-slate-600">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-400" />
            <span className="font-semibold text-slate-900">Circa</span>
          </div>
          <p className="mt-3 max-w-sm">A minimalist marketplace for community-to-community commerce. Buy and sell verified goods with confidence.</p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-medium text-slate-900">Marketplace</h4>
            <ul className="mt-3 space-y-2">
              <li><a className="hover:text-slate-900" href="#">Categories</a></li>
              <li><a className="hover:text-slate-900" href="#">Top sellers</a></li>
              <li><a className="hover:text-slate-900" href="#">New arrivals</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-slate-900">Support</h4>
            <ul className="mt-3 space-y-2">
              <li><a className="hover:text-slate-900" href="#">Help center</a></li>
              <li><a className="hover:text-slate-900" href="#">Safety</a></li>
              <li><a className="hover:text-slate-900" href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="md:text-right">
          <p>&copy; {new Date().getFullYear()} Circa, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
