import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/logo-horizontal.png.asset.json";
import { Linkedin, Twitter, Facebook, Github, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "IT Staffing", href: "/solutions" },
    { name: "Technology Consulting", href: "/consulting" },
    { name: "Managed Services", href: "/services" },
    { name: "Digital Transformation", href: "/consulting" },
  ],
  expertise: [
    { name: "SAP", href: "/expertise" },
    { name: "Oracle", href: "/expertise" },
    { name: "Cloud & DevOps", href: "/expertise" },
    { name: "AI & Data", href: "/expertise" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[var(--bg-main)] pt-24 pb-12 border-t border-[var(--border-color)]">
      <div className="w-full max-w-[100vw] px-6 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-8 group relative inline-block">
              <div className="absolute -inset-3 bg-brand-500/5 blur-2xl rounded-full opacity-30 group-hover:opacity-100 transition-opacity duration-500 block" />
              <img 
                src={logoAsset.url} 
                alt="CLABSE Logo" 
                className="h-10 w-auto object-contain transition-all duration-500 group-hover:scale-105 logo-premium-glow dark:invert" 
              />
            </Link>
            <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8 max-w-sm">
              Enterprise Talent. Technology. Transformation. Empowering global organizations with strategic workforce and technical excellence.
            </p>

            <div className="flex gap-4">
              {[Linkedin, Twitter, Facebook, Github].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 rounded-xl bg-brand-500/5 border border-brand-500/10 flex items-center justify-center text-[var(--text-muted)] hover:text-white hover:bg-brand-500 hover:border-brand-500 transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[var(--text-main)] font-bold mb-8 uppercase tracking-widest text-xs">Solutions</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-[var(--text-muted)] hover:text-brand-500 transition-colors">

                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[var(--text-main)] font-bold mb-8 uppercase tracking-widest text-xs">Expertise</h4>
            <ul className="space-y-4">
              {footerLinks.expertise.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-[var(--text-muted)] hover:text-brand-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[var(--text-main)] font-bold mb-8 uppercase tracking-widest text-xs">Contact</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="text-brand-500 shrink-0" size={20} />
                <span className="text-[var(--text-muted)] text-sm leading-relaxed">
                  9700 Richmond Ave, Suite 333, Houston, TX 77042
                </span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-brand-500 shrink-0" size={20} />
                <span className="text-[var(--text-muted)] text-sm">+1-832-432-8877</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-brand-500 shrink-0" size={20} />
                <span className="text-[var(--text-muted)] text-sm">contact@clabse.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-[var(--border-color)] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[var(--text-muted)]/50 text-sm">
            © {new Date().getFullYear()} CLABSE INDIA PRIVATE LIMITED. All rights reserved.

          </p>
          <div className="flex gap-8">
            {footerLinks.legal.map((link) => (
              <Link key={link.name} to={link.href} className="text-[var(--text-muted)]/50 hover:text-[var(--text-main)] text-sm">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
