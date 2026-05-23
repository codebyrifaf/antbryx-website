"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"

type ServiceIcon = "software" | "pos" | "inventory" | "apps"

export type ServiceItem = {
  title: string
  description: string
  icon: ServiceIcon
}

type ServicesProps = {
  items?: ServiceItem[]
  accentClassName?: string
  animationDelayStep?: number
}

const defaultServices: ServiceItem[] = [
  {
    title: "Custom Software",
    description:
      "Tailored applications designed around your business logic, not forced into templates.",
    icon: "software",
  },
  {
    title: "POS Systems",
    description:
      "Modern point-of-sale systems for retail — fast, reliable, and built for real-world use.",
    icon: "pos",
  },
  {
    title: "Inventory Management",
    description:
      "Track stock, automate reordering, and sync across locations in real time.",
    icon: "inventory",
  },
  {
    title: "Web & Mobile Apps",
    description:
      "Production-ready web and mobile experiences, built to scale from day one.",
    icon: "apps",
  },
]

export function Services({
  items = defaultServices,
  accentClassName = "text-primary",
  animationDelayStep = 0.12,
}: ServicesProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="services"
      className="relative overflow-hidden border-t border-border/50 bg-[#162f30] py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.04),transparent_36%),radial-gradient(circle_at_86%_20%,rgba(61,220,110,0.04),transparent_40%),linear-gradient(180deg,#162f30_0%,#122627_100%)]" />
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-[0.035]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <motion.header
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-2xl text-center sm:mb-12"
        >
          <p className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
            Services
          </p>
          <h2 className="text-[42px] font-bold leading-tight text-foreground sm:text-[48px] lg:text-[52px]">
            What we offer
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
            Custom software, POS, inventory, and web + mobile systems built to
            scale with your business.
          </p>
        </motion.header>

        <div className="relative mx-auto max-w-6xl rounded-[28px] border border-white/10 bg-[#071312]/92 p-4 shadow-[0_28px_90px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl sm:p-5 lg:p-8">
          <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_26%_20%,rgba(255,255,255,0.045),transparent_36%),radial-gradient(circle_at_76%_36%,rgba(61,220,110,0.05),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_42%)]" />
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/22 to-transparent" />

          <div className="relative flex flex-col gap-4">
            {items.map((service, index) => (
              <motion.article
                key={service.title}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: prefersReducedMotion ? 0 : index * animationDelayStep,
                  ease: "easeOut",
                }}
                className="group relative"
              >
                <ServiceCard service={service} accentClassName={accentClassName} />
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.6,
            delay: prefersReducedMotion ? 0 : items.length * animationDelayStep,
            ease: "easeOut",
          }}
          className="mt-10 flex justify-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/[0.045] px-6 py-3 text-sm font-medium text-white/88 transition duration-300 hover:border-white/28 hover:bg-white/[0.085] hover:text-white"
          >
            More about services
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  accentClassName,
  isDimmed = false,
}: {
  service: ServiceItem
  accentClassName: string
  isDimmed?: boolean
}) {
  return (
    <div
      className={`relative grid min-h-[200px] gap-7 overflow-hidden rounded-[14px] border border-white/10 bg-[#162f30]/95 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)] transition duration-300 group-hover:border-white/16 group-hover:shadow-[0_24px_70px_rgba(0,0,0,0.32)] sm:p-7 lg:grid-cols-[1fr_320px] lg:items-center lg:p-8 ${
        isDimmed ? "lg:[&:not(:hover)]:opacity-90" : ""
      }`}
    >
      <div className="relative">
        <h3 className="text-2xl font-semibold leading-tight text-white lg:text-3xl">
          {service.title}
        </h3>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/78 sm:text-base">
          {service.description}
        </p>
      </div>

      <div className="relative hidden h-50 items-center justify-center lg:flex" aria-hidden="true">
        <ServiceIllustration icon={service.icon} accentClassName={accentClassName} />
      </div>
    </div>
  )
}

function ServiceIllustration({
  icon,
  accentClassName,
}: {
  icon: ServiceIcon
  accentClassName: string
}) {
  if (icon === "software") return <SoftwareSvg accentClassName={accentClassName} />
  if (icon === "pos") return <PosSvg accentClassName={accentClassName} />
  if (icon === "inventory") return <InventorySvg accentClassName={accentClassName} />
  return <AppsSvg accentClassName={accentClassName} />
}

function SoftwareSvg({ accentClassName }: { accentClassName: string }) {
  return (
    <svg viewBox="0 0 320 256" className="h-full w-full text-white/70" fill="none" preserveAspectRatio="xMidYMid slice">
      <rect x="34" y="42" width="252" height="156" rx="18" className="stroke-current opacity-20" />
      <rect x="56" y="66" width="92" height="42" rx="10" className="stroke-current opacity-50" />
      <rect x="170" y="66" width="88" height="42" rx="10" className="stroke-current opacity-28" />
      <rect x="56" y="130" width="202" height="42" rx="10" className="stroke-current opacity-28" />
      <path d="M96 86l-16 13 16 13M118 112l18-26M202 86l16 13-16 13" className={`${accentClassName} stroke-current`} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M148 87h22M148 98h38M80 151h62M158 151h66" className="stroke-current opacity-45" strokeWidth="3" strokeLinecap="round" />
      <path d="M104 108v22M214 108v22" className={`${accentClassName} stroke-current opacity-80`} strokeWidth="2" strokeDasharray="4 7" />
      <circle cx="104" cy="130" r="5" className={`${accentClassName} fill-current`} />
      <circle cx="214" cy="130" r="5" className={`${accentClassName} fill-current opacity-75`} />
    </svg>
  )
}

function PosSvg({ accentClassName }: { accentClassName: string }) {
  return (
    <svg viewBox="0 0 320 256" className="h-full w-full text-white/70" fill="none" preserveAspectRatio="xMidYMid slice">
      <rect x="82" y="48" width="156" height="94" rx="16" className="stroke-current opacity-34" />
      <rect x="104" y="68" width="112" height="46" rx="8" className={`${accentClassName} stroke-current opacity-80`} />
      <path d="M106 142l-18 48h144l-18-48" className="stroke-current opacity-42" strokeWidth="3" strokeLinejoin="round" />
      <rect x="72" y="190" width="176" height="32" rx="10" className="stroke-current opacity-38" />
      <path d="M108 206h52M184 206h20" className="stroke-current opacity-45" strokeWidth="3" strokeLinecap="round" />
      <rect x="236" y="78" width="44" height="72" rx="10" className="stroke-current opacity-24" />
      <path d="M248 98h20M248 116h20M248 134h10" className={`${accentClassName} stroke-current opacity-85`} strokeWidth="3" strokeLinecap="round" />
      <circle cx="128" cy="92" r="5" className={`${accentClassName} fill-current`} />
      <circle cx="146" cy="92" r="5" className={`${accentClassName} fill-current opacity-65`} />
      <circle cx="164" cy="92" r="5" className={`${accentClassName} fill-current opacity-45`} />
    </svg>
  )
}

function InventorySvg({ accentClassName }: { accentClassName: string }) {
  return (
    <svg viewBox="0 0 320 256" className="h-full w-full text-white/70" fill="none" preserveAspectRatio="xMidYMid slice">
      <path d="M56 84h208M56 138h208M56 192h208" className="stroke-current opacity-22" strokeWidth="4" strokeLinecap="round" />
      <path d="M68 62v150M252 62v150" className="stroke-current opacity-26" strokeWidth="4" strokeLinecap="round" />
      <rect x="82" y="92" width="56" height="38" rx="6" className="stroke-current opacity-45" />
      <rect x="152" y="92" width="74" height="38" rx="6" className={`${accentClassName} stroke-current opacity-78`} />
      <rect x="96" y="146" width="76" height="38" rx="6" className="stroke-current opacity-34" />
      <rect x="188" y="146" width="44" height="38" rx="6" className="stroke-current opacity-45" />
      <path d="M100 111h18M172 111h34M118 165h30M204 165h12" className="stroke-current opacity-45" strokeWidth="3" strokeLinecap="round" />
      <path d="M236 86l16 16-16 16M84 202h42M144 202h78" className={`${accentClassName} stroke-current opacity-85`} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="252" cy="102" r="5" className={`${accentClassName} fill-current`} />
    </svg>
  )
}

function AppsSvg({ accentClassName }: { accentClassName: string }) {
  return (
    <svg viewBox="0 0 320 256" className="h-full w-full text-white/70" fill="none" preserveAspectRatio="xMidYMid slice">
      <rect x="54" y="62" width="150" height="104" rx="14" className="stroke-current opacity-34" />
      <path d="M54 92h150" className="stroke-current opacity-24" strokeWidth="3" />
      <rect x="220" y="54" width="58" height="148" rx="16" className={`${accentClassName} stroke-current opacity-80`} />
      <path d="M240 184h18M78 118h42M78 140h84M224 82h50M236 106h26M236 126h18" className="stroke-current opacity-45" strokeWidth="3" strokeLinecap="round" />
      <path d="M156 170c20 18 50 18 70-2M188 64c20-18 44-16 58 4" className={`${accentClassName} stroke-current opacity-70`} strokeWidth="3" strokeLinecap="round" strokeDasharray="5 8" />
      <circle cx="156" cy="170" r="5" className={`${accentClassName} fill-current`} />
      <circle cx="226" cy="168" r="5" className={`${accentClassName} fill-current opacity-70`} />
      <circle cx="248" cy="202" r="4" className="fill-current opacity-40" />
    </svg>
  )
}
