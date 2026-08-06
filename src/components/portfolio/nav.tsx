import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { PROFILE, SECTIONS } from "@/lib/portfolio-data";
import { useActiveSection } from "@/hooks/use-portfolio";

const NAV = SECTIONS.filter((s) => "nav" in s && s.nav) as unknown as {
  id: string;
  nav: string;
}[];

const IDS = NAV.map((n) => n.id);

export function Nav({
  theme,
  toggleTheme,
  onOpenPalette,
}: {
  theme: "light" | "dark";
  toggleTheme: () => void;
  onOpenPalette: () => void;
}) {
  const active = useActiveSection(IDS);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 w-full max-w-[1200px] items-center justify-between px-6 md:px-10">
        <a
          href="#top"
          className="flex items-center gap-2 font-mono text-[13px] font-medium tracking-tight text-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
          ghanshyam.singh
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative px-3 py-2 text-sm transition-colors ${
                active === item.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.nav}
              {active === item.id && (
                <span
                  className="absolute inset-x-3 -bottom-px h-0.5 bg-accent"
                  aria-hidden
                />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenPalette}
            aria-label="Open command palette"
            className="hidden items-center gap-1.5 rounded-md border border-border px-2 py-1 font-mono text-[11px] text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground lg:inline-flex"
          >
            ⌘K
          </button>
          <a
            href={PROFILE.resumeUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="hidden items-center gap-1.5 rounded-md border border-border-strong px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent md:inline-flex"
          >
            Resume <span aria-hidden>↗</span>
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-surface hover:text-foreground md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex w-full max-w-[1200px] flex-col px-6">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3.5 text-sm text-foreground"
              >
                {item.nav}
              </a>
            ))}
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="py-3.5 text-sm font-medium text-foreground"
            >
              Resume ↗
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
