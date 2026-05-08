"use client"

import { motion, type Variants } from "framer-motion"
import {
  Code,
  Package,
  ShoppingCart,
  Smartphone,
  type LucideIcon,
} from "lucide-react"

type Service = {
  icon: LucideIcon
  step: string
  title: string
  description: string
  accent: string
  glow: string
  connector: string
}

const services: Service[] = [
  {
    icon: Code,
    step: "01",
    title: "Custom Software",
    description:
      "Tailored applications designed around your business logic, not forced into templates.",
    accent: "from-violet-500 via-purple-500 to-indigo-500",
    glow: "shadow-violet-500/25",
    connector: "url(#service-violet)",
  },
  {
    icon: ShoppingCart,
    step: "02",
    title: "POS Systems",
    description:
      "Modern point-of-sale systems for retail — fast, reliable, and built for real-world use.",
    accent: "from-blue-500 via-indigo-500 to-cyan-400",
    glow: "shadow-blue-500/25",
    connector: "url(#service-blue)",
  },
  {
    icon: Package,
    step: "03",
    title: "Inventory Management",
    description:
      "Track stock, automate reordering, and sync across locations in real time.",
    accent: "from-cyan-400 via-sky-500 to-blue-500",
    glow: "shadow-cyan-500/25",
    connector: "url(#service-cyan)",
  },
  {
    icon: Smartphone,
    step: "04",
    title: "Web & Mobile Apps",
    description:
      "Production-ready web and mobile experiences, built to scale from day one.",
    accent: "from-indigo-400 via-violet-500 to-fuchsia-500",
    glow: "shadow-indigo-500/25",
    connector: "url(#service-indigo)",
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
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
}

const connectorPaths = [
  "M 370 248 C 438 248 442 116 525 116 L 612 116",
  "M 392 328 C 456 328 456 270 525 270 L 612 270",
  "M 392 408 C 456 408 456 424 525 424 L 612 424",
  "M 370 488 C 438 488 448 578 535 578 L 612 578",
]

const connectorNodes = [
  { cx: 370, cy: 248 },
  { cx: 392, cy: 328 },
  { cx: 392, cy: 408 },
  { cx: 370, cy: 488 },
]

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-t border-border/50 bg-background py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-[0.06]" />
      <div className="pointer-events-none absolute left-[-10%] top-12 h-[620px] w-[620px] rounded-full bg-violet-500/12 blur-[130px]" />
      <div className="pointer-events-none absolute right-[-8%] top-1/3 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-14 max-w-3xl lg:mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary shadow-[0_0_28px_rgba(99,102,241,0.14)]"
          >
            <span className="h-1.5 w-1.5 rotate-45 bg-primary shadow-[0_0_14px_rgba(129,140,248,0.9)]" />
            Services
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            What we{" "}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-300 bg-clip-text text-transparent">
              build
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            End-to-end software systems designed to streamline operations, scale
            your business, and create a reliable foundation for growth.
          </motion.p>
        </motion.div>

        <div className="relative lg:min-h-[690px]">
          <svg
            className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full lg:block"
            viewBox="0 0 1180 690"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="service-violet" x1="350" x2="650" y1="130" y2="130">
                <stop stopColor="#a855f7" />
                <stop offset="1" stopColor="#6366f1" />
              </linearGradient>
              <linearGradient id="service-blue" x1="380" x2="650" y1="280" y2="280">
                <stop stopColor="#60a5fa" />
                <stop offset="1" stopColor="#22d3ee" />
              </linearGradient>
              <linearGradient id="service-cyan" x1="390" x2="650" y1="420" y2="420">
                <stop stopColor="#22d3ee" />
                <stop offset="1" stopColor="#38bdf8" />
              </linearGradient>
              <linearGradient id="service-indigo" x1="350" x2="650" y1="570" y2="570">
                <stop stopColor="#818cf8" />
                <stop offset="1" stopColor="#a855f7" />
              </linearGradient>
              <filter id="connector-glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {connectorPaths.map((path, index) => (
              <motion.path
                key={path}
                d={path}
                stroke={services[index].connector}
                strokeWidth="2"
                strokeLinecap="round"
                filter="url(#connector-glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.9 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, delay: 0.25 + index * 0.12 }}
              />
            ))}

            {connectorNodes.map((node, index) => (
              <motion.g
                key={`${node.cx}-${node.cy}`}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.45, delay: 0.55 + index * 0.1 }}
              >
                <motion.circle
                  cx={node.cx}
                  cy={node.cy}
                  r="13"
                  fill={services[index].connector}
                  opacity="0.2"
                  animate={{ scale: [1, 1.35, 1], opacity: [0.18, 0.42, 0.18] }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.25 }}
                />
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r="7"
                  fill="#f8fafc"
                  stroke={services[index].connector}
                  strokeWidth="5"
                />
              </motion.g>
            ))}
          </svg>

          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="relative mx-auto flex min-h-[420px] w-full max-w-[520px] items-center justify-center lg:mx-0 lg:min-h-[560px]"
            >
              <div className="absolute h-[82%] w-[82%] rounded-full border border-indigo-500/15" />
              <div className="absolute h-[68%] w-[68%] rounded-full border border-cyan-400/15" />
              <motion.div
                className="absolute h-[74%] w-[74%] rounded-full border border-transparent border-t-violet-400/80 border-r-blue-400/70 shadow-[0_0_70px_rgba(99,102,241,0.22)]"
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute h-[61%] w-[61%] rounded-full border border-transparent border-b-cyan-300/75 border-l-violet-400/70"
                animate={{ rotate: -360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute h-[78%] w-[78%] rounded-full bg-[conic-gradient(from_120deg,transparent,rgba(99,102,241,0.35),rgba(34,211,238,0.32),transparent)] blur-md"
                animate={{ rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              />

              <div className="relative flex aspect-square w-[72%] max-w-[360px] flex-col items-center justify-center overflow-hidden rounded-full border border-white/20 bg-[#0b1020]/70 text-center shadow-[inset_0_1px_30px_rgba(255,255,255,0.08),0_0_90px_rgba(99,102,241,0.24)] backdrop-blur-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(255,255,255,0.18),transparent_28%),radial-gradient(circle_at_75%_80%,rgba(34,211,238,0.2),transparent_34%),linear-gradient(135deg,rgba(168,85,247,0.18),transparent_48%)]" />
                <motion.div
                  className="absolute inset-8 rounded-full border border-white/10"
                  animate={{ scale: [1, 1.04, 1], opacity: [0.45, 0.8, 0.45] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative flex flex-col items-center">
                  <div className="bg-gradient-to-br from-violet-400 via-indigo-500 to-cyan-400 bg-clip-text text-8xl font-black leading-none text-transparent sm:text-9xl">
                    A
                  </div>
                  <p className="-mt-1 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    antbryx
                  </p>
                  <p className="mt-3 max-w-[210px] text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/60">
                    Connected build system
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative grid gap-5"
            >
              <div className="absolute bottom-6 left-6 top-6 w-px bg-gradient-to-b from-violet-400/0 via-cyan-400/30 to-violet-400/0 lg:hidden" />

              {services.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl p-px"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-55 transition-opacity duration-300 group-hover:opacity-95`}
      />
      <div className="absolute inset-[1px] rounded-2xl bg-[rgba(11,13,24,0.88)] backdrop-blur-xl" />
      <div className="absolute inset-[1px] rounded-2xl bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.13),transparent_28%),radial-gradient(circle_at_100%_100%,rgba(99,102,241,0.18),transparent_38%)] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex flex-col gap-5 p-5 sm:p-6 md:flex-row md:items-center md:gap-7">
        <div
          className={`relative z-10 flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-xl border border-white/20 bg-gradient-to-br ${service.accent} text-white shadow-2xl ${service.glow}`}
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/80">
            Step
          </span>
          <span className="text-3xl font-bold leading-none">{service.step}</span>
        </div>

        <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-primary shadow-[inset_0_1px_18px_rgba(255,255,255,0.08)] transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/10">
          <div
            className={`absolute inset-0 rounded-full bg-gradient-to-br ${service.accent} opacity-20 blur-xl transition-opacity duration-300 group-hover:opacity-45`}
          />
          <service.icon className="relative h-9 w-9" strokeWidth={2.2} />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            {service.title}
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            {service.description}
          </p>
        </div>
      </div>
    </motion.article>
  )
}
