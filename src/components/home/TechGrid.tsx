import { motion } from "framer-motion";

const domains = [
  {
    category: "SAP",
    skills: ["S/4HANA", "FICO", "MM", "SD", "ABAP", "BTP", "SuccessFactors"]
  },
  {
    category: "Oracle",
    skills: ["OCI", "ERP Cloud", "HCM", "SCM", "OIC", "PL/SQL", "Netsuite"]
  },
  {
    category: "Cloud",
    skills: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "DevOps", "SRE"]
  },
  {
    category: "Data & AI",
    skills: ["Databricks", "Snowflake", "Power BI", "Spark", "Kafka", "MLOps", "LLMs"]
  },
  {
    category: "Engineering",
    skills: ["Java", ".NET", "React", "Node.js", "Python", "API", "Microservices"]
  },
  {
    category: "Cybersecurity",
    skills: ["IAM", "Cloud Security", "SecOps", "Governance", "GRC", "SIEM"]
  }
];

export function TechGrid() {
  return (
    <section className="py-20 lg:py-24 bg-[var(--bg-main)]">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-500 font-semibold text-[10px] uppercase tracking-widest mb-6"
          >
            Technology Domains
          </motion.div>
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-[var(--text-main)] mb-8">
            Expertise Across the <span className="text-brand-500">Enterprise</span> Stack.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, idx) => (
            <motion.div
              key={domain.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card p-8 group hover:shadow-[0_0_40px_rgba(37,99,235,0.1)] border-[var(--border-color)] bg-[var(--card-bg)]"
            >
              <h3 className="text-xl font-bold text-[var(--text-main)] mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-brand-500 rounded-full" />
                {domain.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {domain.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 bg-[var(--bg-main)] border border-[var(--border-color)] rounded-lg text-xs font-medium text-[var(--text-muted)] group-hover:text-brand-500 group-hover:border-brand-500/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
