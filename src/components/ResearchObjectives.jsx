import { motion } from "framer-motion";
import { Eye, ShieldAlert, Scale, Globe } from "lucide-react";

const objectives = [
  {
    number: "01",
    icon: <Eye size={24} />,
    title: "Assess AI Awareness & Utilisation",
    description: "Evaluate the current level of AI awareness and utilisation among women-led MSMEs across different sectors and regions in Malaysia.",
    color: "blue",
  },
  {
    number: "02",
    icon: <ShieldAlert size={24} />,
    title: "Identify Barriers & Enablers",
    description: "Identify key barriers and enablers affecting AI adoption in women-led businesses, including skills, infrastructure, and financial constraints.",
    color: "purple",
  },
  {
    number: "03",
    icon: <Scale size={24} />,
    title: "Understand Risks & Trust",
    description: "Examine trust considerations, data privacy concerns, and risk perceptions related to AI implementation among women entrepreneurs.",
    color: "indigo",
  },
  {
    number: "04",
    icon: <Globe size={24} />,
    title: "Ecosystem & Support Gaps",
    description: "Identify ecosystem gaps, policy needs, and support mechanisms required for successful AI integration in women-led MSMEs.",
    color: "violet",
  },
];

const colorMap = {
  blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-100", grad: "from-blue-500 to-blue-600" },
  purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-100", grad: "from-purple-500 to-purple-600" },
  indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-100", grad: "from-indigo-500 to-indigo-600" },
  violet: { bg: "bg-violet-50", text: "text-violet-600", border: "border-violet-100", grad: "from-violet-500 to-violet-600" },
};

export default function ResearchObjectives() {
  return (
    <section className="py-30 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-badge mb-5 mx-auto w-fit">Research Framework</div>
          <h2 className="section-title mb-4">Research Objectives</h2>
          <p className="section-subtitle mx-auto">
            Our research focuses on four key areas to provide comprehensive insights into AI adoption
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {objectives.map((obj, index) => {
            const c = colorMap[obj.color];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="card-premium p-8 relative overflow-hidden group"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${c.grad} opacity-[0.03] rounded-bl-full`} />
                <div className="flex gap-6">
                  <div className={`w-14 h-14 rounded-2xl ${c.bg} flex items-center justify-center ${c.text} shrink-0`}>
                    {obj.icon}
                  </div>
                  <div className="flex-1">
                    <span className={`text-[2.5rem] font-extrabold ${c.text} opacity-10 absolute top-4 right-6 leading-none`}>
                      {obj.number}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{obj.title}</h3>
                    <p className="text-gray-500 leading-relaxed text-[0.9375rem]">{obj.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
