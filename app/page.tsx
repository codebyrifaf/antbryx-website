import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { WhyAntbryx } from "@/components/why-antbryx"
import { CaseStudy } from "@/components/case-study"
import { Process } from "@/components/process"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Preloader } from "@/components/preloader"

export default function Home() {
  return (
    <Preloader>
      <main className="min-h-screen bg-background">
        <Navigation />
        <Hero />
        <Services />
        <WhyAntbryx />
        <CaseStudy />
        <Process />
        <Contact />
        <Footer />
      </main>
    </Preloader>
  )
}
