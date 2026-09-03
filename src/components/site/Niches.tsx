/** Contabilidade aparece com peso maior que os demais mercados. */
const niches: string[] = [
  "Contabilidade",
  "Advogados",
  "Contabilidade",
  "Médicos",
  "Contabilidade",
  "Indústria",
  "Contabilidade",
  "Biomédicos",
  "Contabilidade",
  "Agências",
  "Contabilidade",
];

export function NichesMarquee() {
  return (
    <section className="overflow-hidden border-y border-border bg-card/40 py-5">
      <p className="mb-4 text-center text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
        Mercados que atendemos
      </p>
      <div className="marquee-track flex w-max">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center">
            {niches.map((w, i) => (
              <span
                key={`${dup}-${i}-${w}`}
                className="font-display flex items-center text-base font-semibold tracking-tight uppercase md:text-xl"
              >
                <span
                  className={`px-7 ${w === "Contabilidade" ? "text-foreground" : "text-muted-foreground"}`}
                >
                  {w}
                </span>
                <span className="text-primary/70">///</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
