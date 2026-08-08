import { motion } from "framer-motion";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/shared/PageHeader";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="bg-[var(--bg-main)]">
      <PageHeader 
        title="Privacy Policy"
        subtitle="Last updated: August 8, 2026"
      />
      <section className="pb-32 container-wide max-w-4xl">
        <div className="glass-card p-12 text-white/70 space-y-8 leading-relaxed">
          <p>At CLABSE INDIA PRIVATE LIMITED, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information.</p>
          <h3 className="text-xl font-bold text-white">Information Collection</h3>
          <p>We collect information you provide directly to us, such as when you request a consultation, submit a resume, or contact us for enterprise inquiries.</p>
          <h3 className="text-xl font-bold text-white">Data Usage</h3>
          <p>Your data is used to provide the services you request, improve our offerings, and communicate with you about technology and talent solutions.</p>
        </div>
      </section>
    </div>
  );
}
