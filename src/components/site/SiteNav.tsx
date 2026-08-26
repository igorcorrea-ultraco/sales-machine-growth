import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import logoAsset from "@/assets/ultra-logo.png.asset.json";

const links = [
  { to: "/", label: "Início" },
  { to: "/metodologia", label: "Metodologia" },
  { to: "/fundador", label: "Fundador" },
  { to: "/depoimentos", label: "Depoimentos" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 md:h-20 md:flex md:justify-between">
        <div className="flex min-w-0 items-center">
          <Logo />
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-foreground border-b-2 border-primary pb-1" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <CTA />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="grid size-10 shrink-0 place-items-center rounded-full border border-border text-foreground md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/50 py-3 text-sm font-medium tracking-wide text-muted-foreground uppercase"
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-5" onClick={() => setOpen(false)}>
            <CTA label="Falar com especialista" />
          </div>
        </div>
      )}
    </header>
  );
}

export function Logo() {
  return (
    <Link to="/" className="flex items-center" aria-label="Ultra Company">
      <img
        src={logoAsset.url}
        alt="Ultra Company"
        width={640}
        height={146}
        className="h-7 w-auto sm:h-8"
      />
    </Link>
  );
}

export function CTA({ label = "Falar com especialista" }: { label?: string }) {
  return (
    <a
      href="mailto:contato@ultracompany.com.br?subject=Quero%20uma%20m%C3%A1quina%20de%20vendas"
      className="glow-ring group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
    >
      {label}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}
