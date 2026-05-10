import Image from "next/image"
import type { ReactNode } from "react"
import { Cpu, Headphones, Monitor, Sparkles } from "lucide-react"

const supportAvatars = [
  { src: "/rifaf.jpeg", alt: "Consultant portrait" },
  { src: "/minhaj.jpeg", alt: "Consultant portrait" },
  { src: "/kasfiya.jpeg", alt: "Consultant portrait" },
  { src: "/customer-support-1.jpg", alt: "Consultant portrait" },
]

const uptimeBars = [
  42, 82, 76, 84, 70, 78, 88, 92, 74, 48, 67, 80, 86, 91, 94, 76, 82, 88, 79, 83,
]

const timelineItems = [
  { label: "Initial system audit", className: "left-[8%] top-[16%] opacity-45" },
  { label: "Strategy draft", className: "left-[23%] top-[30%]" },
  { label: "Strategy draft", className: "left-[39%] top-[28%]" },
  { label: "Feedback collection", className: "left-[39%] top-[45%]" },
  { label: "Client review", className: "left-[54%] top-[57%]" },
  { label: "Client review", className: "left-[71%] top-[72%]" },
]

export function PartnershipBenefits() {
  return (
    <section className="relative overflow-hidden border-t border-border/50 bg-background py-16 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-[0.05]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(99,102,241,0.08),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent" />
      <div className="relative mx-auto grid max-w-6xl gap-4 px-5 sm:gap-5 sm:px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        <BenefitCard
          visual={<SupportVisual />}
          title="Personalized Support"
          description="Work with dedicated consultants who understand your business goals."
        />
        <BenefitCard
          visual={<ChatVisual />}
          title="With You Every Step"
          description="From the first consultation to post-launch, we stay with you to ensure lasting success."
        />
        <BenefitCard
          visual={<ImpactVisual />}
          title="Measurable Impact"
          description="From performance gains to savings, we track progress and show ROI at every stage."
        />
        <BenefitCard
          visual={<FutureVisual />}
          title="Future-Ready Solutions"
          description="We design scalable systems that keep you competitive tomorrow."
        />
        <BenefitCard
          className="lg:col-span-2"
          visual={<TimelineVisual />}
          title="Transparent Process"
          description="You'll always know what's happening with clear timelines, regular updates, and open communication."
        />
      </div>
    </section>
  )
}

function BenefitCard({
  visual,
  title,
  description,
  className = "",
}: {
  visual: ReactNode
  title: string
  description: string
  className?: string
}) {
  return (
    <article
      className={`group relative min-h-[235px] overflow-hidden rounded-[28px] border border-border/60 bg-card/40 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_22px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl saturate-150 sm:min-h-[270px] sm:p-6 lg:min-h-[330px] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_52%_34%,rgba(255,255,255,0.12),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_46%)] opacity-90" />
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/28 to-transparent" />
      <div className="relative flex h-full flex-col justify-between gap-6">
        <div className="min-h-[105px] sm:min-h-[130px] lg:min-h-[145px]">{visual}</div>
        <div>
          <h2 className="text-[1.2rem] font-semibold leading-tight text-white sm:text-[1.35rem] lg:text-2xl">
            {title}
          </h2>
          <p className="mt-3 max-w-[34rem] text-sm leading-relaxed text-white/86 sm:text-[0.98rem] lg:text-base">
            {description}
          </p>
        </div>
      </div>
    </article>
  )
}

function SupportVisual() {
  return (
    <div className="flex h-full items-center justify-center pt-4 sm:pt-5">
      <div className="relative flex -space-x-3 sm:-space-x-4">
        {supportAvatars.map((avatar, index) => (
          <div
            key={avatar.src}
            className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-[#111827] bg-white/10 shadow-[0_8px_22px_rgba(0,0,0,0.45)] sm:h-12 sm:w-12 lg:h-14 lg:w-14"
            style={{ zIndex: supportAvatars.length - index }}
          >
            <Image src={avatar.src} alt={avatar.alt} fill sizes="56px" className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}

function ChatVisual() {
  return (
    <div className="relative mx-auto h-[160px] max-w-[210px] pt-3 sm:h-[170px] sm:max-w-[235px] lg:h-[185px]">
      <div className="absolute left-1.5 top-3 h-10 w-10 overflow-hidden rounded-full border border-white/20 bg-white/10 shadow-[0_0_26px_rgba(255,255,255,0.18)] sm:left-2 sm:top-4">
        <Image src="/kasfiya.jpeg" alt="Consultant portrait" fill sizes="40px" className="object-cover" />
      </div>
      <p className="absolute left-12 top-2 text-[9px] font-medium text-white/90 sm:left-14 sm:top-3 sm:text-[10px]">
        AntBryx - 10:15 AM
      </p>
      <div className="absolute left-10 top-7 max-w-[170px] rounded-full border border-white/15 bg-[#171d28]/95 px-3 py-1.5 text-[11px] text-white shadow-[0_10px_34px_rgba(255,255,255,0.08)] sm:left-12 sm:top-8 sm:max-w-[195px] sm:px-4 sm:py-2 sm:text-xs">
        Hello, Sir! Your design draft is ready.
      </div>
      <div className="absolute left-10 top-[75px] max-w-[170px] rounded-full border border-white/14 bg-[#171d28]/92 px-3 py-1.5 text-[11px] text-white sm:left-14 sm:top-[85px] sm:max-w-[195px] sm:px-4 sm:py-2 sm:text-xs">
        Want feedback before next step?
      </div>
      <div className="absolute left-10 top-[135px] flex h-8 w-11 items-center justify-center gap-1 rounded-full border border-white/15 bg-[#171d28]/92 sm:left-12 sm:top-[148px] sm:h-9 sm:w-12">        
      <span className="h-1.5 w-1.5 rounded-full bg-white/45" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/65" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/45" />
      </div>
    </div>
  )
}

function ImpactVisual() {
  return (
    <div className="relative h-[130px] pt-4 sm:h-[145px] sm:pt-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-white/92">Uptime Trends</p>
        <div className="flex rounded-full border border-white/18 bg-black/20 p-0.5 text-[9px] text-white/72">
          {["D", "W", "M", "Y"].map((item, index) => (
            <span
              key={item}
              className={`grid h-4 w-5 place-items-center rounded-full ${index === 3 ? "bg-white/15 text-white" : ""}`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-5 flex h-12 items-end gap-1.5 sm:mt-6 sm:h-14">
        {uptimeBars.map((height, index) => (
          <span
            key={`${height}-${index}`}
            className={`w-1.5 sm:w-2 rounded-full ${index === 12 || index === 13 ? "bg-cyan-400/75" : "bg-gradient-to-t from-white/55 to-white/85"}`}
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
      <p className="ml-auto mt-3 max-w-[105px] text-[9px] leading-tight text-white/42">
        99.8% average uptime maintained across all client systems.
      </p>
    </div>
  )
}

function FutureVisual() {
  return (
    <div className="relative mx-auto h-[130px] max-w-[220px] sm:h-[145px] sm:max-w-[245px]">
      <div className="absolute inset-x-8 top-1/2 h-px bg-white/10" />
      <div className="absolute left-1/2 top-6 h-[110px] w-px -translate-x-1/2 bg-white/10" />
      <div className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl border border-white/18 bg-white/10 shadow-[0_0_36px_rgba(255,255,255,0.2)] sm:h-16 sm:w-16">
        <div className="h-8 w-8 rotate-45 bg-gradient-to-br from-white via-slate-200 to-slate-500 shadow-[inset_0_0_12px_rgba(255,255,255,0.42)] sm:h-9 sm:w-9" />
      </div>
      <FutureNode className="left-5 top-[58px]" icon={<Sparkles className="h-4 w-4" />} />
      <FutureNode className="right-5 top-[58px]" icon={<Monitor className="h-4 w-4" />} />
      <FutureNode className="left-[58px] top-4 opacity-45" icon={<Cpu className="h-3.5 w-3.5" />} />
      <FutureNode className="right-[58px] bottom-3 opacity-45" icon={<Headphones className="h-3.5 w-3.5" />} />
    </div>
  )
}

function FutureNode({ className, icon }: { className: string; icon: ReactNode }) {
  return (
    <div
      className={`absolute grid h-7 w-7 place-items-center rounded-full border border-white/12 bg-white/8 text-white shadow-[0_0_22px_rgba(255,255,255,0.12)] sm:h-8 sm:w-8 ${className}`}
    >
      {icon}
    </div>
  )
}

function TimelineVisual() {
  return (
    <div className="relative h-[130px] overflow-hidden sm:h-[145px]">
      <div className="absolute inset-x-2 top-4 flex h-[96px] justify-between sm:h-[105px]">
        {Array.from({ length: 10 }).map((_, index) => (
          <span key={index} className="h-full w-px bg-gradient-to-b from-transparent via-white/14 to-transparent" />
        ))}
      </div>
      {timelineItems.map((item) => (
        <div
          key={`${item.label}-${item.className}`}
          className={`absolute rounded-md border border-white/14 bg-[#151b25]/95 px-2.5 py-1 text-[10px] text-white shadow-[0_8px_26px_rgba(0,0,0,0.35)] before:absolute before:bottom-0 before:left-0 before:top-0 before:w-1 before:rounded-l-md before:bg-cyan-400 sm:px-3 sm:py-1.5 sm:text-xs ${item.className}`}
        >
          {item.label}
        </div>
      ))}
    </div>
  )
}
