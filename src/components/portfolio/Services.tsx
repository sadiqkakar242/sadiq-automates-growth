import { Reveal } from "./Reveal";

const services = [
  {
    icon: "🤖",
    title: "AI Agents & MCP Server Setup",
    desc: "Design and deploy intelligent AI agents and configure MCP servers to automate complex business processes and supercharge decision-making with minimal human input.",
  },
  {
    icon: "⚙️",
    title: "GoHighLevel Setup & Management",
    desc: "Full GHL configuration — funnels, pipelines, automations, calendars, email/SMS sequences, AI Employee, Voice AI, and white-label sub-account setup for agencies.",
  },
  {
    icon: "🔗",
    title: "Tool Integrations & API Connections",
    desc: "Connect your entire tech stack using Zapier, Make.com, and REST APIs — integrating CRMs, lead forms, chatbots, review tools, and more into one seamless system.",
  },
  {
    icon: "🧠",
    title: "AI Chatbot Development",
    desc: "Build AI-powered chatbots using ChatGPT, Zappy Chat, and Closebot integrated into GHL for 24/7 lead capture, customer support, and automated follow-ups.",
  },
  {
    icon: "📅",
    title: "Social Media Planning & Automation",
    desc: "Plan, schedule, and automate your social media content across platforms — keeping your brand active and consistent without the manual effort.",
  },
  {
    icon: "⭐",
    title: "Google Review & Reputation Management",
    desc: "Implement GHL's Google Review Package to automate review requests, monitor feedback, and grow your 5-star reputation on autopilot.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            What <span className="text-primary">I Do</span>
          </h2>
          <div className="mt-2 h-1 w-16 bg-primary rounded-full" />
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div
                className="group h-full rounded-2xl p-6 bg-card border border-border hover:border-primary/60 transition-all hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="text-4xl mb-4 transition-transform group-hover:scale-110">
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
