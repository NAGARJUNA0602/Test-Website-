import { motion } from "framer-motion";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTA } from "@/components/home/CTA";
import { TechGrid } from "@/components/home/TechGrid";

export const Route = createFileRoute("/expertise")({
  component: ExpertisePage,
  head: () => ({
    title: "Technology Expertise | CLABSE",
    meta: [{ name: "description", content: "Deep capability across SAP, Oracle, Cloud, Data, and AI." }],
  }),
});

function ExpertisePage() {
  return (
    <div className="bg-[var(--bg-main)]">
      <PageHeader 
        badge="Enterprise Capability"
        title="Leading Edge Technology Mastery."
        subtitle="We deliver deep technical specialization across the most critical enterprise platforms and modern digital stacks."
      />
      <TechGrid />
      
      <section className="py-32 container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12"
          >
            <h3 className="text-3xl font-bold mb-6 text-brand-500">SAP Practice</h3>
            <p className="text-[var(--text-muted)] leading-relaxed mb-8">
              Our SAP center of excellence provides end-to-end support for S/4HANA migrations, BTP development, and functional optimization across FICO, SCM, and HCM modules.
            </p>
            <div className="flex flex-wrap gap-3">
              {['S/4HANA', 'ABAP', 'Fiori', 'BTP', 'SuccessFactors'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-brand-500/10 border border-brand-500/20 rounded-lg text-xs font-semibold text-brand-400">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-12"
          >
            <h3 className="text-3xl font-bold mb-6 text-brand-500">Data & AI</h3>
            <p className="text-[var(--text-muted)] leading-relaxed mb-8">
              Transforming raw data into strategic assets. We specialize in Databricks, Snowflake, and enterprise-grade Generative AI implementations tailored for business value.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Generative AI', 'Databricks', 'Snowflake', 'PySpark', 'LLMs'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-brand-500/10 border border-brand-500/20 rounded-lg text-xs font-semibold text-brand-400">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
