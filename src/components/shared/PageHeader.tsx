import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  badge?: string;
}

export function PageHeader({ title, subtitle, badge }: PageHeaderProps) {
  return (
    <section className="relative pt-48 pb-32 overflow-hidden bg-[var(--bg-main)]">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-full h-full bg-brand-500/5 dark:bg-brand-500/10 blur-[120px] rounded-full" />
      </div>
      
      <div className="container-wide relative z-10 text-center max-w-4xl">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 font-semibold text-[10px] uppercase tracking-[0.2em] mb-8"
          >
            {badge}
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl lg:text-7xl font-heading font-bold mb-8 leading-[1.1]"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-[var(--text-muted)] leading-relaxed"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
