import { motion } from "framer-motion";
import { BookOpen, BarChart3, MessageCircle, LineChart } from "lucide-react";
import { AnalyticsIllustration } from "./Illustrations";

const steps = [
  {
    title: "Desk Review",
    description: "Comprehensive literature review and analysis of existing research on AI adoption in MSMEs and women entrepreneurship.",
    icon: <BookOpen size={22} />,
  },
  {
    title: "Quantitative Survey",
    description: "Nationwide survey targeting women-led MSMEs across various sectors and regions in Malaysia.",
    icon: <BarChart3 size={22} />,
  },
  {
    title: "KII & FGD",
    description: "Key Informant Interviews and Focus Group Discussions with stakeholders, experts, and women entrepreneurs.",
    icon: <MessageCircle size={22} />,
  },
  {
    title: "Diagnostic Dashboard",
    description: "Advanced data analysis and development of diagnostic dashboard for real-time insights visualization.",
    icon: <LineChart size={22} />,
  },
];

export default function Methodology() {
  return (
    <section className="py-30 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-badge mb-5 w-fit">Our Process</div>
            <h2 className="section-title mb-4">Research Methodology</h2>
            <p className="section-subtitle mb-10" style={{ maxWidth: "100%" }}>
              Our comprehensive approach combines multiple research methods for robust insights and actionable recommendations.
            </p>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex gap-5 p-5 rounded-2xl bg-gray-50 hover:bg-blue-50/50 transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-blue-600 shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-gray-900">{step.title}</h3>
                      <span className="text-xs text-gray-400 font-medium">Step {index + 1}</span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnalyticsIllustration className="w-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
