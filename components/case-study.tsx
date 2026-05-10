"use client"

import { motion, type Variants } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight, CheckCircle2, Clock3, Layers3, ShieldCheck } from "lucide-react"

const panels = [
  {
    src: "/case-product.png",
    label: "Product Catalog",
    alt: "Product catalog page of ITLab storefront",
    detail: "Customer-facing storefront with filters, live catalog browsing, and product detail flows.",
    className: "md:col-span-2",
    priority: true,
  },
  {
    src: "/case-admin.png",
    label: "Admin Control Center",
    alt: "Admin control center dashboard for the ITLab retail platform",
    detail: "Central workspace for products, filters, landing content, and operational oversight.",
    className: "",
    priority: false,
  },
  {
    src: "/case-pos.png",
    label: "POS Terminal",
    alt: "Point of sale terminal interface for ITLab retail checkout",
    detail: "Fast checkout terminal built for retail floor workflows and order handling.",
    className: "",
    priority: false,
  },
  {
    src: "/case-assistant.png",
    label: "Assistant Portal",
    alt: "Assistant moderation portal for ITLab storefront operations",
    detail: "Moderation queue for Q&A, product copy, reviews, and assistant responses.",
    className: "md:col-span-2",
    priority: false,
  },
]

const metrics = [
  { value: "4", label: "connected workspaces", icon: Layers3 },
  { value: "6w", label: "from build to launch", icon: Clock3 },
  { value: "Role", label: "based access", icon: ShieldCheck },
]

const outcomes = [
  "Product catalog and customer storefront",
  "Admin control center with content tools",
  "Retail POS terminal and order workflow",
  "Assistant portal for moderation and Q&A",
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function CaseStudy() {
  return (
    <section
      id="work"
      className="relative overflow-hidden border-t border-border/50 bg-background py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-[0.055]" />
      <div className="pointer-events-none absolute left-[-12%] top-20 h-[560px] w-[560px] rounded-full bg-primary/12 blur-[130px]" />
      <div className="pointer-events-none absolute right-[-10%] bottom-12 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-3xl"
        >
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Featured work
          </p>
          <h2 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary via-violet-400 to-cyan-300 bg-clip-text text-transparent">
              Case Study
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/78 sm:text-lg">
            A complete retail platform designed as one connected operating system, from storefront to admin, checkout, and assistant moderation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[28px] border border-border/60 bg-card/40 p-1 shadow-[0_0_70px_rgba(99,102,241,0.12),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl saturate-150"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(99,102,241,0.20),transparent_30%),radial-gradient(circle_at_84%_24%,rgba(34,211,238,0.12),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.055),transparent_42%)]" />
          <div className="relative overflow-hidden rounded-[24px] bg-[#080808]/82 px-5 py-7 sm:px-7 sm:py-8 lg:px-10 lg:py-10">
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            <div className="mb-9 grid gap-8 lg:grid-cols-[1fr_420px] lg:items-start">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium text-primary-foreground shadow-[0_0_26px_rgba(99,102,241,0.12)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.9)]" />
                  ITLab retail ecosystem
                </div>
                <h3 className="max-w-3xl text-2xl font-bold leading-tight text-foreground sm:text-3xl lg:text-4xl">
                  Retail Platform — Full Stack Build
                </h3>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground/76 sm:text-base">
                  A complete role-based retail platform built end-to-end for ITLab — product catalog, admin control center, POS terminal, and assistant moderation portal — all connected, all shipped in under 6 weeks.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {metrics.map((metric) => {
                  const Icon = metric.icon

                  return (
                    <div
                      key={metric.label}
                      className="flex items-center gap-4 rounded-xl border border-border/60 bg-background/55 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                    >
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-primary/25 bg-primary/12 text-cyan-200">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold leading-none text-foreground">
                          {metric.value}
                        </p>
                        <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-foreground/50">
                          {metric.label}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5"
            >
              {panels.map((panel) => (
                <motion.div
                  key={panel.label}
                  variants={itemVariants}
                  className={`group relative overflow-hidden rounded-2xl border border-border/60 bg-background/60 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/55 hover:shadow-[0_20px_70px_rgba(99,102,241,0.14)] ${panel.className}`}
                >
                  <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0f0f0f]">
                    <Image
                      src={panel.src}
                      alt={panel.alt}
                      width={1600}
                      height={1000}
                      priority={panel.priority}
                      loading={panel.priority ? undefined : "lazy"}
                      className="aspect-[1.9/1] w-full object-cover object-top transition duration-500 group-hover:scale-[1.025]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/42 via-transparent to-white/[0.03]" />
                  </div>
                  <div className="flex items-start justify-between gap-4 px-1 pb-1 pt-4">
                    <div>
                      <h4 className="text-base font-semibold text-foreground">
                        {panel.label}
                      </h4>
                      <p className="mt-1 max-w-xl text-sm leading-relaxed text-foreground/58">
                        {panel.detail}
                      </p>
                    </div>
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-foreground/70 transition-colors duration-300 group-hover:border-primary/40 group-hover:text-cyan-200">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-8 grid gap-5 border-t border-border/50 pt-7 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="grid gap-3 sm:grid-cols-2">
                {outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-center gap-3 text-sm text-foreground/78">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-300" />
                    {outcome}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 lg:max-w-[380px] lg:justify-end">
                {["Catalog", "Admin", "POS", "Assistant", "Role-Based", "6 weeks"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border/60 bg-secondary/80 px-3 py-1 text-xs font-medium text-secondary-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
