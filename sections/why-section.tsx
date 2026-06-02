import { MobileCarousel } from "@/components/mobile-carousel";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { reasons } from "@/data/site";

export function WhySection() {
  const renderReasonCard = (index: number) => {
    const reason = reasons[index];
    const Icon = reason.icon;

    return (
      <article className="rounded-[30px] border border-line bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-blue-200">
        <div className="flex items-start gap-4">
          <div className="rounded-2xl bg-blue-50 p-3 text-cobalt">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-ink">{reason.title}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              {reason.description}
            </p>
          </div>
        </div>
      </article>
    );
  };

  return (
    <section id="why-acciotech" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Why AccioTech"
          title="Building future innovators across the region"
          description="We combine educational structure with modern technology experiences so learners in Egypt and beyond feel supported, challenged, and excited to keep building."
        />

        <MobileCarousel ariaLabel="Why AccioTech carousel" className="mt-14">
          {reasons.map((reason, index) => {
            return (
              <div key={reason.title}>{renderReasonCard(index)}</div>
            );
          })}
        </MobileCarousel>

        <div className="mt-14 hidden gap-5 md:grid md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason, index) => {
            return (
              <Reveal key={reason.title} delay={index * 0.05}>
                {renderReasonCard(index)}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
