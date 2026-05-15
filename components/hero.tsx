"use client"

import { motion, type TargetAndTransition, type Variants } from "framer-motion"

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Stripe",
  "AWS",
  "Figma",
]

const wordAnimation: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
}

const bubbleVariants: Record<"bubble1" | "bubble2" | "bubble3" | "bubble4" | "bubble5", TargetAndTransition> = {
  bubble1: {
    x: [0, 34, -18, 0],
    y: [0, -24, 18, 0],
    rotate: [-8, -3, -12, -8],
    transition: {
      duration: 18,
      repeat: Infinity,
      ease: [0.42, 0, 0.58, 1],
    },
  },
  bubble2: {
    x: [0, -28, 16, 0],
    y: [0, 20, -26, 0],
    rotate: [11, 7, 14, 11],
    transition: {
      duration: 22,
      repeat: Infinity,
      ease: [0.42, 0, 0.58, 1],
    },
  },
  bubble3: {
    x: [0, 22, -24, 0],
    y: [0, -18, 24, 0],
    rotate: [-18, -13, -21, -18],
    transition: {
      duration: 24,
      repeat: Infinity,
      ease: [0.42, 0, 0.58, 1],
    },
  },
  bubble4: {
    x: [0, -18, 24, 0],
    y: [0, 28, -12, 0],
    rotate: [18, 24, 15, 18],
    transition: {
      duration: 26,
      repeat: Infinity,
      ease: [0.42, 0, 0.58, 1],
    },
  },
  bubble5: {
    x: [0, 16, -12, 0],
    y: [0, -22, 16, 0],
    rotate: [-6, -10, -2, -6],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: [0.42, 0, 0.58, 1],
    },
  },
}

export function Hero() {
  const headlineWords = [
    { text: "We", gradient: false },
    { text: "ship", gradient: true },
    { text: "software.", gradient: false },
  ]
  
  const line2 = [{ text: "Fast.", gradient: true }]
  
  const line3Words = [
    { text: "Built", gradient: false },
    { text: "for", gradient: false },
    { text: "retail", gradient: false },
    { text: "and", gradient: false },
    { text: "startups.", gradient: false },
  ]

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_32%,rgba(255,255,255,0.06),transparent_55%),radial-gradient(circle_at_62%_62%,rgba(61,220,110,0.08),transparent_50%),linear-gradient(180deg,#162f30_0%,#162f30_100%)]" />

      {/* Soft translucent background shapes */}
      <motion.div
        animate={bubbleVariants.bubble1}
        className="absolute left-[4%] top-[48%] h-[360px] w-[520px] rounded-[50%] border border-white/10 bg-[radial-gradient(circle_at_36%_20%,rgba(255,255,255,0.18),transparent_20%),linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.025)_52%,rgba(61,220,110,0.08))] opacity-70 shadow-[inset_18px_22px_56px_rgba(255,255,255,0.07),inset_-28px_-32px_64px_rgba(0,0,0,0.16),0_0_42px_rgba(255,255,255,0.06)] blur-[0.3px]"
      />
      <motion.div
        animate={bubbleVariants.bubble2}
        className="absolute right-[6%] top-[10%] h-[420px] w-[320px] rounded-[50%] border border-white/10 bg-[radial-gradient(circle_at_38%_16%,rgba(255,255,255,0.2),transparent_22%),linear-gradient(160deg,rgba(255,255,255,0.13),rgba(255,255,255,0.035)_54%,rgba(61,220,110,0.07))] opacity-75 shadow-[inset_18px_24px_60px_rgba(255,255,255,0.08),inset_-26px_-34px_70px_rgba(0,0,0,0.18),0_0_46px_rgba(255,255,255,0.06)] blur-[0.3px]"
      />
      <motion.div
        animate={bubbleVariants.bubble3}
        className="absolute left-[42%] top-[26%] h-[260px] w-[350px] rounded-[50%] border border-white/10 bg-[radial-gradient(circle_at_35%_18%,rgba(255,255,255,0.18),transparent_21%),linear-gradient(145deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03)_55%,rgba(61,220,110,0.08))] opacity-65 shadow-[inset_16px_22px_52px_rgba(255,255,255,0.07),inset_-24px_-30px_58px_rgba(0,0,0,0.16)] blur-[0.3px]"
      />
      <motion.div
        animate={bubbleVariants.bubble4}
        className="absolute bottom-[12%] left-[38%] h-[300px] w-[215px] rounded-[50%] border border-white/10 bg-[radial-gradient(circle_at_38%_16%,rgba(255,255,255,0.16),transparent_22%),linear-gradient(155deg,rgba(255,255,255,0.1),rgba(255,255,255,0.025)_56%,rgba(61,220,110,0.07))] opacity-58 shadow-[inset_14px_20px_48px_rgba(255,255,255,0.06),inset_-20px_-28px_56px_rgba(0,0,0,0.18)] blur-[0.3px]"
      />
      <motion.div
        animate={bubbleVariants.bubble5}
        className="absolute bottom-[18%] right-[18%] h-[420px] w-[390px] rounded-[50%] border border-white/10 bg-[radial-gradient(circle_at_36%_16%,rgba(255,255,255,0.15),transparent_22%),linear-gradient(145deg,rgba(255,255,255,0.1),rgba(255,255,255,0.025)_54%,rgba(61,220,110,0.08))] opacity-56 shadow-[inset_18px_24px_58px_rgba(255,255,255,0.06),inset_-26px_-34px_72px_rgba(0,0,0,0.17)] blur-[0.3px]"
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-[0.045]" />

      <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-center max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-12">
        <div
          className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 grid-cols-3 gap-2 xl:grid"
          aria-hidden="true"
        >
          {Array.from({ length: 8 }).map((_, index) => (
            <span
              key={index}
              className="h-3 w-3 rounded-full bg-primary shadow-[0_0_18px_rgba(125,255,138,0.5)]"
            />
          ))}
        </div>
        <div className="max-w-5xl">
          {/* Headline Line 1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-none">
            <span className="flex flex-wrap gap-x-3 sm:gap-x-4">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={wordAnimation}
                  className="text-foreground"
                >
                  {word.text}
                </motion.span>
              ))}
            </span>
          </h1>
          
          {/* Headline Line 2 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-none mt-2">
            {line2.map((word, i) => (
              <motion.span
                key={i}
                custom={i + headlineWords.length}
                initial="hidden"
                animate="visible"
                variants={wordAnimation}
                className="text-foreground"
              >
                {word.text}
              </motion.span>
            ))}
          </h1>
          
          {/* Headline Line 3 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-none mt-2">
            <span className="flex flex-wrap gap-x-3 sm:gap-x-4">
              {line3Words.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i + headlineWords.length + line2.length}
                  initial="hidden"
                  animate="visible"
                  variants={wordAnimation}
                  className="text-foreground"
                >
                  {word.text}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-8 text-[15px] text-muted-foreground max-w-2xl"
          >
            Custom software, POS, and inventory systems — delivered in weeks, not months.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="btn-base btn-primary"
            >
              Book a Discovery Call
            </a>
            <a
              href="#work"
              className="btn-base btn-ghost"
            >
              See our work
            </a>
          </motion.div>
        </div>
      </div>

      {/* Tech Stack Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="relative z-10 w-full shrink-0 border-t border-border/50 bg-[#112118]/65 backdrop-blur-sm"
      >
        <div className="overflow-hidden py-4">
          <div className="flex animate-marquee">
            {[...techStack, ...techStack].map((tech, i) => (
              <span
                key={i}
                className="mx-6 sm:mx-8 text-xs sm:text-sm text-muted-foreground whitespace-nowrap font-mono"
              >
                {tech}
              </span>
            ))}
            {[...techStack, ...techStack].map((tech, i) => (
              <span
                key={`duplicate-${i}`}
                className="mx-6 sm:mx-8 text-xs sm:text-sm text-muted-foreground whitespace-nowrap font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
