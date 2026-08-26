import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import logoAsset from "@/assets/ultra-logo.png.asset.json";

export const sections = [
  { id: "inicio", label: "Início" },
  { id: "metodologia", label: "Metodologia" },
  { id: "fundador", label: "Fundador" },
  { id: "depoimentos", label: "Depoimentos" },
  { id: "para-quem", label: "Para quem é" },
  { id: "faq", label: "FAQ" },

] as const;

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function useActiveSection() {
  const [active, setActive] = useState<string>("inicio");

  useEffect(() => {
    const onScroll = () => {
      const probe = window.innerHeight * 0.35;
      let current: string = sections[0].id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= probe) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return active;
}

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  const go = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 md:flex md:h-[76px] md:justify-between">
        <div className="flex min-w-0 items-center">
          <Logo />
        </div>

        <nav className="hidden items-center gap-9 md:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => {
                e.preventDefault();
                go(s.id);
              }}
              className={`text-[13px] tracking-wide transition-colors ${
                active === s.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {s.label}
              <span
                className={`mt-1 block h-px origin-left bg-primary transition-transform duration-300 ${
                  active === s.id ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
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
        <div className="border-t border-border/70 bg-background/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  go(s.id);
                }}
                className={`border-b border-border/60 py-3 text-sm font-medium tracking-wide uppercase ${
                  active === s.id ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {s.label}
              </a>
            ))}
          </nav>
          <div className="mt-5">
            <CTA label="Quero meu diagnóstico" />
          </div>
        </div>
      )}
    </header>
  );
}

export function Logo() {
  return (
    <a
      href="#inicio"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection("inicio");
      }}
      className="flex items-center"
      aria-label="Ultra Company"
    >
      <img
        src={logoAsset.url}
        alt="Ultra Company"
        width={640}
        height={146}
        className="h-7 w-auto sm:h-8"
      />
    </a>
  );
}

/** Todo CTA do site leva para a captação de lead do Diagnóstico. */
export function CTA({ label = "Quero meu diagnóstico" }: { label?: string }) {
  return (
    <a
      href="#diagnostico"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection("diagnostico");
      }}
      className="group inline-flex items-center gap-2 rounded-full border border-primary/60 bg-primary/95 px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary"
    >
      {label}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}
