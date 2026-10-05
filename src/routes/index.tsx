import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/site/animate";
import { SiteNav, CTA, DIAGNOSTIC_FORM_URL, Logo } from "@/components/site/SiteNav";
import { PhasesSection } from "@/components/site/Phases";
import { ProofSection } from "@/components/site/Proof";
import { NichesMarquee } from "@/components/site/Niches";
import { FaqSection } from "@/components/site/Faq";
import { StepsSection } from "@/components/site/Steps";
import heroUrl from "@/assets/maquinario.jpg";

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
                <span className="text-brand">VENDAS&nbsp;
                PREVISÍVEIS</span>
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
