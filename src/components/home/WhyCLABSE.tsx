import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Network, TrendingUp } from "lucide-react";

const features = [
  {
    title: "Speed Without Compromise",
    desc: "Rapid talent delivery with rigorous technical validation for your most critical needs.",
    icon: Cpu,
    color: "bg-amber-500",
  },
  {
    title: "Enterprise Tech Expertise",
    desc: "Deep capability across SAP, Oracle, Cloud, Data, and Generative AI platforms.",
    icon: ShieldCheck,
    color: "bg-brand-500",
  },
  {
    title: "Global Delivery Model",
    desc: "India-based delivery centers with enterprise governance and local leadership.",
    icon: Network,
    color: "bg-purple-500",
  },
  {
    title: "Outcomes, Not Just Resources",
    desc: "Consulting-led workforce transformation designed to deliver measurable business impact.",
    icon: TrendingUp,
    color: "bg-emerald-500",
  },
];

export function WhyCLABSE() {
  return (
    <section className="py-12 md:py-16 bg-[var(--card-bg)] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="w-full max-w-[100vw] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12 md:mb-16">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-brand-500/10 text-brand-500 text-sm font-bold tracking-wider uppercase mb-6">
                Why Us
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black text-[var(--text-main)] leading-[0.95] tracking-tight">
                Why Leading Enterprises <br />
                Choose <span className="text-brand-500">CLABSE.</span>
              </h2>
            </motion.div>
          </div>
          <div className="lg:w-1/3 flex justify-end">
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg lg:text-xl text-[var(--text-muted)] leading-relaxed max-w-sm font-medium border-l-2 border-brand-500/30 pl-6 py-2 text-left"
            >
              We bridge the gap between complex technology requirements and the elite talent needed to execute them with precision.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-[var(--bg-main)] border border-[var(--border-color)] p-8 rounded-3xl transition-all duration-500 hover:border-brand-500/30 hover:shadow-2xl hover:shadow-brand-500/5 flex flex-col h-full"
            >
              {/* Card Hover Accent */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className={`w-14 h-14 shrink-0 rounded-2xl ${feature.color} flex items-center justify-center text-white mb-8 relative z-10 shadow-lg shadow-black/10 group-hover:scale-110 transition-transform duration-500 overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
                <feature.icon size={28} className="relative z-10 drop-shadow-md" />
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-xl font-bold mb-4 text-[var(--text-main)] group-hover:text-brand-500 transition-colors leading-tight">
                  {feature.title}
                </h3>
                <p className="text-[var(--text-muted)] leading-relaxed text-base font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                  {feature.desc}
                </p>
                
                <div className="mt-auto pt-8 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  <span className="text-brand-500 font-bold text-sm flex items-center gap-2">
                    Learn More 
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
