import { useState } from "react";
import { Plus } from "lucide-react";

import { Reveal } from "@/components/site/animate";

const faqs = [
  {
    q: "O diagnóstico tem custo? Tem letra miúda?",
    a: "Não tem custo nenhum. Zero. Sem cartão de crédito, sem contrato, sem obrigação. É uma conversa de análise real — se houver fit para trabalharmos juntos, conversamos sobre isso na hora certa. Você decide.",
  },
  {
    q: "Funciona pra empresa do meu tamanho (R$ 75k+/mês)?",
    a: "Sim. O diagnóstico foi desenhado para operações que já vendem — entre R$ 75k e R$ 5M+/mês — e precisam escalar sem depender de pessoa-chave. Se você fatura menos que isso, a orientação honesta é: volte em 6 meses, quando sua operação tiver mais volume.",
  },
  {
    q: "Em quanto tempo vejo resultado depois do diagnóstico?",
    a: "Empresários que implementam as primeiras engrenagens geralmente veem impacto nas primeiras 4 a 8 semanas — não em meses. O diagnóstico já sai com prioridades claras de onde atacar primeiro.",
  },
  {
    q: "A call é só pitch ou é análise real?",
    a: "É análise real. O especialista vai perguntar sobre sua estrutura comercial atual, seus gargalos e seus números. Você sai com clareza, independente de contratar ou não.",
  },
  {
    q: "Já tentei treinamento, consultoria e curso. Por que isso seria diferente?",
    a: "Porque a Ultra não entrega conteúdo — entrega arquitetura. Treinamento muda o comportamento de uma pessoa. Processo muda o resultado da operação inteira. O diagnóstico mostra exatamente onde o seu problema é estrutural, não comportamental.",
  },
  {
    q: "Não tenho tempo pra implementar algo grande agora. Vale a pena?",
    a: "O diagnóstico dura 45 minutos e já sai com priorização. Você não precisa implementar tudo de uma vez — a maioria começa por 1 ou 2 engrenagens que destravam o maior gargalo.",
  },
  {
    q: "E se eu quiser contratar a implementação depois? Quanto custa e qual o prazo?",
    a: "Conversamos sobre isso se houver fit na call. Cada implementação é customizada — não existe pacote genérico. O investimento é compatível com operações de R$ 75k+/mês e o retorno geralmente acontece antes do término do projeto.",
  },
  {
    q: "Posso convidar meu sócio?",
    a: "Sim, e recomendamos. Diagnósticos com os dois sócios presentes têm implementação mais rápida e menos atrito interno. Basta avisar ao confirmar a vaga.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 border-t border-border bg-card/30 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <span className="text-[11px] tracking-[0.35em] text-primary uppercase">Q&amp;A</span>
          <h2 className="display-xl mt-6 text-2xl sm:text-3xl lg:text-4xl">
            Perguntas que todo empresário faz antes de aplicar
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
                  <span className="font-display text-sm font-semibold tracking-wide sm:text-base">
                    {f.q}
                  </span>
                  <Plus
                    className={`mt-0.5 size-4 shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
