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
      className="relative overflow-hidden border-t border-border/50 bg-background section-pad"
    >
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-[0.055]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-3xl"
        >
          <p className="mb-4 text-[10px] font-mono font-medium uppercase tracking-[0.15em] text-muted-foreground">
            Featured work
          </p>
          <h2 className="text-[42px] font-bold leading-tight text-foreground sm:text-[48px] lg:text-[52px]">
            Featured Case Study
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            A complete retail platform designed as one connected operating system, from storefront to admin, checkout, and assistant moderation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[10px] border border-white/12 bg-white/5 p-1 shadow-[0_16px_50px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-lg"
        >
          <div className="relative overflow-hidden rounded-[8px] bg-white/[0.035] px-5 py-7 sm:px-7 sm:py-8 lg:px-10 lg:py-10">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_55%)] opacity-80" />

            <div className="relative z-10">
              <div className="mb-9 grid gap-8 lg:grid-cols-[1fr_420px] lg:items-start">
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.12)] px-3 py-1 text-[10px] font-medium text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                    ITLab retail ecosystem
                  </div>
                  <h3 className="max-w-3xl text-2xl font-bold leading-tight text-foreground sm:text-3xl lg:text-4xl">
                    Retail Platform — Full Stack Build
                  </h3>
                  <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
                    A complete role-based retail platform built end-to-end for ITLab — product catalog, admin control center, POS terminal, and assistant moderation portal — all connected, all shipped in under 6 weeks.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  {metrics.map((metric) => {
                    const Icon = metric.icon

                    return (
                      <div
                        key={metric.label}
                        className="flex items-center gap-4 rounded-[10px] border border-white/12 bg-white/5 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-lg"
                      >
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] border border-white/12 bg-white/6 text-foreground">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold leading-none text-primary">
                            {metric.value}
                          </p>
                          <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
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
                    className={`group relative overflow-hidden rounded-[10px] border border-white/12 bg-white/5 p-3 shadow-[0_12px_40px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-lg transition-all duration-300 ease-out hover:-translate-y-1 ${panel.className}`}
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_55%)] opacity-70" />
                    <div className="relative z-10">
                      <div className="relative overflow-hidden rounded-[10px] border border-white/10 bg-[#162f30]">
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
                          <p className="mt-1 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                            {panel.detail}
                          </p>
                        </div>
                        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 text-foreground/70 transition-colors duration-300">
                          <ArrowUpRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <div className="mt-8 grid gap-5 border-t border-border/50 pt-7 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="grid gap-3 sm:grid-cols-2">
                  {outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-center gap-3 text-[15px] text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      {outcome}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 lg:max-w-[380px] lg:justify-end">
                  {["Catalog", "Admin", "POS", "Assistant", "Role-Based", "6 weeks"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[rgba(255,255,255,0.08)] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
