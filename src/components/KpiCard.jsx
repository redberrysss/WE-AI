import { motion } from "framer-motion";

export default function KpiCard({ title, value, subtitle, icon }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-blue-100"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-3xl">{icon || "📊"}</div>
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
      </div>
      <p className="text-gray-600 text-sm font-medium mb-2">{title}</p>
      <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent mb-2">
        {value}
      </h2>
      <span className="text-gray-500 text-sm">{subtitle}</span>
    </motion.div>
  );
}