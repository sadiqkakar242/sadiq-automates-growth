import { Reveal } from "./Reveal";

const projects = [
  {
    title: "AI Agent + GHL Automation System",
    desc: "Built a fully automated AI agent pipeline integrated with GoHighLevel to handle inbound leads, qualify prospects, and trigger follow-up sequences — reducing response time from hours to seconds.",
    tags: ["AI Agent", "GHL", "Automation"],
    gradient: "from-cyan-500/30 to-blue-600/30",
  },
  {
    title: "GHL A2P 10DLC + Twilio SMS Automation",
    desc: "Set up A2P 10DLC registration and deployed SMS automation workflows within GHL for seamless, compliant client communication at scale.",
    tags: ["GHL", "Twilio", "SMS"],
    gradient: "from-emerald-500/30 to-teal-600/30",
  },
  {
    title: "Google Review Automation Package",
    desc: "Developed a replicable Google Review automation system for local service businesses — automating review requests and growing 5-star ratings.",
    tags: ["GHL", "Reputation Management", "Automation"],
    gradient: "from-amber-500/30 to-orange-600/30",
  },
  {
    title: "AI CEO Bot – GHL Chatbot Integration",
    desc: "Built a custom AI-powered chatbot using Zappy Chat + OpenAI integrated into GoHighLevel for automated lead capture and CRM pipeline management.",
    tags: ["AI Chatbot", "Zappy Chat", "GHL"],
    gradient: "from-violet-500/30 to-fuchsia-600/30",
  },
  {
    title: "Multi-Tool Integration via Zapier & Make.com",
    desc: "Connected Facebook Lead Ads, email platforms, CRMs, and GHL into a unified automation ecosystem using Zapier and Make.com webhooks.",
    tags: ["Zapier", "Make.com", "API", "Integration"],
    gradient: "from-pink-500/30 to-rose-600/30",
  },
  {
    title: "Social Media Planning & Automation",
    desc: "Designed and implemented a social media content calendar with automated scheduling and cross-platform publishing for a business client.",
    tags: ["Social Media", "Automation", "Content Planning"],
    gradient: "from-sky-500/30 to-indigo-600/30",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="mt-2 h-1 w-16 bg-primary rounded-full" />
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <article
                className="group h-full rounded-2xl bg-card border border-border hover:border-primary/60 transition-all overflow-hidden hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div
                  className={`h-40 bg-gradient-to-br ${p.gradient} relative flex items-center justify-center`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
                  <div className="text-5xl opacity-80 transition-transform group-hover:scale-110">
                    {["🤖", "📱", "⭐", "💬", "🔗", "📅"][i]}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
