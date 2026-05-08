"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState, type CSSProperties, type ReactNode } from "react"

const CUBE_COUNT = 64
const LOAD_DURATION_MS = 3500
const EXIT_DELAY_MS = 500

function CubeField({ side }: { side: "left" | "right" }) {
  return (
    <div className={`preloader-cube-field ${side === "right" ? "scale-x-[-1]" : ""}`} aria-hidden>
      <div className="preloader-cubes">
        {Array.from({ length: CUBE_COUNT }).map((_, index) => {
          const row = Math.floor(index / 8)
          const column = index % 8

          return (
            <div
              className="preloader-cube"
              key={index}
              style={
                {
                  "--cube-left": `${column * 20}px`,
                  "--cube-top": `${row * 20}px`,
                  "--cube-delay": `${(row + column + 1) * 50}ms`,
                } as CSSProperties
              }
            >
              {Array.from({ length: 6 }).map((__, sideIndex) => (
                <div className="preloader-cube-side" key={sideIndex} />
              ))}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function Preloader({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false)
    }, LOAD_DURATION_MS + EXIT_DELAY_MS)

    return () => window.clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="antbryx-preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
          >
            <div className="absolute inset-0 grid-pattern opacity-[0.06]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.16),transparent_42%)]" />

            <div className="relative z-10 flex w-full max-w-5xl items-center justify-center gap-4 px-6 sm:gap-8 lg:gap-12">
              <div className="hidden shrink-0 sm:block">
                <CubeField side="left" />
              </div>

              <div className="relative flex min-w-0 items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className="relative select-none"
                  aria-label="Loading antbryx"
                  role="status"
                >
                  <span className="preloader-logo-base">antbryx</span>
                  <motion.span
                    className="preloader-logo-fill"
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    animate={{ clipPath: "inset(0 0% 0 0)" }}
                    transition={{ duration: 3, ease: [0.76, 0, 0.24, 1] }}
                  >
                    antbryx
                  </motion.span>
                  <motion.span
                    className="preloader-wave-edge"
                    initial={{ left: "0%" }}
                    animate={{ left: "100%" }}
                    transition={{ duration: 3, ease: [0.76, 0, 0.24, 1] }}
                  />
                </motion.div>
              </div>

              <div className="hidden shrink-0 sm:block">
                <CubeField side="right" />
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  )
}
