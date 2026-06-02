import Image from "next/image";
import { Cpu, Gamepad2, Home, Sparkles, TabletSmartphone } from "lucide-react";

import { MobileCarousel } from "@/components/mobile-carousel";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/site";

const projectCards = [
  {
    title: "Robot car project",
    icon: Cpu,
    accent: "from-cobalt/25 to-cyan/25"
  },
  {
    title: "Scratch game",
    icon: Gamepad2,
    accent: "from-gold/25 to-orange-200/40"
  },
  {
    title: "Arduino smart home",
    icon: Home,
    accent: "from-blue-100 to-cyan/20"
  },
  {
    title: "Website project",
    icon: TabletSmartphone,
    accent: "from-slate-100 to-blue-100"
  },
  {
    title: "AI mini project",
    icon: Sparkles,
    accent: "from-cobalt/20 to-gold/20"
  }
].map((card) => ({
  ...card,
  image: projects.find((project) => project.title === card.title)?.image ?? "/logo.png"
}));

export function GallerySection() {
  const renderProjectCard = (index: number) => {
    const card = projectCards[index];
    const Icon = card.icon;
    const featured = index === 0 || index === 2;

    return (
      <article
        className={`group relative overflow-hidden rounded-[32px] border border-line bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-glow ${
          featured ? "md:min-h-[280px]" : "md:min-h-[240px]"
        }`}
      >
        <div className="absolute inset-x-6 top-6 bottom-28 overflow-hidden rounded-[24px]">
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-contain transition duration-300 group-hover:scale-[1.03]"
            sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
          />
        </div>
        <div className="absolute inset-0 bg-white/30" />
        <div
          className={`absolute inset-0 bg-gradient-to-br ${card.accent} opacity-80 transition duration-300 group-hover:opacity-100`}
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent" />
        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 text-cobalt shadow-md backdrop-blur">
            <Icon className="h-6 w-6" />
          </div>
          <div className="mt-16">
            <span className="inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 backdrop-blur">
              Showcase
            </span>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-ink">
              {card.title}
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600">
              A polished example project area ready to be replaced with
              real student work, event highlights, or competition builds.
            </p>
          </div>
        </div>
      </article>
    );
  };

  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Gallery / Projects"
          title="Examples of the kinds of projects students can proudly create"
          description="These placeholder project cards represent the practical outcomes AccioTech learners can explore across coding, robotics, electronics, and AI."
        />

        <MobileCarousel ariaLabel="Student projects carousel" className="mt-14">
          {projectCards.map((card, index) => {
            return (
              <div key={card.title}>{renderProjectCard(index)}</div>
            );
          })}
        </MobileCarousel>

        <div className="mt-14 hidden gap-6 md:grid md:grid-cols-2 xl:grid-cols-[1.1fr_0.9fr_0.9fr]">
          {projectCards.map((card, index) => {
            return (
              <Reveal key={card.title} delay={index * 0.07}>
                {renderProjectCard(index)}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
