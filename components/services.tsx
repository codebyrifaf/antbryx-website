"use client"

import { motion } from "framer-motion"
import { Code, ShoppingCart, Package, Smartphone, ArrowUpRight } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Custom Software",
    description:
      "Tailored applications designed around your business logic, not forced into templates.",
  },
  {
    icon: ShoppingCart,
    title: "POS Systems",
    description:
      "Modern point-of-sale systems for retail — fast, reliable, and built for real-world use.",
  },
  {
    icon: Package,
    title: "Inventory Management",
    description:
      "Track stock, automate reordering, and sync across locations in real time.",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Apps",
    description:
      "Production-ready web and mobile experiences, built to scale from day one.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-12"
        >
          What we build
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative p-6 lg:p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Arrow icon */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0">
                <ArrowUpRight className="w-5 h-5 text-primary" />
              </div>
              
              <div className="relative">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
