import { motion } from "framer-motion";
import { FileText, Download, Calendar } from "lucide-react";

const publications = [
  {
    title: "AI Readiness Assessment Report",
    description: "Comprehensive analysis of AI awareness, adoption, and readiness among women-led MSMEs in Malaysia.",
    date: "March 2026",
    type: "Research Report",
    color: "blue",
  },
  {
    title: "Policy Brief: Enabling AI Adoption",
    description: "Policy recommendations for government and stakeholders to support AI integration in women-led businesses.",
    date: "March 2026",
    type: "Policy Brief",
    color: "purple",
  },
  {
    title: "Training Impact Evaluation",
    description: "Evaluation report of AI Tools Workshop for Women Entrepreneurs including skill adoption metrics.",
    date: "February 2026",
    type: "Evaluation Report",
    color: "emerald",
  },
];

const colorMap = {
  blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-100" },
  purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-100" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-100" },
};

export default function Publications() {
  return (
    <section className="py-30 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-badge mb-5 mx-auto w-fit">Publications</div>
          <h2 className="section-title mb-4">Research Publications</h2>
          <p className="section-subtitle mx-auto">
            Download our research reports, policy briefs, and evaluation documents
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {publications.map((pub, index) => {
            const c = colorMap[pub.color];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="card-premium p-7 flex flex-col"
              >
                <div className={`w-12 h-12 rounded-2xl ${c.bg} flex items-center justify-center ${c.text} mb-5`}>
                  <FileText size={22} />
                </div>
                <div className={`inline-block px-3 py-0.5 rounded-full text-[0.7rem] font-semibold ${c.bg} ${c.text} mb-3 w-fit`}>
                  {pub.type}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{pub.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-5">{pub.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Calendar size={13} />
                    {pub.date}
                  </div>
                  <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                    <Download size={15} />
                    Download
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
