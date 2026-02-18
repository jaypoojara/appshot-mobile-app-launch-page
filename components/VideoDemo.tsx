"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoDemo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
            See It in Action
          </span>
          <h2 className="mb-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Watch the{" "}
            <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--gold)] bg-clip-text text-transparent">
              demo
            </span>
          </h2>
          <p className="mx-auto max-w-lg text-lg text-[var(--muted)]">
            Two minutes. That&apos;s all it takes to see why thousands of users made the switch.
          </p>
        </motion.div>

        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-3xl bg-[var(--foreground)] shadow-2xl shadow-[var(--foreground)]/20">
            {/* Browser-like top bar */}
            <div className="flex items-center gap-2 border-b border-white/5 px-5 py-3">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
              </div>
              <div className="ml-4 flex-1">
                <div className="mx-auto h-5 w-48 rounded-full bg-white/5" />
              </div>
            </div>

            {/* Video area */}
            <div className="relative aspect-video">
              {/* Placeholder background — animated gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--foreground)] via-[#5C524A] to-[var(--foreground)]">
                {/* Grid pattern */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />

                {/* Decorative elements showing app screens */}
                <div className="absolute inset-0 flex items-center justify-center gap-6">
                  {/* Left phone */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 0.4, x: 0 }}
                    viewport={{ once: true }}
                    className="hidden w-32 -rotate-6 rounded-2xl bg-white/5 sm:block"
                  >
                    <div className="aspect-[9/16] rounded-2xl p-3">
                      <div className="h-full rounded-lg bg-white/5" />
                    </div>
                  </motion.div>

                  {/* Center phone — larger */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 0.6, y: 0 }}
                    viewport={{ once: true }}
                    className="w-40 rounded-3xl bg-white/10"
                  >
                    <div className="aspect-[9/16] rounded-3xl p-3">
                      <div className="h-full rounded-xl bg-white/5">
                        <div className="flex h-full flex-col items-center justify-center gap-2 p-4">
                          <div className="h-8 w-8 rounded-xl bg-[var(--accent)]/30" />
                          <div className="h-2 w-16 rounded bg-white/10" />
                          <div className="h-1.5 w-12 rounded bg-white/5" />
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Right phone */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 0.4, x: 0 }}
                    viewport={{ once: true }}
                    className="hidden w-32 rotate-6 rounded-2xl bg-white/5 sm:block"
                  >
                    <div className="aspect-[9/16] rounded-2xl p-3">
                      <div className="h-full rounded-lg bg-white/5" />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Play button overlay */}
              <AnimatePresence>
                {!isPlaying && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 z-10 flex items-center justify-center"
                    aria-label="Play demo video"
                  >
                    <div className="group relative">
                      {/* Glow ring */}
                      <div className="absolute inset-0 rounded-full bg-[var(--accent)] opacity-20 blur-xl transition-all group-hover:opacity-40" />
                      <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[var(--accent)] text-white shadow-[0_8px_32px_rgba(139,92,246,0.4)] transition-all group-hover:scale-110 group-hover:shadow-[0_12px_40px_rgba(139,92,246,0.5)]">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </div>
                    </div>
                  </motion.button>
                )}
              </AnimatePresence>

              {/* Playing state */}
              {isPlaying && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[var(--foreground)]"
                >
                  <div className="mb-4 text-sm text-white/40">
                    Replace this with your video embed
                  </div>
                  <div className="text-xs text-white/20">
                    YouTube, Vimeo, or self-hosted MP4
                  </div>
                  <button
                    onClick={() => setIsPlaying(false)}
                    className="mt-6 rounded-full bg-white/10 px-4 py-2 text-xs text-white/60 transition-colors hover:bg-white/20"
                  >
                    Close preview
                  </button>
                </motion.div>
              )}
            </div>
          </div>

          {/* Decorative glow behind video */}
          <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-r from-[var(--accent)]/10 to-[var(--gold)]/10 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
