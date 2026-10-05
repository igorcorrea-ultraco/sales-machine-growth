import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BadgeDollarSign, FileCheck2, TrendingUp, UserRoundPlus } from "lucide-react";

import { Reveal } from "@/components/site/animate";
import { SiteNav, CTA, DIAGNOSTIC_FORM_URL, Logo } from "@/components/site/SiteNav";
import { PhasesSection } from "@/components/site/Phases";
import { ProofSection } from "@/components/site/Proof";
import { NichesMarquee } from "@/components/site/Niches";
import { FaqSection } from "@/components/site/Faq";
import { StepsSection } from "@/components/site/Steps";
import igorRedUrl from "@/assets/igor-red-crop.webp";

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
          <div className="absolute inset-y-0 right-0 hidden w-[54%] md:block">
            <img
              src={igorRedUrl}
              alt="Igor Corrêa, fundador da Ultra Company"
              className="h-full w-full object-cover object-[50%_18%]"
              style={{
                maskImage: "linear-gradient(to left, black 58%, transparent 97%)",
                WebkitMaskImage: "linear-gradient(to left, black 58%, transparent 97%)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-background/40" />
          </div>
          <div className="absolute inset-0 hidden bg-gradient-to-r from-background via-background/80 to-background/10 md:block" />
          <div className="absolute inset-0 hidden bg-[radial-gradient(ellipse_at_78%_45%,oklch(0.45_0.19_26/0.35),transparent_60%)] md:block" />
          <div className="absolute inset-y-0 right-[2%] hidden w-[54%] md:block">
            <div className="hero-float hero-float-lead absolute bottom-[20%] left-[26%]">
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

          <div className="absolute inset-x-0 top-0 h-[64%] overflow-hidden bg-card md:hidden">
            <img
              src={igorRedUrl}
              alt="Igor Corrêa, fundador da Ultra Company"
              className="absolute inset-0 h-full w-full object-cover object-[50%_18%]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/45 via-transparent to-background/30" />
            <div className="absolute inset-x-0 bottom-0 h-[74%] bg-gradient-to-t from-background via-background/85 to-transparent" />


            <div className="hero-tile hero-float-lead absolute left-[8%] top-[9%] size-[4.6rem]">
              <UserRoundPlus className="size-6" aria-hidden="true" />
              <span>LEAD</span>
            </div>
            <div className="hero-tile hero-float-lead-alt absolute left-[3%] top-[34%] size-[4.1rem]">
              <TrendingUp className="size-6" aria-hidden="true" />
              <span>+VENDAS</span>
            </div>
            <div className="hero-tile hero-float-contract absolute right-[5%] top-[17%] size-[4.4rem]">
              <FileCheck2 className="size-6" aria-hidden="true" />
              <span>CONTRATO</span>
            </div>
            <div className="hero-tile hero-float-lead absolute -right-1 size-[4.6rem]" style={{ top: "40%" }}>
              <BadgeDollarSign className="size-8" aria-hidden="true" />
              <span>FECHADO</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-7xl px-5 md:px-6">
            <Reveal>
              <p className="hero-badge mx-auto mb-5 w-fit md:mx-0">
                Precisa destravar o crescimento da sua empresa?
              </p>
              <h1 className="text-center text-[1.55rem] font-semibold leading-[1.16] tracking-tight sm:text-[2.6rem] md:max-w-3xl md:text-left lg:text-[3.15rem]">
                Destrave o <span className="text-glow">faturamento</span> da sua empresa com a assessoria de{" "}
                <span className="text-glow">Marketing e Vendas</span> da Ultra Company.
              </h1>

              <p className="mx-auto mt-4 max-w-xl text-center text-[15px] leading-relaxed text-foreground/85 md:mx-0 md:mt-7 md:text-left md:text-base">
                A Ultra Company é o lugar certo para o Empresário que está decidido a transformar seu negócio em uma máquina de vendas previsíveis. Método eficiente e validado, acompanhamento aproximado e uma comunidade de altíssimo valor agregado.
              </p>
              <div className="mt-7 flex flex-col items-center gap-4 md:mt-9 md:flex-row md:flex-wrap">
                <a
                  href={DIAGNOSTIC_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-cta group inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold md:w-auto"
                >
                  Quero meu diagnóstico gratuito
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#metodologia"
                  className="rounded-full border border-foreground/30 px-8 py-3 text-center text-sm font-medium text-foreground/85 transition-colors hover:border-foreground/60"
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
