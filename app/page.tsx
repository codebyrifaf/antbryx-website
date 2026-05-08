import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Quote } from "@/components/quote"
import { Trust } from "@/components/trust"
import { WhyAntbryx } from "@/components/why-antbryx"
import { CaseStudy } from "@/components/case-study"
import { Process } from "@/components/process"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <Quote />
      <Trust />
      <WhyAntbryx />
      <CaseStudy />
      <Process />
      <Contact />
      <Footer />
    </main>
  )
}
