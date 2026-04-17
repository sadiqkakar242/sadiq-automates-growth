import { MapPin, Briefcase } from "lucide-react";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="mt-2 h-1 w-16 bg-primary rounded-full" />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 text-base md:text-lg text-muted-foreground leading-relaxed">
            I'm Muhammad Sadiq — a GoHighLevel Expert and CRM Automation
            Specialist with 3+ years of hands-on experience building complex
            workflows, AI-powered integrations, and high-converting sales
            funnels. I hold a Bachelor's degree in Shariah Law (LLB) from the
            International Islamic University, Islamabad, and combine strong
            legal thinking with deep technical expertise in automation and
            digital systems. I've successfully delivered 100+ projects on
            Upwork and 120+ projects with clients outside Upwork, helping
            businesses save time, generate leads, and scale smarter.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border">
              <MapPin size={16} className="text-primary" />
              <span className="text-sm">Islamabad, Pakistan</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border">
              <Briefcase size={16} className="text-primary" />
              <span className="text-sm">
                Freelance · Part-time · Full-time Remote
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
