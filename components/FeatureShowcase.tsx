"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DeviceMockup from "./DeviceMockup";

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  screen: React.ReactNode;
}

const features: Feature[] = [
  {
    id: "notifications",
    title: "Smart Notifications",
    description:
      "Get notified about what matters. Our AI-powered system learns your preferences and delivers alerts at the perfect time — never too many, never too few.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
    screen: <NotificationsScreen />,
  },
  {
    id: "analytics",
    title: "Real-Time Analytics",
    description:
      "Track every metric that matters, from daily active users to retention curves. Beautiful charts that make data easy to understand — no analytics degree required.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    screen: <AnalyticsScreen />,
  },
  {
    id: "security",
    title: "Bank-Level Security",
    description:
      "End-to-end encryption, biometric authentication, and automatic fraud detection. Your data stays yours — period. SOC 2 Type II certified.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    screen: <SecurityScreen />,
  },
  {
    id: "offline",
    title: "Works Offline",
    description:
      "No signal? No problem. Full offline support means you can keep working even in airplane mode, on the subway, or in the middle of nowhere.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <line x1="12" y1="20" x2="12.01" y2="20" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </svg>
    ),
    screen: <OfflineScreen />,
  },
];

export default function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section id="features" className="relative py-20 md:py-28">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent)]/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
            Features
          </span>
          <h2 className="mb-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Everything your users need,{" "}
            <span className="text-[var(--muted)]">nothing they don&apos;t</span>
          </h2>
          <p className="text-lg text-[var(--muted)]">
            Built for performance, designed for delight. Every feature is crafted to make your app feel native and fast.
          </p>
        </motion.div>

        {/* Feature content */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — Feature list */}
          <div className="space-y-2">
            {features.map((feature, i) => (
              <motion.button
                key={feature.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveFeature(i)}
                className={`group flex w-full items-start gap-4 rounded-2xl p-5 text-left transition-all ${
                  activeFeature === i
                    ? "bg-[var(--accent-light)] shadow-sm"
                    : "hover:bg-[var(--surface)]"
                }`}
              >
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors ${
                    activeFeature === i
                      ? "bg-[var(--accent)] text-white"
                      : "bg-[var(--surface)] text-[var(--muted)] group-hover:bg-[var(--surface-2)]"
                  }`}
                >
                  {feature.icon}
                </div>
                <div>
                  <h3
                    className={`mb-1 font-[family-name:var(--font-display)] text-base font-semibold transition-colors ${
                      activeFeature === i
                        ? "text-[var(--accent-dark)]"
                        : "text-[var(--foreground)]"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed transition-colors ${
                      activeFeature === i ? "text-[var(--accent-dark)]/70" : "text-[var(--muted)]"
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right — Phone with animated screens */}
          <div className="flex justify-center lg:justify-end">
            <DeviceMockup type="iphone" animate={false}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={features[activeFeature].id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="h-full"
                >
                  {features[activeFeature].screen}
                </motion.div>
              </AnimatePresence>
            </DeviceMockup>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Individual feature screens */
function NotificationsScreen() {
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-[var(--accent-light)] to-white p-5 pt-14">
      <div className="mb-1 text-xs font-bold text-[var(--foreground)]">Notifications</div>
      <div className="mb-4 text-[10px] text-[var(--muted)]">3 new today</div>
      <div className="space-y-2.5">
        {[
          { title: "New follower", desc: "Sarah just followed you", time: "2m ago", color: "var(--accent)" },
          { title: "Order shipped", desc: "Your package is on the way", time: "15m ago", color: "var(--purple)" },
          { title: "Weekly report", desc: "Your stats are up 23%", time: "1h ago", color: "var(--accent)" },
          { title: "New feature", desc: "Dark mode is now available", time: "3h ago", color: "var(--purple)" },
        ].map((n, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            className="flex items-start gap-3 rounded-xl bg-white p-3 shadow-sm"
          >
            <div
              className="mt-0.5 h-7 w-7 shrink-0 rounded-lg"
              style={{ backgroundColor: `${n.color}20` }}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <div className="text-[11px] font-semibold text-[var(--foreground)]">{n.title}</div>
                <div className="text-[9px] text-[var(--muted)]">{n.time}</div>
              </div>
              <div className="text-[10px] text-[var(--muted)]">{n.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsScreen() {
  const bars = [35, 55, 40, 70, 50, 85, 65, 90, 75, 60, 80, 95];
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-[var(--purple-light)] to-white p-5 pt-14">
      <div className="mb-1 text-xs font-bold text-[var(--foreground)]">Analytics</div>
      <div className="mb-4 text-[10px] text-[var(--muted)]">Last 12 months</div>

      <div className="rounded-2xl bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-baseline justify-between">
          <span className="text-lg font-bold text-[var(--foreground)]">12.4K</span>
          <span className="text-[10px] font-semibold text-[var(--accent)]">+34.2%</span>
        </div>
        <div className="flex items-end gap-1.5">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}px` }}
              transition={{ delay: i * 0.05, duration: 0.5, ease: "easeOut" }}
              className="flex-1 rounded-t bg-gradient-to-t from-[var(--purple)] to-[var(--accent)]"
            />
          ))}
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <div className="rounded-xl bg-white p-3 shadow-sm">
          <div className="text-[10px] text-[var(--muted)]">Users</div>
          <div className="text-sm font-bold text-[var(--foreground)]">8,249</div>
        </div>
        <div className="rounded-xl bg-white p-3 shadow-sm">
          <div className="text-[10px] text-[var(--muted)]">Sessions</div>
          <div className="text-sm font-bold text-[var(--foreground)]">24.1K</div>
        </div>
      </div>
    </div>
  );
}

function SecurityScreen() {
  return (
    <div className="flex h-full flex-col items-center bg-gradient-to-b from-[var(--accent)]/5 to-white p-5 pt-16">
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--accent)]/10"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent)]/20">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>
      </motion.div>
      <div className="mb-1 text-sm font-bold text-[var(--foreground)]">Protected</div>
      <div className="mb-6 text-[10px] text-[var(--muted)]">All systems secure</div>

      <div className="w-full space-y-2">
        {[
          { label: "Encryption", status: "Active" },
          { label: "Biometrics", status: "Enabled" },
          { label: "2FA", status: "Active" },
          { label: "Firewall", status: "Active" },
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between rounded-xl bg-white p-3 shadow-sm">
            <span className="text-[11px] text-[var(--foreground)]">{item.label}</span>
            <span className="text-[10px] font-semibold text-[var(--accent)]">{item.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function OfflineScreen() {
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-[var(--surface)] to-white p-5 pt-14">
      <div className="mb-4 flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-[var(--accent)]" />
        <span className="text-[11px] font-semibold text-[var(--foreground)]">Offline Mode</span>
      </div>

      <div className="mb-4 rounded-2xl bg-white p-4 shadow-sm">
        <div className="mb-2 text-[10px] text-[var(--muted)]">Synced content</div>
        <div className="space-y-2">
          {[
            { name: "Documents", size: "2.4 MB", pct: 100 },
            { name: "Photos", size: "18.7 MB", pct: 100 },
            { name: "Messages", size: "340 KB", pct: 100 },
          ].map((item, i) => (
            <div key={i}>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium text-[var(--foreground)]">{item.name}</span>
                <span className="text-[9px] text-[var(--muted)]">{item.size}</span>
              </div>
              <div className="mt-1 h-1.5 w-full rounded-full bg-[var(--surface)]">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.pct}%` }}
                  transition={{ delay: i * 0.2, duration: 0.8 }}
                  className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--purple)]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 rounded-xl bg-[var(--accent-light)] p-3">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        <span className="text-[10px] font-medium text-[var(--accent-dark)]">All data synced and available offline</span>
      </div>
    </div>
  );
}
