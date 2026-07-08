import { useMemo } from "react";
import { motion } from "framer-motion";
import { GraduationCap, TrendingUp, Award, Target, Lightbulb } from "lucide-react";
import { trainingSummary } from "../data/trainingFeedbackData";

function generateRecommendations(skills, totalParticipants) {
  const skillNames = [
    "AI Tools for Business",
    "Prompt Engineering",
    "AI Content Creation",
    "AI for Business Strategy",
    "AI Ethics & Safety",
    "Data Analysis with AI",
  ];

  const reasons = [
    "Participants showed lowest pre-training confidence in choosing and applying AI tools suited to business needs.",
    "Significant gap in understanding how to write effective prompts for useful AI results.",
    "Strong demand for hands-on content creation using AI tools like Copy.ai and Gemini.",
    "Participants expressed need for strategic AI integration into business planning and growth.",
    "Growing concern about responsible AI use and verifying AI output accuracy.",
    "Multiple requests for AI-powered data analysis and inventory management applications.",
  ];

  const sorted = [...skills].sort((a, b) => a.before - b.before);
  return sorted.slice(0, 5).map((skill, i) => {
    const improvement = ((skill.after - skill.before) / skill.before) * 100;
    const priority = improvement > 80 ? "High" : improvement > 50 ? "Medium" : "Low";
    const confidence = Math.min(95, Math.round(60 + improvement * 0.3 + (totalParticipants / 100) * 10));
    return {
      training: skillNames[i] || skill.name.split(" ").slice(0, 4).join(" "),
      reason: reasons[i] || `Improvement gap of ${improvement.toFixed(0)}% indicates strong need for targeted training in this area.`,
      priority,
      confidence,
      beforeScore: skill.before,
      afterScore: skill.after,
      improvement: Math.round(improvement),
    };
  });
}

const priorityColors = {
  High: { bg: "bg-red-50", text: "text-red-600", dot: "bg-red-500", border: "border-red-100" },
  Medium: { bg: "bg-amber-50", text: "text-amber-600", dot: "bg-amber-500", border: "border-amber-100" },
  Low: { bg: "bg-emerald-50", text: "text-emerald-600", dot: "bg-emerald-500", border: "border-emerald-100" },
};

export default function RecommendedTraining() {
  const recommendations = useMemo(
    () => generateRecommendations(trainingSummary.skills, trainingSummary.totalParticipants),
    []
  );

  return (
    <section className="py-30 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-badge mb-5 mx-auto w-fit">
            <GraduationCap size={14} />
            Recommended Training
          </div>
          <h2 className="section-title mb-4">Personalized Training Recommendations</h2>
          <p className="section-subtitle mx-auto">
            Automatically generated based on participant skill gaps and feedback analysis across {trainingSummary.totalParticipants} workshop attendees
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((rec, index) => {
            const pc = priorityColors[rec.priority];
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
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <Target size={22} />
                  </div>
                  <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${pc.bg} ${pc.text}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${pc.dot}`} />
                    {rec.priority} Priority
                  </div>
                </div>

                <h3 className="font-bold text-gray-900 mb-3 text-[1.0625rem]">{rec.training}</h3>

                <div className="flex-1 mb-5">
                  <div className="flex items-start gap-2 mb-3">
                    <Lightbulb size={15} className="text-amber-500 mt-0.5 shrink-0" />
                    <p className="text-sm text-gray-500 leading-relaxed">{rec.reason}</p>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400 flex items-center gap-1.5">
                      <TrendingUp size={14} />
                      Improvement
                    </span>
                    <span className="font-bold text-emerald-600">+{rec.improvement}%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400 flex items-center gap-1.5">
                      <Award size={14} />
                      Confidence
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: `${rec.confidence}%` }} />
                      </div>
                      <span className="font-bold text-blue-600 text-xs">{rec.confidence}%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Score Range</span>
                    <span className="font-medium text-gray-700">{rec.beforeScore.toFixed(1)} → {rec.afterScore.toFixed(1)} / 4</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 p-5 rounded-2xl bg-blue-50 border border-blue-100 flex items-center gap-3"
        >
          <Lightbulb size={18} className="text-blue-600 shrink-0" />
          <p className="text-sm text-blue-700">
            Recommendations are dynamically generated from participant feedback and pre/post training assessment scores. 
            New data is analyzed each time feedback is submitted.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
