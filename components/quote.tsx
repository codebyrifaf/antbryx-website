"use client"

import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

const members = [
  {
    name: "Rifaf Rahman",
    role: "Founder",
    image: "/rifaf.jpeg",
    quote:
      "We started antbryx to make custom software feel direct, practical, and useful from day one. Our vision is to help ambitious teams move faster with systems that actually fit how they work.",
  },
  {
    name: "Minhajul Bhuiyan",
    role: "Co-Founder",
    image: "/minhaj.jpeg",
    quote:
      "Great technology should remove friction, not add another layer of complexity. We build with clarity, speed, and long-term reliability so every product can grow with the business behind it.",
  },
  {
    name: "Kasfiya Ahmed",
    role: "Intern",
    image: "/kasfiya.jpeg",
    quote:
      "The future of antbryx is about learning quickly, designing thoughtfully, and turning ideas into tools people trust. Every project is a chance to make software feel more human.",
  },
]

const ROTATION_INTERVAL_MS = 5000

export function Quote() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeMember = members[activeIndex]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % members.length)
    }, ROTATION_INTERVAL_MS)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="relative overflow-hidden border-t border-border/50 bg-[#050505] py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-[0.035]" />
      <div className="pointer-events-none absolute left-1/4 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-8 top-10 h-[360px] w-[360px] rounded-full bg-cyan-500/8 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.45 }}
            className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.28em] text-primary"
          >
            Quote
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            The vision behind{" "}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-300 bg-clip-text text-transparent">
              antbryx
            </span>
          </motion.h2>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-px shadow-[0_0_80px_rgba(99,102,241,0.12)] backdrop-blur-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_30%,rgba(168,85,247,0.18),transparent_28%),radial-gradient(circle_at_86%_58%,rgba(34,211,238,0.12),transparent_34%)]" />
          <div className="relative min-h-[360px] overflow-hidden rounded-3xl bg-[#070707]/86 px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
            <div className="pointer-events-none absolute -left-4 top-8 text-[12rem] font-black leading-none text-primary/90 opacity-90 sm:text-[15rem]">
              “
            </div>
            <div className="pointer-events-none absolute right-8 top-4 hidden text-[18rem] font-black leading-none text-white/[0.035] lg:block">
              ”
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeMember.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="relative grid min-h-[260px] items-center gap-10 lg:grid-cols-[360px_1fr]"
              >
                <div className="flex items-center gap-5 sm:gap-7">
                  <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-4 border-white bg-secondary shadow-[0_0_36px_rgba(99,102,241,0.3)] sm:h-32 sm:w-32">
                    <Image
                      src={activeMember.image}
                      alt={`${activeMember.name}, ${activeMember.role} at antbryx`}
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary sm:text-2xl">
                      {activeMember.name}
                    </h3>
                    <p className="mt-2 text-sm text-foreground/80 sm:text-base">
                      {activeMember.role}, antbryx
                    </p>
                  </div>
                </div>

                <blockquote className="max-w-3xl text-2xl font-semibold leading-snug tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                  “{activeMember.quote}”
                </blockquote>
              </motion.div>
            </AnimatePresence>

            <div className="relative mt-8 flex items-center justify-center gap-3 lg:justify-end">
              {members.map((member, index) => (
                <button
                  key={member.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show quote from ${member.name}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-8 bg-primary shadow-[0_0_18px_rgba(99,102,241,0.75)]"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
