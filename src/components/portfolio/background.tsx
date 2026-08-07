import { EDUCATION, CERTIFICATIONS } from "@/lib/portfolio-data";
import { Section } from "./primitives";

export function Background() {
  return (
    <Section id="background" marker="04" label="Background">
      <div>
        <h3 className="mono-label border-b border-border-strong pb-2 text-foreground">Education</h3>
        {EDUCATION.map((item) => (
          <div
            key={item.degree}
            className="flex items-baseline justify-between gap-8 border-b border-border py-5"
          >
            <div>
              <h4 className="text-base font-medium text-foreground md:text-lg">{item.degree}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{item.school}</p>
            </div>
            <span className="nums shrink-0 font-mono text-xs text-muted-foreground">
              {item.years}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <h3 className="mono-label border-b border-border-strong pb-2 text-foreground">
          Certifications
        </h3>
        {CERTIFICATIONS.map((cert) => (
          <div
            key={cert.index}
            className="group flex items-baseline justify-between gap-6 border-b border-border py-4 transition-colors hover:bg-surface/50"
          >
            <div className="flex min-w-0 items-baseline gap-6">
              <span className="nums font-mono text-xs text-muted-foreground/70">{cert.index}</span>
              <div className="min-w-0">
                <h4 className="text-base font-medium text-foreground transition-colors group-hover:text-accent">
                  {cert.title}
                </h4>
                {cert.meta && <p className="mt-0.5 text-sm text-muted-foreground">{cert.meta}</p>}
              </div>
            </div>
            {cert.url && (
              <a
                href={cert.url}
                target="_blank"
                rel="noreferrer noopener"
                className="mono-label shrink-0 text-muted-foreground transition-colors hover:text-accent"
              >
                View Credential ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
