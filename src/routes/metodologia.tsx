import { createFileRoute } from "@tanstack/react-router";
import { CTA } from "@/components/site/SiteNav";
import { MethodologyShowcase } from "@/components/site/Methodology";
import { ProgressBar, Reveal } from "@/components/site/animate";
import { PillarsRadar } from "@/components/site/charts";

export const Route = createFileRoute("/metodologia")({
  head: () => ({
    meta: [
      { title: "Metodologia Ultra — Marketing, Vendas e Modelo de Negócio" },
      {
        name: "description",
        content:
          "Os três eixos da metodologia Ultra Company: Growth em Marketing, Estrutura Comercial em Vendas e Modelo de Negócio sustentável.",
      },
      { property: "og:title", content: "Metodologia Ultra Company" },
      {
        property: "og:description",
        content: "Growth, estrutura comercial e os 7P's do modelo de negócio vencedor.",
      },
    ],
  }),
  component: Metodologia,
});

function Metodologia() {
  return (
    <div>
      <section className="relative pt-28 pb-24 md:pt-32">
        <div className="veil absolute inset-0" />
        <div className="relative">
          <MethodologyShowcase as="h1" />
        </div>
      </section>

      <section className="border-t border-border bg-card/30 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="panel rounded-2xl p-6">
              <h3 className="text-lg font-bold">Diagnóstico de maturidade</h3>
              <p className="mt-1 mb-4 text-xs text-muted-foreground">
                Média dos eixos antes e depois da implementação.
              </p>
              <PillarsRadar />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="text-3xl leading-tight font-semibold sm:text-4xl">
              Implementação em <span className="text-primary">90 dias</span>, medida semana a semana
            </h2>
            <div className="mt-8 space-y-6">
              <ProgressBar label="Fase 1 — Diagnóstico e tese de receita" value={100} />
              <ProgressBar label="Fase 2 — Funis e geração de demanda" value={85} />
              <ProgressBar label="Fase 3 — Estrutura comercial e playbook" value={78} />
              <ProgressBar label="Fase 4 — Modelo de negócio e margem" value={70} />
            </div>
            <div className="mt-10">
              <CTA label="Quero aplicar a metodologia" />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
