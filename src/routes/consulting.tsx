import { motion } from "framer-motion";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTA } from "@/components/home/CTA";
import { LayoutGrid, Cpu, LineChart, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/consulting")({
  component: ConsultingPage,
});

const consultingAreas = [
  { title: "Digital Transformation", desc: "Building comprehensive roadmaps for platform modernization and technical debt reduction.", icon: LayoutGrid },
  { title: "Enterprise Architecture", desc: "Designing scalable, resilient, and secure system architectures for global delivery.", icon: Cpu },
  { title: "AI & Data Strategy", desc: "Advisory on data governance, analytics platforms, and Generative AI adoption.", icon: LineChart },
  { title: "Cloud Optimization", desc: "Strategic migration and cost optimization across AWS, Azure, and Google Cloud.", icon: ShieldCheck },
];

function ConsultingPage() {
  return (
    <div className="bg-[var(--bg-main)]">
      <PageHeader 
        badge="Strategic Advisory"
        title="Consulting for the Modern Enterprise."
        subtitle="We help organizations solve complex technical challenges and align technology with business outcomes."
      />

      <section className="pb-32 container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {consultingAreas.map((area, idx) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-12 group"
            >
              <div className="w-16 h-16 bg-brand-500 rounded-2xl flex items-center justify-center mb-8 text-white shadow-xl shadow-brand-500/20 transition-transform duration-500 group-hover:-translate-y-2">
                <area.icon size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-6">{area.title}</h3>
              <p className="text-[var(--text-muted)] text-lg leading-relaxed">{area.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <CTA />
    </div>
  );
}
