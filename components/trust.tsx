"use client"

import { motion, type Variants } from "framer-motion"
import { Handshake, ShieldCheck, Sparkles } from "lucide-react"

const stats = [
  {
    icon: Handshake,
    value: "10+",
    label: "Happy Clients",
    accent: "text-primary",
  },
  {
    icon: ShieldCheck,
    value: "80%",
    label: "Trust Promise",
    accent: "text-primary",
  },
  {
    icon: Sparkles,
    value: "3",
    label: "Years Experience",
    accent: "text-primary",
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
}

export function Trust() {
  return (
    <section className="relative overflow-hidden border-t border-border/50 bg-[#162f30] section-pad">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-[0.04]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative mx-auto flex min-h-[430px] w-full max-w-[520px] items-center justify-center lg:mx-0"
        >
          <div className="absolute inset-0 rounded-[10px] border border-[rgba(255,255,255,0.08)] bg-[#112118]" />
          <motion.div
            className="absolute top-8 h-64 w-64 rounded-full border-[18px] border-transparent border-t-white/15 border-r-white/10 border-b-white/10 blur-[1px] sm:h-72 sm:w-72"
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-16 h-48 w-48 rounded-full border-[10px] border-transparent border-l-white/10 border-b-white/10 sm:h-56 sm:w-56"
            animate={{ rotate: -360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute top-14 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent_64%)] blur-2xl" />

          <div className="relative mt-28 w-full max-w-[430px] rounded-[10px] border border-[rgba(255,255,255,0.08)] bg-[#112118] p-6 sm:p-8">
            <p className="mb-8 text-center text-xl font-semibold text-foreground sm:text-2xl">
              Our Trust Gallery
            </p>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-[10px] border border-[rgba(255,255,255,0.12)] text-foreground"
                  >
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <p className={`text-4xl font-semibold ${stat.accent}`}>
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs font-medium text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6 text-[10px] font-mono font-medium uppercase tracking-[0.15em] text-muted-foreground"
          >
            Our Impact
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-[42px] font-bold leading-tight text-foreground sm:text-[48px] lg:text-[52px]"
          >
            Trusted by all the{" "}
            <span>consumers</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-[15px] leading-8 text-muted-foreground"
          >
            We build every product with a clear promise: listen carefully, ship
            responsibly, and stand beside the people who trust us with their
            ideas. With 80% happy clients and 3 years of hands-on experience,
            antbryx is growing through consistency, care, and dependable
            delivery.
          </motion.p>

        </motion.div>
      </div>
    </section>
  )
}
