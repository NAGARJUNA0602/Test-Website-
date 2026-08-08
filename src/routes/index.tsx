import { motion } from "framer-motion";
import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Hero } from "@/components/home/Hero";

// Lazy load non-critical sections
const Metrics = lazy(() => import("@/components/home/Metrics").then(m => ({ default: m.Metrics })));
const WhyCLABSE = lazy(() => import("@/components/home/WhyCLABSE").then(m => ({ default: m.WhyCLABSE })));
const HomeServices = lazy(() => import("@/components/home/HomeServices").then(m => ({ default: m.HomeServices })));
const TechGrid = lazy(() => import("@/components/home/TechGrid").then(m => ({ default: m.TechGrid })));
const Process = lazy(() => import("@/components/home/Process").then(m => ({ default: m.Process })));
const CTA = lazy(() => import("@/components/home/CTA").then(m => ({ default: m.CTA })));
const CareersPreview = lazy(() => import("@/components/home/CareersPreview").then(m => ({ default: m.CareersPreview })));

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    title: "CLABSE | Enterprise Technology Consulting & Staffing",
    meta: [
      {
        name: "description",
        content: "Enterprise technology consulting, staffing, cloud, data, AI, ERP, and workforce transformation.",
      },
    ],
  }),
});

function SectionSkeleton() {
  return <div className="min-h-[400px] bg-[var(--bg-main)] animate-pulse" />;
}

function Index() {
  return (
    <div className="bg-[var(--bg-main)]">

      <Hero />
      <Suspense fallback={<SectionSkeleton />}>
        <Metrics />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <WhyCLABSE />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <HomeServices />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <TechGrid />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Process />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <CareersPreview />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <CTA />
      </Suspense>
    </div>
  );
}
