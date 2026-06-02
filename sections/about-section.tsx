import { Orbit, Sparkles, Target } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const pillars = [
  {
    title: "Creativity-first STEM learning",
    description:
      "AccioTech blends coding, robotics, and design thinking so kids and teens can turn ideas into real outcomes.",
    icon: Sparkles
  },
  {
    title: "Launching in Egypt with a regional vision",
    description:
      "AccioTech starts in Egypt and is designed to grow across Saudi Arabia, the GCC, and the wider region over time.",
    icon: Orbit
  },
  {
    title: "Confidence through problem solving",
    description:
      "Students strengthen logic, collaboration, resilience, and innovation through guided project work.",
    icon: Target
  }
] as const;

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About AccioTech"
          title="A modern STEM education company for imaginative young builders"
          description="AccioTech is an educational technology company teaching kids and teenagers programming, robotics, STEM, and future technology skills through creative, practical, and trusted learning experiences."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <article className="glass-card gold-ring h-full rounded-[32px] p-8 sm:p-10">
              <p className="text-lg leading-8 text-slate-600">
                We believe young people learn best when education feels inspiring,
                relevant, and hands-on. That is why AccioTech focuses on
                programming, robotics, STEM, creativity, and project-based
                learning that develops both technical fluency and confident
                problem solving.
              </p>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Launching in Egypt with a vision for regional expansion,
                AccioTech supports families, schools, camps, and future-focused
                programs while helping students build future skills through real
                projects, innovation, and purposeful learning.
              </p>
            </article>
          </Reveal>

          <div className="grid gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <Reveal key={pillar.title} delay={index * 0.08}>
                  <article className="glass-card rounded-[28px] p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl bg-gradient-to-br from-cobalt to-cyan p-3 text-white shadow-glow">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-ink">{pillar.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-600">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
