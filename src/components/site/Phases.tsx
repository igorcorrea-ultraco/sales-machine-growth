import { useState } from "react";

import { Reveal } from "@/components/site/animate";
import logoUrl from "@/assets/ultra-logo.png";

type Phase = {
  id: string;
  label: string;
  items: { title: string; text: string }[];
};

const phases: Phase[] = [
  {
    id: "diagnostico",
    label: "Diagnóstico",
    items: [
      {
        title: "Raio-X do comercial",
        text: "Mapeamos aquisição, conversão e receita para expor onde o crescimento está travado hoje.",
      },
      {
        title: "Leitura de posicionamento",
        text: "Como o mercado enxerga sua empresa define quanto ele aceita pagar. Medimos essa percepção.",
      },
      {
        title: "Plano de ação priorizado",
        text: "Você sai com a sequência exata do que atacar primeiro, por impacto e não por achismo.",
      },
    ],
  },
  {
    id: "correcao",
    label: "Correção + Estruturação",
    items: [
      {
        title: "Oferta e precificação",
        text: "Reposicionamos a proposta de valor para vender mais caro sem perder taxa de fechamento.",
      },
      {
        title: "Processo comercial documentado",
        text: "Cadência, scripts e etapas registradas — a operação deixa de depender do vendedor estrela.",
      },
      {
        title: "Máquina de demanda",
        text: "Canais de aquisição e funis desenhados por intenção de compra, com meta e custo definidos.",
      },
    ],
  },
  {
    id: "execucao",
    label: "Execução assistida",
    items: [
      {
        title: "Sprints de implementação",
        text: "Oficinas de execução em comercial, marketing, CS, vendas ativas e modelo de negócio.",
      },
      {
        title: "Rotina de gestão",
        text: "Indicadores, reuniões e rituais que transformam o plano em movimento semanal.",
      },
      {
        title: "Time treinado na prática",
        text: "Seu time aprende operando, com correção de rota em tempo real e nada de teoria solta.",
      },
    ],
  },
  {
    id: "acompanhamento",
    label: "Acompanhamento",
    items: [
      {
        title: "Gerente de sucesso dedicado",
        text: "Um responsável por 12 meses conduzindo cada fase da implementação junto com você.",
      },
      {
        title: "Leitura de indicadores",
        text: "Receita, margem, ciclo e conversão revisados de perto para sustentar o crescimento.",
      },
      {
        title: "Ajuste contínuo do modelo",
        text: "Cada novo patamar de receita exige nova estrutura — a gente ajusta antes de quebrar.",
      },
    ],
  },
];

export function PhasesSection() {
  const [active, setActive] = useState(0);
  const current = phases[active]!;

  return (
    <section id="metodologia" className="scroll-mt-20 border-t border-border py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <h2 className="display-xl text-3xl sm:text-4xl lg:text-[3.4rem]">
            Conheça nossa
            <br />
            metodologia
          </h2>
          <p className="max-w-lg text-sm leading-relaxed text-muted-foreground lg:ml-auto">
            Esse é o mesmo método aplicado a centenas de negócios, comprovado por gerar crescimento
            de até 5x e usado por empresas que alcançaram sucesso indiscutível e crescimento
            consistente.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 flex justify-center">
            <div className="glow-ring relative grid size-40 place-items-center rounded-full border border-primary/40 sm:size-48">
              <span className="animate-pulse-glow absolute inset-4 rounded-full border border-primary/30" />
              <img
                src={logoUrl}
                alt="Ultra Company"
                width={640}
                height={146}
                loading="lazy"
                className="w-20 sm:w-24"
              />
            </div>
          </div>
        </Reveal>

        <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-b border-border">
          {phases.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActive(i)}
              className={`-mb-px border-b-2 pb-3 text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors ${
                i === active
                  ? "border-primary text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {current.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <article className="panel h-full rounded-2xl p-8 transition-colors hover:border-primary/50">
                <span className="font-display text-xs tracking-[0.3em] text-primary">
                  0{i + 1}
                </span>
                <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
