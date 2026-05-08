import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Trust } from "@/components/trust"
import { WhyAntbryx } from "@/components/why-antbryx"
import { CaseStudy } from "@/components/case-study"
import { Process } from "@/components/process"
import { Quote } from "@/components/quote"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <WhyAntbryx />
      <CaseStudy />
      <Process />
      <Quote />
      <Trust />
      <Contact />
      <Footer />
    </main>
  )
}
