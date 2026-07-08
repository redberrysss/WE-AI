import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { DataInsightsIllustration } from "./Illustrations";

export default function DashboardIntro() {
  return (
    <section className="py-30 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent" />
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)", backgroundSize: "24px 24px" }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/80 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              Live Data
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Live Diagnostic Dashboard
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl">
              This dashboard updates automatically from Google Form responses and visualises respondent profiles, 
              AI awareness, adoption trends, and ecosystem insights in real-time.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#dashboard"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-blue-900 font-bold rounded-xl hover:bg-yellow-300 transition-all"
              >
                View Dashboard
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#research"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/10"
              >
                Download Report
                <Download size={18} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block"
          >
            <DataInsightsIllustration className="w-full [&_rect]:!fill-white/10 [&_text]:!fill-white/60" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
