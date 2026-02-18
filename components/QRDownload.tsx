"use client";

import { motion } from "framer-motion";

export default function QRDownload() {
  return (
    <section id="download" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-[var(--accent)]/[0.03] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-br from-[var(--foreground)] to-[#3D3530] p-8 md:p-16 overflow-hidden"
        >
          {/* Grid pattern overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative grid items-center gap-12 md:grid-cols-2">
            {/* Left — Text & buttons */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-4 font-[family-name:var(--font-display)] text-3xl font-bold text-white sm:text-4xl"
              >
                Ready to get started?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mb-8 text-lg text-white/60"
              >
                Download the app now. Free on both platforms, no credit card required. Scan the QR code or tap the buttons below.
              </motion.p>

              {/* App Store Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-3"
              >
                <a
                  href="#"
                  className="group flex items-center gap-3 rounded-2xl bg-white px-5 py-3.5 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--foreground)">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] font-medium leading-none text-[var(--muted)]">
                      Download on the
                    </div>
                    <div className="text-sm font-semibold text-[var(--foreground)]">
                      App Store
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  className="group flex items-center gap-3 rounded-2xl bg-white px-5 py-3.5 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--foreground)">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.3 2.3-8.636-8.632z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] font-medium leading-none text-[var(--muted)]">
                      GET IT ON
                    </div>
                    <div className="text-sm font-semibold text-[var(--foreground)]">
                      Google Play
                    </div>
                  </div>
                </a>
              </motion.div>
            </div>

            {/* Right — QR Code */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
              className="flex justify-center md:justify-end"
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-4 rounded-3xl bg-[var(--accent)]/10 blur-xl" />

                {/* QR Card */}
                <div className="relative rounded-3xl bg-white p-8 shadow-2xl">
                  {/* QR Code placeholder — CSS grid pattern */}
                  <div className="mx-auto mb-4 h-48 w-48 rounded-2xl bg-[var(--foreground)] p-3">
                    <div className="h-full w-full rounded-lg bg-white p-2">
                      <QRPattern />
                    </div>
                  </div>
                  <p className="text-center text-sm font-semibold text-[var(--foreground)]">
                    Scan to download
                  </p>
                  <p className="mt-1 text-center text-xs text-[var(--muted)]">
                    Point your camera at the code
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* CSS-based QR code pattern placeholder */
function QRPattern() {
  const pattern = [
    [1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1],
    [1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1],
    [0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0],
    [1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1],
    [0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0],
    [1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1],
    [1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1],
    [1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0],
    [1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1],
    [1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0],
    [1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1],
  ];

  return (
    <div className="grid h-full w-full" style={{ gridTemplateColumns: `repeat(19, 1fr)`, gap: "1px" }}>
      {pattern.flat().map((cell, i) => (
        <div
          key={i}
          className="rounded-[1px]"
          style={{ backgroundColor: cell ? "var(--foreground)" : "transparent" }}
        />
      ))}
    </div>
  );
}
