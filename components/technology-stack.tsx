"use client"

import { motion, type Variants } from "framer-motion"
import { useMemo, useState } from "react"
import {
  Blocks,
  Braces,
  Cloud,
  Code2,
  Database,
  Globe2,
  Layers,
  Server,
  Smartphone,
  Workflow,
  Zap,
} from "lucide-react"
import type { ReactNode } from "react"

const categories = ["Frontend", "Backend", "Integrations", "Hosting & Deployment"]
const filters = ["All", ...categories]

const technologies = [
  { name: "React", category: "Frontend", icon: <Code2 />, color: "text-foreground" },
  { name: "Next.js", category: "Frontend", icon: <Layers />, color: "text-foreground" },
  { name: "Flutter", category: "Frontend", icon: <Smartphone />, color: "text-foreground" },
  { name: "JavaScript", category: "Frontend", mark: "JS", color: "text-foreground" },
  { name: "TypeScript", category: "Frontend", mark: "TS", color: "text-foreground" },
  { name: "Tailwind CSS", category: "Frontend", icon: <Zap />, color: "text-foreground" },
  { name: "Node.js", category: "Backend", icon: <Server />, color: "text-foreground" },
  { name: "REST API", category: "Backend", icon: <Globe2 />, color: "text-foreground" },
  { name: "WebSockets", category: "Backend", icon: <Workflow />, color: "text-foreground" },
  { name: "PostgreSQL", category: "Backend", icon: <Database />, color: "text-foreground" },
  { name: "MongoDB", category: "Backend", icon: <Database />, color: "text-foreground" },
  { name: "Supabase", category: "Integrations", icon: <Database />, color: "text-foreground" },
  { name: "Stripe", category: "Integrations", mark: "S", color: "text-foreground" },
  { name: "Firebase", category: "Integrations", icon: <Cloud />, color: "text-foreground" },
  { name: "AWS", category: "Hosting & Deployment", icon: <Cloud />, color: "text-foreground" },
  { name: "Vercel", category: "Hosting & Deployment", mark: "▲", color: "text-foreground" },
  { name: "Docker", category: "Hosting & Deployment", icon: <Blocks />, color: "text-foreground" },
  { name: "Kubernetes", category: "Hosting & Deployment", icon: <Braces />, color: "text-foreground" },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
}

export function TechnologyStack() {
  const [activeFilter, setActiveFilter] = useState("All")
  const visibleTechnologies = useMemo(
    () =>
      activeFilter === "All"
        ? technologies
        : technologies.filter((tech) => tech.category === activeFilter),
    [activeFilter],
  )

  return (
    <section id="technology-stack" className="theme-light relative overflow-hidden border-t border-border/50 bg-background section-pad">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-[0.03]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-black/10" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-3xl"
        >
          <h2 className="text-[42px] font-bold leading-tight text-foreground sm:text-[48px] lg:text-[52px]">
            Technology Stack
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative overflow-hidden rounded-[10px] border border-[rgba(0,0,0,0.08)] bg-card p-1"
        >
          <div className="relative overflow-hidden rounded-[8px] bg-background px-5 py-7 sm:px-7 sm:py-8 lg:px-10 lg:py-10">

            <div className="relative mb-7 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-[15px] font-semibold text-foreground">
                  {activeFilter === "All" ? "Complete stack" : activeFilter}
                </p>
                <p className="mt-1 text-[15px] text-muted-foreground">
                  {visibleTechnologies.length} technologies
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => {
                  const isActive = activeFilter === filter

                  return (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => setActiveFilter(filter)}
                      aria-pressed={isActive}
                      className={`rounded-full border px-3 py-1.5 text-xs font-medium transition duration-200 ${
                        isActive
                          ? "border-black/20 bg-background text-foreground"
                          : "border-black/10 bg-background text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {filter}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {visibleTechnologies.map((tech) => (
                <TechTile key={`${activeFilter}-${tech.name}`} {...tech} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function TechTile({
  name,
  category,
  icon,
  mark,
  color,
}: {
  name: string
  category: string
  icon?: ReactNode
  mark?: string
  color: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      layout
      className="group flex aspect-[1.08] min-h-[118px] flex-col items-center justify-center rounded-[10px] border border-[rgba(0,0,0,0.08)] bg-background p-3 text-center transition duration-300 hover:-translate-y-1"
    >
      <div className={`mb-3 grid h-10 w-10 place-items-center rounded-[10px] border border-[rgba(0,0,0,0.08)] ${color}`}>
        {icon ? (
          <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:stroke-[1.7]">{icon}</span>
        ) : (
          <span className="text-lg font-bold leading-none">{mark}</span>
        )}
      </div>
      <h3 className="text-sm font-semibold leading-tight text-foreground">{name}</h3>
      <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] leading-tight text-foreground/45">
        {category}
      </p>
    </motion.div>
  )
}
