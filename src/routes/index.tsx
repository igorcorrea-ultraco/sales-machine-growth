import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, FileCheck2, UserRoundPlus } from "lucide-react";

import { Reveal } from "@/components/site/animate";
import { SiteNav, CTA, DIAGNOSTIC_FORM_URL, Logo } from "@/components/site/SiteNav";
import { PhasesSection } from "@/components/site/Phases";
import { ProofSection } from "@/components/site/Proof";
import { NichesMarquee } from "@/components/site/Niches";
import { FaqSection } from "@/components/site/Faq";
import { StepsSection } from "@/components/site/Steps";
import igorHeroUrl from "@/assets/igor-cutout.webp";
import officeBgUrl from "@/assets/office-bg.jpg";

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

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <main className="pt-16 md:pt-[76px]">
        {/* HERO */}
        <section
          id="inicio"
          className="scroll-mt-20 relative flex min-h-[calc(100svh-4rem)] items-end overflow-hidden pb-10 pt-0 md:min-h-[88vh] md:items-center md:py-32"
        >
          <img
            src={officeBgUrl}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 hidden h-full w-full scale-[1.25] object-cover object-center blur-[7px] brightness-[1.2] saturate-[1.05] md:block"
          />
          <div className="absolute inset-0 hidden bg-gradient-to-r from-background via-background/80 to-background/25 md:block" />
          <div className="absolute inset-0 hidden bg-gradient-to-t from-background via-transparent to-background/40 md:block" />

          <div className="absolute inset-y-0 right-[2%] hidden w-[50%] md:block">
            <div className="absolute inset-0 flex items-end justify-center">
              <img
                src={igorHeroUrl}
                alt="Igor Corrêa, fundador da Ultra Company"
                className="h-[96%] w-auto max-w-full object-contain object-bottom"
              />
            </div>
            <div className="hero-float hero-float-lead absolute bottom-[14%] left-2">
              <UserRoundPlus className="size-5" aria-hidden="true" />
              <span>LEAD<br /><strong>QUALIFICADO</strong></span>
            </div>
            <div className="hero-float hero-float-contract absolute right-4 top-[48%]">
              <FileCheck2 className="size-5" aria-hidden="true" />
              <span>CONTRATO<br /><strong>FECHADO</strong></span>
            </div>
            <div className="hero-float hero-float-lead-alt absolute right-8 top-[16%]">
              <UserRoundPlus className="size-4" aria-hidden="true" />
              <span>NOVO LEAD</span>
            </div>
          </div>

          <div className="absolute inset-x-0 top-0 h-[42%] overflow-hidden bg-card md:hidden">
            <img
              src={officeBgUrl}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full scale-[1.3] object-cover object-center blur-[12px] brightness-[1.6] saturate-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background" />
            <div className="absolute inset-0 flex items-end justify-center">
              <img
                src={igorHeroUrl}
                alt="Igor Corrêa, fundador da Ultra Company"
                className="h-[96%] w-auto max-w-full object-contain object-bottom"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background via-background/60 to-transparent" />

            <div className="hero-float hero-float-lead absolute left-4 top-[24%]">
              <UserRoundPlus className="size-5" aria-hidden="true" />
              <span>LEAD<br /><strong>QUALIFICADO</strong></span>
            </div>
            <div className="hero-float hero-float-contract absolute right-3 top-[42%]">
              <FileCheck2 className="size-5" aria-hidden="true" />
              <span>CONTRATO<br /><strong>FECHADO</strong></span>
            </div>
            <div className="hero-float hero-float-lead-alt absolute right-5 top-[12%]">
              <UserRoundPlus className="size-4" aria-hidden="true" />
              <span>NOVO LEAD</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-7xl px-5 md:px-6">
            <Reveal>
              <div className="mx-auto mb-4 w-fit rounded-md border border-border/80 bg-background/75 px-4 py-2 text-center text-[11px] font-medium backdrop-blur-md md:hidden">
                Sua empresa precisa vender com previsibilidade?
              </div>
              <h1 className="display-xl text-center text-[2rem] leading-[1.02] sm:text-5xl md:text-left lg:text-[4rem]">
                SEU NEGÓCIO PODE SER&nbsp;<br />
                UMA MÁQUINA DE&nbsp;<br />
                <span className="text-brand">VENDAS&nbsp;
                PREVISÍVEIS</span>
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-center text-sm leading-relaxed text-muted-foreground md:mx-0 md:mt-7 md:text-left md:text-base">
                A Ultra Company é o lugar certo para o Empresário que está decidido a transformar seu negócio em uma máquina de vendas previsíveis. Método eficiente e validado, acompanhamento aproximado e uma comunidade de altíssimo valor agregado.
              </p>
              <div className="mt-6 flex flex-col items-stretch gap-4 md:mt-9 md:flex-row md:flex-wrap md:items-center">
                <CTA label="Quero meu diagnóstico gratuito" />
                <a
                  href="#metodologia"
                  className="text-center text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Ver a metodologia
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <StepsSection />

        <NichesMarquee />

        <PhasesSection />

        <ProofSection />

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
