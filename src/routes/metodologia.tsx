import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check } from "lucide-react";
import { CTA } from "@/components/site/SiteNav";
import { Counter, ProgressBar, Reveal } from "@/components/site/animate";
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

const tabs = [
  {
    key: "marketing",
    label: "Marketing",
    subtitle: "Foco em Growth",
    metric: 3.4,
    metricLabel: "x mais oportunidades qualificadas",
    items: [
      {
        title: "Geração de Demanda",
        text: "Motor de aquisição constante, com oferta clara e mensagem que conversa com a dor real do mercado.",
      },
      {
        title: "Planejamento Estratégico de Funis",
        text: "Funis desenhados por estágio de consciência, com métricas de passagem e responsáveis definidos.",
      },
      {
        title: "Canais de Aquisição",
        text: "Escolha, teste e escala dos canais que cabem no seu CAC e no seu ciclo de vendas.",
      },
    ],
  },
  {
    key: "vendas",
    label: "Vendas",
    subtitle: "Estrutura Comercial",
    metric: 44,
    metricLabel: "% de redução no ciclo de vendas",
    items: [
      {
        title: "Estrutura Comercial em Alta Performance",
        text: "Papéis, metas, rotina de gestão e ritual de pipeline que sustentam performance recorrente.",
      },
      {
        title: "Scripts que tiram o controle de vendedores estrela",
        text: "Playbook documentado: o método fica na empresa, não na cabeça de um único vendedor.",
      },
      {
        title: "Social Selling + Referidos",
        text: "Autoridade e rede como canal de receita — presença que gera reunião e indicação qualificada.",
      },
    ],
  },
  {
    key: "modelo",
    label: "Modelo de Negócio",
    subtitle: "Sustentável",
    metric: 41,
    metricLabel: "% de ganho em margem operacional",
    items: [
      {
        title: "Análise dos 7P's do Modelo de Negócio vencedor",
        text: "Revisão profunda de produto, preço, praça, promoção, pessoas, processos e posicionamento.",
      },
      {
        title: "Suporte ao crescimento",
        text: "Operação, capacidade de entrega e caixa preparados para absorver a nova demanda.",
      },
      {
        title: "Estratégia Aplicada",
        text: "Plano traduzido em execução: metas trimestrais, indicadores e acompanhamento cadenciado.",
      },
    ],
  },
] as const;

function Metodologia() {
  const [active, setActive] = useState<string>("marketing");
  const current = tabs.find((t) => t.key === active) ?? tabs[0];

  return (
    <div>
      <section className="relative pt-32 pb-16">
        <div className="veil absolute inset-0" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          <h1 className="display-xl text-4xl sm:text-5xl lg:text-6xl">Conheça nossa metodologia</h1>
          <p className="max-w-lg self-end text-sm leading-relaxed text-muted-foreground">
            Um sistema único de receita, construído sobre a conexão entre Marketing, Vendas e Modelo
            de Negócio. Cada eixo tem entregáveis, indicadores e ritual próprios — mas só gera
            resultado quando operam juntos.
          </p>
        </div>
      </section>

      <section className="pb-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-start">
          {/* Emblema animado */}
          <Reveal className="relative hidden lg:block">
            <div className="relative grid aspect-square place-items-center">
              <div className="absolute inset-8 rounded-full border border-dashed border-primary/25" />
              <div className="absolute inset-20 rounded-full border border-primary/20" />
              <div
                className="absolute inset-28 animate-pulse-glow rounded-full"
                style={{ background: "var(--gradient-veil)" }}
              />
              <div className="glow-ring relative grid size-52 place-items-center rounded-full bg-card">
                <span className="font-display text-5xl font-bold tracking-tighter">U</span>
              </div>
              <div className="absolute bottom-0 w-full">
                <div className="panel rounded-2xl p-6">
                  <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                    {current.subtitle}
                  </p>
                  <div className="mt-2 flex items-baseline gap-2">
                    <Counter
                      key={current.key}
                      to={current.metric}
                      className="font-display text-4xl font-bold text-primary"
                    />
                    <span className="text-sm text-muted-foreground">{current.metricLabel}</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <div className="flex gap-2 overflow-x-auto border-b border-border pb-px">
              {tabs.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setActive(t.key)}
                  className={`relative shrink-0 px-5 py-3 text-sm font-semibold tracking-wide uppercase transition-colors ${
                    active === t.key ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t.label}
                  {active === t.key && (
                    <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-primary" />
                  )}
                </button>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              {current.items.map((item, i) => (
                <article
                  key={item.title}
                  className="panel animate-rise rounded-2xl p-6 transition-colors hover:border-primary/60"
                  style={{ animationDelay: `${i * 110}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                      <Check className="size-3.5" />
                    </span>
                    <div>
                      <h3 className="text-base font-bold tracking-wide uppercase">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
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
