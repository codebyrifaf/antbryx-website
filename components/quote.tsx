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
      "We started Antbryx to build custom software that’s practical and useful from day one. Our goal is to help teams move faster with systems that fit how they work.",
  },
  {
    name: "Minhajul Bhuiyan",
    role: "Co-Founder",
    image: "/minhaj.jpeg",
    quote:
      "We build custom software with a clear focus: make it useful, make it fit, and make it easy to work with—so teams can spend less time adapting to tools and more time getting things done.",
  },
]

const ROTATION_INTERVAL_MS = 5000

export function Quote() {
  const [activeIndex, setActiveIndex] = useState(0)
  const safeIndex = members.length
    ? Math.min(activeIndex, members.length - 1)
    : 0
  const activeMember = members[safeIndex]

  useEffect(() => {
    if (members.length === 0) return
    if (activeIndex >= members.length) {
      setActiveIndex(0)
    }
  }, [activeIndex])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % members.length)
    }, ROTATION_INTERVAL_MS)

    return () => window.clearInterval(timer)
  }, [])

  if (!activeMember) return null

  return (
    <section className="theme-light relative overflow-hidden border-t border-border/50 bg-background section-pad">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.45 }}
          className="mb-10 max-w-3xl"
        >
          <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            The people shaping us
          </h2>
        </motion.div>

        <div className="relative overflow-hidden rounded-[16px] border border-border/60 bg-card p-6 shadow-[0_22px_60px_rgba(0,0,0,0.08)] sm:p-8 lg:p-10">

          <AnimatePresence mode="wait">
            <motion.div
              key={activeMember.name}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="relative grid items-center gap-6 lg:grid-cols-[240px_1fr]"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-border/60 bg-card">
                  <Image
                    src={activeMember.image}
                    alt={`${activeMember.name}, ${activeMember.role} at antbryx`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg font-semibold text-foreground">
                    {activeMember.name}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {activeMember.role}, antbryx
                  </p>
                </div>
              </div>

              <blockquote className="text-xl font-semibold leading-snug text-foreground sm:text-2xl lg:text-3xl">
                "{activeMember.quote}"
              </blockquote>
            </motion.div>
          </AnimatePresence>

          <div className="relative mt-6 flex items-center gap-2">
            {members.map((member, index) => (
              <button
                key={member.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show quote from ${member.name}`}
                aria-current={activeIndex === index ? "true" : undefined}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-7 bg-primary shadow-[0_0_16px_rgba(61,220,110,0.45)]"
                    : "bg-black/10 hover:bg-black/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
