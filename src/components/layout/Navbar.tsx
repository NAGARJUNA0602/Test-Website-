import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import logoAsset from "@/assets/logo-horizontal.png.asset.json";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { 
    name: "Services", 
    href: "/services",
    submenu: [
      { name: "IT Staffing & Workforce", href: "/solutions" },
      { name: "Technology Consulting", href: "/consulting" },
      { name: "AI, Data & Cloud", href: "/expertise" },
      { name: "Managed Services", href: "/services" },
    ]
  },
  { name: "Industries", href: "/industries" },
  { name: "Why CLABSE", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-4 px-6">
      <div 
        className={cn(
          "max-w-[95%] xl:max-w-[98%] mx-auto px-8 h-16 rounded-full flex items-center justify-between transition-all duration-500",
          isScrolled 
            ? "bg-[var(--card-bg)] backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-[var(--border-color)]" 
            : "bg-[var(--card-bg)] backdrop-blur-sm border border-[var(--border-color)]"
        )}
      >
        <Link to="/" className="flex items-center gap-2 group relative">
          <div className="absolute -inset-2 bg-brand-500/5 blur-xl rounded-full opacity-40 group-hover:opacity-100 transition-opacity duration-500 block" />
          <img 
            src={logoAsset.url} 
            alt="CLABSE Logo" 
            className="h-10 w-auto object-contain transition-all duration-500 group-hover:scale-105 group-hover:brightness-110 logo-premium-glow dark:invert" 
          />
        </Link>


        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative"
              onMouseEnter={() => setActiveSubmenu(link.name)}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <Link
                to={link.href}
                className={cn(
                  "px-4 py-2 text-[13px] font-semibold text-[var(--text-main)]/80 hover:text-[var(--text-main)] transition-all flex items-center gap-1 rounded-full",
                  activeSubmenu === link.name && link.submenu && "bg-brand-500/10 text-[var(--text-main)]"
                )}
                activeProps={{ className: "bg-brand-500/10 text-[var(--text-main)] shadow-inner" }}
              >
                {link.name}
                {link.submenu && <ChevronDown size={14} className={cn("transition-transform duration-300", activeSubmenu === link.name && "rotate-180")} />}
              </Link>


              {/* Submenu Dropdown */}
              <AnimatePresence>
                {link.submenu && activeSubmenu === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 p-2 bg-[var(--bg-main)] border border-[var(--border-color)] rounded-2xl shadow-2xl backdrop-blur-xl"
                  >
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        className="block w-full px-4 py-2.5 text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-brand-500/5 rounded-xl transition-colors"
                      >
                        {sub.name}
                      </Link>

                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <Link
          to="/enquiry"
          className="hidden sm:block px-6 py-2 bg-brand-500 text-white text-[13px] font-bold rounded-full hover:bg-brand-600 transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
        >
          Request Talent
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-[var(--text-main)]/80 hover:text-[var(--text-main)]"

          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 mt-4 bg-[var(--bg-main)] border border-[var(--border-color)] rounded-3xl p-6 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.href}
                    className="flex items-center justify-between py-3 px-4 text-base font-semibold text-[var(--text-main)]/80 hover:text-brand-500 transition-colors"
                    onClick={() => !link.submenu && setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>

                  {link.submenu && (
                    <div className="ml-4 flex flex-col gap-1 border-l border-[var(--border-color)] pl-4 mb-2">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          className="py-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-main)]"

                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/enquiry"
                className="mt-4 w-full py-4 bg-brand-500 text-white text-center font-bold rounded-2xl shadow-lg shadow-brand-500/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Request Talent
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
