const vertices = [
  { key: "marketing", label: "Marketing", x: 160, y: 30 },
  { key: "vendas", label: "Vendas", x: 268, y: 240 },
  { key: "modelo", label: "Negócio", x: 52, y: 240 },
] as const;

function Triangle({
  active,
  onSelect,
  ghost = false,
}: {
  active: string;
  onSelect?: (key: string) => void;
  ghost?: boolean;
}) {
  return (
    <svg viewBox="0 0 320 290" className="w-full max-w-[380px]" role="img" aria-hidden="true">
      <polygon
        points={vertices.map((v) => `${v.x},${v.y}`).join(" ")}
        fill="none"
        stroke="var(--border)"
        strokeWidth="1"
      />
      {vertices.map((v, i) => {
        const next = vertices[(i + 1) % vertices.length]!;
        const isEdge = v.key === active || next.key === active;
        return (
          <line
            key={`e-${v.key}`}
            x1={v.x}
            y1={v.y}
            x2={next.x}
            y2={next.y}
            stroke="var(--primary)"
            strokeWidth="1.5"
            opacity={isEdge ? 0.9 : 0.12}
            style={{ transition: "opacity .5s ease" }}
          />
        );
      })}

      {!ghost && (
        <>
          <circle
            cx="160"
            cy="172"
            r="58"
            fill="none"
            stroke="var(--border)"
            strokeDasharray="3 6"
          />
          <text
            x="160"
            y="166"
            textAnchor="middle"
            fill="var(--foreground)"
            style={{ font: "700 30px var(--font-display)", letterSpacing: "-1px" }}
          >
            U
          </text>
          <text
            x="160"
            y="188"
            textAnchor="middle"
            fill="var(--muted-foreground)"
            style={{ font: "500 8px var(--font-sans)", letterSpacing: "3px" }}
          >
            SISTEMA DE RECEITA
          </text>
        </>
      )}

      {vertices.map((v) => {
        const on = v.key === active;
        return (
          <g
            key={v.key}
            onClick={() => onSelect?.(v.key)}
            style={{ cursor: onSelect ? "pointer" : "default" }}
          >
            <circle
              cx={v.x}
              cy={v.y}
              r={on ? 11 : 7}
              fill={on ? "var(--primary)" : "var(--card)"}
              stroke={on ? "var(--primary)" : "var(--border)"}
              strokeWidth="1.5"
              style={{ transition: "all .4s ease" }}
            />
            {!ghost && (
              <text
                x={v.x}
                y={v.y === 30 ? 12 : 268}
                textAnchor="middle"
                fill={on ? "var(--foreground)" : "var(--muted-foreground)"}
                style={{ font: "600 10px var(--font-sans)", letterSpacing: "2.5px" }}
              >
                {v.label.toUpperCase()}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

export function MethodologyMark({
  active,
  onSelect,
}: {
  active: string;
  onSelect?: (key: string) => void;
}) {
  return (
    <div className="w-full" style={{ perspective: "1000px" }}>
      <div
        className="animate-tilt3d relative mx-auto w-full max-w-[380px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* camadas de profundidade */}
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{ transform: "translateZ(-60px) scale(0.96)" }}
        >
          <Triangle active={active} ghost />
        </div>
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{ transform: "translateZ(-30px) scale(0.98)" }}
        >
          <Triangle active={active} ghost />
        </div>
        <div className="relative" style={{ transform: "translateZ(0px)" }}>
          <Triangle active={active} onSelect={onSelect} />
        </div>
      </div>
    </div>
  );
}
