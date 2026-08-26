import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, LineChart, Quote, Star, Target, Workflow } from "lucide-react";
import heroImage from "@/assets/hero-machine.jpg";
import founderAsset from "@/assets/igor-founder.png.asset.json";
import { CTA, scrollToSection } from "@/components/site/SiteNav";
import { MethodologyShowcase } from "@/components/site/Methodology";
import { Counter, ProgressBar, Reveal } from "@/components/site/animate";
import { ConnectionShape } from "@/components/site/ConnectionShape";
import { FunnelChart, GrowthChart, PillarsRadar } from "@/components/site/charts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ultra Company — Máquina de vendas que vende mais e gera margem" },
      {
        name: "description",
        content:
          "Consultoria de receita de alta performance: Marketing, Vendas e Modelo de Negócio conectados para gerar crescimento previsível com margem.",
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

/** Contabilidade aparece com peso maior que os demais nichos. */
const niches: string[] = [
  "Contabilidade",
  "Advogados",
  "Contabilidade",
  "Médicos",
  "Contabilidade",
  "Indústria",
  "Contabilidade",
  "Biomédicos",
  "Contabilidade",
  "Agências",
  "Contabilidade",
];

const founderMarks = [
  { v: 100, s: "+", d: "Operações tracionadas" },
  { v: 10, s: " anos", d: "Liderando times de receita" },
  { v: 50, s: "M", d: "Em receita gerada (R$)" },
];

const quotes = [
  {
    name: "Rafael Menezes",
    role: "CEO — Indústria de embalagens",
    text: "Saímos da dependência de dois vendedores. Hoje o processo está documentado e o pipeline é previsível — o crescimento parou de ser sorte.",
    kpi: "+38% receita em 7 meses",
  },
  {
    name: "Carla Bittencourt",
    role: "Sócia — Serviços contábeis",
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

function Home() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section id="inicio" className="relative scroll-mt-24 pt-28 pb-24 md:pt-36">
        <div className="grid-lines absolute inset-0 opacity-25" />
        <div className="veil absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-6">
          <span className="text-[11px] tracking-[0.35em] text-muted-foreground uppercase">
            Consultoria de receita de alta performance
          </span>

          <h1 className="display-xl animate-rise mt-7 max-w-3xl text-[2rem] leading-[1.06] sm:text-[2.6rem] lg:text-[3.4rem]">
            Seu negócio pode ter uma máquina que te faz{" "}
            <span className="text-primary">vender mais</span> e com{" "}
            <span className="text-primary">mais margem</span>.
          </h1>

          <p className="animate-rise mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
            Somos a Ultra Company. Construímos sistemas de receita conectando Marketing, Vendas e
            Modelo de Negócio — para que crescimento deixe de ser sorte e passe a ser previsão.
          </p>

          <div className="animate-rise mt-10 flex flex-wrap items-center gap-4">
            <CTA label="Quero minha máquina de vendas" />
            <a
              href="#metodologia"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("metodologia");
              }}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
            >
              Ver a metodologia
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </section>


      {/* METODOLOGIA */}
      <section
        id="metodologia"
        className="scroll-mt-20 border-t border-border py-20 md:py-28"
      >
        <MethodologyShowcase />
      </section>

      {/* NICHOS — MARQUEE */}
      <section className="border-y border-border bg-card/40 py-5">
        <p className="mb-4 text-center text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
          Entregáveis rodando hoje em
        </p>
        <div className="marquee-track flex w-max">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center">
              {niches.map((w, i) => (
                <span
                  key={`${dup}-${i}-${w}`}
                  className="font-display flex items-center text-base font-semibold tracking-tight uppercase md:text-xl"
                >
                  <span
                    className={`px-7 ${w === "Contabilidade" ? "text-foreground" : "text-muted-foreground"}`}
                  >
                    {w}
                  </span>
                  <span className="text-primary/70">///</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* TESE */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Reveal>
            <span className="text-[11px] tracking-[0.3em] text-primary uppercase">Nossa tese</span>
          </Reveal>
          <Reveal>
            <h2 className="mx-auto mt-8 max-w-3xl text-2xl leading-snug font-semibold sm:text-3xl lg:text-4xl">
              Receita não se resolve com ações isoladas de um departamento, mas nasce da{" "}
              <span className="text-primary">conexão entre marketing, vendas</span> e{" "}
              <span className="text-primary">modelo de negócio</span>.
            </h2>
          </Reveal>
          <Reveal delay={120} className="mt-14">
            <ConnectionShape />
          </Reveal>

          <div className="mt-16 grid gap-6 text-left md:grid-cols-3">

            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <article className="panel group h-full rounded-2xl p-8 transition-colors hover:border-primary/50">
                  <p.icon className="size-5 text-primary" />
                  <p className="mt-6 text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
                    {p.tag}
                  </p>
                  <h3 className="mt-2 text-xl font-bold">{p.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DADOS */}
      <section className="border-t border-border bg-card/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h2 className="max-w-2xl text-2xl leading-snug font-semibold sm:text-3xl">
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
                <h3 className="text-base font-bold">Receita e margem em escala</h3>
                <p className="mt-1 mb-6 text-xs text-muted-foreground">
                  Índice base 100 no mês 1 — crescimento com expansão de margem.
                </p>
                <GrowthChart />
              </div>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-2">
              <div className="panel h-full rounded-2xl p-6">
                <h3 className="text-base font-bold">Funil sob controle</h3>
                <p className="mt-1 mb-6 text-xs text-muted-foreground">
                  Conversão por etapa após redesenho de funil e cadência.
                </p>
                <FunnelChart />
              </div>
            </Reveal>
            <Reveal delay={80} className="lg:col-span-2">
              <div className="panel h-full rounded-2xl p-6">
                <h3 className="text-base font-bold">Maturidade comercial</h3>
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

          <Reveal delay={120}>
            <div className="mt-6 grid gap-6 lg:grid-cols-5">
              <div className="panel rounded-2xl p-6 lg:col-span-2">
                <div className="relative mx-auto aspect-[9/16] w-full max-w-[380px] overflow-hidden rounded-xl border border-border bg-black">
                  <iframe
                    src="https://www.instagram.com/reel/DXHZYJlke6n/embed/?autoplay=1&muted=1"
                    title="Resultado de cliente Ultra Company"
                    allow="autoplay; encrypted-media; fullscreen"
                    allowFullScreen
                    scrolling="no"
                    className="absolute -top-[54px] left-0 w-full border-0"
                    style={{ height: "calc(100% + 200px)" }}
                  />
                </div>
              </div>

              <div className="panel flex flex-col justify-center rounded-2xl p-8 lg:col-span-3">
                <span className="text-[11px] tracking-[0.3em] text-primary uppercase">
                  Resultado na prática
                </span>
                <h3 className="display-xl mt-4 text-xl sm:text-2xl">
                  O sistema de receita explicado em 60 segundos
                </h3>
                <p className="mt-4 max-w-md text-sm text-muted-foreground">
                  Como a conexão entre Marketing, Vendas e Modelo de Negócio transforma esforço
                  isolado em crescimento com margem — com números reais de operações tracionadas.
                </p>
                <div className="mt-8">
                  <CTA label="Quero esse resultado no meu negócio" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FUNDADOR */}
      <section id="fundador" className="scroll-mt-20 border-t border-border py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[240px_1fr] md:items-start">
          <Reveal>
            <div className="overflow-hidden rounded-xl border border-border">
              <img
                src={founderAsset.url}
                alt="Igor Corrêa, fundador da Ultra Company"
                width={912}
                height={1200}
                loading="lazy"
                className="w-full object-cover"
              />
            </div>
            <p className="mt-4 text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
              Fundador · Ultra Company
            </p>
            <p className="font-display mt-1 text-lg font-bold">Igor Corrêa</p>
          </Reveal>

          <div>
            <span className="text-[11px] tracking-[0.3em] text-primary uppercase">O Fundador</span>
            <h2 className="display-xl mt-5 text-2xl sm:text-3xl lg:text-4xl">
              Quem constrói a máquina por dentro
            </h2>
            <p className="mt-7 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              A Ultra Company nasceu na operação, não na teoria. São mais de uma década liderando
              áreas de marketing e vendas, montando estruturas comerciais do zero e reconstruindo
              modelos de negócio que cresciam sem gerar margem.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Dessa vivência veio a tese que sustenta a consultoria: receita é consequência da
              conexão entre Growth, Estrutura Comercial e Modelo de Negócio sustentável. Quando um
              desses eixos falha, o crescimento vira volume sem lucro.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-muted-foreground">
              {[
                "Diagnóstico honesto: onde a receita trava hoje e quanto isso custa por mês.",
                "Construção conjunta com o time interno — transferência real de método.",
                "Indicadores acordados no início e revisados em cadência semanal.",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <CTA label="Quero meu diagnóstico gratuito" />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-20 grid max-w-6xl gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
          {founderMarks.map((m) => (
            <div key={m.d} className="bg-background/85 p-8">
              <Counter to={m.v} suffix={m.s} className="font-display text-3xl font-bold" />
              <p className="mt-2 text-xs text-muted-foreground">{m.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="scroll-mt-20 border-t border-border bg-card/30 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="text-[11px] tracking-[0.35em] text-primary uppercase">Depoimentos</span>
          <h2 className="display-xl mt-6 text-2xl sm:text-3xl lg:text-4xl">
            O que dizem sobre nós
          </h2>
          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-primary text-primary" />
            ))}
            <Counter to={4.9} decimals={1} className="font-display ml-2 font-bold" />
            <span className="text-xs text-muted-foreground">média de satisfação</span>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-7xl gap-6 px-6 md:grid-cols-2">
          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={i * 100}>
              <article className="panel flex h-full flex-col rounded-2xl p-8 transition-colors hover:border-primary/50">
                <Quote className="size-5 text-primary" />
                <p className="mt-6 flex-1 text-sm leading-relaxed">{q.text}</p>
                <div className="mt-8 flex items-end justify-between gap-4 border-t border-border pt-6">
                  <div>
                    <p className="font-display text-sm font-bold tracking-wide uppercase">
                      {q.name}
                    </p>
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

      {/* DIAGNÓSTICO — captação de lead */}
      <section
        id="diagnostico"
        className="relative scroll-mt-20 border-t border-border py-24"
      >
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <span className="text-[11px] tracking-[0.3em] text-primary uppercase">Próximo passo</span>
          <h2 className="display-xl mt-6 text-2xl sm:text-3xl lg:text-4xl">
            Diagnóstico de receita — gratuito
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm text-muted-foreground">
            Em uma sessão de 45 minutos mapeamos os gargalos de demanda, da estrutura comercial e do
            modelo de negócio — e você sai com as prioridades dos próximos 90 dias.
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href="mailto:contato@ultracompany.com.br?subject=Quero%20meu%20Diagn%C3%B3stico%20de%20Receita&body=Nome%3A%0AEmpresa%3A%0ASegmento%3A%0AFaturamento%20mensal%3A%0AWhatsApp%3A"
              className="group inline-flex items-center gap-2 rounded-full border border-primary/60 bg-primary/95 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary"
            >
              Solicitar meu diagnóstico gratuito
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Vagas limitadas por mês — atendimento conduzido pela equipe Ultra.
          </p>
        </div>
      </section>
    </div>
  );
}
