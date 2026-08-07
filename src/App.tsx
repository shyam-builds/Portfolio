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

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [paletteOpen, setPaletteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Nav theme={theme} toggleTheme={toggleTheme} onOpenPalette={() => setPaletteOpen(true)} />
      <main>
        <Hero />
        <Profile />
        <Work />
        <Capabilities />
        <Background />
        <Contact />
      </main>
      <Footer />
      <CommandPalette open={paletteOpen} setOpen={setPaletteOpen} toggleTheme={toggleTheme} />
      <Toaster position="bottom-right" />
    </div>
  );
}
