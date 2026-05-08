"use client"

import { motion, type Variants } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand your business, users, and goals.",
  },
  {
    number: "02",
    title: "Design",
    description: "Map the architecture and user flows.",
  },
  {
    number: "03",
    title: "Build",
    description: "Ship production-grade code, fast.",
  },
  {
    number: "04",
    title: "Deploy",
    description: "Launch, support, and iterate.",
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants: Variants = {
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

export function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 relative border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-16"
        >
          How we work
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Desktop horizontal timeline */}
          <div className="hidden lg:block">
            {/* Connecting line */}
            <div className="absolute top-8 left-8 right-8 h-px bg-border" />
            
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div key={step.number} variants={itemVariants} className="relative">
                  {/* Circle */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center mb-6">
                    <span className="text-sm font-bold text-primary font-mono">
                      {step.number}
                    </span>
                  </div>
                  
                  {/* Arrow connector (except last) */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-8 left-16 w-full h-px">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-primary/50 rotate-45" />
                    </div>
                  )}
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="lg:hidden relative">
            {/* Connecting line */}
            <div className="absolute top-8 bottom-8 left-8 w-px bg-border" />
            
            <div className="space-y-12">
              {steps.map((step) => (
                <motion.div key={step.number} variants={itemVariants} className="relative flex gap-6">
                  {/* Circle */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                    <span className="text-sm font-bold text-primary font-mono">
                      {step.number}
                    </span>
                  </div>
                  
                  <div className="pt-3">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
