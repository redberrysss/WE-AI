import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

export default function HorizontalBarChartCard({ title, data }) {
  return (
    <div className="chart-card">
      <h3>{title}</h3>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 80, bottom: 20 }}
        >
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" width={75} />
          <Tooltip />

          <Bar dataKey="value" fill="#002879" radius={[0, 8, 8, 0]}>
            <LabelList dataKey="value" position="right" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
