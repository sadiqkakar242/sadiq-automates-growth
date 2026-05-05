import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Stats } from "@/components/portfolio/Stats";
import { Skills } from "@/components/portfolio/Skills";
import { Services } from "@/components/portfolio/Services";
import { Projects } from "@/components/portfolio/Projects";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { WhatsAppFab } from "@/components/portfolio/WhatsAppFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Muhammad Sadiq — GoHighLevel Expert & Automation Specialist",
      },
      {
        name: "description",
        content:
          "GoHighLevel Expert, AI Integrations & CRM Consultant. 100+ Upwork projects delivered. Automating business growth — one workflow at a time.",
      },
      {
        property: "og:title",
        content:
          "Muhammad Sadiq — GoHighLevel Expert & Automation Specialist",
      },
      {
        property: "og:description",
        content:
          "AI integrations, CRM automation, and high-converting funnels by Muhammad Sadiq.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
