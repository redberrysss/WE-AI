import { motion } from "framer-motion";
import { Lightbulb, Shield, TrendingUp, Users, Star, AlertTriangle } from "lucide-react";

const findings = [
  {
    icon: <Lightbulb size={22} />,
    title: "High AI Awareness, Low Adoption",
    description: "78% of respondents are aware of AI tools, but only 34% have adopted them in their business operations.",
    color: "blue",
    stat: "34%",
    statLabel: "Adoption Rate",
  },
  {
    icon: <Shield size={22} />,
    title: "Trust & Data Privacy Concerns",
    description: "62% of women-led MSMEs cite data privacy and security as primary barriers to AI adoption.",
    color: "purple",
    stat: "62%",
    statLabel: "Privacy Concern",
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Digital Readiness is High",
    description: "89% of respondents have basic digital infrastructure, indicating strong readiness for AI integration.",
    color: "green",
    stat: "89%",
    statLabel: "Digital Readiness",
  },
  {
    icon: <Users size={22} />,
    title: "Ecosystem Support Gap",
    description: "71% of women entrepreneurs report insufficient access to AI training and capacity-building programs.",
    color: "orange",
    stat: "71%",
    statLabel: "Support Gap",
  },
  {
    icon: <Star size={22} />,
    title: "Positive Training Impact",
    description: "Workshop participants showed 41% improvement in AI-related skills after targeted training interventions.",
    color: "indigo",
    stat: "+41%",
    statLabel: "Skill Improvement",
  },
  {
    icon: <AlertTriangle size={22} />,
    title: "Cost & Infrastructure Barriers",
    description: "54% identify high implementation costs and lack of affordable AI solutions as key obstacles.",
    color: "rose",
    stat: "54%",
    statLabel: "Cost Barrier",
  },
];

const colorMap = {
  blue: { bg: "bg-blue-50", text: "text-blue-600", badge: "bg-blue-100" },
  purple: { bg: "bg-purple-50", text: "text-purple-600", badge: "bg-purple-100" },
  green: { bg: "bg-emerald-50", text: "text-emerald-600", badge: "bg-emerald-100" },
  orange: { bg: "bg-orange-50", text: "text-orange-600", badge: "bg-orange-100" },
  indigo: { bg: "bg-indigo-50", text: "text-indigo-600", badge: "bg-indigo-100" },
  rose: { bg: "bg-rose-50", text: "text-rose-600", badge: "bg-rose-100" },
};

export default function KeyFindings() {
  return (
    <section className="py-30 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-badge mb-5 mx-auto w-fit">Survey Insights</div>
          <h2 className="section-title mb-4">Key Findings</h2>
          <p className="section-subtitle mx-auto">
            Critical insights derived from survey data analysis of women-led MSMEs across Malaysia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {findings.map((item, index) => {
            const c = colorMap[item.color];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="card-premium p-7"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-11 h-11 rounded-xl ${c.bg} flex items-center justify-center ${c.text} shrink-0`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className={`inline-block px-2.5 py-0.5 rounded-md text-xs font-bold ${c.badge} ${c.text} mb-2`}>
                      {item.stat}
                    </div>
                    <h3 className="font-bold text-gray-900 text-base">{item.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
