import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { useTheme } from "@/hooks/use-portfolio";
import { Nav } from "@/components/portfolio/nav";
import { Hero } from "@/components/portfolio/hero";
import { Profile } from "@/components/portfolio/profile";
import { Work } from "@/components/portfolio/work";
import { Capabilities } from "@/components/portfolio/capabilities";
import { Background } from "@/components/portfolio/background";

import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";
import { CommandPalette } from "@/components/portfolio/command-palette";

const TITLE = "Ghanshyam Singh — Backend Developer";
const DESCRIPTION =
  "Portfolio of Ghanshyam Singh, an Backend Engineer building production-ready AI systems with multi-agent orchestration, RAG, computer vision, and scalable backend architecture.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const { theme, toggleTheme } = useTheme();
  const [paletteOpen, setPaletteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Nav
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenPalette={() => setPaletteOpen(true)}
      />
      <main>
        <Hero />
        <Profile />
        <Work />
        <Capabilities />
        <Background />

        <Contact />
      </main>
      <Footer />
      <CommandPalette
        open={paletteOpen}
        setOpen={setPaletteOpen}
        toggleTheme={toggleTheme}
      />
      <Toaster position="bottom-right" />
    </div>
  );
}
