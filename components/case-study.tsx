"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const panels = [
  {
    src: "/case-product.png",
    label: "Product Catalog",
    alt: "Product catalog page of ITLab storefront",
    priority: true,
  },
  {
    src: "/case-admin.png",
    label: "Admin Control Center",
    alt: "Admin control center dashboard for the ITLab retail platform",
    priority: false,
  },
  {
    src: "/case-pos.png",
    label: "POS Terminal",
    alt: "Point of sale terminal interface for ITLab retail checkout",
    priority: false,
  },
  {
    src: "/case-assistant.png",
    label: "Assistant Portal",
    alt: "Assistant moderation portal for ITLab storefront operations",
    priority: false,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
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
    <section id="work" className="py-20 lg:py-28 relative border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Case Study
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8 lg:p-12"
        >
          {/* Project header */}
          <div className="mb-10">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Retail Platform — Full Stack Build
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl">
              A complete role-based retail platform built end-to-end for ITLab — product catalog, admin control center, POS terminal, and assistant moderation portal — all connected, all shipped in under 6 weeks.
            </p>
          </div>

          {/* Deliverables grid — 2×2 on md+, 1 column on mobile */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
          >
            {panels.map((panel) => (
              <motion.div key={panel.label} variants={itemVariants} className="relative">
                <div className="group rounded-lg border border-white/10 bg-[#0f0f0f] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-primary/70 hover:shadow-lg hover:shadow-primary/10">
                  <Image
                    src={panel.src}
                    alt={panel.alt}
                    width={1600}
                    height={1000}
                    priority={panel.priority}
                    loading={panel.priority ? undefined : "lazy"}
                    className="rounded-lg border border-white/10 object-cover w-full h-auto transition-colors duration-300 group-hover:border-primary/70"
                  />
                </div>
                <p className="mt-3 text-xs sm:text-sm font-medium text-muted-foreground text-center">
                  {panel.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-border/50"
          >
            {["Catalog", "Admin", "POS", "Assistant", "Role-Based", "6 weeks"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
