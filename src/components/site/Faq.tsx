import { useState } from "react";
import { Plus } from "lucide-react";

import { Reveal } from "@/components/site/animate";

const faqs = [
  {
    q: "Para qual tipo de empresa isso funciona?",
    a: "Para empresas que já vendem e querem previsibilidade: serviços B2B, indústria, tecnologia, saúde, jurídico e operações que dependem de time comercial. Se você ainda não tem faturamento recorrente, não é o momento.",
  },
  {
    q: "Vocês executam ou só orientam?",
    a: "Nós estruturamos o plano e conduzimos a execução junto com o seu time em sprints práticos. Você não recebe um relatório para implementar sozinho.",
  },
  {
    q: "Quanto tempo leva para ver resultado?",
    a: "As primeiras correções de oferta e processo comercial normalmente aparecem no resultado entre 30 e 90 dias. A estruturação completa da máquina acontece ao longo do acompanhamento de 12 meses.",
  },
  {
    q: "Preciso trocar meu time comercial?",
    a: "Na maioria dos casos, não. O problema quase nunca é a pessoa: é a falta de processo, script e gestão. Treinamos o time que você já tem antes de sugerir qualquer troca.",
  },
  {
    q: "Como funciona o diagnóstico?",
    a: "É uma análise da sua operação de receita: aquisição, conversão, precificação e modelo de negócio. Você sai com o mapa dos gargalos e a ordem de prioridade para resolver.",
  },
  {
    q: "Isso serve para quem vende pouco no digital?",
    a: "Sim. Trabalhamos canais de aquisição de acordo com o seu mercado, incluindo vendas ativas, indicações e social selling — não apenas tráfego pago.",
  },
  {
    q: "Qual o investimento?",
    a: "Depende do tamanho e da complexidade da operação. O valor é apresentado depois do diagnóstico, quando já sabemos exatamente o que precisa ser construído.",
  },
  {
    q: "E se a minha empresa for muito específica?",
    a: "A estrutura de receita muda pouco entre mercados; o que muda é a oferta e o canal. O método é adaptado ao seu contexto na fase de correção e estruturação.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 border-t border-border py-24">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="text-center">
          <span className="text-[11px] tracking-[0.35em] text-primary uppercase">Q&amp;A</span>
          <h2 className="display-xl mt-6 text-2xl sm:text-3xl lg:text-[3rem]">
            Perguntas frequentes
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold sm:text-base">{f.q}</span>
                  <Plus
                    className={`mt-0.5 size-4 shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="overflow-hidden pr-10 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
