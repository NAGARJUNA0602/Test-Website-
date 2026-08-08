import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "@tanstack/react-router";
import { Users, Briefcase, Brain, Cloud, ArrowRight, Loader2 } from "lucide-react";

const services = [
  {
    title: "IT Staffing & Workforce Solutions",
    description: "Scalable talent across contract, contract-to-hire, and permanent models.",
    icon: Users,
    href: "/solutions",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
  },
  {
    title: "Technology Consulting",
    description: "Design, implement, and improve technology capabilities that power business.",
    icon: Briefcase,
    href: "/consulting",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
  },
  {
    title: "AI, Data & Cloud Services",
    description: "Move beyond proof-of-concept to enterprise-scale AI and cloud adoption.",
    icon: Brain,
    href: "/expertise",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
  },
  {
    title: "Managed Services & Project Delivery",
    description: "Defined deliverables, milestone accountability, end-to-end ownership.",
    icon: Cloud,
    href: "/services",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  }
];

export function HomeServices() {
  const navigate = useNavigate();
  const [navigatingTo, setNavigatingTo] = useState<string | null>(null);

  const handleNavigation = async (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (navigatingTo) return;
    
    setNavigatingTo(href);
    try {
      await navigate({ to: href });
    } finally {
      // Small timeout to ensure the user sees the loading state before transition if it's very fast
      setTimeout(() => setNavigatingTo(null), 500);
    }
  };

  return (
    <section className="py-12 md:py-16 overflow-hidden relative min-h-[600px] flex items-center">
      {/* Full-bleed background image with premium dark overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80" 
          alt="Enterprise Background"
          className="w-full h-full object-cover grayscale opacity-10 dark:opacity-40 brightness-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-main)] via-[var(--bg-main)]/70 dark:via-[var(--bg-main)]/40 to-[var(--bg-main)]" />
        <div className="absolute inset-0 bg-brand-500/5 dark:bg-brand-500/10 mix-blend-overlay" />
      </div>

      <div className="w-full max-w-[100vw] px-6 lg:px-12 xl:px-20 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-brand-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-6"
          >
            What We Do
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl lg:text-4xl font-heading font-bold text-[var(--text-main)] mb-8 tracking-tight"
          >
            End-to-End Technology Talent <br className="hidden lg:block" /> & Consulting
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[var(--text-muted)] text-lg lg:text-xl font-light"
          >
            From staffing to strategy to managed delivery — we cover the full spectrum.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative h-[380px] lg:h-[420px] overflow-hidden rounded-[2.5rem] bg-[var(--card-bg)] border border-[var(--border-color)] backdrop-blur-sm p-8 flex flex-col justify-end transition-all duration-500 shadow-xl"
            >
              {/* Card Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover opacity-20 grayscale group-hover:scale-110 group-hover:opacity-40 group-hover:grayscale-0 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-[var(--bg-main)]/60 to-transparent" />
              </div>
              <div className="mb-auto">
                <div className="w-14 h-14 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-white group-hover:border-brand-500 transition-all duration-500">
                  <service.icon size={28} />
                </div>
              </div>
              
              <div className="relative z-10 w-full">
                <h3 className="text-xl lg:text-2xl font-heading font-bold text-[var(--text-main)] mb-4 leading-tight group-hover:text-brand-500 transition-colors drop-shadow-sm">
                  {service.title}
                </h3>
                <p className="text-[var(--text-main)] dark:text-white/90 text-sm lg:text-base mb-6 leading-relaxed font-medium transition-all duration-300">
                  {service.description}
                </p>
                <div className="flex gap-2 w-full mt-2 transition-all duration-300 delay-75">
                  <button 
                    onClick={(e) => handleNavigation(e, service.href)}
                    disabled={navigatingTo !== null}
                    className="flex-1 py-2 px-2 rounded-lg bg-brand-500 text-white font-bold text-[9px] sm:text-[10px] uppercase tracking-wider text-center hover:bg-brand-600 active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 dark:focus:ring-offset-navy-950 transition-all whitespace-nowrap min-w-0 shadow-lg shadow-brand-500/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-1"
                  >
                    {navigatingTo === service.href ? (
                      <>
                        <Loader2 size={12} className="animate-spin" />
                        <span>Loading...</span>
                      </>
                    ) : (
                      "Learn More"
                    )}
                  </button>
                  <button 
                    onClick={(e) => handleNavigation(e, "/enquiry")}
                    disabled={navigatingTo !== null}
                    className="flex-1 py-2 px-2 rounded-lg bg-[var(--bg-main)]/50 border border-[var(--border-color)] text-[var(--text-main)] font-bold text-[9px] sm:text-[10px] uppercase tracking-wider text-center hover:bg-brand-500/10 active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:ring-offset-2 dark:focus:ring-offset-navy-950 transition-all whitespace-nowrap min-w-0 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-1"
                  >
                    {navigatingTo === "/enquiry" ? (
                      <>
                        <Loader2 size={12} className="animate-spin" />
                        <span>Wait...</span>
                      </>
                    ) : (
                      "Consultation"
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-center"
        >
          <Link 
            to="/services"
            className="inline-flex items-center gap-2 text-brand-500 font-bold text-sm uppercase tracking-widest hover:text-brand-400 transition-colors"
          >
            Explore All Services
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
