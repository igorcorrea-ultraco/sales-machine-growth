import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, LineChart, Target, Workflow } from "lucide-react";
import heroImage from "@/assets/hero-machine.jpg";
import { CTA } from "@/components/site/SiteNav";
import { Counter, ProgressBar, Reveal } from "@/components/site/animate";
import { FunnelChart, GrowthChart, PillarsRadar } from "@/components/site/charts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ultra Company — Máquina de vendas que vende mais e gera margem" },
      {
        name: "description",
        content:
          "Assessoria de Receita que conecta Marketing, Vendas e Modelo de Negócio para construir crescimento com previsibilidade e margem.",
      },
      { property: "og:title", content: "Ultra Company — Máquina de Vendas com Margem" },
      {
        property: "og:description",
        content:
          "Growth, estrutura comercial e modelo de negócio sustentável em um único sistema de receita.",
      },
    ],
  }),
  component: Home,
});

const pillars = [
  {
    icon: Target,
    tag: "Marketing",
    title: "Growth",
    text: "Demanda previsível com funis desenhados por intenção de compra e canais validados.",
  },
  {
    icon: Workflow,
    tag: "Vendas",
    title: "Estrutura Comercial",
    text: "Processo, cadência e scripts que tiram a operação da dependência do vendedor estrela.",
  },
  {
    icon: LineChart,
    tag: "Modelo de Negócio",
    title: "Sustentável",
    text: "Precificação, oferta e unidade econômica ajustadas para crescer sem destruir margem.",
  },
];

function Home() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[92vh] pt-28 pb-24">
        <div className="veil absolute inset-0" />
        <div className="grid-lines absolute inset-0 opacity-40" />
        <img
          src={heroImage}
          alt="Estrutura luminosa representando uma máquina de vendas em crescimento"
          width={1408}
          height={1408}
          className="pointer-events-none absolute top-0 right-[-10%] h-full max-w-none opacity-70 mix-blend-screen md:right-0 md:w-[62%]"
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="animate-rise inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs tracking-widest uppercase backdrop-blur">
            <span className="animate-pulse-glow size-1.5 rounded-full bg-primary" />
            Assessoria de Receita
          </div>

          <h1 className="display-xl animate-rise mt-8 max-w-4xl text-5xl sm:text-6xl lg:text-7xl">
            Seu negócio pode ter uma máquina de vendas que{" "}
            <span className="text-gradient-ember">vende mais</span> e{" "}
            <span className="text-gradient-ember">gera margem</span>.
          </h1>

          <p className="animate-rise mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
            Somos a Ultra Company. Construímos sistemas de receita conectando Marketing, Vendas e
            Modelo de Negócio — para que crescimento deixe de ser sorte e passe a ser previsão.
          </p>

          <div className="animate-rise mt-10 flex flex-wrap items-center gap-4">
            <CTA label="Quero minha máquina de vendas" />
            <Link
              to="/metodologia"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
            >
              Ver a metodologia
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="mt-20 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
            {[
              { v: 3.2, s: "x", d: "Receita média em 12 meses", dec: 1 },
              { v: 41, s: "%", d: "Ganho de margem operacional" },
              { v: 92, s: "%", d: "Previsibilidade de pipeline" },
              { v: 180, s: "+", d: "Operações comerciais estruturadas" },
            ].map((k) => (
              <div key={k.d} className="bg-background/80 p-6 backdrop-blur">
                <Counter
                  to={k.v}
                  suffix={k.s}
                  decimals={k.dec ?? 0}
                  className="font-display text-4xl font-bold"
                />
                <p className="mt-2 text-xs leading-snug text-muted-foreground">{k.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border bg-card/40 py-6">
        <div className="flex w-max marquee-track">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center">
              {["Growth", "Funis", "Estrutura Comercial", "Previsibilidade", "Margem", "7P's"].map(
                (w) => (
                  <span
                    key={w}
                    className="font-display flex items-center text-2xl font-bold tracking-tight uppercase md:text-4xl"
                  >
                    <span className="px-8">{w}</span>
                    <span className="text-primary">///</span>
                  </span>
                ),
              )}
            </div>
          ))}
        </div>
      </section>

      {/* TESE */}
      <section className="relative py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <span className="text-xs tracking-[0.3em] text-primary uppercase">Nossa tese</span>
            <h2 className="mt-6 max-w-4xl text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl">
              Receita não se resolve em um departamento. Nasce da{" "}
              <span className="text-primary">conexão entre marketing, vendas</span> e{" "}
              <span className="text-primary">modelo de negócio</span>.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <article className="panel group h-full rounded-2xl p-8 transition-colors hover:border-primary/60">
                  <p.icon className="size-6 text-primary" />
                  <p className="mt-6 text-xs tracking-[0.2em] text-muted-foreground uppercase">
                    {p.tag}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold">{p.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DADOS */}
      <section className="border-t border-border bg-card/30 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h2 className="max-w-2xl text-3xl leading-tight font-semibold sm:text-4xl">
                A proposta de valor em <span className="text-primary">números</span>
              </h2>
              <p className="max-w-sm text-sm text-muted-foreground">
                Indicadores médios das operações que implementaram o sistema Ultra de receita ao
                longo de 6 a 12 meses.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-5">
            <Reveal className="lg:col-span-3">
              <div className="panel h-full rounded-2xl p-6">
                <h3 className="text-lg font-bold">Receita e margem em escala</h3>
                <p className="mt-1 mb-6 text-xs text-muted-foreground">
                  Índice base 100 no mês 1 — crescimento com expansão de margem.
                </p>
                <GrowthChart />
              </div>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-2">
              <div className="panel h-full rounded-2xl p-6">
                <h3 className="text-lg font-bold">Funil sob controle</h3>
                <p className="mt-1 mb-6 text-xs text-muted-foreground">
                  Conversão por etapa após redesenho de funil e cadência.
                </p>
                <FunnelChart />
              </div>
            </Reveal>
            <Reveal delay={80} className="lg:col-span-2">
              <div className="panel h-full rounded-2xl p-6">
                <h3 className="text-lg font-bold">Maturidade comercial</h3>
                <p className="mt-1 mb-6 text-xs text-muted-foreground">
                  Diagnóstico antes x depois nos seis eixos do sistema.
                </p>
                <PillarsRadar />
              </div>
            </Reveal>
            <Reveal delay={160} className="lg:col-span-3">
              <div className="panel flex h-full flex-col justify-center gap-7 rounded-2xl p-8">
                <ProgressBar label="Aumento de ticket médio" value={37} />
                <ProgressBar label="Redução do ciclo de vendas" value={44} />
                <ProgressBar label="Aderência ao processo comercial" value={89} />
                <ProgressBar label="Taxa de conversão em proposta" value={58} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32">
        <div className="veil absolute inset-0" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <span className="text-xs tracking-[0.3em] text-primary uppercase">Próximo passo</span>
          <h2 className="display-xl mt-6 text-4xl sm:text-5xl">
            Construa a máquina. Colha a previsibilidade.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm text-muted-foreground">
            Diagnóstico inicial gratuito: mapeamos gargalos de demanda, estrutura comercial e
            modelo de negócio em uma sessão de 45 minutos.
          </p>
          <div className="mt-10 flex justify-center">
            <CTA label="Agendar diagnóstico" />
          </div>
        </div>
      </section>
    </div>
  );
}
