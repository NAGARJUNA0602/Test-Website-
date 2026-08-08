import { motion } from "framer-motion";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/shared/PageHeader";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="bg-[var(--bg-main)]">
      <PageHeader 
        title="Terms of Service"
        subtitle="Last updated: August 8, 2026"
      />
      <section className="pb-32 container-wide max-w-4xl">
        <div className="glass-card p-12 text-white/70 space-y-8 leading-relaxed">
          <p>By accessing the CLABSE website, you agree to these terms of service. Our website is designed to provide information about our enterprise technology and staffing solutions.</p>
          <h3 className="text-xl font-bold text-white">Use of Website</h3>
          <p>You may use this website for lawful purposes only and in accordance with these terms.</p>
          <h3 className="text-xl font-bold text-white">Intellectual Property</h3>
          <p>All content on this website, including text, graphics, logos, and software, is the property of CLABSE INDIA PRIVATE LIMITED or its content suppliers.</p>
        </div>
      </section>
    </div>
  );
}
