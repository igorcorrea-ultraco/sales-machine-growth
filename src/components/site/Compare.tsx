import { Reveal } from "@/components/site/animate";

const rows = [
  {
    topic: "Foco",
    generic: "Atendem vários mercados ao mesmo tempo",
    ultra: "Especialistas em receita de empresas que já vendem",
  },
  {
    topic: "Método",
    generic: "Modelos genéricos que precisam ser adaptados",
    ultra: "Método validado em centenas de operações",
  },
  {
    topic: "Acompanhamento",
    generic: "Relatórios e reuniões espaçadas",
    ultra: "Acompanhamento aproximado por 12 meses",
  },
  {
    topic: "Comunidade",
    generic: "Você implementa sozinho",
    ultra: "Network selecionado de empresários de alto impacto",
  },
  {
    topic: "Resultado",
    generic: "Teoria e recomendações",
    ultra: "Plano de ação individual + execução assistida",
  },
];

export function CompareSection() {
  return (
    <section id="diferenciais" className="scroll-mt-20 border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <span className="text-[11px] tracking-[0.35em] text-primary uppercase">Diferenciais</span>
          <h2 className="display-xl mt-6 text-2xl sm:text-3xl lg:text-[3rem]">
            O que nos faz gerar resultados reais
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="panel mt-14 overflow-hidden rounded-2xl">
            <div className="grid grid-cols-[1fr] gap-px bg-border sm:grid-cols-[0.8fr_1fr_1fr]">
              <div className="hidden bg-background p-5 sm:block" />
              <div className="hidden bg-background p-5 sm:block">
                <p className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
                  Consultorias amplas
                </p>
              </div>
              <div className="hidden bg-primary/10 p-5 sm:block">
                <p className="text-[11px] tracking-[0.2em] text-primary uppercase">Ultra Company</p>
              </div>

              {rows.map((r) => (
                <div key={r.topic} className="contents">
                  <div className="bg-background p-5">
                    <p className="font-display text-sm font-bold tracking-wide uppercase">
                      {r.topic}
                    </p>
                  </div>
                  <div className="bg-background p-5">
                    <p className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase sm:hidden">
                      Consultorias amplas
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground sm:mt-0">{r.generic}</p>
                  </div>
                  <div className="bg-primary/8 p-5">
                    <p className="text-[10px] tracking-[0.2em] text-primary uppercase sm:hidden">
                      Ultra Company
                    </p>
                    <p className="mt-1 text-sm font-medium sm:mt-0">{r.ultra}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
