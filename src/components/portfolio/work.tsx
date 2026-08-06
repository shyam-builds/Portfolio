import { PROJECTS, type Project } from "@/lib/portfolio-data";
import { Section } from "./primitives";

function GitHubButton({ href }: { href?: string | null }) {
  const shared =
    "inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-border bg-transparent px-3 py-1.5 font-mono text-[11px] transition-colors";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className={`group ${shared} text-muted-foreground hover:border-border-strong hover:text-foreground`}
      >
        GitHub
        <span
          className="transition-transform group-hover:-translate-y-px group-hover:translate-x-px"
          aria-hidden
        >
          ↗
        </span>
      </a>
    );
  }

  return (
    <span
      className={`${shared} cursor-default text-muted-foreground/40`}
      aria-label="GitHub repository coming soon"
    >
      GitHub ↗
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-xl border border-border bg-transparent px-10 py-8 transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_6px_20px_oklch(0_0_0/5%)] md:px-12 md:py-10">
      {/* Header: index / title (left) + GitHub button (right) */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="flex items-baseline gap-2 font-mono text-sm">
          <span className="nums text-accent">{project.index}</span>
          <span className="text-foreground" aria-hidden>
            /
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.08em] text-foreground">
            {project.title}
          </span>
        </div>

        <GitHubButton href={project.github} />
      </div>

      {/* Engineering subtitle */}
      <h3 className="display mt-5 text-[clamp(1.25rem,2.4vw,1.75rem)]">
        {project.subtitle ?? project.title}
      </h3>

      {/* Technical bullets with left accent border */}
      {project.bullets && project.bullets.length > 0 && (
        <ul className="mt-5 max-w-3xl space-y-3 border-l-2 border-border pl-5">
          {project.bullets.map((bullet, i) => (
            <li
              key={i}
              className="flex gap-3 text-[0.9rem] leading-[1.7] text-muted-foreground"
            >
              <span
                className="mt-[0.5em] h-1.5 w-1.5 shrink-0 rounded-full bg-border-strong"
                aria-hidden
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Technology pills */}
      <div className="mt-6 border-t border-border pt-5">
        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <li key={t}>
              <span className="inline-block rounded-md border border-border bg-transparent px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground">
                {t}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function Work() {
  return (
    <Section id="work" marker="02" label="Selected Work">
      <div className="max-w-2xl">
        <h2 className="display text-[clamp(2rem,5vw,3.5rem)]">Things I've built.</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Scalable backend systems and AI-powered applications using multi-agent workflows, Retrieval-Augmented Generation, and computer vision.
        </p>
      </div>

      <div className="mt-12 flex flex-col gap-8 md:mt-14">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </Section>
  );
}
