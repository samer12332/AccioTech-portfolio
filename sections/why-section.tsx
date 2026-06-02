import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { reasons } from "@/data/site";

export function WhySection() {
  return (
    <section id="why-acciotech" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Why AccioTech"
          title="Building future innovators across the region"
          description="We combine educational structure with modern technology experiences so learners in Egypt and beyond feel supported, challenged, and excited to keep building."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <Reveal key={reason.title} delay={index * 0.05}>
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
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
