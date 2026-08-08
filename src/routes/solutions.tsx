import { motion } from "framer-motion";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTA } from "@/components/home/CTA";
import { Users, Search, CheckCircle, Award } from "lucide-react";

export const Route = createFileRoute("/solutions")({
  component: SolutionsPage,
});

const engagementModels = [
  { title: "Contract Staffing", desc: "Rapid scaling for short-term projects with pre-vetted domain experts.", icon: Users },
  { title: "Permanent Hiring", desc: "Strategic talent acquisition for long-term growth and technical leadership.", icon: Search },
  { title: "Executive Search", desc: "Specialized search for C-suite and senior technology leadership roles.", icon: Award },
  { title: "Managed Teams", desc: "Dedicated project squads managed by CLABSE governance frameworks.", icon: CheckCircle },
];

function SolutionsPage() {
  return (
    <div className="bg-[var(--bg-main)]">
      <PageHeader 
        badge="Staffing Solutions"
        title="Enterprise Talent, Optimized."
        subtitle="Flexible engagement models designed to meet the technical needs of global organizations."
      />

      <section className="pb-32 container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {engagementModels.map((model, idx) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-12"
            >
              <div className="w-14 h-14 bg-brand-500 rounded-2xl flex items-center justify-center mb-8 text-white">
                <model.icon size={28} />
              </div>
              <h3 className="text-3xl font-bold mb-6">{model.title}</h3>
              <p className="text-[var(--text-muted)] text-lg leading-relaxed">{model.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <CTA />
    </div>
  );
}
