import { ArrowRight } from "lucide-react";

import { MobileCarousel } from "@/components/mobile-carousel";
import { Reveal } from "@/components/reveal";
import { journeySteps } from "@/data/site";

export function JourneySection() {
  const renderJourneyCard = (index: number) => {
    const step = journeySteps[index];

    return (
      <article className="rounded-[28px] border border-white/15 bg-white/10 p-6 backdrop-blur">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">
            0{index + 1}
          </span>
          {index < journeySteps.length - 1 ? (
            <ArrowRight className="hidden h-5 w-5 text-white/50 lg:block" />
          ) : null}
        </div>
        <h3 className="mt-6 text-2xl font-semibold">{step.title}</h3>
        <p className="mt-4 text-sm leading-7 text-blue-100">{step.description}</p>
      </article>
    );
  };

  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#081530_0%,#10306f_48%,#1b8dff_100%)] px-6 py-12 text-white shadow-glow sm:px-10 lg:px-14 lg:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white">
              Learning Journey
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              A four-step experience that grows confidence and innovation
            </h2>
            <p className="mt-5 text-base leading-8 text-blue-100 sm:text-lg">
              Our approach helps students move from curiosity to real capability
              through a guided progression of exploration, instruction, building,
              and creative expression.
            </p>
          </div>

          <MobileCarousel ariaLabel="Learning journey carousel" className="mt-14">
            {journeySteps.map((step, index) => (
              <div key={step.title}>{renderJourneyCard(index)}</div>
            ))}
          </MobileCarousel>

          <div className="mt-14 hidden gap-6 md:grid lg:grid-cols-4">
            {journeySteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.08}>
                {renderJourneyCard(index)}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
