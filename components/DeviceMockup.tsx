"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface DeviceMockupProps {
  type?: "iphone" | "android";
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

export default function DeviceMockup({
  type = "iphone",
  children,
  className = "",
  animate = true,
}: DeviceMockupProps) {
  const Wrapper = animate ? motion.div : "div";
  const wrapperProps = animate
    ? {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
      }
    : {};

  if (type === "iphone") {
    return (
      <Wrapper {...wrapperProps} className={`relative ${className}`}>
        {/* iPhone Frame */}
        <div className="relative mx-auto w-[280px] rounded-[3rem] border-[6px] border-[#5C524A] bg-[#5C524A] shadow-[0_20px_60px_rgba(41,37,36,0.3),0_0_0_1px_rgba(41,37,36,0.1)]">
          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 z-20 h-[28px] w-[100px] -translate-x-1/2 rounded-full bg-[#44403C]" />

          {/* Screen */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[var(--surface)]">
            <div className="aspect-[9/19.5]">{children}</div>
          </div>

          {/* Bottom bar indicator */}
          <div className="absolute bottom-2 left-1/2 z-20 h-[4px] w-[120px] -translate-x-1/2 rounded-full bg-white/20" />
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper {...wrapperProps} className={`relative ${className}`}>
      {/* Android Frame */}
      <div className="relative mx-auto w-[270px] rounded-[2rem] border-[5px] border-[#5C524A] bg-[#5C524A] shadow-[0_20px_60px_rgba(41,37,36,0.25),0_0_0_1px_rgba(41,37,36,0.1)]">
        {/* Punch hole camera */}
        <div className="absolute top-4 left-1/2 z-20 h-[14px] w-[14px] -translate-x-1/2 rounded-full bg-[#44403C] ring-2 ring-[#57534E]" />

        {/* Screen */}
        <div className="relative overflow-hidden rounded-[1.6rem] bg-[var(--surface)]">
          <div className="aspect-[9/19]">{children}</div>
        </div>
      </div>
    </Wrapper>
  );
}

/* Placeholder screen contents */
export function AppScreenHome() {
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-[var(--accent-light)] to-white p-6 pt-14">
      <div className="mb-4 h-5 w-20 rounded-full bg-[var(--accent)]/20" />
      <div className="mb-2 h-4 w-36 rounded bg-[var(--foreground)]/10" />
      <div className="mb-6 h-3 w-28 rounded bg-[var(--foreground)]/5" />

      {/* Cards */}
      <div className="space-y-3">
        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <div className="mb-2 flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-[var(--accent)]/15" />
            <div className="h-3 w-24 rounded bg-[var(--foreground)]/10" />
          </div>
          <div className="h-2 w-full rounded bg-[var(--foreground)]/5" />
          <div className="mt-1 h-2 w-3/4 rounded bg-[var(--foreground)]/5" />
        </div>
        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <div className="mb-2 flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-[var(--gold)]/15" />
            <div className="h-3 w-20 rounded bg-[var(--foreground)]/10" />
          </div>
          <div className="h-2 w-full rounded bg-[var(--foreground)]/5" />
          <div className="mt-1 h-2 w-2/3 rounded bg-[var(--foreground)]/5" />
        </div>
        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <div className="mb-2 flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-[var(--accent)]/10" />
            <div className="h-3 w-28 rounded bg-[var(--foreground)]/10" />
          </div>
          <div className="h-16 w-full rounded-xl bg-gradient-to-r from-[var(--accent)]/10 to-[var(--gold)]/10" />
        </div>
      </div>

      {/* Bottom nav */}
      <div className="mt-auto flex justify-around pt-4">
        <div className="h-6 w-6 rounded bg-[var(--accent)]/20" />
        <div className="h-6 w-6 rounded bg-[var(--foreground)]/5" />
        <div className="h-6 w-6 rounded bg-[var(--foreground)]/5" />
        <div className="h-6 w-6 rounded bg-[var(--foreground)]/5" />
      </div>
    </div>
  );
}

export function AppScreenDashboard() {
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-[var(--gold-light)] to-white p-6 pt-14">
      <div className="mb-1 h-4 w-24 rounded bg-[var(--foreground)]/10" />
      <div className="mb-5 h-3 w-16 rounded bg-[var(--foreground)]/5" />

      {/* Chart placeholder */}
      <div className="mb-4 rounded-2xl bg-white p-4 shadow-sm">
        <div className="mb-3 h-3 w-20 rounded bg-[var(--foreground)]/10" />
        <div className="flex items-end gap-2">
          {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-md bg-gradient-to-t from-[var(--accent)] to-[var(--accent)]/40"
              style={{ height: `${h}px` }}
            />
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-white p-3 shadow-sm">
          <div className="mb-1 h-2 w-12 rounded bg-[var(--foreground)]/5" />
          <div className="h-5 w-16 rounded bg-[var(--accent)]/15" />
        </div>
        <div className="rounded-xl bg-white p-3 shadow-sm">
          <div className="mb-1 h-2 w-12 rounded bg-[var(--foreground)]/5" />
          <div className="h-5 w-14 rounded bg-[var(--gold)]/15" />
        </div>
      </div>

      {/* List */}
      <div className="mt-4 space-y-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm">
            <div className="h-8 w-8 rounded-full bg-[var(--accent)]/10" />
            <div className="flex-1">
              <div className="mb-1 h-2.5 w-24 rounded bg-[var(--foreground)]/10" />
              <div className="h-2 w-16 rounded bg-[var(--foreground)]/5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AppScreenProfile() {
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-[var(--accent)]/10 to-white p-6 pt-14">
      {/* Avatar */}
      <div className="mx-auto mb-3 h-16 w-16 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--gold)] shadow-lg" />
      <div className="mx-auto mb-1 h-4 w-24 rounded bg-[var(--foreground)]/10" />
      <div className="mx-auto mb-6 h-3 w-16 rounded bg-[var(--foreground)]/5" />

      {/* Settings rows */}
      <div className="space-y-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex items-center gap-3 rounded-xl bg-white p-3.5 shadow-sm">
            <div className="h-8 w-8 rounded-lg bg-[var(--surface)]" />
            <div className="flex-1 h-3 rounded bg-[var(--foreground)]/8" />
            <div className="h-3 w-3 rounded-sm bg-[var(--foreground)]/10" />
          </div>
        ))}
      </div>
    </div>
  );
}
