import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { programs } from "@/data/site";

export function ProgramsSection() {
    return (
        <section id="programs" className="py-20 sm:py-24">
            <div className="section-shell">
                <SectionHeading
                    eyebrow="Programs"
                    title="Learning pathways designed for curious kids and ambitious teens"
                    description="Each program combines engaging instruction, guided practice, and real projects so students can build confidence as they advance."
                />

                <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {programs.map((program, index) => {
                        return (
                            <Reveal key={program.title} delay={index * 0.06}>
                                <article className="glass-card group h-full rounded-[30px] p-7 transition duration-300 hover:-translate-y-2 hover:shadow-glow">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-cobalt text-white shadow-lg">
                                        <Image
                                            src={program.image}
                                            alt={`${program.title} logo`}
                                            width={56}
                                            height={56}
                                            className="h-9 w-9 object-contain"
                                        />
                                    </div>
                                    <div className="mt-6 flex items-start justify-between gap-4">
                                        <h3 className="text-xl font-semibold tracking-tight text-ink">
                                            {program.title}
                                        </h3>
                                        <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-300 transition group-hover:text-cobalt" />
                                    </div>
                                    <p className="mt-4 text-sm leading-7 text-slate-600">
                                        {program.description}
                                    </p>
                                </article>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
