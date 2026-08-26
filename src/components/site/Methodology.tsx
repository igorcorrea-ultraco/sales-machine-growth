import { useState } from "react";
import { Check } from "lucide-react";
import { Counter, Reveal } from "@/components/site/animate";
import { MethodologyMark } from "@/components/site/MethodologyMark";

export const methodologyTabs = [
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

export function MethodologyShowcase({
  heading = "Conheça nossa metodologia",
  intro = "Um sistema único de receita, construído sobre a conexão entre Marketing, Vendas e Modelo de Negócio. Cada eixo tem entregáveis, indicadores e ritual próprios — mas só gera resultado quando operam juntos.",
  as: Heading = "h2",
}: {
  heading?: string;
  intro?: string;
  as?: "h1" | "h2";
}) {
  const [active, setActive] = useState<string>("marketing");
  const current = methodologyTabs.find((t) => t.key === active) ?? methodologyTabs[0];

  return (
    <div className="mx-auto max-w-7xl px-6">
      <Reveal>
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <Heading className="display-xl text-3xl sm:text-4xl lg:text-5xl">{heading}</Heading>
          <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">{intro}</p>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:items-start">
        {/* Símbolo da metodologia */}
        <Reveal className="relative hidden lg:block">
          <div className="flex flex-col items-center gap-8">
            <MethodologyMark active={current.key} onSelect={setActive} />
            <div className="panel w-full rounded-2xl p-6">
              <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                {current.subtitle}
              </p>
              <div className="mt-2 flex items-baseline gap-2">
                <Counter
                  key={current.key}
                  to={current.metric}
                  decimals={current.metric % 1 === 0 ? 0 : 1}
                  className="font-display text-4xl font-bold text-primary"
                />
                <span className="text-sm text-muted-foreground">{current.metricLabel}</span>
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <div className="flex gap-2 overflow-x-auto border-b border-border pb-px">
            {methodologyTabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`relative shrink-0 px-4 py-3 text-xs font-semibold tracking-wide uppercase transition-colors sm:px-5 sm:text-sm ${
                  active === t.key
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.label}
                {active === t.key && (
                  <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-primary" />
                )}
              </button>
            ))}
          </div>

          <div className="panel mt-6 flex items-baseline gap-2 rounded-2xl p-5 lg:hidden">
            <Counter
              key={`m-${current.key}`}
              to={current.metric}
              decimals={current.metric % 1 === 0 ? 0 : 1}
              className="font-display text-3xl font-bold text-primary"
            />
            <span className="text-xs text-muted-foreground">{current.metricLabel}</span>
          </div>

          <div className="mt-6 space-y-4">
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
                  <div className="min-w-0">
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
    </div>
  );
}
