"use client"

import { motion } from "framer-motion"

const pillars = [
  {
    number: "01",
    title: "Shipped Fast",
    description:
      "Weeks, not months. We move with startup speed without cutting corners.",
  },
  {
    number: "02",
    title: "Built Right",
    description:
      "Production-grade code, scalable architecture, and honest engineering.",
  },
  {
    number: "03",
    title: "Built for You",
    description:
      "No templates, no recycled code. Every build is custom to your business.",
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

export function WhyAntbryx() {
  return (
    <section className="py-24 lg:py-32 relative border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-16"
        >
          Why antbryx
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
        >
          {pillars.map((pillar) => (
            <motion.div key={pillar.number} variants={itemVariants}>
              <span className="text-5xl lg:text-6xl font-bold text-primary/80 font-mono">
                {pillar.number}
              </span>
              <h3 className="text-xl lg:text-2xl font-semibold text-foreground mt-4 mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
