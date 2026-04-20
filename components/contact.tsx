"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const projectTypes = [
  "Custom Software",
  "POS",
  "Inventory",
  "Web/Mobile App",
  "Other",
] as const

type SubmissionStatus = "idle" | "submitting" | "success" | "error"

const EMAIL_REGEX = /^\S+@\S+$/

function isClientFormValid(name: string, email: string, message: string): boolean {
  return (
    name.trim() !== "" &&
    email.trim() !== "" &&
    message.trim() !== "" &&
    EMAIL_REGEX.test(email.trim())
  )
}

export function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [projectType, setProjectType] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<SubmissionStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const successResetRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (successResetRef.current) clearTimeout(successResetRef.current)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isClientFormValid(name, email, message)) {
      setStatus("error")
      setErrorMessage("Please fill in all required fields with a valid email.")
      return
    }

    setErrorMessage("")
    setStatus("submitting")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          projectType: projectType.trim(),
          message: message.trim(),
        }),
      })

      let data: unknown = null
      try {
        data = await res.json()
      } catch {
        data = null
      }

      const errText =
        typeof data === "object" &&
        data !== null &&
        "error" in data &&
        typeof (data as { error: unknown }).error === "string"
          ? (data as { error: string }).error
          : "Something went wrong. Please try again."

      if (res.ok && typeof data === "object" && data !== null && "success" in data && (data as { success: unknown }).success === true) {
        setStatus("success")
        setName("")
        setEmail("")
        setProjectType("")
        setMessage("")
        setErrorMessage("")
        if (successResetRef.current) clearTimeout(successResetRef.current)
        successResetRef.current = setTimeout(() => {
          setStatus("idle")
          successResetRef.current = null
        }, 5000)
        return
      }

      setStatus("error")
      setErrorMessage(errText)
    } catch {
      setStatus("error")
      setErrorMessage("Something went wrong. Please try again.")
    }
  }

  const submitDisabled = status === "submitting" || status === "success"

  let buttonLabel = "Book a Discovery Call"
  if (status === "submitting") buttonLabel = "Sending..."
  else if (status === "success") buttonLabel = "Sent ✓"

  return (
    <section id="contact" className="py-24 lg:py-32 relative border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6"
          >
            {"Let's build something."}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            {"Book a discovery call. We'll talk about your project — no sales pitch, no commitment."}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto"
        >
          <div className="relative p-8 lg:p-10 bg-card rounded-2xl border border-border">
            {/* Subtle glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

            <form onSubmit={handleSubmit} className="relative space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                  placeholder="you@company.com"
                />
              </div>

              {/* Project Type */}
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Select a project type
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {status === "error" && errorMessage ? (
                <p className="text-center text-sm text-destructive/90" role="alert">
                  {errorMessage}
                </p>
              ) : null}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitDisabled}
                className="w-full px-6 py-3 text-base font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
              >
                {buttonLabel}
              </button>

              {status === "success" ? (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-green-400/90"
                >
                  Thanks — we&apos;ll be in touch within 24 hours.
                </motion.p>
              ) : null}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
