import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import avatar from "@/assets/avatar.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1.4fr_1fr] gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-xs text-primary mb-6">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Available for new projects
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Muhammad <span className="text-primary">Sadiq</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground font-medium">
            GoHighLevel Expert & Automation Specialist
            <br className="hidden sm:block" />
            <span className="text-foreground/80">
              AI Integrations & CRM Consultant
            </span>
          </p>
          <p className="mt-6 text-base md:text-lg text-muted-foreground italic max-w-xl">
            "Automating your business growth — one workflow at a time."
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://www.upwork.com/freelancers/~0141b58b16497c53f9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-primary-foreground transition-all hover:scale-[1.03]"
              style={{
                backgroundImage: "var(--gradient-primary)",
                boxShadow: "var(--shadow-glow)",
              }}
            >
              Hire Me on Upwork <ExternalLink size={16} />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all"
            >
              View My Work <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-full blur-3xl opacity-40"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            />
            <div
              className="absolute -inset-1 rounded-full opacity-80"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            />
            <img
              src={avatar}
              alt="Muhammad Sadiq"
              width={320}
              height={320}
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full ring-1 ring-primary/20"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
