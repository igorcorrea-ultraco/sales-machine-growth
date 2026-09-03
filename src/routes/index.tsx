import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle, Users, Target, Repeat } from "lucide-react";

import { Reveal } from "@/components/site/animate";
import { SiteNav, CTA, DIAGNOSTIC_FORM_URL, Logo } from "@/components/site/SiteNav";
import { PhasesSection } from "@/components/site/Phases";
import { ProofSection } from "@/components/site/Proof";
import { NichesMarquee } from "@/components/site/Niches";
import { CompareSection } from "@/components/site/Compare";
import { FaqSection } from "@/components/site/Faq";
import heroUrl from "@/assets/maquinario.jpg";
import igorUrl from "@/assets/igor-founder.webp";
import botaoUrl from "@/assets/botao-vermelho.jpg";

const TITLE = "Ultra Company - Máquina de Vendas";
const DESCRIPTION = "Venda Mais e com Mais Margem.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const deliverables = [
  {
    icon: MessageCircle,
    title: "Grupo VIP no WhatsApp",
    text: "Canal direto com nossos especialistas para tirar dúvidas de comercial e receita no dia a dia.",
  },
  {
    icon: Users,
    title: "Encontros presenciais",
    text: "Imersões com empresários de alto impacto, onde o network vale tanto quanto o conteúdo.",
  },
  {
    icon: Target,
    title: "Acompanhamento aproximado",
    text: "Um gerente de sucesso dedicado conduzindo a implementação ao longo de 12 meses.",
  },
  {
    icon: Repeat,
    title: "Sprints práticos",
    text: "Oficinas de execução em marketing, vendas, gestão e modelo de negócio — nada de teoria solta.",
  },
];

const steps = [
  {
    n: "01",
    title: "Descubra o que paralisa seu comercial",
    text: "Antes de investir mais em marketing, entenda onde a receita está vazando: oferta, funil, processo ou gestão.",
  },
  {
    n: "02",
    title: "Avalie o seu posicionamento",
    text: "A percepção de valor define o seu preço. Reposicionamos a sua empresa para vender melhor, não apenas mais.",
  },
  {
    n: "03",
    title: "Blinde o seu modelo de negócio",
    text: "Crescimento sem estrutura quebra a margem. Ajustamos o modelo para suportar o próximo patamar de receita.",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <main className="pt-16 md:pt-[76px]">
        {/* HERO */}
        <section
          id="inicio"
          className="scroll-mt-20 relative flex min-h-[88vh] items-center overflow-hidden py-24 md:py-32"
        >
          <img
            src={heroUrl}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 bg-background/40" />
          <div className="relative mx-auto w-full max-w-7xl px-6">
            <Reveal>
              <h1 className="display-xl text-[2.1rem] leading-[1.02] sm:text-5xl lg:text-[4rem]">
                SEU NEGÓCIO PODE SER&nbsp;<br />
                UMA MÁQUINA DE&nbsp;<br />
                VENDAS&nbsp;<br />
                PREVISÍVEIS
              </h1>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">
                A Ultra Company é o lugar certo para o Empresário que está decidido a transformar seu negócio em uma máquina de vendas previsíveis. Método eficiente e validado, acompanhamento aproximado e uma comunidade de altíssimo valor agregado.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <CTA label="Quero meu diagnóstico gratuito" />
                <a
                  href="#metodologia"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Ver a metodologia
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <NichesMarquee />

        <PhasesSection />

        {/* O QUE VOCÊ RECEBE */}
        <section id="o-que-recebe" className="scroll-mt-20 border-t border-border py-24">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal className="max-w-2xl">
              <span className="text-[11px] tracking-[0.35em] text-primary uppercase">
                O que você recebe
              </span>
              <h2 className="display-xl mt-6 text-2xl sm:text-3xl lg:text-[3rem]">
                Estrutura, execução e gente ao seu lado
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {deliverables.map((d, i) => (
                <Reveal key={d.title} delay={i * 100}>
                  <article className="panel h-full rounded-2xl p-7">
                    <d.icon className="size-6 text-primary" />
                    <h3 className="mt-6 text-base font-bold">{d.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PASSOS DIRECIONAIS */}
        <section className="border-t border-border py-24">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal className="max-w-2xl">
              <span className="text-[11px] tracking-[0.35em] text-primary uppercase">
                Passos direcionais
              </span>
              <h2 className="display-xl mt-6 text-2xl sm:text-3xl lg:text-[3rem]">
                Três movimentos antes de escalar
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-10 md:grid-cols-3">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 120}>
                  <div className="border-t border-primary/40 pt-6">
                    <span className="display-xl text-4xl text-primary/70">{s.n}</span>
                    <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <ProofSection />
        <CompareSection />

        {/* BOTÃO VERMELHO */}
        <section id="diagnostico" className="scroll-mt-20 border-t border-border py-24 md:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[300px_1fr]">
            <Reveal>
              <div className="panel overflow-hidden rounded-2xl">
                <img
                  src={botaoUrl}
                  alt="Botão vermelho"
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="h-56 w-full object-cover lg:h-72"
                />
              </div>
              <div className="panel mt-6 flex items-center gap-4 rounded-2xl p-4">
                <img
                  src={igorUrl}
                  alt="Igor Corrêa"
                  width={400}
                  height={400}
                  loading="lazy"
                  className="size-14 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold">Igor Corrêa</p>
                  <p className="text-xs text-muted-foreground">
                    Fundador da Ultra Company
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <span className="text-[11px] tracking-[0.35em] text-primary uppercase">
                Aperte o botão vermelho
              </span>
              <h2 className="display-xl mt-6 text-2xl sm:text-3xl lg:text-[3.2rem]">
                {"\n"}
              </h2>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                O BOTÃO VERMELHO SERVE COMO UM PEDIDO PRIORITÁRIO DE ACESSO AO FUNDADOR E SÓCIOS PARA DECISÕES IMPORTANTES

                É levar o nosso cérebro de negócios para dentro do seu escritório para tomar uma decisão importante que não pode esperar.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "\n",
                  "\n",
                  "\n",
                  "\n",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-9">
                <CTA label="Quero meu diagnóstico gratuito" />
              </div>
            </Reveal>
          </div>
        </section>

        <FaqSection />

        {/* CTA FINAL */}
        <section className="border-t border-border py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <h2 className="display-xl text-2xl sm:text-3xl lg:text-[3rem]">
                Pronto para vender mais e com mais margem?
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Preencha o diagnóstico e receba a leitura do que está travando o crescimento da sua
                empresa.
              </p>
              <div className="mt-9 flex justify-center">
                <a
                  href={DIAGNOSTIC_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Quero meu diagnóstico gratuito
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <footer className="border-t border-border py-10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 sm:flex-row">
            <Logo />
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Ultra Company. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
