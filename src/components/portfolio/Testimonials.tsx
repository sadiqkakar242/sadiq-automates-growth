import { Star, Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    quote:
      "Muhammad is a pleasure to work with. Very professional, highly knowledgeable in GHL, and always goes above and beyond.",
    author: "Upwork Client",
  },
  {
    quote:
      "Delivered exactly what we needed — our automation is now running perfectly. Highly recommend!",
    author: "Upwork Client",
  },
  {
    quote:
      "Great communicator, fast delivery, and deep expertise in AI integrations. Will definitely hire again.",
    author: "Upwork Client",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
            What Clients <span className="text-primary">Say</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div
                className="h-full rounded-2xl p-6 bg-card border border-border hover:border-primary/50 transition-all relative"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <Quote
                  className="absolute top-4 right-4 text-primary/20"
                  size={36}
                />
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-4 text-sm text-foreground/90 italic leading-relaxed">
                  "{t.quote}"
                </p>
                <p className="mt-4 text-xs text-muted-foreground font-medium">
                  — {t.author}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
