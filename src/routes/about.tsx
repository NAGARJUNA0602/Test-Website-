import { motion } from "framer-motion";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTA } from "@/components/home/CTA";
import { Shield, Target, Eye, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    title: "About CLABSE | Enterprise Technology & Talent Partner",
    meta: [{ name: "description", content: "Our story, vision, and mission as a strategic technology partner." }],
  }),
});

function AboutPage() {
  return (
    <div className="bg-[var(--bg-main)]">
      <PageHeader 
        badge="Our Story"
        title="Enterprise Talent. Technology. Transformation."
        subtitle="CLABSE is a strategic technology partner helping organizations navigate the complexities of digital transformation through elite talent and technical excellence."
      />

      <section className="pb-32 container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-8">
              Decades of <span className="text-brand-500">Expertise</span>, Built for the Future.
            </h2>
            <div className="space-y-6 text-[var(--text-muted)] text-lg leading-relaxed">
              <p>
                Founded on the principle that technology excellence is driven by people, CLABSE has evolved into a comprehensive enterprise solutions provider. We don't just fill roles; we build the technical foundations that allow businesses to scale.
              </p>
              <p>
                From SAP implementations to Cloud-native engineering and Generative AI adoption, our consultants bring deep domain expertise to every engagement.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="glass-card p-6">
                <div className="text-3xl font-bold text-[var(--text-main)] mb-2">10+</div>
                <div className="text-xs font-bold text-brand-500 uppercase tracking-widest">Years Experience</div>
              </div>
              <div className="glass-card p-6">
                <div className="text-3xl font-bold text-[var(--text-main)] mb-2">Global</div>
                <div className="text-xs font-bold text-brand-500 uppercase tracking-widest">Delivery Model</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[3rem] overflow-hidden border border-[var(--border-color)] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" 
                alt="Leadership" 
                className="w-full h-full object-cover aspect-square"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 glass-card p-8 bg-brand-500 max-w-xs shadow-2xl">
              <p className="text-white font-bold text-xl mb-2">"Technology is only as powerful as the people who build it."</p>
              <p className="text-white/70 text-sm">— Leadership Philosophy</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-[var(--card-bg)]">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Our Vision", desc: "To be the most trusted strategic partner for enterprise technology and talent globally.", icon: Eye },
              { title: "Our Mission", desc: "Empowering organizations through technical excellence, elite talent delivery, and strategic consulting.", icon: Target },
              { title: "Our Values", desc: "Integrity, technical rigor, client-centricity, and a commitment to measurable business outcomes.", icon: Shield },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-10 group"
              >
                <div className="w-14 h-14 bg-brand-500 rounded-2xl flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform">
                  <item.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-[var(--text-muted)] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
