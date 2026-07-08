import { motion } from "framer-motion";

export default function KpiCard({ title, value, subtitle, icon }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="text-2xl">{icon || "📊"}</div>
        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
      </div>
      <p className="text-sm text-gray-500 font-medium mb-1.5">{title}</p>
      <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-1">
        {value}
      </h2>
      <span className="text-xs text-gray-400">{subtitle}</span>
    </motion.div>
  );
}
