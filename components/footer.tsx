"use client"

import { motion } from "framer-motion"
import { Facebook, Linkedin, Mail } from "lucide-react"
import { useState, type ReactNode } from "react"

const quickLinks = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
]

/** Standard WhatsApp logo (phone in speech bubble), currentColor for theme/hover */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={20}
      height={20}
      className={className}
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const socialLinks: {
  href: string
  label: string
  ariaLabel: string
  external: boolean
  icon: ReactNode
}[] = [
  {
    href: "https://www.facebook.com/antbryx/",
    label: "Facebook",
    ariaLabel: "Facebook — antbryx",
    external: true,
    icon: <Facebook size={20} />,
  },
  {
    href: "#",
    label: "LinkedIn",
    ariaLabel: "LinkedIn (coming soon)",
    external: false,
    icon: <Linkedin size={20} />,
  },
  {
    href: "https://wa.me/8801875602306",
    label: "WhatsApp",
    ariaLabel: "WhatsApp — chat with antbryx",
    external: true,
    icon: <WhatsAppIcon />,
  },
  {
    href: "mailto:antbryx@gmail.com",
    label: "Email",
    ariaLabel: "Email antbryx@gmail.com",
    external: false,
    icon: <Mail size={20} />,
  },
]

function SocialButton({
  href,
  icon,
  label,
  ariaLabel,
  external,
}: {
  href: string
  icon: ReactNode
  label: string
  ariaLabel: string
  external: boolean
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative">
      <a
        href={href}
        aria-label={ariaLabel}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-11 h-11 flex items-center justify-center rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 hover:scale-105"
      >
        {icon}
      </a>
      {/* Tooltip */}
      <motion.span
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 4 }}
        transition={{ duration: 0.15 }}
        className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-medium bg-secondary text-foreground rounded pointer-events-none whitespace-nowrap"
      >
        {label}
      </motion.span>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
        >
          {/* Brand */}
          <div>
            <a href="#" className="text-xl font-bold text-foreground">
              antbryx
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              Software, shipped fast.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <SocialButton
                  key={social.label}
                  href={social.href}
                  icon={social.icon}
                  label={social.label}
                  ariaLabel={social.ariaLabel}
                  external={social.external}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground text-center">
            &copy; 2026 antbryx. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
