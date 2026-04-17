import { Reveal } from "./Reveal";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Briefcase, Globe2, Star, DollarSign } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Stat = {
  icon: LucideIcon;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
};

const stats: Stat[] = [
  { icon: Briefcase, value: 100, suffix: "+", label: "Projects on Upwork" },
  { icon: Globe2, value: 120, suffix: "+", label: "Projects Outside Upwork" },
  { icon: Star, value: 100, suffix: "%", label: "Job Success Score" },
  { icon: DollarSign, value: 5, suffix: "K+", prefix: "$", label: "Earned on Upwork" },
];

function Counter({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${prefix}${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, { duration: 1.8, ease: "easeOut" });
    return () => controls.stop();
  }, [inView, to, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function Stats() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-xs text-primary mb-4 uppercase tracking-wider">
              Track Record
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              By the <span className="text-primary">Numbers</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              A snapshot of results delivered across platforms and clients worldwide.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.label} delay={i * 0.1}>
                <div
                  className="group relative rounded-2xl p-6 md:p-8 bg-card/80 backdrop-blur border border-border hover:border-primary/60 transition-all overflow-hidden h-full"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div
                    className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-2xl"
                    style={{ backgroundImage: "var(--gradient-primary)" }}
                  />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-5">
                      <Icon size={22} strokeWidth={2} />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold tracking-tight text-foreground tabular-nums">
                      <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
                    </div>
                    <div className="mt-3 text-sm text-muted-foreground font-medium">
                      {s.label}
                    </div>
                    <div className="mt-4 h-px w-10 bg-gradient-to-r from-primary to-transparent" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
