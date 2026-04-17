import { Reveal } from "./Reveal";

const groups: { title: string; items: string[] }[] = [
  {
    title: "CRM & Automation",
    items: [
      "GoHighLevel (GHL)",
      "Zapier",
      "Make.com (Integromat)",
      "GHL Workflow Builder",
      "HubSpot (Basics)",
      "Webhook Configurations",
    ],
  },
  {
    title: "AI & Intelligent Agents",
    items: [
      "OpenAI / ChatGPT",
      "AI Agents",
      "MCP Server Setup",
      "Zappy Chat",
      "Closebot",
      "GHL AI Employee",
      "Voice AI",
    ],
  },
  {
    title: "Funnels & Lead Generation",
    items: [
      "Sales Funnel Development",
      "Landing Page Design",
      "Lead Capture Optimization",
      "Facebook Lead Ads API",
    ],
  },
  {
    title: "Integrations & APIs",
    items: [
      "REST API Integrations",
      "Third-Party App Integrations",
      "Facebook Lead Forms",
      "Multi-Tool Connectivity",
    ],
  },
  {
    title: "Social Media & Marketing",
    items: [
      "Social Media Planning & Scheduling",
      "Email Marketing",
      "SMS Campaigns",
      "Multi-Channel Follow-Up Sequences",
    ],
  },
  {
    title: "Review & Reputation Management",
    items: [
      "GHL Google Review Package",
      "Automated Review Request Sequences",
      "Online Reputation Management",
    ],
  },
  {
    title: "Collaboration Tools",
    items: ["Zoom", "Slack", "Trello", "Google Workspace", "Microsoft Office Suite"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Skills & <span className="text-primary">Tools</span>
          </h2>
          <div className="mt-2 h-1 w-16 bg-primary rounded-full" />
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05}>
              <div
                className="rounded-2xl p-6 bg-card border border-border h-full"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                  {g.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-xs rounded-full border border-primary/30 bg-primary/5 text-foreground/90 hover:bg-primary/10 hover:border-primary/60 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
