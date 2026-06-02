import Image from "next/image";
import { ArrowRight, Bot, CircuitBoard, Sparkles, Star } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { stats } from "@/data/site";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-10 sm:pb-20 sm:pt-14">
      <div className="absolute inset-0 -z-10 bg-hero-grid bg-[size:42px_42px] opacity-50" />
      <div className="absolute left-0 top-14 -z-10 h-72 w-72 rounded-full bg-cyan/20 blur-3xl" />
      <div className="absolute right-0 top-20 -z-10 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />

      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div className="max-w-3xl">
            <div className="section-tag">
              <Sparkles className="h-4 w-4" />
              Starting in Egypt. Expanding across the Middle East and GCC.
            </div>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              From Imagination to Innovation
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              AccioTech is an educational technology company teaching kids and
              teenagers programming, robotics, STEM, and future technology skills.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#programs"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-navy"
              >
                Explore Programs
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-white px-6 py-3.5 text-sm font-semibold text-cobalt transition hover:border-cobalt hover:bg-blue-50"
              >
                Contact Us
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((item, index) => (
                <div key={item.label} className="glass-card gold-ring p-5">
                  <div className="text-xl font-semibold text-ink">{item.value}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative mx-auto flex max-w-[620px] justify-center">
            <div className="absolute left-4 top-12 hidden rounded-3xl border border-blue-200/80 bg-white/80 px-4 py-3 text-sm font-medium text-slate-600 shadow-card backdrop-blur md:block">
              <div className="flex items-center gap-2">
                <CircuitBoard className="h-4 w-4 text-cobalt" />
                Coding + Robotics + STEM
              </div>
            </div>
            <div className="absolute bottom-12 right-0 hidden rounded-3xl border border-orange-200/80 bg-white/85 px-4 py-3 text-sm font-medium text-slate-600 shadow-card backdrop-blur md:block">
              <div className="flex items-center gap-2">
                <Bot className="h-4 w-4 text-gold" />
                Project-based learning
              </div>
            </div>

            <div className="relative glass-card gold-ring w-full overflow-hidden rounded-[40px] p-4 shadow-glow">
              <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
              <div className="relative overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_top,_rgba(77,201,255,0.24),transparent_32%),linear-gradient(145deg,#081530_0%,#10306f_55%,#1c8eff_100%)] p-6 sm:p-8">
                <div className="absolute -right-16 top-10 h-40 w-40 rounded-full bg-gold/30 blur-3xl" />
                <div className="absolute -left-14 bottom-6 h-44 w-44 rounded-full bg-cyan/25 blur-3xl" />
                <div className="absolute inset-0 bg-[linear-gradient(transparent,rgba(255,255,255,0.05)),radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.25),transparent_8%),radial-gradient(circle_at_80%_20%,rgba(245,159,11,0.5),transparent_7%),radial-gradient(circle_at_78%_78%,rgba(77,201,255,0.28),transparent_9%)]" />
                <div className="relative z-10">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur">
                      <Star className="h-4 w-4 text-gold" />
                      Premium learning journeys
                    </div>
                    <div className="hidden rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70 sm:block">
                      Future Skills
                    </div>
                  </div>

                  <div className="mx-auto flex max-w-[440px] items-center justify-center">
                    <div className="animate-float rounded-[34px] border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
                      <Image
                        src="/logo.png"
                        alt="AccioTech logo artwork"
                        width={520}
                        height={520}
                        priority
                        className="h-auto w-full max-w-[420px] rounded-[28px] object-contain"
                      />
                    </div>
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    {["Programming", "Robotics", "Innovation"].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-center text-sm font-medium text-white/90 backdrop-blur"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
