import { motion } from "framer-motion";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/shared/PageHeader";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  component: StaffingSolutionsPage,
  head: () => ({
    meta: [
      { title: "IT Staffing Services | CLABSE India Private Limited" },
      {
        name: "description",
        content:
          "Scalable IT staffing built for the enterprise — contract, contract-to-hire, direct placement, SOW and managed teams across the full technology stack.",
      },
      { property: "og:title", content: "IT Staffing Services | CLABSE India" },
      {
        property: "og:description",
        content:
          "High-caliber technology talent across contract, contract-to-hire and permanent placement models for mission-critical initiatives.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const models = [
  {
    no: "01",
    title: "Contract Staffing",
    description:
      "Flexible, time-bound engagements for projects, surges, and specialized needs — without long-term commitment.",
  },
  {
    no: "02",
    title: "Contract-to-Hire",
    description:
      "Evaluate talent on-the-job before making a permanent offer — reducing hiring risk and ramp-up time.",
  },
  {
    no: "03",
    title: "Direct Placement",
    description:
      "Full-cycle recruitment for permanent roles — from sourcing to offer negotiation to onboarding support.",
  },
  {
    no: "04",
    title: "Statement of Work (SOW)",
    description:
      "Milestone-based delivery with defined scope, timelines, and accountability — not just staff augmentation.",
  },
  {
    no: "05",
    title: "Managed Teams",
    description:
      "Fully assembled, CLABSE-managed engineering teams aligned to your product or platform objectives.",
  },
];

const vetting = [
  "Multi-layer technical screening with domain-specific assessments",
  "Background verification, reference checks, and compliance clearance",
  "Cultural fit evaluation aligned to your team dynamics",
  "Dedicated account management from sourcing through onboarding",
];

const process = [
  {
    no: "01",
    title: "Discover",
    description: "Understand your technology landscape, team needs, and hiring goals.",
  },
  {
    no: "02",
    title: "Source",
    description:
      "Activate our deep talent network to identify qualified, pre-vetted candidates.",
  },
  {
    no: "03",
    title: "Deploy",
    description:
      "Rapid onboarding with compliance, background checks, and account management.",
  },
  {
    no: "04",
    title: "Optimize",
    description:
      "Ongoing performance monitoring, retention support, and delivery governance.",
  },
];

const roles = [
  {
    title: "Software Engineering",
    tags: ["Full-Stack", "Frontend", "Backend", "Mobile", "QA / SDET"],
  },
  {
    title: "Cloud & Infrastructure",
    tags: ["AWS", "Azure", "GCP", "DevOps", "Kubernetes", "Terraform"],
  },
  {
    title: "Data & AI",
    tags: ["Data Engineering", "Machine Learning", "BI / Analytics", "Data Science"],
  },
  {
    title: "Cybersecurity",
    tags: ["Security Engineering", "IAM", "GRC", "Penetration Testing"],
  },
  {
    title: "Project & Delivery",
    tags: ["Scrum Masters", "Program Managers", "Business Analysts", "TPMs"],
  },
  {
    title: "Enterprise Platforms",
    tags: ["Salesforce", "ServiceNow", "SAP", "Oracle"],
  },
  {
    title: "Emerging Tech",
    tags: ["GenAI / LLMs", "Blockchain", "IoT", "Edge Computing"],
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-brand-500 mb-4">
      {children}
    </div>
  );
}

function StaffingSolutionsPage() {
  return (
    <div className="bg-[var(--bg-main)] text-[var(--text-main)]">
      <PageHeader
        badge="IT Staffing Services"
        title="Scalable IT Staffing Built for the Enterprise"
        subtitle="CLABSE delivers high-caliber technology talent across contract, contract-to-hire, and permanent placement models — designed to support mission-critical initiatives, technology transformations, and evolving workforce strategies."
      />

      <div className="container-wide -mt-20 pb-20 flex flex-wrap gap-4 justify-center">
        <Link
          to="/contact"
          className="px-8 py-4 rounded-full bg-brand-500 text-white font-bold text-sm tracking-wide hover:brightness-110 transition-all flex items-center gap-2"
        >
          Request Talent Today <ArrowRight size={18} />
        </Link>
        <a
          href="#models"
          className="px-8 py-4 rounded-full border border-[var(--border-color)] font-bold text-sm tracking-wide hover:border-brand-500 hover:text-brand-500 transition-all"
        >
          Explore Models
        </a>
      </div>

      {/* Engagement Models */}
      <section id="models" className="py-16 md:py-24 container-wide scroll-mt-32">
        <SectionLabel>Engagement Models</SectionLabel>
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-12 max-w-3xl leading-tight">
          Flexible Staffing Models for Every Need
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model, idx) => (
            <motion.div
              key={model.no}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="glass-card p-8 group hover:border-brand-500/40 transition-all"
            >
              <div className="text-4xl font-black text-brand-500/25 mb-6 group-hover:text-brand-500/60 transition-colors">
                {model.no}
              </div>
              <h3 className="text-xl font-bold mb-3">{model.title}</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                {model.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 bg-[var(--card-bg)] border-y border-[var(--border-color)]">
        <div className="container-wide grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <SectionLabel>Our Approach</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              Rigorous. Responsive. Reliable.
            </h2>
            <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-8">
              Every candidate we place goes through a structured, multi-stage vetting
              process — ensuring quality, fit, and readiness from day one.
            </p>
            <ul className="space-y-4">
              {vetting.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-brand-500 mt-1 flex-shrink-0" />
                  <span className="text-[var(--text-muted)]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-brand-500/10 blur-3xl rounded-full" />
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
              alt="CLABSE recruitment team reviewing candidate assessments"
              loading="lazy"
              className="relative z-10 w-full rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24 container-wide">
        <SectionLabel>Our Process</SectionLabel>
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-12 leading-tight">
          From Discovery to Delivery
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((step, idx) => (
            <motion.div
              key={step.no}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="relative glass-card p-8"
            >
              <div className="w-10 h-10 rounded-full bg-brand-500 text-white font-bold flex items-center justify-center mb-6">
                {idx + 1}
              </div>
              <div className="text-[10px] font-bold tracking-[0.24em] text-brand-500 mb-2">
                {step.no}
              </div>
              <h3 className="text-lg font-bold mb-3">{step.title}</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technology Roles */}
      <section className="py-16 md:py-24 bg-[var(--card-bg)] border-y border-[var(--border-color)]">
        <div className="container-wide">
          <SectionLabel>Technology Roles</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-12 max-w-3xl leading-tight">
            Talent Across the Full Technology Stack
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role, idx) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="glass-card p-8 hover:border-brand-500/40 transition-all"
              >
                <h3 className="text-lg font-bold mb-5">{role.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {role.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold bg-brand-500/10 text-brand-500 border border-brand-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=60"
          alt="Global enterprise technology network"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0b1f4d]/85" />
        <div className="container-wide relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
            Ready to Scale Your Team?
          </h2>
          <p className="text-lg text-white/75 mb-10">
            Tell us about your staffing needs and we'll connect you with the right talent
            — fast.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-brand-500 text-white font-bold text-sm hover:brightness-110 transition-all flex items-center gap-2"
            >
              Request Talent <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full border border-white/30 text-white font-bold text-sm hover:bg-white/10 transition-all"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
