import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function CTA() {
  return (
    <section className="py-20 lg:py-24 bg-[var(--bg-main)] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="container-wide relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card p-16 lg:p-24 border-[var(--border-color)] bg-[var(--card-bg)] shadow-2xl"
        >
          <h2 className="text-5xl lg:text-8xl font-heading font-bold text-[var(--text-main)] mb-12 leading-[1.1]">
            Ready to Build <br /> <span className="text-brand-500">What’s Next?</span>
          </h2>
          <p className="text-xl text-[var(--text-muted)] mb-16 max-w-2xl mx-auto leading-relaxed">
            Partner with CLABSE for enterprise-grade technology consulting and staffing excellence. Let's transform your workforce today.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              to="/enquiry" 
              className="px-12 py-6 bg-brand-500 text-white rounded-2xl font-bold hover:bg-brand-600 transition-all flex items-center gap-2 group shadow-2xl shadow-brand-500/20"
            >
              Request Consultation
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link 
              to="/contact" 
              className="px-12 py-6 bg-[var(--bg-main)]/50 border border-[var(--border-color)] text-[var(--text-main)] rounded-2xl font-bold hover:bg-brand-500/10 transition-all"
            >
              Contact Our Team
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
