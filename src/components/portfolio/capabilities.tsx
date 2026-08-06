import { CAPABILITIES } from "@/lib/portfolio-data";
import { Section } from "./primitives";

export function Capabilities() {
  return (
    <Section id="capabilities" marker="03" label="Capabilities">
      <h2 className="display max-w-3xl text-[clamp(2rem,4.6vw,3.25rem)]">
        Tools I use to turn
        <br />
        ideas into systems.
      </h2>

      <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 md:gap-x-12 lg:grid-cols-4">
        {CAPABILITIES.map((group) => (
          <div key={group.group}>
            <h3 className="mono-label border-b border-border-strong pb-2 text-foreground">
              {group.group}
            </h3>
            <ul className="mt-1">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  title={item.note}
                  className="border-b border-border py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
