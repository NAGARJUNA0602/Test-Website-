import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Shield, Zap, Globe, Cpu, Layers } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 lg:pt-36 pb-8 lg:pb-10 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-brand-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-brand-600/5 blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
      </div>

      <div className="w-full max-w-[100vw] px-6 lg:px-12 xl:px-20 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-500 font-bold text-[10px] uppercase tracking-[0.25em] mb-6 lg:mb-8 backdrop-blur-sm">
            <Sparkles size={12} className="animate-pulse" />
            Enterprise Technology Excellence
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-extrabold text-[var(--text-main)] mb-6 lg:mb-8 leading-[1.05] tracking-tight">
            End-to-End <br className="hidden lg:block" />
            <span className="text-brand-500 drop-shadow-sm">Technology Talent</span> <br className="hidden lg:block" />
            & <span className="text-brand-500 drop-shadow-sm">Consulting.</span>
          </h1>
          <p className="text-lg lg:text-2xl text-[var(--text-muted)] mb-10 lg:mb-12 max-w-2xl leading-relaxed font-normal opacity-90">
            Empowering organizations with high-impact technology teams and strategic digital modernization through elite engineering talent.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <Link 
              to="/enquiry" 
              className="px-8 py-4 bg-brand-500 text-white rounded-xl font-bold hover:bg-brand-600 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-brand-500/25 active:scale-95"
            >
              Start Your Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-main)] rounded-xl font-bold hover:bg-brand-500/10 transition-all flex items-center justify-center active:scale-95"
            >
              Explore Solutions
            </Link>
          </div>
          
          <div className="mt-16 flex items-center gap-8">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://i.pravatar.cc/150?u=${i}`} 
                  alt="Client" 
                  className="w-12 h-12 rounded-full border-4 border-[var(--bg-main)]"
                />
              ))}
            </div>
            <p className="text-[var(--text-muted)] text-sm font-medium">
              Trusted by 50+ Fortune 500 Enterprises
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative group flex items-center justify-center"
        >
          {/* Optimized Background Glow - using opacity instead of complex blur animations */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-500/10 blur-[100px] rounded-full opacity-40 will-change-opacity animate-pulse-slow" />
          
          {/* Tech/AI Floating PNG-style Element */}
          <div className="relative z-10 w-full max-w-[600px] aspect-square flex items-center justify-center">
            <motion.div 
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative w-full h-full flex items-center justify-center drop-shadow-[0_0_30px_rgba(37,99,235,0.2)] will-change-transform"
            >
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80&fm=webp" 
                srcSet="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80&fm=webp 400w, https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80&fm=webp 800w, https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80&fm=webp 1200w"
                sizes="(max-width: 768px) 100vw, 50vw"
                alt="Technology Intelligence" 
                className="w-full h-full object-contain filter brightness-110 contrast-110"
                loading="eager"
                decoding="async"
              />
              
              {/* Dynamic Tech Particles/Nodes - optimized rotations */}
              <div className="absolute inset-0 border-2 border-dashed border-brand-500/10 rounded-full animate-spin-slow pointer-events-none" />
              <div className="absolute inset-8 border border-dotted border-brand-400/20 rounded-full animate-spin-reverse-slow pointer-events-none" />
              
              {/* Pulsing Core - simplified */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-brand-500 rounded-full blur-sm opacity-60 animate-ping pointer-events-none" />
            </motion.div>
          </div>
          
          
          
          {/* Enhanced Floating cards with better animation */}
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 1, 0]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-12 -right-4 lg:-right-6 p-4 lg:p-6 glass-card bg-[var(--bg-main)]/95 max-w-[160px] lg:max-w-[200px] border-brand-500/30 shadow-[0_20px_50px_rgba(37,99,235,0.2)]"
          >
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-brand-500 rounded-xl flex items-center justify-center mb-3 lg:mb-4 shadow-lg shadow-brand-500/20">
              <Shield className="text-white" size={18} />
            </div>
            <p className="text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.2em] text-brand-400 mb-2">Vetted Talent</p>
            <p className="text-xs lg:text-sm text-[var(--text-main)] font-bold leading-snug">Top 3% Technical Experts Only</p>
          </motion.div>

          <motion.div 
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -1, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 -left-4 lg:-left-6 p-4 lg:p-6 glass-card bg-[var(--bg-main)]/95 max-w-[180px] lg:max-w-[220px] border-brand-500/30 shadow-[0_20px_50px_rgba(37,99,235,0.2)]"
          >
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-brand-500 rounded-xl flex items-center justify-center mb-3 lg:mb-4 shadow-lg shadow-brand-500/20">
              <Zap className="text-white" size={18} />
            </div>
            <p className="text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.2em] text-brand-400 mb-2">Delivery Speed</p>
            <p className="text-xs lg:text-sm text-[var(--text-main)] font-bold leading-snug">48-Hour Talent Fulfillment</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
