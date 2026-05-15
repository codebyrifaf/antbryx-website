"use client"

import Image from "next/image"
import { motion, type Variants } from "framer-motion"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const pillars = [
  {
    number: "01",
    title: "Discovery & Analysis",
    description:
      "We deep-dive into your business goals, user needs, and market landscape to define a clear roadmap.",
    image: "/why-us/1.png",
  },
  {
    number: "02",
    title: "Feasibility Assessment",
    description:
      "Our engineers evaluate technical constraints and ROI to ensure the project is viable and impactful.",
    image: "/why-us/2.png",
  },
  {
    number: "03",
    title: "Architecture Design",
    description:
      "We design a scalable system structure, choosing the right stack to handle your future growth.",
    image: "/why-us/3.png",
  },
  {
    number: "04",
    title: "Tech Prototyping",
    description:
      "We build rapid prototypes to validate core features and user flows before full-scale development.",
    image: "/why-us/4.png",
  },
  {
    number: "05",
    title: "Agile Development",
    description:
      "Transparent, sprint-based coding with regular demos so you see progress in real-time.",
    image: "/why-us/5.png",
  },
  {
    number: "06",
    title: "Deployment & Training",
    description:
      "We handle the production launch and provide hands-on training to ensure your team is set for success.",
    image: "/why-us/6.png",
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 25,
    },
  },
}

const springTransition = {
  type: "spring",
  stiffness: 180,
  damping: 25,
} as const

export function WhyAntbryx() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPaused, setIsAutoPaused] = useState(false)
  const [mobileActiveIndex, setMobileActiveIndex] = useState<number | null>(0)

  useEffect(() => {
    if (isAutoPaused) return

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % pillars.length)
    }, 2000)

    return () => window.clearInterval(timer)
  }, [isAutoPaused])

  return (
    <section className="theme-light relative overflow-hidden border-t border-border/50 bg-background section-pad">

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={springTransition}
          className="mx-auto mb-8 max-w-4xl text-center"
        >
          <h2 className="text-[42px] font-bold leading-tight text-foreground sm:text-[48px] lg:text-[52px]">
            Why AntBryx?
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
            Antbryx helps you navigate technology and build a powerful online presence for growth.
          </p>
        </motion.div>

        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          onMouseEnter={() => setIsAutoPaused(true)}
          onMouseLeave={() => setIsAutoPaused(false)}
          className="hidden h-[450px] w-full items-stretch gap-4 overflow-hidden lg:flex"
        >
          {pillars.map((pillar, index) => {
            const isActive = activeIndex === index

            return (
              <motion.div
                key={pillar.number}
                layout
                variants={itemVariants}
                animate={{ flex: isActive ? 5 : 1 }}
                transition={springTransition}
                onHoverStart={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                tabIndex={0}
                className={cn(
                  "relative min-w-0 cursor-pointer overflow-hidden rounded-[10px] border border-[rgba(0,0,0,0.08)] bg-card outline-none",
                )}
              >
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_42%)]" />

                <motion.div
                  animate={{ opacity: isActive ? 0 : 1 }}
                  transition={{ duration: 0.12 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="flex h-full flex-col items-center justify-between py-7">
                    <span className="font-mono text-5xl font-bold leading-none text-muted-foreground/70 [-webkit-text-stroke:1px_rgba(90,138,106,0.35)]">
                      {pillar.number}
                    </span>
                    <div className="[writing-mode:vertical-rl] rotate-180 text-center">
                      <span className="text-xl font-medium text-foreground">
                        {pillar.title}
                      </span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 18,
                  }}
                  transition={{
                    ...springTransition,
                    delay: isActive ? 0.1 : 0,
                  }}
                  className="pointer-events-none relative flex h-full min-w-[520px] flex-col justify-end overflow-hidden p-8"
                >
                  <motion.div
                    animate={{
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{
                      ...springTransition,
                      delay: isActive ? 0.13 : 0,
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={pillar.image}
                      alt={`${pillar.title} process preview`}
                      fill
                      sizes="540px"
                      className="object-cover opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/60 to-background/90" />
                  </motion.div>

                  <div className="relative z-10 max-w-md">
                    <motion.p
                      animate={{
                        opacity: isActive ? 1 : 0,
                        y: isActive ? 0 : 14,
                      }}
                      transition={{
                        ...springTransition,
                        delay: isActive ? 0.16 : 0,
                      }}
                      className="mb-4 font-mono text-4xl font-bold text-foreground"
                    >
                      {pillar.number}
                    </motion.p>
                    <motion.h3
                      animate={{
                        opacity: isActive ? 1 : 0,
                        y: isActive ? 0 : 14,
                      }}
                      transition={{
                        ...springTransition,
                        delay: isActive ? 0.2 : 0,
                      }}
                      className="text-[24px] font-semibold leading-tight text-foreground"
                    >
                      {pillar.title}
                    </motion.h3>
                    <motion.p
                      animate={{
                        opacity: isActive ? 1 : 0,
                        y: isActive ? 0 : 14,
                      }}
                      transition={{
                        ...springTransition,
                        delay: isActive ? 0.24 : 0,
                      }}
                      className="mt-5 text-[15px] leading-relaxed text-muted-foreground"
                    >
                      {pillar.description}
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex h-auto w-full flex-col items-stretch gap-4 overflow-hidden lg:hidden"
        >
          {pillars.map((pillar, index) => {
            const isActive = mobileActiveIndex === index

            return (
              <motion.div
                key={pillar.number}
                layout
                variants={itemVariants}
                className={cn(
                  "overflow-hidden rounded-[10px] border border-[rgba(0,0,0,0.08)] bg-card",
                )}
              >
                <button
                  type="button"
                  onClick={() =>
                    setMobileActiveIndex(isActive ? null : index)
                  }
                  className="flex w-full items-center gap-4 p-5 text-left"
                >
                  <span
                    className={cn(
                      "font-mono text-2xl font-bold text-foreground/30",
                      isActive && "text-primary",
                    )}
                  >
                    {pillar.number}
                  </span>
                  <span className="text-lg font-semibold text-foreground">
                    {pillar.title}
                  </span>
                </button>

                <motion.div
                  layout
                  initial={false}
                  animate={{
                    height: isActive ? "auto" : 0,
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={springTransition}
                  className="overflow-hidden"
                >
                  <div className="relative overflow-hidden px-5 pb-5 pt-24">
                    <div className="absolute inset-0">
                      <Image
                        src={pillar.image}
                        alt={`${pillar.title} process preview`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 540px"
                        className="object-cover opacity-85"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/60 to-background/90" />
                    </div>
                    <p className="relative z-10 text-base leading-relaxed text-foreground">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
