import { Check, X } from "lucide-react";

import { CTA } from "@/components/site/SiteNav";
import { Reveal } from "@/components/site/animate";

const isFor = [
  "Você fatura R$ 75k+/mês de forma consistente",
  "Marketing caro e sem resultado expressivo, sem previsibilidade comercial e nada documentado em playbook",
  "Você está disposto a implementar, não só ouvir teoria bonita",
  "Você quer escalar com processos de receita previsível, sem depender de agências ou pessoas específicas",
  "Você entende que vai precisar tomar decisões difíceis sobre processo, gente e produto",
];

const isNotFor = [
  "Você acha que alguma agência, curso ou treinamento resolve isso fácil",
  "Você espera que alguém implemente tudo por você, sem a sua parte como dono/gestor",
  "Você não tem certeza se quer manter o negócio nos próximos 3 anos",
  "Você fatura menos de R$ 75k mensais (volte daqui 6 meses, vai estar pronto)",
  'Você quer um diagnóstico "só de curiosidade", sem disposição de agir',
];

export function FitSection() {
  return (
    <section id="para-quem" className="scroll-mt-20 border-t border-border py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <span className="text-[11px] tracking-[0.35em] text-primary uppercase">Para ser direto</span>
          <h2 className="display-xl mt-6 text-2xl sm:text-3xl lg:text-[3rem]">
            Esse diagnóstico não é pra qualquer um.
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            A gente prefere te dizer "não" agora do que perder o tempo de todo mundo. Leia com
            sinceridade:
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="panel h-full rounded-2xl border-primary/40 p-8">
              <div className="flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check className="size-4" />
                </span>
                <h3 className="font-display text-sm font-bold tracking-[0.2em] uppercase">
                  É pra você se
                </h3>
              </div>
              <ul className="mt-7 space-y-4">
                {isFor.map((t) => (
                  <li key={t} className="flex gap-3 text-sm leading-relaxed">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <article className="panel h-full rounded-2xl p-8">
              <div className="flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-full bg-muted/40 text-muted-foreground">
                  <X className="size-4" />
                </span>
                <h3 className="font-display text-sm font-bold tracking-[0.2em] text-muted-foreground uppercase">
                  Não é pra você se
                </h3>
              </div>
              <ul className="mt-7 space-y-4">
                {isNotFor.map((t) => (
                  <li key={t} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <X className="mt-0.5 size-4 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>

        <div className="mt-12 flex justify-center">
          <CTA label="Quero meu diagnóstico gratuito" />
        </div>
      </div>
    </section>
  );
}
