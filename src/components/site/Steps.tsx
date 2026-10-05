import { Reveal } from "@/components/site/animate";

const steps = [
  {
    tag: "ETAPA 01",
    t1: "RAIO-X DA",
    t2: "SUA OPERAÇÃO",
    text: "Iniciamos com um levantamento completo da sua operação atual e, lado a lado, localizamos os gargalos que estão segurando o seu crescimento.",
  },
  {
    tag: "ETAPA 02",
    t1: "O QUE SEU NEGÓCIO",
    t2: "PRECISA AGORA",
    text: "Depois de mapear o terreno, mostramos com clareza o que precisa ser feito e qual movimento vem primeiro na sua frente.",
  },
  {
    tag: "ETAPA 03",
    t1: "ROTEIRO DE",
    t2: "CRESCIMENTO",
    text: "Com o caminho definido, montamos juntos um plano de execução para ampliar a demanda qualificada e converter mais propostas em receita.",
  },
];

export function StepsSection() {
  return (
    <section className="relative overflow-hidden border-t border-border py-24 md:py-28">
      {/* anéis de luz atrás dos cartões */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="veil absolute inset-0" />
        <div className="absolute inset-x-0 -bottom-64 flex justify-center">
          <div className="relative h-[440px] w-[min(1100px,92vw)]">
            <div className="absolute inset-0 rounded-[50%] border border-primary/25" />
            <div className="absolute inset-x-12 inset-y-10 rounded-[50%] border border-primary/18" />
            <div className="absolute inset-x-28 inset-y-20 rounded-[50%] border border-primary/12" />
            <div className="absolute inset-0 rounded-[50%] bg-primary/8 blur-3xl" />
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="grid gap-8 border-b border-border pb-10 lg:grid-cols-2 lg:items-end">
          <h2 className="display-xl text-[1.9rem] leading-[1.03] sm:text-4xl lg:text-[3.1rem]">
            O que você recebe no
            <br />
            nosso diagnóstico <span className="text-primary">gratuito?</span>
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground lg:ml-auto">
            Você sai com um roteiro claro e objetivo, desenhado sob medida para a sua operação
            crescer com previsibilidade.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.tag} delay={i * 110}>
              <article className="panel h-full rounded-2xl p-8">
                <span className="inline-flex rounded-full border border-primary/50 px-4 py-1.5 text-[10px] font-semibold tracking-[0.3em] uppercase">
                  {s.tag}
                </span>
                <h3 className="display-xl mt-7 text-xl text-primary sm:text-[1.4rem]">
                  {s.t1}
                  <br />
                  {s.t2}
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
