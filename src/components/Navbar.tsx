import { ArrowUpRight } from './Icons';

interface NavbarProps {
  onStartProject: () => void;
  onOpenWork: () => void;
  onOpenStudio: () => void;
  onOpenServices: () => void;
  onOpenJournal: () => void;
  onOpenContact: () => void;
  onMobileMenuToggle: () => void;
}

export function Navbar({
  onStartProject,
  onOpenWork,
  onOpenStudio,
  onOpenServices,
  onOpenJournal,
  onOpenContact,
  onMobileMenuToggle,
}: NavbarProps) {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 pointer-events-none">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left: liquid-glass circle with italic 'a' */}
        <button
          type="button"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="liquid-glass h-12 w-12 rounded-full flex items-center justify-center pointer-events-auto cursor-pointer hover:scale-105 transition-transform"
          aria-label="Atelier Home"
        >
          <span className="font-heading italic text-2xl text-white select-none">
            a
          </span>
        </button>

        {/* Center: liquid-glass rounded-full pill containing links + white CTA button */}
        <nav
          className="hidden md:flex liquid-glass rounded-full px-1.5 py-1.5 items-center gap-1 pointer-events-auto"
          aria-label="Primary Navigation"
        >
          <button
            type="button"
            onClick={onOpenWork}
            className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors cursor-pointer"
          >
            Work
          </button>
          <button
            type="button"
            onClick={onOpenStudio}
            className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors cursor-pointer"
          >
            Studio
          </button>
          <button
            type="button"
            onClick={onOpenServices}
            className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors cursor-pointer"
          >
            Services
          </button>
          <button
            type="button"
            onClick={onOpenJournal}
            className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors cursor-pointer"
          >
            Journal
          </button>
          <button
            type="button"
            onClick={onOpenContact}
            className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors cursor-pointer"
          >
            Contact
          </button>

          <button
            type="button"
            onClick={onStartProject}
            className="bg-white text-black font-body text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-1.5 hover:bg-white/90 transition-all cursor-pointer ml-1 shadow-sm"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </nav>

        {/* Right: empty h-12 w-12 spacer div on desktop, mobile menu toggle on mobile */}
        <div className="flex items-center">
          <button
            type="button"
            onClick={onMobileMenuToggle}
            className="md:hidden liquid-glass h-12 w-12 rounded-full flex items-center justify-center pointer-events-auto text-white/90 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="hidden md:block h-12 w-12 pointer-events-none" />
        </div>
      </div>
    </header>
  );
}
