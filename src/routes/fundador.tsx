import { createFileRoute } from "@tanstack/react-router";
import founderImage from "@/assets/founder.jpg";
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
  component: Fundador;
});

function Fundador() {
  return <div />;
}
