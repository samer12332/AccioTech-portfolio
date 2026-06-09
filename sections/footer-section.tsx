import Image from "next/image";

import { navigationLinks, programs } from "@/data/site";

export function FooterSection() {
  return (
    <footer className="border-t border-slate-200 bg-ink py-14 text-white">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.1fr_0.6fr_0.8fr_0.8fr]">
        <div>
          <a href="#home" className="flex items-center gap-3">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white p-1">
              <Image src="/logo.png" alt="AccioTech logo" width={54} height={54} className="h-[54px] w-[54px] rounded-xl object-cover" />
            </div>
            <div>
              <div className="text-lg font-semibold">AccioTech</div>
              <div className="text-xs uppercase tracking-[0.28em] text-blue-100">
                From Imagination to Innovation
              </div>
            </div>
          </a>

          <p className="mt-5 max-w-md text-sm leading-7 text-blue-100/85">
            AccioTech is an educational technology company teaching kids and
            teenagers programming, robotics, STEM, and future technology skills.
            Launching in Egypt with a vision for regional expansion.
          </p>
          <a
            href="https://www.linkedin.com/in/samer-yousry-88921a228/"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/15"
          >
            Developed by Samer Yousry
          </a>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-blue-100">
            {navigationLinks.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">
            Programs
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-blue-100">
            {programs.slice(0, 5).map((item) => (
              <li key={item.title}>{item.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">
            Contact
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-blue-100">
            <li>Ahmed Maher, Sami El-Barbary Street, opposite 6 October Street (Triago), Mansoura, Egypt</li>
            <li>aacciotech@gmail.com</li>
            <li>+20 10 40637299</li>
            <li>WhatsApp available</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
