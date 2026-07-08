import { motion } from "framer-motion";
import { BarChart3, FileText } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-30 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Ready to Explore the Data?
          </h2>
          <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            Access the full diagnostic dashboard to explore AI adoption patterns, or download the 
            comprehensive research report for in-depth analysis and policy recommendations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="#dashboard"
              whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(250, 204, 21, 0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 text-blue-900 font-bold text-base rounded-2xl hover:bg-yellow-300 transition-all shadow-xl"
            >
              <BarChart3 size={20} />
              View Live Dashboard
            </motion.a>
            <motion.a
              href="#publications"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold text-base rounded-2xl hover:bg-white/20 transition-all border border-white/10"
            >
              <FileText size={20} />
              Download Report
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
