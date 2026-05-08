"use client"

import {
  motion,
  useMotionValue,
  useSpring,
  type TargetAndTransition,
  type Variants,
} from "framer-motion"
import { useEffect, useState } from "react"

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

// Floating blob animation variants with longer duration and crossing paths
const blobVariants: Record<"blob1" | "blob2" | "blob3", TargetAndTransition> = {
  blob1: {
    x: [0, 120, -80, 60, 0],
    y: [0, -60, 80, -40, 0],
    scale: [1, 1.1, 0.95, 1.05, 1],
    transition: {
      duration: 15,
      repeat: Infinity,
      ease: [0.42, 0, 0.58, 1],
    },
  },
  blob2: {
    x: [0, -100, 60, -40, 0],
    y: [0, 80, -60, 30, 0],
    scale: [1, 0.95, 1.1, 1, 1],
    transition: {
      duration: 18,
      repeat: Infinity,
      ease: [0.42, 0, 0.58, 1],
    },
  },
  blob3: {
    x: [0, 60, -120, 80, 0],
    y: [0, -40, -20, 60, 0],
    scale: [1, 1.05, 1, 0.95, 1],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: [0.42, 0, 0.58, 1],
    },
  },
}

export function Hero() {
  const [mounted, setMounted] = useState(false)
  
  // Mouse position with spring physics for smooth following
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Smoother, more responsive spring config
  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 }
  const smoothMouseX = useSpring(mouseX, springConfig)
  const smoothMouseY = useSpring(mouseY, springConfig)

  useEffect(() => {
    setMounted(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

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
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      
      {/* Animated gradient blobs - larger, more visible, crossing paths */}
      <motion.div
        animate={blobVariants.blob1}
        className="absolute top-1/4 -left-32 w-[700px] h-[700px] rounded-full"
        style={{ 
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, rgba(139, 92, 246, 0.2) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <motion.div
        animate={blobVariants.blob2}
        className="absolute top-1/3 -right-20 w-[800px] h-[800px] rounded-full"
        style={{ 
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.55) 0%, rgba(59, 130, 246, 0.25) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <motion.div
        animate={blobVariants.blob3}
        className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
        style={{ 
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(168, 85, 247, 0.15) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Mouse-follow glow - larger and more visible */}
      {mounted && (
        <motion.div
          className="pointer-events-none fixed z-10"
          style={{
            width: 500,
            height: 500,
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.35) 0%, rgba(99, 102, 241, 0.15) 30%, transparent 60%)",
            filter: "blur(60px)",
            x: smoothMouseX,
            y: smoothMouseY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      )}

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-[0.07]" />

      <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-center max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-12">
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
                  className={word.gradient ? "gradient-text" : "text-foreground"}
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
                className="gradient-text"
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
            className="mt-8 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl"
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
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-primary text-primary-foreground rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:bg-primary/90"
            >
              Book a Discovery Call
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium border border-border text-foreground rounded-lg hover:bg-secondary transition-colors duration-200"
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
        className="relative z-10 w-full shrink-0 border-t border-border/50 bg-[#0a0a0a]/50 backdrop-blur-sm"
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
