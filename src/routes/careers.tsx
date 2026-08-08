import { motion } from "framer-motion";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTA } from "@/components/home/CTA";
import { Briefcase, GraduationCap, Heart, Rocket } from "lucide-react";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
});

const benefits = [
  { title: "Growth & Learning", desc: "Access to elite technology certifications and domain-expert mentorship.", icon: Rocket },
  { title: "Global Impact", desc: "Work on high-stakes transformation projects for Fortune 500 enterprises.", icon: Globe },
  { title: "Inclusive Culture", desc: "A diversity-first environment that celebrates innovation and collaboration.", icon: Heart },
  { title: "Technical Rigor", desc: "A culture that values high-quality engineering and outcomes.", icon: Shield },
];

function CareersPage() {
  return (
    <div className="bg-[var(--bg-main)]">
      <PageHeader 
        badge="Join Our Team"
        title="Build Your Future with CLABSE."
        subtitle="Work at the intersection of enterprise technology and global transformation. We are looking for elite talent to join our specialized practice areas."
      />

      <section className="pb-32 container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-10"
            >
              <div className="w-12 h-12 bg-brand-500 rounded-xl flex items-center justify-center mb-6 text-white">
                <benefit.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-20">
          <h2 className="text-4xl font-heading font-bold mb-8">Opportunity Areas</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['SAP', 'Oracle', 'Cloud & DevOps', 'Data & AI', 'Full Stack', 'Cybersecurity'].map(area => (
              <span key={area} className="px-8 py-3 glass-card bg-[var(--card-bg)] border-[var(--border-color)] rounded-2xl text-[var(--text-main)] font-semibold">
                {area}
              </span>
            ))}
          </div>
        </div>

        <div className="glass-card p-12 text-center bg-brand-500/5 border-brand-500/20">
          <h3 className="text-2xl font-bold mb-6">Ready to make an impact?</h3>
          <p className="text-[var(--text-muted)] mb-10 max-w-xl mx-auto">Send your resume to our talent acquisition team to be considered for upcoming enterprise engagements.</p>
          <a href="mailto:careers@clabse.com" className="inline-flex py-4 px-10 bg-brand-500 rounded-xl font-bold hover:bg-brand-600 transition-all">Submit Resume</a>
        </div>
      </section>

      <CTA />
    </div>
  );
}

function Globe({ size, className }: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
    </svg>
  );
}

function Shield({ size, className }: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
    </svg>
  );
}
