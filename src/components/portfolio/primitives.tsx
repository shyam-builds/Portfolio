import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-portfolio";

export function Section({
  id,
  marker,
  label,
  children,
  className,
  bordered = true,
  compact = false,
}: {
  id?: string;
  marker?: string;
  label?: string;
  children: ReactNode;
  className?: string;
  bordered?: boolean;
  compact?: boolean;
}) {
  const { ref, shown } = useReveal<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "relative w-full",
        bordered && "border-t border-border",
        "reveal",
        shown && "reveal-in",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-[1200px] px-6 md:px-10",
          compact ? "py-12 md:py-16" : "py-16 md:py-24 lg:py-28",
        )}
      >
        {marker && (
          <div className="mb-8 flex items-baseline gap-3 md:mb-12">
            <span className="mono-label nums text-muted-foreground">{marker}</span>
            <span className="h-px w-6 bg-border-strong" aria-hidden />
            <span className="mono-label text-muted-foreground">{label}</span>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function Rule({ className }: { className?: string }) {
  return <div className={cn("h-px w-full bg-border", className)} aria-hidden />;
}

export function ArrowLink({
  href,
  children,
  glyph = "↗",
  className,
  external = true,
}: {
  href: string;
  children: ReactNode;
  glyph?: string;
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className={cn(
        "group inline-flex items-center gap-1.5 text-sm text-foreground transition-colors hover:text-accent",
        className,
      )}
    >
      <span className="underline-offset-4 group-hover:underline">{children}</span>
      <span className="text-muted-foreground transition-[transform,color] group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-accent">
        {glyph}
      </span>
    </a>
  );
}
