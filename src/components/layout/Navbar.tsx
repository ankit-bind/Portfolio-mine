import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { DiamondMarker } from "@/components/decorative/Decorations";
import { useTheme } from "@/components/theme/ThemeProvider";
import { profile } from "@/data/profile";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Certifications" },
  { to: "/education", label: "Education" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-4 z-40 px-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-ink/15 bg-surface px-4 py-2.5 shadow-[0_1px_0_rgba(53,38,64,0.04)] sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full border-[1.5px] border-ink font-display text-[14px] font-semibold tracking-tight text-ink">
            AB
          </span>
          <span className="hidden font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-ink sm:inline">
            Ankit Bind
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`group flex items-center gap-2 font-sans text-[12px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                    active ? "text-ink" : "text-ink/65 hover:text-ink"
                  }`}
                >
                  <DiamondMarker size={6} className={active ? "opacity-100" : "opacity-40 group-hover:opacity-100"} />
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-full border-[1.5px] border-ink/40 text-ink transition-colors hover:border-ink hover:bg-accent-warm/30"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            className="grid h-9 w-9 place-items-center rounded-full border-[1.5px] border-ink/40 text-ink lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Open menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-ink/15 bg-surface p-5 lg:hidden">
          <ul className="flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 font-sans text-sm font-semibold uppercase tracking-[0.18em] text-ink"
                >
                  <DiamondMarker size={7} /> {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
