import { motion } from "framer-motion";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTA } from "@/components/home/CTA";

export const Route = createFileRoute("/insights")({
  component: InsightsPage,
});

const articles = [
  { category: "AI & Data", title: "Enterprise Generative AI: From Hype to Business Value", date: "Aug 15, 2026" },
  { category: "Cloud", title: "Cloud Cost Optimization in the Era of Multi-Cloud Architecture", date: "Aug 10, 2026" },
  { category: "Staffing", title: "The Future of Technical Hiring: Elite Talent in a Global Market", date: "Aug 5, 2026" },
  { category: "SAP", title: "Navigating S/4HANA Transformation: A Strategic Roadmap", date: "Jul 28, 2026" },
];

function InsightsPage() {
  return (
    <div className="bg-[var(--bg-main)]">
      <PageHeader 
        badge="Enterprise Insights"
        title="Thought Leadership for the Digital Age."
        subtitle="Strategic perspectives on technology, talent, and business transformation."
      />

      <section className="pb-32 container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {articles.map((art, idx) => (
            <motion.article
              key={art.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-10 group cursor-pointer"
            >
              <div className="text-xs font-bold text-brand-500 uppercase tracking-widest mb-4">{art.category}</div>
              <h3 className="text-2xl font-bold text-[var(--text-main)] mb-6 group-hover:text-brand-500 transition-colors">{art.title}</h3>
              <div className="text-white/40 text-sm">{art.date}</div>
            </motion.article>
          ))}
        </div>
      </section>

      <CTA />
    </div>
  );
}
