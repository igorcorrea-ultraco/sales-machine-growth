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
    metric: 63,
    metricLabel: "% de aumento na taxa de conversão",
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
        text: "Um diagnóstico proprietário em 7 dimensões que revela onde sua margem vaza — e o que precisa ser redesenhado antes de escalar. O método é aplicado ao vivo, junto com a sua diretoria.",
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
        <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
          <Heading className="display-xl max-w-[10ch] text-3xl sm:text-4xl lg:text-[3.4rem]">
            {heading}
          </Heading>
          <p className="max-w-lg text-sm leading-relaxed text-muted-foreground lg:ml-auto lg:text-base">
            {intro}
          </p>
        </div>
      </Reveal>

      {/* Símbolo da metodologia — visível em todos os tamanhos */}
      <Reveal className="mt-10 flex justify-center" delay={80}>
        <MethodologyMark active={current.key} onSelect={setActive} />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-start">
        {/* Métrica do eixo ativo */}
        <Reveal>
          <div className="flex items-baseline gap-3 border-t border-border pt-6">
            <Counter
              key={current.key}
              to={current.metric}
              decimals={current.metric % 1 === 0 ? 0 : 1}
              className="font-display text-4xl font-bold text-primary"
            />
            <span className="max-w-[220px] text-sm text-muted-foreground">
              {current.metricLabel}
            </span>
          </div>
        </Reveal>

        <div>
          <div className="flex border-b border-border pb-px">
            {methodologyTabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`relative flex-1 px-2 py-3 text-xs font-semibold tracking-wide uppercase transition-colors sm:text-sm ${
                  active === t.key
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.label}
                {active === t.key && (
                  <span className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-primary" />
                )}
              </button>
            ))}
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
