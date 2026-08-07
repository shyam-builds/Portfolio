import { PROFILE } from "@/lib/portfolio-data";
import { ArrowLink } from "./primitives";

function Terminal() {
  return (
    <div className="w-full overflow-hidden rounded-md border border-border bg-editor">
      {/* Title bar */}
      <div className="flex items-center gap-3 border-b border-border bg-surface px-3 py-2.5">
        {/* macOS traffic-light controls */}
        <span className="flex items-center gap-1.5" aria-hidden>
          <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "#FF5F57" }} />
          <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "#FFBD2E" }} />
          <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "#28C840" }} />
        </span>
        <span className="flex-1 text-center font-mono text-[11px] text-muted-foreground/70 select-none">
          terminal — ghanshyam@workspace
        </span>
      </div>

      {/* Terminal body */}
      <div className="px-5 py-5 font-mono text-[13px] leading-[1.8] md:text-[13.5px]">
        {/* Command */}
        <div className="text-muted-foreground">
          <span className="text-accent">$</span>{" "}
          <span className="text-foreground">cat profile.md</span>
        </div>

        {/* Output */}
        <div className="mt-5">
          <p className="font-semibold text-foreground"># Backend Engineer</p>

          <p className="mt-4 max-w-sm leading-7 text-muted-foreground">
            Building scalable APIs, AI-powered applications,
            <br />
            and intelligent systems.
          </p>
        </div>

        {/* Blinking cursor */}
        <div className="mt-5 flex items-center gap-1">
          <span className="text-accent">$</span>
          <span className="inline-block h-[1.1em] w-[7px] animate-pulse bg-accent" aria-hidden />
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <header id="top" className="relative overflow-hidden">
      <div className="hairline-grid pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col justify-center gap-14 px-6 pt-28 pb-16 md:px-10 lg:min-h-[90vh] lg:flex-row lg:items-center lg:gap-16 lg:pt-32 lg:pb-20">
        <div className="lg:w-[48%]">
          <div className="mono-label flex items-center gap-2.5 text-muted-foreground">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            OPEN TO OPPORTUNITIES
          </div>

          <h1 className="display mt-7 text-[clamp(3rem,9vw,5.75rem)] -ml-[0.03em] leading-[0.95]">
            Ghanshyam
            <br />
            Singh
          </h1>

          <p className="mt-5 text-lg font-medium text-foreground md:text-xl">{PROFILE.role}</p>

          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {PROFILE.statement}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Explore my work
              <span className="transition-transform group-hover:translate-y-0.5" aria-hidden>
                ↓
              </span>
            </a>
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-2 rounded-md border border-border-strong px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              View Resume
              <span
                className="transition-transform group-hover:-translate-y-px group-hover:translate-x-px"
                aria-hidden
              >
                ↗
              </span>
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            <ArrowLink href={PROFILE.github}>GitHub</ArrowLink>
            <ArrowLink href={PROFILE.linkedin}>LinkedIn</ArrowLink>
          </div>
        </div>

        <div className="lg:w-[52%]">
          <Terminal />
        </div>
      </div>
    </header>
  );
}
