import { PROFILE } from "@/lib/portfolio-data";
import { ArrowLink } from "./primitives";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 px-6 py-12 md:flex-row md:items-end md:justify-between md:px-10">
        <div>
          <p className="text-sm text-foreground">© 2026 {PROFILE.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{PROFILE.role}</p>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <ArrowLink href={PROFILE.github} className="text-sm">
            GitHub
          </ArrowLink>
          <ArrowLink href={PROFILE.linkedin} className="text-sm">
            LinkedIn
          </ArrowLink>
          <ArrowLink href="#top" glyph="↑" external={false} className="text-sm">
            Back to top
          </ArrowLink>
        </div>
      </div>
    </footer>
  );
}
