import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

const links = [
  { to: "/", label: "Início" },
  { to: "/metodologia", label: "Metodologia" },
  { to: "/fundador", label: "Fundador" },
  { to: "/depoimentos", label: "Depoimentos" },
] as const;

export function SiteNav() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 hidden border-b border-border/60 bg-background/70 backdrop-blur-xl md:block">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Logo />
          <nav className="flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{
                  className: "text-foreground border-b-2 border-primary pb-1",
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <CTA />
        </div>
      </header>

      <div className="fixed inset-x-0 bottom-4 z-50 px-4 md:hidden">
        <div className="panel flex items-center justify-between gap-2 rounded-full px-3 py-2 backdrop-blur-xl">
          <nav className="flex flex-1 items-center justify-around">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-1 text-[11px] text-muted-foreground"
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-foreground font-semibold" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <span className="grid size-7 place-items-center rounded-md bg-primary text-[13px] font-bold text-primary-foreground">
        U
      </span>
      <span className="font-display text-lg font-bold tracking-[0.22em] uppercase">Ultra</span>
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
