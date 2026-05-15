import type { ReactNode } from "react"
import { Cpu, Headphones, MessageCircle, Monitor, Sparkles, UserCheck } from "lucide-react"

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
    <section className="relative overflow-hidden border-t border-border/50 bg-background section-pad">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-[0.05]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />
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
      className={`group relative min-h-[235px] overflow-hidden rounded-[10px] border border-white/12 bg-white/5 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-lg sm:min-h-[270px] sm:p-6 lg:min-h-[330px] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_55%)] opacity-80" />
      <div className="relative flex h-full flex-col justify-between gap-6">
        <div className="min-h-[105px] sm:min-h-[130px] lg:min-h-[145px]">{visual}</div>
        <div>
          <h2 className="text-[20px] font-semibold leading-tight text-white sm:text-[22px] lg:text-[24px]">
            {title}
          </h2>
          <p className="mt-3 max-w-[34rem] text-[15px] leading-relaxed text-white/90">
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
      <div className="relative grid h-16 w-16 place-items-center rounded-full border border-white/18 bg-white/10 text-white shadow-[0_0_36px_rgba(255,255,255,0.18),0_14px_34px_rgba(0,0,0,0.34)] sm:h-20 sm:w-20 lg:h-24 lg:w-24">
        <div className="absolute inset-2 rounded-full border border-white/10" />
        <UserCheck className="relative h-7 w-7 sm:h-9 sm:w-9 lg:h-10 lg:w-10" strokeWidth={1.8} />
      </div>
    </div>
  )
}

function ChatVisual() {
  return (
    <div className="relative mx-auto h-[160px] max-w-[210px] pt-3 sm:h-[170px] sm:max-w-[235px] lg:h-[185px]">
      <div className="absolute left-1.5 top-3 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white shadow-[0_0_26px_rgba(255,255,255,0.18)] sm:left-2 sm:top-4">
        <MessageCircle className="h-5 w-5" strokeWidth={1.8} />
      </div>
      <p className="absolute left-12 top-2 text-[9px] font-medium text-white sm:left-14 sm:top-3 sm:text-[10px]">
        AntBryx - 10:15 AM
      </p>
      <div className="absolute left-10 top-7 max-w-[170px] rounded-full border border-white/15 bg-[#0f2526]/95 px-3 py-1.5 text-[11px] text-white shadow-[0_10px_34px_rgba(85,212,155,0.08)] sm:left-12 sm:top-8 sm:max-w-[195px] sm:px-4 sm:py-2 sm:text-xs">
        Hello, Sir! Your design draft is ready.
      </div>
      <div className="absolute left-10 top-[75px] max-w-[170px] rounded-full border border-white/14 bg-[#0f2526]/92 px-3 py-1.5 text-[11px] text-white sm:left-14 sm:top-[85px] sm:max-w-[195px] sm:px-4 sm:py-2 sm:text-xs">
        Want feedback before next step?
      </div>
      <div className="absolute left-10 top-[135px] flex h-8 w-11 items-center justify-center gap-1 rounded-full border border-white/15 bg-[#0f2526]/92 sm:left-12 sm:top-[148px] sm:h-9 sm:w-12">        
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
        <div className="flex rounded-full border border-white/18 bg-black/20 p-0.5 text-[9px] text-white">
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
            className={`w-1.5 sm:w-2 rounded-full ${index === 12 || index === 13 ? "bg-white/70" : "bg-gradient-to-t from-white/40 to-white/70"}`}
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
      <p className="ml-auto mt-3 max-w-[105px] text-[9px] leading-tight text-white/80">
        99.8% average uptime maintained across all client systems.
      </p>
    </div>
  )
}

function FutureVisual() {
  return (
    <div className="relative mx-auto h-[130px] max-w-[220px] sm:h-[145px] sm:max-w-[245px]">
      <div className="absolute inset-x-8 top-1/2 h-px bg-white/12" />
      <div className="absolute left-1/2 top-6 h-[110px] w-px -translate-x-1/2 bg-white/12" />
      <div className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl border border-white/18 bg-white/10 sm:h-16 sm:w-16">
        <div className="h-8 w-8 rotate-45 bg-gradient-to-br from-white via-white/80 to-white/40 shadow-[inset_0_0_12px_rgba(255,255,255,0.32)] sm:h-9 sm:w-9" />
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
          className={`absolute rounded-md border border-white/14 bg-[#112118] px-2.5 py-1 text-[10px] text-white before:absolute before:bottom-0 before:left-0 before:top-0 before:w-1 before:rounded-l-md before:bg-white/40 sm:px-3 sm:py-1.5 sm:text-xs ${item.className}`}
        >
          {item.label}
        </div>
      ))}
    </div>
  )
}
