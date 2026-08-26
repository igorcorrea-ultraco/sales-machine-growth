import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useInView } from "./animate";

const axis = {
  stroke: "var(--muted-foreground)",
  fontSize: 11,
  tickLine: false,
  axisLine: false,
};

const tooltipStyle = {
  contentStyle: {
    background: "var(--card)",
    border: "1px solid var(--border)",
    borderRadius: 12,
    fontSize: 12,
    color: "var(--foreground)",
  },
  labelStyle: { color: "var(--muted-foreground)" },
} as const;

const growth = [
  { mes: "M1", receita: 100, margem: 12 },
  { mes: "M2", receita: 128, margem: 15 },
  { mes: "M3", receita: 164, margem: 19 },
  { mes: "M4", receita: 205, margem: 23 },
  { mes: "M5", receita: 268, margem: 26 },
  { mes: "M6", receita: 342, margem: 31 },
];

export function GrowthChart() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  return (
    <div ref={ref} className="h-72 w-full">
      {inView && (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={growth} margin={{ left: -18, right: 8, top: 8 }}>
            <defs>
              <linearGradient id="fillReceita" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.7} />
                <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="fillMargem" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--chart-2)" stopOpacity={0.5} />
                <stop offset="100%" stopColor="var(--chart-2)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="var(--border)" strokeDasharray="3 6" />
            <XAxis dataKey="mes" {...axis} />
            <YAxis {...axis} />
            <Tooltip {...tooltipStyle} />
            <Area
              type="monotone"
              dataKey="receita"
              name="Receita (índice)"
              stroke="var(--chart-1)"
              strokeWidth={2.5}
              fill="url(#fillReceita)"
              animationDuration={1600}
            />
            <Area
              type="monotone"
              dataKey="margem"
              name="Margem (%)"
              stroke="var(--chart-2)"
              strokeWidth={2}
              fill="url(#fillMargem)"
              animationDuration={2000}
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

const funnel = [
  { etapa: "Demanda", valor: 100 },
  { etapa: "Qualificação", valor: 62 },
  { etapa: "Reunião", valor: 38 },
  { etapa: "Proposta", valor: 24 },
  { etapa: "Fechamento", valor: 14 },
];

export function FunnelChart() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  return (
    <div ref={ref} className="h-72 w-full">
      {inView && (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={funnel} layout="vertical" margin={{ left: 24, right: 16 }}>
            <XAxis type="number" hide />
            <YAxis type="category" dataKey="etapa" width={92} {...axis} />
            <Tooltip {...tooltipStyle} cursor={{ fill: "var(--secondary)" }} />
            <Bar dataKey="valor" name="Conversão" radius={[0, 8, 8, 0]} animationDuration={1500}>
              {funnel.map((_, i) => (
                <Cell
                  key={i}
                  fill={`color-mix(in oklab, var(--chart-1) ${100 - i * 14}%, var(--chart-4))`}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

const pillars = [
  { eixo: "Growth", antes: 42, depois: 91 },
  { eixo: "Funis", antes: 35, depois: 88 },
  { eixo: "Estrutura", antes: 30, depois: 94 },
  { eixo: "Previsibilidade", antes: 28, depois: 90 },
  { eixo: "Margem", antes: 38, depois: 85 },
  { eixo: "Retenção", antes: 45, depois: 89 },
];

export function PillarsRadar() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  return (
    <div ref={ref} className="h-80 w-full">
      {inView && (
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={pillars} outerRadius="72%">
            <PolarGrid stroke="var(--border)" />
            <PolarAngleAxis dataKey="eixo" tick={{ fill: "var(--muted-foreground)", fontSize: 11 }} />
            <Tooltip {...tooltipStyle} />
            <Radar
              name="Antes"
              dataKey="antes"
              stroke="var(--chart-5)"
              fill="var(--chart-5)"
              fillOpacity={0.35}
              animationDuration={1400}
            />
            <Radar
              name="Com a Ultra"
              dataKey="depois"
              stroke="var(--chart-1)"
              fill="var(--chart-1)"
              fillOpacity={0.4}
              animationDuration={1800}
            />
          </RadarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
