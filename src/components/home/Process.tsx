import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useRef } from "react";

const steps = [
  { 
    title: "Requirement Discovery", 
    desc: "Understanding strategic goals and technical requirements.",
    icon: "https://images.unsplash.com/photo-1454165833767-0e94ef34ad34?w=800&q=80"
  },
  { 
    title: "Technology Assessment", 
    desc: "Evaluating platform stack and architecture needs.",
    icon: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
  },
  { 
    title: "Talent Mapping", 
    desc: "Identifying elite technical profiles from our global network.",
    icon: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
  },
  { 
    title: "Technical Validation", 
    desc: "Rigorous vetting by domain-expert consultants.",
    icon: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
  },
  { 
    title: "Deployment", 
    desc: "Seamless integration with enterprise governance.",
    icon: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  { 
    title: "Governance", 
    desc: "Continuous monitoring and outcome delivery.",
    icon: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80"
  }
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-20 lg:py-24 bg-[var(--bg-main)] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[40%] h-[60%] bg-brand-500/5 blur-[120px] rounded-full pointer-events-none" />


      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left Side: Content */}
          <div>
            <div className="max-w-xl mb-24">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-500 font-semibold text-[10px] uppercase tracking-widest mb-6"
              >
                Our Strategy
              </motion.div>
              <h2 className="text-3xl lg:text-5xl font-heading font-bold text-[var(--text-main)] mb-8">
                Our <span className="text-brand-500">Methodology</span> for Delivery Excellence.
              </h2>

            </div>

            <div className="relative pl-12 lg:pl-16">
              {/* Animated Timeline Bar */}
              <div className="absolute left-6 top-4 bottom-4 w-[2px] bg-[var(--border-color)]">
                <motion.div 
                  style={{ scaleY, originY: 0 }}
                  className="w-full h-full bg-brand-500 shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                />
              </div>

              <div className="grid grid-cols-1 gap-16 relative z-10">
                {steps.map((step, idx) => (
                  <StepItem key={step.title} step={step} index={idx} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Visual Flow Effect */}
          <div className="hidden lg:block sticky top-32 h-[600px] rounded-[3rem] overflow-hidden border border-[var(--border-color)] bg-[var(--card-bg)] group">
             <div className="absolute inset-0 z-10 bg-gradient-to-t from-[var(--bg-main)] via-transparent to-[var(--bg-main)]/40" />

             
             <AnimatePresence mode="wait">
                <motion.div
                  key="visual-effect"
                  className="w-full h-full relative"
                >
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 2, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full"
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80" 
                      alt="Methodology Visualization" 
                      className="w-full h-full object-cover mix-blend-luminosity brightness-50 grayscale opacity-40"
                    />
                  </motion.div>
                  
                  {/* Floating particles/data flow effect */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-64 h-64">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            rotate: 360,
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            rotate: { duration: 10 + i * 5, repeat: Infinity, ease: "linear" },
                            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                          }}
                          className="absolute inset-0 border border-brand-500/20 rounded-full"
                          style={{ margin: `${i * 20}px` }}
                        />
                      ))}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-brand-500 rounded-full blur-3xl opacity-20 animate-pulse" />
                        <div className="w-4 h-4 bg-brand-500 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.8)]" />
                      </div>
                    </div>
                  </div>
                </motion.div>
             </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepItem({ step, index }: { step: typeof steps[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-start gap-8 group"
    >
      {/* Number Circle */}
      <div className="absolute left-[-40px] w-8 h-8 rounded-full bg-[var(--bg-main)] border-2 border-[var(--border-color)] flex items-center justify-center text-xs font-bold text-[var(--text-muted)] group-hover:border-brand-500 group-hover:text-brand-500 transition-colors duration-500 z-20">
        {index + 1}

      </div>
      
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-[var(--text-main)] mb-3 group-hover:text-brand-500 transition-colors duration-300">
          {step.title}

        </h3>
        <p className="text-[var(--text-muted)] text-lg leading-relaxed max-w-xl">
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}
