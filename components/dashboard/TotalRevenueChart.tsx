"use client";

import { Legend, Line, LineChart, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";

const data = [
  {
    name: "S",
    revenue: 25,
  },
  {
    name: "M",
    revenue: 50,
  },
  {
    name: "T",
    revenue: 25,
  },
  {
    name: "W",
    revenue: 75,
  },
  {
    name: "T",
    revenue: 50,
  },
  {
    name: "F",
    revenue: 100,
  },
  {
    name: "S",
    revenue: 125,
  },
];

const TotalRevenueChart = () => {
  return (
    <ChartContainer config={{}}>
      <LineChart data={data} width={100}>
        <XAxis dataKey="name" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Legend />
        <Line type="monotone" dataKey="revenue" stroke="var(--rose-100)" />
      </LineChart>
    </ChartContainer>
  );
};
export default TotalRevenueChart;
