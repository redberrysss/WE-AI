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
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <XAxis type="number" />
          <YAxis
            dataKey="name"
            type="category"
            width={160}
            interval={0}
            tick={({ x, y, payload }) => {
              const cx = x != null ? x - 80 : 0;
              return (
                <text x={cx} y={y} textAnchor="middle" fontSize={11} fill="#64748B">
                  {payload.value ?? ""}
                </text>
              );
            }}
          />
          <Tooltip />

          <Bar dataKey="value" fill="#2563EB" radius={[0, 8, 8, 0]}>
            <LabelList dataKey="value" position="right" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
