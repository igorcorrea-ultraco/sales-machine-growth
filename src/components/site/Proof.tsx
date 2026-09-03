import { Reveal, Counter } from "@/components/site/animate";
import depo1 from "@/assets/depoimento-1.jpg";
import depo2 from "@/assets/depoimento-2.jpg";
import depo3 from "@/assets/depoimento-3.jpg";

const testimonials = [
  {
    photo: depo1,
    name: "Empresário de serviços B2B",
    metric: "R$600 mil",
    metricLabel: "de faturamento mensal",
    quote:
      "A gente vendia por esforço. Depois de reorganizar oferta, funil e processo comercial, o mês virou previsível e batemos R$600 mil de faturamento.",
  },
  {
    photo: depo2,
    name: "Dono de operação de tecnologia",
    metric: "Onboarding",
    metricLabel: "surreal de time novo",
    quote:
      "O processo documentado mudou o jogo. Vendedor novo entra e produz em semanas, sem depender de mim para fechar negócio.",
  },
  {
    photo: depo3,
    name: "Sócia de indústria",
    metric: "100%",
    metricLabel: "das metas batidas no trimestre",
    quote:
      "Passamos a olhar número, não opinião. Com a rotina de gestão instalada, batemos todas as metas do trimestre e mantivemos a margem.",
  },
];

export function ProofSection() {
  return (
    <section id="depoimentos" className="scroll-mt-20 border-t border-border py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <span className="text-[11px] tracking-[0.35em] text-primary uppercase">Prova real</span>
          <h2 className="display-xl mt-6 text-2xl sm:text-3xl lg:text-[3rem]">
            Quem estruturou a máquina de vendas
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <article className="panel h-full overflow-hidden rounded-2xl">
                <img
                  src={t.photo}
                  alt={t.name}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="h-56 w-full object-cover object-top grayscale-[35%]"
                />
                <div className="p-7">
                  <p className="display-xl text-2xl text-primary">{t.metric}</p>
                  <p className="mt-1 text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
                    {t.metricLabel}
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">“{t.quote}”</p>
                  <p className="mt-6 text-xs font-semibold tracking-wide uppercase">{t.name}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
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
