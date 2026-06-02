import { Quote } from "lucide-react";

import { MobileCarousel } from "@/components/mobile-carousel";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/data/site";

export function TestimonialsSection() {
  const renderTestimonialCard = (index: number) => {
    const testimonial = testimonials[index];

    return (
      <figure className="glass-card h-full rounded-[30px] p-7">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-cobalt">
          <Quote className="h-5 w-5" />
        </div>
        <blockquote className="mt-6 text-base leading-8 text-slate-600">
          "{testimonial.quote}"
        </blockquote>
        <figcaption className="mt-8">
          <div className="text-base font-semibold text-ink">{testimonial.name}</div>
          <div className="text-sm text-slate-500">{testimonial.role}</div>
        </figcaption>
      </figure>
    );
  };

  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Testimonials"
          title="Early impressions that reflect trust, inspiration, and real engagement"
          description="These placeholder testimonials show the tone and credibility space for future parent, student, and partner feedback."
        />

        <MobileCarousel ariaLabel="Testimonials carousel" className="mt-14">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.name}>{renderTestimonialCard(index)}</div>
          ))}
        </MobileCarousel>

        <div className="mt-14 hidden gap-6 md:grid lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.08}>
              {renderTestimonialCard(index)}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
