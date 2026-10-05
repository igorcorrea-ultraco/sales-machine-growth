import { Reveal } from "@/components/site/animate";
import { CTA } from "@/components/site/SiteNav";
import logoUrl from "@/assets/ultra-logo.png";

const stages = [
  {
    number: "01.",
    title: "Base",
    text: "Estruturamos posicionamento, oferta, metas e indicadores para que o crescimento comece sobre fundamentos sólidos.",
  },
  {
    number: "02.",
    title: "Geração de Demanda",
    text: "Criamos canais e campanhas capazes de atrair oportunidades qualificadas com consistência e previsibilidade.",
  },
  {
    number: "03.",
    title: "Framework PVP",
    subtitle: "Pré-vendas, Vendas e Pós-venda",
    text: "Conectamos todas as etapas comerciais em um processo claro, mensurável e replicável pelo seu time.",
  },
  {
    number: "04.",
    title: "Acompanhamento Aproximado",
    text: "Acompanhamos a execução, analisamos os números e corrigimos a rota para transformar estratégia em resultado.",
  },
];

export function PhasesSection() {
  return (
    <section
      id="metodologia"
      className="grid-lines relative scroll-mt-20 overflow-hidden border-t border-border py-24 md:py-32"
    >
      <div className="pointer-events-none absolute -left-24 top-12 size-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-20 size-72 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <span className="inline-flex border border-border bg-background/80 px-5 py-2 text-xs font-semibold text-primary">
            Metodologia
          </span>
          <div className="mx-auto mt-8 flex max-w-xl flex-col items-center">
            <img
              src={logoUrl}
              alt="Ultra Company"
              width={640}
              height={146}
              loading="lazy"
              className="h-auto w-44 sm:w-56"
            />
            <h2 className="display-xl mt-6 text-4xl sm:text-5xl lg:text-[4rem]">
              Método <span className="text-primary">Ultra</span>
            </h2>
          </div>
          <p className="mx-auto mt-7 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Um sistema único de receita, construído para transformar empresas em máquinas de vendas
            previsíveis por meio de quatro etapas conectadas.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {stages.map((stage, index) => (
            <Reveal key={stage.number} delay={index * 90}>
              <article className="h-full border border-border bg-background/75 p-7 backdrop-blur-sm transition-colors hover:border-primary/60 sm:p-8">
                <span className="font-display text-xl font-bold text-primary">{stage.number}</span>
                <h3 className="mt-7 text-2xl font-semibold leading-tight">{stage.title}</h3>
                {stage.subtitle && (
                  <p className="mt-2 text-xs font-semibold uppercase text-primary">{stage.subtitle}</p>
                )}
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {stage.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}