import { createFileRoute } from "@tanstack/react-router";
import founderAsset from "@/assets/igor-founder.png.asset.json";

const founderImage = founderAsset.url;
import { CTA } from "@/components/site/SiteNav";
import { Counter, Reveal } from "@/components/site/animate";
import { GrowthChart } from "@/components/site/charts";

export const Route = createFileRoute("/fundador")({
  head: () => ({
    meta: [
      { title: "O Fundador — Ultra Company" },
      {
        name: "description",
        content:
          "Quem lidera a Ultra Company: mais de uma década construindo máquinas de vendas, estruturas comerciais e modelos de negócio com margem.",
      },
      { property: "og:title", content: "O Fundador — Ultra Company" },
      {
        property: "og:description",
        content: "Experiência de mercado aplicada à construção de sistemas de receita.",
      },
    ],
  }),
  component: Fundador,
});

const marks = [
  { v: 180, s: "+", d: "Operações comerciais estruturadas" },
  { v: 12, s: " anos", d: "Liderando times de receita" },
  { v: 9, s: " setores", d: "B2B, serviços, indústria e tech" },
];

function Fundador() {
  return (
    <div>
      <section className="relative pt-32 pb-20">
        <div className="veil absolute inset-0" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <span className="text-xs tracking-[0.3em] text-primary uppercase">O Fundador</span>
            <h1 className="display-xl mt-6 text-4xl sm:text-5xl lg:text-6xl">
              Quem constrói a máquina por dentro
            </h1>
            <p className="mt-8 max-w-lg text-sm leading-relaxed text-muted-foreground">
              A Ultra Company nasceu na operação, não na teoria. São mais de uma década liderando
              áreas de marketing e vendas, montando estruturas comerciais do zero e reconstruindo
              modelos de negócio que cresciam sem gerar margem.
            </p>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Dessa vivência veio a tese que sustenta a assessoria: receita é consequência da
              conexão entre Growth, Estrutura Comercial e Modelo de Negócio sustentável. Quando um
              desses eixos falha, o crescimento vira volume sem lucro.
            </p>
            <div className="mt-10">
              <CTA label="Falar diretamente com o fundador" />
            </div>
          </div>

          <Reveal>
            <div className="relative">
              <div className="glow-ring overflow-hidden rounded-3xl">
                <img
                  src={founderImage}
                  alt="Igor Corrêa, fundador da Ultra Company"
                  width={912}
                  height={1200}
                  loading="lazy"
                  className="w-full object-cover"
                />
              </div>
              <div className="panel absolute -bottom-6 -left-6 hidden rounded-2xl p-5 sm:block">
                <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  Fundador · Ultra Company
                </p>
                <p className="font-display mt-1 text-xl font-bold">Igor Corrêa</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-card/30 py-20">
        <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-2xl border border-border bg-border px-0 sm:grid-cols-3 md:mx-auto md:max-w-6xl">
          {marks.map((m) => (
            <div key={m.d} className="bg-background/80 p-8">
              <Counter to={m.v} suffix={m.s} className="font-display text-4xl font-bold" />
              <p className="mt-2 text-xs text-muted-foreground">{m.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="text-3xl leading-tight font-semibold sm:text-4xl">
              A tese aplicada: crescer <span className="text-primary">com margem</span>, não apenas
              crescer
            </h2>
            <ul className="mt-8 space-y-5 text-sm text-muted-foreground">
              {[
                "Diagnóstico honesto: onde a receita trava hoje e quanto isso custa por mês.",
                "Construção conjunta com o time interno — transferência real de método.",
                "Indicadores acordados no início e revisados em cadência semanal.",
                "Decisão de canal e oferta sempre validada pela unidade econômica.",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <div className="panel rounded-2xl p-6">
              <h3 className="text-lg font-bold">Curva típica de implementação</h3>
              <p className="mt-1 mb-6 text-xs text-muted-foreground">
                Receita e margem acompanhadas mês a mês durante o projeto.
              </p>
              <GrowthChart />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
