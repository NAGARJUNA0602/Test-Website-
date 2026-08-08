import { motion } from "framer-motion";
import { ArrowRight, Code, Cloud, Brain, Briefcase } from "lucide-react";
import { Link } from "@tanstack/react-router";

const roles = [
  {
    title: "Software Engineering",
    description: "Full-stack, frontend, backend, mobile, and QA roles.",
    icon: Code,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Cloud & DevOps",
    description: "AWS, Azure, GCP, Kubernetes, and Terraform.",
    icon: Cloud,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Data & AI",
    description: "ML, data engineering, analytics, and GenAI.",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Project & Delivery",
    description: "Scrum masters, PMs, and business analysts.",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  },
];

export function CareersPreview() {
  return (
    <section className="py-12 md:py-16 overflow-hidden relative min-h-[600px] flex items-center">
      {/* Full-bleed background image with premium dark overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80" 
          alt="Careers Background"
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
            Careers
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl lg:text-4xl font-heading font-bold text-[var(--text-main)] mb-8 tracking-tight"
          >
            Grow With Us. Build What Matters.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[var(--text-muted)] text-lg lg:text-xl font-light"
          >
            Join a team that values expertise, invests in growth, and delivers
            technology that transforms enterprises.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative h-[380px] lg:h-[420px] overflow-hidden rounded-[2.5rem] bg-[var(--card-bg)] border border-[var(--border-color)] backdrop-blur-sm p-8 flex flex-col justify-end transition-all duration-500 shadow-xl"
            >
              {/* Card Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={role.image}
                  alt={role.title}
                  className="w-full h-full object-cover opacity-20 grayscale group-hover:scale-110 group-hover:opacity-40 group-hover:grayscale-0 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-[var(--bg-main)]/60 to-transparent" />
              </div>
   
              {/* Icon/Content Container */}
              <div className="mb-auto">
                <div className="w-14 h-14 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-white group-hover:border-brand-500 transition-all duration-500">
                  <role.icon size={28} />
                </div>
              </div>
   
              <div className="relative z-10 w-full">
                <h3 className="text-xl lg:text-2xl font-heading font-bold text-[var(--text-main)] mb-4 leading-tight group-hover:text-brand-500 transition-colors drop-shadow-sm">
                  {role.title}
                </h3>
                <p className="text-[var(--text-main)] dark:text-white/90 text-sm lg:text-base mb-6 leading-relaxed font-medium transition-all duration-300">
                  {role.description}
                </p>
                <div className="pt-2 transition-all duration-300 delay-75">
                  <Link
                    to="/careers"
                    className="inline-flex items-center gap-2 text-brand-500 font-bold text-[10px] uppercase tracking-wider hover:gap-3 transition-all"
                  >
                    View Roles <ArrowRight size={14} />
                  </Link>
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
            to="/careers"
            className="inline-flex items-center gap-2 text-brand-500 font-bold text-sm uppercase tracking-widest hover:text-brand-400 transition-colors"
          >
            View All Opportunities <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
