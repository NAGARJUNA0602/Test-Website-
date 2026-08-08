import { motion } from "framer-motion";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTA } from "@/components/home/CTA";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="bg-[var(--bg-main)]">
      <PageHeader 
        badge="Get in Touch"
        title="Let's Build the Future Together."
        subtitle="Contact our team to discuss your enterprise talent and technology needs."
      />
      
      <section className="pb-32 container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Global Offices</h3>
              <div className="space-y-8">
                <div className="glass-card p-6 border-brand-500/20">
                  <h4 className="font-bold text-[var(--text-main)] mb-2">Corporate HQ (USA)</h4>
                  <p className="text-[var(--text-muted)]">9700 Richmond Ave, Suite 333<br />Houston, TX 77042</p>
                </div>
                <div className="glass-card p-6">
                  <h4 className="font-bold text-[var(--text-main)] mb-2">Global Delivery Center (India)</h4>
                  <p className="text-[var(--text-muted)]">Jubilee Hills, Road No. 36<br />Hyderabad, Telangana 500033</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 gap-6">
              <input type="text" placeholder="Full Name" className="w-full bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-4 text-[var(--text-main)] placeholder:text-[var(--text-muted)]/50" />
              <input type="email" placeholder="Business Email" className="w-full bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-4 text-[var(--text-main)] placeholder:text-[var(--text-muted)]/50" />
              <input type="text" placeholder="Organization" className="w-full bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-4 text-[var(--text-main)] placeholder:text-[var(--text-muted)]/50" />
              <textarea placeholder="Your Requirements" rows={4} className="w-full bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-4 text-[var(--text-main)] placeholder:text-[var(--text-muted)]/50" />
              <button className="w-full py-4 bg-brand-500 rounded-xl font-bold hover:bg-brand-600 transition-all">Submit Enquiry</button>
            </div>
          </motion.form>
        </div>
      </section>

      <CTA />
    </div>
  );
}
