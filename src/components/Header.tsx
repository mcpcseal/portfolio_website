export default function Header() {
  return (
    <header id="header" className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-lg font-semibold tracking-tight text-gray-900">
          Junho Kim
        </span>
        <nav className="flex gap-8 text-sm text-gray-500">
          <a href="#tracks" className="hover:text-gray-900 transition-colors">
            Works
          </a>
          <a href="#projects" className="hover:text-gray-900 transition-colors">
            Credits
          </a>
        </nav>
      </div>
    </header>
  );
}
