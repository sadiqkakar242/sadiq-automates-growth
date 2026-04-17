import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";

const socials = [
  { icon: Mail, href: "mailto:sadiqkakar242@gmail.com", label: "Email" },
  {
    icon: ExternalLink,
    href: "https://www.upwork.com/freelancers/~0141b58b16497c53f9",
    label: "Upwork",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/muhammad-sadiq-713191197",
    label: "LinkedIn",
  },
  { icon: Github, href: "https://github.com/sadiqkakar242", label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">
          © 2025 Muhammad Sadiq. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
