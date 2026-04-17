import { Reveal } from "./Reveal";

const stats = [
  { icon: "💼", value: "100+", label: "Projects on Upwork" },
  { icon: "🌍", value: "120+", label: "Projects Outside Upwork" },
  { icon: "⭐", value: "100%", label: "Job Success Score" },
  { icon: "💰", value: "$5K+", label: "Earned on Upwork" },
];

export function Stats() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
            By the <span className="text-primary">Numbers</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div
                className="group relative rounded-2xl p-6 bg-card border border-border hover:border-primary/50 transition-all text-center overflow-hidden"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-primary/5" />
                <div className="relative">
                  <div className="text-3xl mb-2">{s.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-primary">
                    {s.value}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
