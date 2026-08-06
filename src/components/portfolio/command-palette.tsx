import { useEffect } from "react";
import { toast } from "sonner";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { PROFILE } from "@/lib/portfolio-data";

export function CommandPalette({
  open,
  setOpen,
  toggleTheme,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
  toggleTheme: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(!open);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  const run = (fn: () => void) => {
    setOpen(false);
    setTimeout(fn, 60);
  };

  const goto = (id: string) => () => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const openUrl = (url: string) => () => window.open(url, "_blank", "noopener");

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search…" />
      <CommandList>
        <CommandEmpty>No results.</CommandEmpty>
        <CommandGroup heading="Navigate">
          <CommandItem onSelect={() => run(goto("top"))}>Home</CommandItem>
          <CommandItem onSelect={() => run(goto("profile"))}>About</CommandItem>
          <CommandItem onSelect={() => run(goto("work"))}>Selected Work</CommandItem>
          <CommandItem onSelect={() => run(goto("capabilities"))}>
            Capabilities
          </CommandItem>
          <CommandItem onSelect={() => run(goto("contact"))}>Contact</CommandItem>
        </CommandGroup>
        <CommandGroup heading="Actions">
          <CommandItem onSelect={() => run(openUrl(PROFILE.resumeUrl))}>
            View Resume ↗
          </CommandItem>
          <CommandItem
            onSelect={() =>
              run(async () => {
                await navigator.clipboard.writeText(PROFILE.email);
                toast.success("Email copied to clipboard");
              })
            }
          >
            Copy Email
          </CommandItem>
          <CommandItem onSelect={() => run(openUrl(PROFILE.linkedin))}>
            Open LinkedIn
          </CommandItem>
          <CommandItem onSelect={() => run(toggleTheme)}>Toggle Theme</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
