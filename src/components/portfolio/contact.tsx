import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { PROFILE } from "@/lib/portfolio-data";
import { Section, ArrowLink } from "./primitives";

const DETAILS = [
  { label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s/g, "")}` },
  { label: "Location", value: PROFILE.location },
  {
    label: "GitHub",
    value: `github.com/${PROFILE.githubHandle}`,
    href: PROFILE.github,
    external: true,
  },
  {
    label: "LinkedIn",
    value: PROFILE.linkedinLabel,
    href: PROFILE.linkedin,
    external: true,
  },
];

function Field({
  id,
  label,
  placeholder,
  type = "text",
  textarea = false,
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  textarea?: boolean;
}) {
  const shared =
    "w-full border-b border-border bg-transparent py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent";
  return (
    <div>
      <label htmlFor={id} className="mono-label text-muted-foreground">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={id}
          rows={2}
          required
          placeholder={placeholder}
          className={`${shared} mt-1 h-[70px] min-h-[70px] resize-none`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required
          placeholder={placeholder}
          className={`${shared} mt-1`}
        />
      )}
    </div>
  );
}


export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    toast.success("Email copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const subject = String(form.get("subject") ?? "");
    const message = String(form.get("message") ?? "");
    const body = `${message}\n\n—\n${name}\n${email}`;
    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Section id="contact" marker="05" label="Contact">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-6">
          <h2 className="display text-[clamp(2.25rem,5.5vw,4rem)] leading-[0.98]">
            Let's build something
            <br />
            intelligent.
          </h2>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            I'm currently open to AI/ML, software development, internship, and
            entry-level engineering opportunities.
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            If you're hiring, collaborating, or simply want to talk about AI and
            software, I'd be happy to connect.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
            <button
              type="button"
              onClick={copyEmail}
              className="group inline-flex items-center gap-1.5 text-sm text-foreground transition-colors hover:text-accent"
            >
              <span className="underline-offset-4 group-hover:underline">
                {copied ? "Copied" : "Copy Email"}
              </span>
              <span className="text-muted-foreground group-hover:text-accent">
                {copied ? "✓" : "⧉"}
              </span>
            </button>
            <ArrowLink href={`mailto:${PROFILE.email}`} external={false}>
              Email Me
            </ArrowLink>
            <ArrowLink href={PROFILE.linkedin}>LinkedIn</ArrowLink>
            <ArrowLink href={PROFILE.github}>GitHub</ArrowLink>
          </div>

          <div className="mt-10 border-t border-border">
            {DETAILS.map((d) => (
              <div key={d.label} className="border-b border-border py-4">
                <span className="mono-label block text-muted-foreground">
                  {d.label}
                </span>
                {d.href ? (
                  <a
                    href={d.href}
                    {...(d.external
                      ? { target: "_blank", rel: "noreferrer noopener" }
                      : {})}
                    className="mt-1.5 block text-base text-foreground transition-colors hover:text-accent"
                  >
                    {d.value}
                  </a>
                ) : (
                  <span className="mt-1.5 block text-base text-foreground">
                    {d.value}
                  </span>
                )}
              </div>
            ))}
          </div>

        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <p className="mono-label flex items-center gap-2 border-b border-border-strong pb-2 text-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            Send a message
          </p>
          <form onSubmit={onSubmit} className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
            <Field id="name" label="Your name" placeholder="Full name" />
            <Field id="email" label="Email" type="email" placeholder="you@example.com" />
            <div className="col-span-2">
              <Field id="subject" label="Subject" placeholder="What's this about?" />
            </div>
            <div className="col-span-2">
              <Field
                id="message"
                label="Message"
                textarea
                placeholder="Tell me about the role, project, or idea."
              />
            </div>
            <div className="col-span-2 flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs text-muted-foreground">
                This opens your default mail client.
              </p>
              <button
                type="submit"
                className="group inline-flex h-12 items-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Send Message
                <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                  →
                </span>
              </button>
            </div>
          </form>

        </div>
      </div>
    </Section>
  );
}
