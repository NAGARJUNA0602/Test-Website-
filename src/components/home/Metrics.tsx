import { motion, useReducedMotion } from "framer-motion";

const metrics = [
  { label: "Years of Excellence", value: "10+", color: "from-blue-500 to-indigo-600" },
  { label: "Technology Professionals", value: "500+", color: "from-indigo-500 to-purple-600" },
  { label: "Enterprise Engagements", value: "100+", color: "from-purple-500 to-pink-600" },
  { label: "Technology Domains", value: "20+", color: "from-pink-500 to-rose-600" },
  { label: "Client Satisfaction", value: "95%", color: "from-rose-500 to-orange-600" },
];

export function Metrics() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section 
      className="py-6 bg-[var(--bg-main)] border-y border-[var(--border-color)] relative overflow-hidden group"
      aria-labelledby="metrics-heading"
    >
      <h2 id="metrics-heading" className="sr-only">Key Performance Metrics</h2>
      {/* Background Refined Texture - pointer-events-none and will-change for performance */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] will-change-transform" aria-hidden="true" />
      
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" aria-hidden="true" />
      
      <div className="w-full px-6 md:px-12 relative z-10 max-w-7xl mx-auto">
        <dl className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ 
                duration: 0.6, 
                delay: shouldReduceMotion ? 0 : idx * 0.05, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="relative group/item will-change-[opacity,transform] rounded-lg transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-2">
                  <motion.dt 
                    initial={shouldReduceMotion ? { scale: 1 } : { scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: shouldReduceMotion ? 0 : idx * 0.05 + 0.1 
                    }}
                    className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tighter text-[var(--text-main)] block leading-none"
                  >
                    {metric.value}
                  </motion.dt>
                  
                  {/* Subtle underline accent */}
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '40%' }}
                    transition={{ 
                      duration: 0.8, 
                      delay: shouldReduceMotion ? 0 : idx * 0.05 + 0.3 
                    }}
                    className={`h-1 absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-gradient-to-r ${metric.color} rounded-full opacity-60`}
                    aria-hidden="true"
                  />
                </div>
                
                <dd className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--text-main)] opacity-60 mt-3 max-w-[120px] leading-tight">
                  {metric.label}
                </dd>
              </div>
            </motion.div>
          ))}
        </dl>
      </div>
      
      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-500/10 to-transparent" />
    </section>
  );
}
