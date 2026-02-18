"use client";

import { motion } from "framer-motion";
import DeviceMockup, { AppScreenHome, AppScreenDashboard } from "./DeviceMockup";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-[var(--accent)]/[0.04] blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[var(--gold)]/[0.03] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left — Copy */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/20 bg-[var(--accent-light)] px-4 py-1.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="text-xs font-semibold tracking-wide text-[var(--accent-dark)] uppercase">
                Now Available on iOS &amp; Android
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-5 font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.1] tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl"
            >
              Your App,{" "}
              <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--gold)] bg-clip-text text-transparent">
                Perfectly
              </span>{" "}
              Launched
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 text-lg leading-relaxed text-[var(--muted)] sm:text-xl"
            >
              The app your users have been waiting for. Faster, smarter, and designed for the way people actually use their phones.
            </motion.p>

            {/* App Store Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              {/* App Store Button */}
              <a
                href="#"
                className="group flex items-center gap-3 rounded-2xl bg-[var(--foreground)] px-5 py-3.5 transition-all hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] font-medium leading-none text-white/60">
                    Download on the
                  </div>
                  <div className="text-sm font-semibold leading-tight text-white">
                    App Store
                  </div>
                </div>
              </a>

              {/* Google Play Button */}
              <a
                href="#"
                className="group flex items-center gap-3 rounded-2xl bg-[var(--foreground)] px-5 py-3.5 transition-all hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.3 2.3-8.636-8.632z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] font-medium leading-none text-white/60">
                    GET IT ON
                  </div>
                  <div className="text-sm font-semibold leading-tight text-white">
                    Google Play
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex items-center gap-4"
            >
              {/* Avatar stack */}
              <div className="flex -space-x-2">
                {["#8B5CF6", "#EAB308", "#A855F7", "#CA8A04", "#7C3AED"].map(
                  (color, i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-[var(--background)]"
                      style={{ backgroundColor: color, opacity: 0.8 }}
                    />
                  )
                )}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="#EAB308"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-[var(--muted)]">
                  Loved by <span className="font-semibold text-[var(--foreground)]">50,000+</span> users
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right — Device Mockups */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* iPhone */}
              <div className="animate-float">
                <DeviceMockup type="iphone">
                  <AppScreenHome />
                </DeviceMockup>
              </div>

              {/* Android — offset behind */}
              <div className="absolute -right-16 top-12 -z-10 opacity-90 animate-float-delayed hidden sm:block">
                <DeviceMockup type="android" animate={false}>
                  <AppScreenDashboard />
                </DeviceMockup>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="absolute -left-8 top-24 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-[var(--foreground)]/5 hidden sm:block"
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent-light)]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--foreground)]">+284%</div>
                    <div className="text-[10px] text-[var(--muted)]">Downloads this week</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating notification */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="absolute -bottom-4 -left-4 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-[var(--foreground)]/5 hidden sm:block"
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--gold-light)]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--foreground)]">4.9 Rating</div>
                    <div className="text-[10px] text-[var(--muted)]">App Store average</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
