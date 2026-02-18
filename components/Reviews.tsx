"use client";

import { motion } from "framer-motion";

interface Review {
  name: string;
  role: string;
  rating: number;
  text: string;
  source: "App Store" | "Google Play";
  initials: string;
  bgColor: string;
}

const reviews: Review[] = [
  {
    name: "Marcus Chen",
    role: "Product Designer",
    rating: 5,
    text: "Finally an app that respects my time. Clean interface, zero bloat, and it actually does what it promises. Deleted three other apps after installing this.",
    source: "App Store",
    initials: "MC",
    bgColor: "var(--accent)",
  },
  {
    name: "Priya Sharma",
    role: "Startup Founder",
    rating: 5,
    text: "We switched our entire team to this app last month. Productivity is up 40% and nobody has complained once — which is a first for any tool change.",
    source: "Google Play",
    initials: "PS",
    bgColor: "var(--gold)",
  },
  {
    name: "James Wilson",
    role: "Freelancer",
    rating: 5,
    text: "The offline mode is incredible. I was on a 6-hour flight and got more done than a normal workday. Synced everything the moment I landed.",
    source: "App Store",
    initials: "JW",
    bgColor: "var(--accent)",
  },
  {
    name: "Sofia Rodriguez",
    role: "Marketing Lead",
    rating: 5,
    text: "The analytics dashboard alone is worth it. Real-time data, beautiful charts, and it exports to every format I need. My weekly reports take 5 minutes now.",
    source: "Google Play",
    initials: "SR",
    bgColor: "var(--gold)",
  },
  {
    name: "Alex Kim",
    role: "Developer",
    rating: 5,
    text: "As a dev, I appreciate how well-built this is. Fast, no crashes in 6 months of daily use, and the API is clean. Rare to see this level of craft.",
    source: "App Store",
    initials: "AK",
    bgColor: "var(--accent)",
  },
  {
    name: "Taylor Brooks",
    role: "Creative Director",
    rating: 5,
    text: "The design is gorgeous — but more importantly, it's functional. Every interaction feels intentional. This is how all apps should be built.",
    source: "Google Play",
    initials: "TB",
    bgColor: "var(--accent)",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={star <= rating ? "#EAB308" : "none"}
          stroke={star <= rating ? "#EAB308" : "#D6D0CA"}
          strokeWidth="2"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-20 md:py-28 bg-[var(--surface)]">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
            Reviews
          </span>
          <h2 className="mb-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            People are{" "}
            <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--gold)] bg-clip-text text-transparent">
              talking
            </span>
          </h2>
          <p className="mx-auto max-w-lg text-lg text-[var(--muted)]">
            Don&apos;t take our word for it. Here&apos;s what real users say after using the app.
          </p>
        </motion.div>

        {/* Reviews Grid — Masonry-style */}
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="mb-5 break-inside-avoid"
            >
              <div className="rounded-2xl bg-[var(--background)] p-6 shadow-sm transition-shadow hover:shadow-md">
                {/* Stars + source */}
                <div className="mb-3 flex items-center justify-between">
                  <StarRating rating={review.rating} />
                  <span className="text-[10px] font-medium text-[var(--muted)] uppercase tracking-wide">
                    {review.source}
                  </span>
                </div>

                {/* Review text */}
                <p className="mb-4 text-sm leading-relaxed text-[var(--foreground)]/80">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: review.bgColor }}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[var(--foreground)]">
                      {review.name}
                    </div>
                    <div className="text-xs text-[var(--muted)]">{review.role}</div>
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
