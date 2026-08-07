import { PROFILE, META } from "@/lib/portfolio-data";
import { Section } from "./primitives";

export function Profile() {
  return (
    <Section id="profile" marker="01" label="Profile" bordered={false} compact>
      <div className="grid gap-8 lg:grid-cols-12 lg:items-baseline lg:gap-16">
        <div className="lg:col-span-5">
          <h2 className="display text-[clamp(1.6rem,3.2vw,2.25rem)]">Backend Developer</h2>
        </div>

        <div className="lg:col-span-7">
          <p className="text-pretty text-base leading-[1.7] text-muted-foreground md:text-[1.0625rem]">
            {PROFILE.profileLead}
          </p>
        </div>
      </div>

      <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-5 border-t border-border pt-6">
        {META.map((m) => (
          <div key={m.label}>
            <dt className="mono-label text-muted-foreground">{m.label}</dt>
            <dd className="mt-1.5 text-sm font-medium text-foreground">{m.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
