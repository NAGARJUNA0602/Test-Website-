import { motion } from "framer-motion";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTA } from "@/components/home/CTA";

export const Route = createFileRoute("/enquiry")({
  component: EnquiryPage,
});

function EnquiryPage() {
  return (
    <div className="bg-[var(--bg-main)]">
      <PageHeader 
        badge="Strategic Partnership"
        title="Start Your Enterprise Journey."
        subtitle="Complete the details below, and our engagement team will reach out within 24 hours."
      />
      
      <section className="pb-32 container-wide max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-12"
        >
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Organization Name" className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-4 text-[var(--text-main)]" />
            <input type="text" placeholder="Industry" className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-4 text-[var(--text-main)]" />
            <input type="text" placeholder="Technology Domain" className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-4 text-[var(--text-main)]" />
            <input type="text" placeholder="Engagement Model" className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-4 text-[var(--text-main)]" />
            <input type="number" placeholder="Team Size" className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-4 text-[var(--text-main)] col-span-2" />
            <textarea placeholder="Specific Requirements" rows={6} className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-4 text-[var(--text-main)] col-span-2" />
            <button className="col-span-2 py-5 bg-brand-500 rounded-xl font-bold hover:bg-brand-600 transition-all">Submit Consultation Request</button>
          </form>
        </motion.div>
      </section>

      <CTA />
    </div>
  );
}
