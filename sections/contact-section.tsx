"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, MessageCircle, PhoneCall } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/aacciotech/"
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61589980097245"
  },
  {
    label: "X / Twitter",
    href: "https://x.com/acciotechyc?s=11"
  }
] as const;

export function ContactSection() {
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) {
      return;
    }

    const formData = new FormData(form);
    const payload = {
      parentContactName: formData.get("parentContactName"),
      studentAgeGroup: formData.get("studentAgeGroup"),
      email: formData.get("email"),
      programInterest: formData.get("programInterest"),
      message: formData.get("message")
    };

    try {
      setSubmitState("submitting");
      setErrorMessage("");

      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const responseBody = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;

        throw new Error(responseBody?.error || "Unable to send your inquiry right now.");
      }

      setSubmitState("success");
      form.reset();
    } catch (error) {
      setSubmitState("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your inquiry right now."
      );
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Let families, schools, and partners start the conversation easily"
          description="This static contact area is ready for future integration with forms, WhatsApp, and social channels while already presenting a polished lead-capture experience."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <aside className="overflow-hidden rounded-[34px] bg-[linear-gradient(145deg,#07142f_0%,#10306f_58%,#1c8eff_100%)] p-8 text-white shadow-glow sm:p-10">
              <span className="section-tag border-white/20 bg-white/10 text-white">
                Join the journey
              </span>
              <h3 className="mt-6 text-3xl font-semibold tracking-tight">
                Premium educational technology with a welcoming human touch
              </h3>
              <p className="mt-5 text-base leading-8 text-blue-100">
                Reach AccioTech for enrollment inquiries, school partnerships,
                camps, robotics programs, and future collaboration opportunities
                as we launch in Egypt and grow across the region.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/10 p-4">
                  <MessageCircle className="mt-1 h-5 w-5 text-gold" />
                  <div>
                    <div className="font-semibold">WhatsApp</div>
                    <div className="text-sm text-blue-100">+201017306593</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/10 p-4">
                  <Mail className="mt-1 h-5 w-5 text-gold" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-sm text-blue-100">sameryousry99@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/10 p-4">
                  <MapPin className="mt-1 h-5 w-5 text-gold" />
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-sm text-blue-100">Egypt (Future Expansion Across GCC)</div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">
                  Social
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  {socials.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <a
                href="https://wa.me/201017306593"
                className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
              >
                <PhoneCall className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </aside>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass-card rounded-[34px] p-7 sm:p-9">
              <form
                className="grid gap-5"
                aria-label="Contact form"
                method="post"
                onSubmit={handleSubmit}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-sm font-medium text-slate-700">Parent / Contact Name</span>
                    <input
                      name="parentContactName"
                      type="text"
                      placeholder="Your name"
                      autoComplete="name"
                      required
                      className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-cobalt focus:ring-4 focus:ring-blue-100"
                    />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-sm font-medium text-slate-700">Student Age Group</span>
                    <select
                      name="studentAgeGroup"
                      defaultValue=""
                      required
                      className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-cobalt focus:ring-4 focus:ring-blue-100"
                    >
                      <option value="" disabled>
                        Choose age group
                      </option>
                      <option value="6 - 8">6 - 8</option>
                      <option value="9 - 12">9 - 12</option>
                      <option value="13 - 16">13 - 16</option>
                      <option value="17+">17+</option>
                    </select>
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-sm font-medium text-slate-700">Email</span>
                    <input
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      autoComplete="email"
                      inputMode="email"
                      required
                      className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-cobalt focus:ring-4 focus:ring-blue-100"
                    />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-sm font-medium text-slate-700">Program Interest</span>
                    <select
                      name="programInterest"
                      defaultValue=""
                      required
                      className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-cobalt focus:ring-4 focus:ring-blue-100"
                    >
                      <option value="" disabled>
                        Select a program
                      </option>
                      <option value="Programming courses">Programming courses</option>
                      <option value="Robotics courses">Robotics courses</option>
                      <option value="STEM workshops">STEM workshops</option>
                      <option value="Summer camps">Summer camps</option>
                      <option value="Robotics competitions">Robotics competitions</option>
                    </select>
                  </label>
                </div>

                <label className="grid gap-2">
                  <span className="text-sm font-medium text-slate-700">Message</span>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Tell us what you are looking for"
                    autoComplete="off"
                    required
                    className="rounded-[24px] border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-cobalt focus:ring-4 focus:ring-blue-100"
                  />
                </label>

                {submitState === "success" ? (
                  <p className="text-sm font-medium text-emerald-700">
                    Thanks for your interest. Your inquiry has been sent successfully.
                  </p>
                ) : null}

                {submitState === "error" ? (
                  <p className="text-sm font-medium text-rose-600">
                    {errorMessage}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={submitState === "submitting"}
                  className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-navy"
                >
                  {submitState === "submitting" ? "Sending..." : "Send Inquiry"}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
