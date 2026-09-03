import { Reveal, Counter } from "@/components/site/animate";
import depo600k from "@/assets/depoimento-600k.png";
import depoOnboarding from "@/assets/depoimento-onboarding.png";
import depoMetas from "@/assets/depoimento-metas.png";

const testimonials = [
  {
    photo: depo600k,
    alt: "Jonatan Ugulino, empresário",
    metric: "R$ 600K/mês",
    quote: "Não acreditava no modelo e hoje faturamos 600 mil por mês somente com esse sistema.",
  },
  {
    photo: depoOnboarding,
    alt: "Paulo Nascimento, empresário de alto impacto",
    metric: "Onboarding surreal",
    quote:
      "O onboarding é surreal. Nunca vi nada parecido em nenhum outro programa que participei.",
  },
  {
    photo: depoMetas,
    alt: "Letícia Vogel, empresária acelerada",
    metric: "Metas batidas",
    quote:
      "O acompanhamento aproximado foi o que me fez finalmente alcançar as metas que eu perseguia há anos.",
  },
];

export function ProofSection() {
  return (
    <section id="depoimentos" className="scroll-mt-20 border-t border-border py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <span className="text-[11px] tracking-[0.35em] text-primary uppercase">Prova real</span>
          <h2 className="display-xl mt-6 text-2xl sm:text-3xl lg:text-[3rem]">
            Isso é o que estão falando sobre nós
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.metric} delay={i * 120}>
              <article className="panel h-full overflow-hidden rounded-2xl">
                <img
                  src={t.photo}
                  alt={t.alt}
                  loading="lazy"
                  className="h-56 w-full object-cover object-top"
                />
                <div className="p-7">
                  <p className="display-xl text-2xl text-primary">{t.metric}</p>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">“{t.quote}”</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="panel mt-6 flex flex-col gap-3 rounded-2xl p-7 sm:flex-row sm:items-center sm:gap-8">
            <p className="display-xl text-3xl text-primary sm:text-4xl">60K → 102K</p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Saíram de 60 mil e fizeram 102 mil em 30 dias de execução assistida.
            </p>
          </div>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-14 grid gap-8 border-t border-border pt-12 sm:grid-cols-3">
            {[
              { value: 50, prefix: "+R$", suffix: "M", label: "em receita gerada" },
              { value: 100, prefix: "+", suffix: "", label: "operações tracionadas" },
              { value: 10, prefix: "", suffix: " anos", label: "de estrada em receita" },
            ].map((s) => (
              <div key={s.label}>
                <p className="display-xl text-3xl sm:text-4xl">
                  <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
