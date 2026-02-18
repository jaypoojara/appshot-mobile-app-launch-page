"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Download the App",
    description:
      "Grab the app from the App Store or Google Play. It takes less than 30 seconds to install — lighter than most apps on your phone.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
    screen: (
      <div className="flex h-full flex-col items-center justify-center bg-gradient-to-b from-[var(--accent-light)] to-white p-6">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </motion.div>
        <div className="mt-4 text-sm font-bold text-[var(--foreground)]">Installing...</div>
        <div className="mt-3 h-2 w-32 rounded-full bg-[var(--surface)]">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--purple)]"
          />
        </div>
      </div>
    ),
  },
  {
    number: "02",
    title: "Create Your Account",
    description:
      "Sign up in under a minute with your email, Google, or Apple ID. No credit card required — start with a free plan that actually lets you do things.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    screen: (
      <div className="flex h-full flex-col bg-gradient-to-b from-[var(--purple-light)] to-white p-6 pt-16">
        <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--purple)] shadow-lg" />
        <div className="mx-auto mb-6 h-3 w-20 rounded bg-[var(--foreground)]/10" />
        <div className="space-y-3">
          <div className="rounded-xl bg-white p-3 shadow-sm">
            <div className="mb-1 text-[9px] text-[var(--muted)]">Email</div>
            <div className="h-2.5 w-3/4 rounded bg-[var(--foreground)]/8" />
          </div>
          <div className="rounded-xl bg-white p-3 shadow-sm">
            <div className="mb-1 text-[9px] text-[var(--muted)]">Password</div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="h-2 w-2 rounded-full bg-[var(--foreground)]/15" />
              ))}
            </div>
          </div>
          <div className="rounded-xl bg-[var(--accent)] p-3 text-center">
            <span className="text-[11px] font-semibold text-white">Create Account</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Start Using It",
    description:
      "That's it. No tutorials, no onboarding flows that take forever. The app is intuitive by design — just open it and start getting things done.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    screen: (
      <div className="flex h-full flex-col items-center justify-center bg-gradient-to-b from-[var(--accent)]/5 to-white p-6">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200 }}
          className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--accent)]/10"
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </motion.div>
        <div className="text-sm font-bold text-[var(--foreground)]">You&apos;re all set!</div>
        <div className="mt-1 text-[10px] text-[var(--muted)]">Welcome aboard</div>
      </div>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 md:py-28 bg-[var(--surface)]">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
            How It Works
          </span>
          <h2 className="mb-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Up and running in{" "}
            <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--purple)] bg-clip-text text-transparent">
              three steps
            </span>
          </h2>
          <p className="mx-auto max-w-lg text-lg text-[var(--muted)]">
            No complicated setup. No learning curve. Just download, sign up, and go.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-20 md:space-y-28">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`grid items-center gap-12 md:grid-cols-2 md:gap-16 ${
                i % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              {/* Text */}
              <div className={i % 2 === 1 ? "md:order-2 md:text-left" : ""}>
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)]">
                    {step.icon}
                  </div>
                  <span className="font-[family-name:var(--font-display)] text-5xl font-bold text-[var(--foreground)]/[0.06]">
                    {step.number}
                  </span>
                </div>
                <h3 className="mb-3 font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--foreground)]">
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed text-[var(--muted)]">{step.description}</p>
              </div>

              {/* Phone mockup */}
              <div className={`flex justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="w-[240px]">
                  <div className="relative mx-auto w-[240px] rounded-[2.6rem] border-[5px] border-[#3D3530] bg-[#3D3530] shadow-[0_20px_60px_rgba(41,37,36,0.2)]">
                    <div className="absolute top-2.5 left-1/2 z-20 h-[24px] w-[85px] -translate-x-1/2 rounded-full bg-[#1C1917]" />
                    <div className="relative overflow-hidden rounded-[2.2rem] bg-[var(--surface)]">
                      <div className="aspect-[9/19.5]">{step.screen}</div>
                    </div>
                    <div className="absolute bottom-1.5 left-1/2 z-20 h-[3px] w-[100px] -translate-x-1/2 rounded-full bg-white/20" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
