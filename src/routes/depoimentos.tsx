import { createFileRoute } from "@tanstack/react-router";
import { Quote, Star } from "lucide-react";
import { CTA } from "@/components/site/SiteNav";
import { Counter, Reveal } from "@/components/site/animate";
import { FunnelChart } from "@/components/site/charts";

export const Route = createFileRoute("/depoimentos")({
  head: () => ({
    meta: [
      { title: "Depoimentos — Resultados com a Ultra Company" },
      {
        name: "description",
        content:
          "O que empresários dizem sobre a Ultra Company: previsibilidade de pipeline, estrutura comercial madura e crescimento com margem.",
      },
      { property: "og:title", content: "Depoimentos — Ultra Company" },
      {
        property: "og:description",
        content: "Resultados reais de operações que implementaram o sistema Ultra de receita.",
      },
    ],
  }),
  component: Depoimentos,
});

const quotes = [
  {
    name: "Rafael Menezes",
    role: "CEO — Indústria de embalagens",
    text: "Saímos da dependência de dois vendedores. Hoje o processo está documentado e o pipeline é previsível — o crescimento parou de ser sorte.",
    kpi: "+38% receita em 7 meses",
  },
  {
    name: "Carla Bittencourt",
    role: "Sócia — Serviços B2B",
    text: "A revisão do modelo de negócio foi o ponto de virada. Vendemos o mesmo volume com margem muito maior e time menos sobrecarregado.",
    kpi: "+19 p.p. de margem",
  },
  {
    name: "Diego Andrade",
    role: "Diretor Comercial — SaaS",
    text: "Funis redesenhados por estágio de consciência mudaram nossa taxa de reunião. Foi a primeira vez que marketing e vendas falaram a mesma língua.",
    kpi: "2,6x oportunidades qualificadas",
  },
  {
    name: "Marina Prado",
    role: "Fundadora — Educação corporativa",
    text: "Cadência de gestão semanal e indicadores claros. Em três meses eu já sabia prever o fechamento do trimestre com margem de erro pequena.",
    kpi: "92% de acurácia no forecast",
  },
];

function Depoimentos() {
  return (
    <div>
      <section className="relative pt-32 pb-16 text-center">
        <div className="veil absolute inset-0" />
        <div className="relative mx-auto max-w-3xl px-6">
          <span className="text-xs tracking-[0.35em] text-primary uppercase">Depoimentos</span>
          <h1 className="display-xl mt-6 text-4xl sm:text-5xl">O que dizem sobre nós</h1>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Relatos de empresários que reconstruíram a própria máquina de vendas conectando
            Marketing, Vendas e Modelo de Negócio.
          </p>
          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-primary text-primary" />
            ))}
            <Counter to={4.9} decimals={1} className="font-display ml-2 font-bold" />
            <span className="text-xs text-muted-foreground">média de satisfação</span>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2">
          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={i * 100}>
              <article className="panel flex h-full flex-col rounded-2xl p-8 transition-colors hover:border-primary/60">
                <Quote className="size-6 text-primary" />
                <p className="mt-6 flex-1 text-base leading-relaxed">{q.text}</p>
                <div className="mt-8 flex items-end justify-between gap-4 border-t border-border pt-6">
                  <div>
                    <p className="font-display font-bold tracking-wide uppercase">{q.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{q.role}</p>
                  </div>
                  <span className="rounded-full bg-primary/12 px-3 py-1 text-xs font-semibold text-primary">
                    {q.kpi}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card/30 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="text-3xl leading-tight font-semibold sm:text-4xl">
              O padrão dos resultados: <span className="text-primary">funil sob controle</span>
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Em quase todos os projetos, o mesmo diagnóstico aparece: demanda desorganizada e
              conversão sem gestão por etapa. Corrigido isso, o efeito na receita é imediato.
            </p>
            <div className="mt-10">
              <CTA label="Quero esse resultado" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="panel rounded-2xl p-6">
              <h3 className="text-lg font-bold">Conversão média por etapa</h3>
              <p className="mt-1 mb-6 text-xs text-muted-foreground">
                Base consolidada de clientes atendidos.
              </p>
              <FunnelChart />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
