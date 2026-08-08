import { motion } from "framer-motion";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTA } from "@/components/home/CTA";

export const Route = createFileRoute("/industries")({
  component: IndustriesPage,
});

const industries = [
  { 
    name: "Financial Services", 
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    desc: "Modernizing core banking, payments, and risk management systems."
  },
  { 
    name: "Healthcare", 
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    desc: "Building resilient digital health platforms and patient data solutions."
  },
  { 
    name: "Technology & SaaS", 
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    desc: "Scaling product engineering and cloud infrastructure for hyper-growth."
  },
  { 
    name: "Manufacturing", 
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80",
    desc: "Driving Industry 4.0 through IoT, data analytics, and ERP transformation."
  },
  { 
    name: "Energy & Utilities", 
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80",
    desc: "Optimizing operations with smart grid technology and predictive analytics."
  },
  { 
    name: "Retail & E-Commerce", 
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    desc: "Omnichannel transformation and personalized customer experiences."
  },
];

function IndustriesPage() {
  return (
    <div className="bg-[var(--bg-main)]">
      <PageHeader 
        badge="Market Focus"
        title="Domain Expertise Across Industries."
        subtitle="We bring specialized knowledge to solve industry-specific challenges through technology and elite talent."
      />

      <section className="pb-32 container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[400px] overflow-hidden rounded-[2.5rem] border border-[var(--border-color)]"
            >
              <img src={ind.image} alt={ind.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-[var(--bg-main)]/40 to-transparent" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-[var(--text-main)] mb-4">{ind.name}</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">{ind.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTA />
    </div>
  );
}
