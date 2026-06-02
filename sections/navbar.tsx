"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { navigationLinks } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/75 backdrop-blur-xl">
      <div className="section-shell flex min-h-[84px] items-center justify-between gap-6">
        <a href="#home" className="flex items-center gap-3" aria-label="AccioTech home">
          <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white p-1 shadow-md">
            <Image src="/logo.png" alt="AccioTech logo" width={54} height={54} className="h-[54px] w-[54px] rounded-xl object-cover" />
          </div>
          <div>
            <div className="text-lg font-semibold tracking-tight text-ink">AccioTech</div>
            <div className="text-xs uppercase tracking-[0.32em] text-slate-500">
              From Imagination to Innovation
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navigationLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-cobalt"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-navy"
          >
            Join Now
          </a>
        </div>

        <button
          type="button"
          className="inline-flex rounded-full border border-slate-200 bg-white p-3 text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
          >
            <nav className="section-shell flex flex-col gap-2 py-5" aria-label="Mobile">
              {navigationLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-mist hover:text-cobalt"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 rounded-2xl bg-ink px-4 py-3 text-center text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Join Now
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
