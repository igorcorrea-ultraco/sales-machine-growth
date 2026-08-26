const rings = [
  { label: "Marketing", rotate: "rotateY(0deg)" },
  { label: "Vendas", rotate: "rotateY(60deg)" },
  { label: "Modelo de Negócio", rotate: "rotateY(120deg)" },
];

/** Forma 3D que tangibiliza a conexão entre os três eixos de receita. */
export function ConnectionShape() {
  return (
    <div
      className="relative mx-auto grid aspect-square w-full max-w-[420px] place-items-center"
      style={{ perspective: "1000px" }}
      aria-hidden="true"
    >
      <div
        className="animate-spin3d relative size-[78%]"
        style={{ transformStyle: "preserve-3d" }}
      >
        {rings.map((r, i) => (
          <div
            key={r.label}
            className="absolute inset-0 rounded-full border"
            style={{
              transform: r.rotate,
              transformStyle: "preserve-3d",
              borderColor:
                i === 0
                  ? "color-mix(in oklab, var(--primary) 70%, transparent)"
                  : "color-mix(in oklab, var(--primary) 28%, transparent)",
              boxShadow: "inset 0 0 40px color-mix(in oklab, var(--primary) 12%, transparent)",
            }}
          />
        ))}
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 size-2.5 rounded-full bg-primary"
            style={{
              transform: `rotateY(${i * 120}deg) translateZ(calc(50% + 0px)) translate(-50%, -50%) translateX(${i === 0 ? 0 : 0}px)`,
              marginLeft: "0",
            }}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 grid place-items-center">
        <div className="text-center">
          <p className="font-display text-3xl font-bold tracking-tight">RECEITA</p>
          <p className="mt-1 text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
            Sistema conectado
          </p>
        </div>
      </div>

      <div className="absolute inset-x-0 -bottom-2 flex flex-wrap justify-center gap-x-5 gap-y-1">
        {rings.map((r) => (
          <span
            key={r.label}
            className="text-[10px] font-semibold tracking-[0.2em] text-muted-foreground uppercase"
          >
            {r.label}
          </span>
        ))}
      </div>
    </div>
  );
}
