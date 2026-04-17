import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";
import { Reveal } from "./Reveal";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "sadiqkakar242@gmail.com",
    href: "mailto:sadiqkakar242@gmail.com",
  },
  {
    icon: ExternalLink,
    label: "Upwork",
    value: "View Profile",
    href: "https://www.upwork.com/freelancers/~0141b58b16497c53f9",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "muhammad-sadiq",
    href: "https://www.linkedin.com/in/muhammad-sadiq-713191197",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "sadiqkakar242",
    href: "https://github.com/sadiqkakar242",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Let's <span className="text-primary">Work Together</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to help you automate and grow your
            business. Reach out and let's schedule a Zoom call.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {contacts.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.label} delay={i * 0.06}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border hover:border-primary hover:-translate-y-1 transition-all"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      {c.label}
                    </div>
                    <div className="text-sm font-medium mt-1 break-all">
                      {c.value}
                    </div>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
