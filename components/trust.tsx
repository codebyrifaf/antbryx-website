"use client"

import { motion, type Variants } from "framer-motion"
import { Handshake, ShieldCheck, Sparkles } from "lucide-react"

const stats = [
  {
    icon: Handshake,
    value: "80%",
    label: "Happy Clients",
    accent: "from-cyan-400 to-blue-500",
  },
  {
    icon: ShieldCheck,
    value: "80%",
    label: "Trust Promise",
    accent: "from-violet-400 to-indigo-500",
  },
  {
    icon: Sparkles,
    value: "3",
    label: "Years Experience",
    accent: "from-amber-300 to-orange-500",
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
    <section className="relative overflow-hidden border-t border-border/50 bg-[#05040b] py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-[0.04]" />
      <div className="pointer-events-none absolute left-0 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-[-12%] top-12 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative mx-auto flex min-h-[430px] w-full max-w-[520px] items-center justify-center lg:mx-0"
        >
          <div className="absolute inset-0 rounded-3xl border border-primary/10 bg-black/50 shadow-[0_0_90px_rgba(99,102,241,0.12)]" />
          <motion.div
            className="absolute top-8 h-64 w-64 rounded-full border-[18px] border-transparent border-t-violet-400/80 border-r-cyan-300/75 border-b-fuchsia-500/60 blur-[1px] sm:h-72 sm:w-72"
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-16 h-48 w-48 rounded-full border-[10px] border-transparent border-l-indigo-400/75 border-b-violet-400/70 sm:h-56 sm:w-56"
            animate={{ rotate: -360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute top-14 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.22),transparent_64%)] blur-2xl" />

          <div className="relative mt-28 w-full max-w-[430px] rounded-2xl border border-white/10 bg-[#09111f]/80 p-6 shadow-[0_0_60px_rgba(14,165,233,0.14)] backdrop-blur-xl sm:p-8">
            <p className="mb-8 text-center text-xl font-semibold text-foreground sm:text-2xl">
              Our Trust Gallery
            </p>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${stat.accent} text-white shadow-[0_0_26px_rgba(99,102,241,0.28)]`}
                  >
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <p className="bg-gradient-to-r from-cyan-300 via-violet-300 to-orange-300 bg-clip-text text-4xl font-semibold text-transparent">
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
            className="mb-6 inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary shadow-[0_0_28px_rgba(99,102,241,0.14)]"
          >
            Our Impact
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Trusted by all the{" "}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-300 bg-clip-text text-transparent">
              consumers
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg"
          >
            We build every product with a clear promise: listen carefully, ship
            responsibly, and stand beside the people who trust us with their
            ideas. With 80% happy clients and 3 years of hands-on experience,
            antbryx is growing through consistency, care, and dependable
            delivery.
          </motion.p>

          <motion.blockquote
            variants={itemVariants}
            className="mt-8 rounded-2xl border border-white/10 bg-white/[0.035] p-6 text-lg font-semibold leading-8 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md"
          >
            “Trust is built when software keeps its promise. Our goal is to
            create systems that help consumers feel confident, supported, and
            ready for what comes next.”
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  )
}
