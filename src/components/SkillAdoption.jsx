import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from "recharts";
import { TrendingDown, Lightbulb, MessageSquare, Target, Award, Sparkles } from "lucide-react";
import { trainingSummary } from "../data/trainingFeedbackData";

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload) return null;
  return (
    <div className="bg-white px-4 py-3 rounded-2xl shadow-xl border border-gray-100 text-sm">
      <p className="font-bold text-gray-900 mb-1">{label}</p>
      {payload.map((entry, i) => (
        <p key={i} style={{ color: entry.color }} className="font-medium">
          {entry.name === "before" ? "Before Training" : "After Training"}: {entry.value}/4
        </p>
      ))}
    </div>
  );
}

function ScoreGauge({ before, after, max }) {
  const beforePct = (before / max) * 100;
  const afterPct = (after / max) * 100;
  const improvement = after - before;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-40 h-40 mb-4">
        <svg className="w-full h-full" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="54" fill="none" stroke="#E2E8F0" strokeWidth="8" />
          <motion.circle
            cx="60" cy="60" r="54" fill="none" stroke="#94A3B8" strokeWidth="8"
            strokeDasharray={`${beforePct * 3.39} 339.292`}
            strokeLinecap="round" transform="rotate(-90 60 60)"
            initial={{ strokeDasharray: "0 339.292" }}
            whileInView={{ strokeDasharray: `${beforePct * 3.39} 339.292` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          <motion.circle
            cx="60" cy="60" r="54" fill="none" stroke="#2563EB" strokeWidth="8"
            strokeDasharray={`${afterPct * 3.39} 339.292`}
            strokeLinecap="round" transform="rotate(-90 60 60)"
            initial={{ strokeDasharray: "0 339.292" }}
            whileInView={{ strokeDasharray: `${afterPct * 3.39} 339.292` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <text x="60" y="48" textAnchor="middle" fontSize="12" fill="#64748B" fontWeight="600">AFTER</text>
          <text x="60" y="72" textAnchor="middle" fontSize="26" fill="#2563EB" fontWeight="800">{after.toFixed(1)}</text>
        </svg>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-emerald-50 text-emerald-600 text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap border border-emerald-100">
          +{improvement.toFixed(1)} improvement
        </div>
      </div>
      <div className="flex gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ background: '#94A3B8' }} />
          <span className="text-gray-500">Before: {before.toFixed(1)}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ background: '#2563EB' }} />
          <span className="text-gray-700 font-medium">After: {after.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
}

function SatisfactionBar({ name, avg, breakdown }) {
  const total = Object.values(breakdown).reduce((a, b) => a + b, 0);
  const pct4 = total > 0 ? ((breakdown[4] / total) * 100).toFixed(0) : 0;
  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-gray-600 w-48 shrink-0 font-medium">{name}</span>
      <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
          initial={{ width: 0 }}
          whileInView={{ width: `${pct4}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </div>
      <span className="text-sm font-bold text-blue-600 w-12 text-right">{avg.toFixed(1)}</span>
    </div>
  );
}

export default function SkillAdoption() {
  const data = trainingSummary;
  const chartData = data.skills.map((s) => ({
    name: s.name.length > 45 ? s.name.slice(0, 45) + "..." : s.name,
    fullName: s.name,
    before: Number(s.before.toFixed(1)),
    after: Number(s.after.toFixed(1)),
  }));

  return (
    <section id="skill-adoption" className="py-30 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-badge mb-5 mx-auto w-fit">
            <Sparkles size={14} />
            Training Impact
          </div>
          <h2 className="section-title mb-4">Skill Adoption Before & After Training</h2>
          <p className="section-subtitle mx-auto">
            Measured across {data.totalParticipants} participants who attended the AI Tools Workshop for Women Entrepreneurs
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-premium p-10 text-center"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center justify-center gap-3">
              <Award size={20} className="text-blue-600" />
              Self-Assessed AI Readiness
            </h3>
            <ScoreGauge before={data.averageScore.before} after={data.averageScore.after} max={data.averageScore.max} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="card-premium p-8"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Target size={20} className="text-blue-600" />
              Session Satisfaction
            </h3>
            <p className="text-sm text-gray-500 mb-6">Percentage of participants who rated "Very Satisfied" (4/4)</p>
            <div className="space-y-4">
              {data.satisfaction.map((item, i) => (
                <SatisfactionBar key={i} {...item} />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-premium p-8 mb-12"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Skill Competency Comparison</h3>
              <p className="text-sm text-gray-500 mt-1">Before vs After training across all skill areas</p>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded" style={{ background: '#94A3B8' }} />
                <span className="text-gray-500">Before</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded" style={{ background: '#2563EB' }} />
                <span className="text-gray-700 font-medium">After</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <ResponsiveContainer width="100%" height={500}>
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                <XAxis dataKey="name" angle={-25} textAnchor="end" height={100} tick={{ fontSize: 11, fill: '#64748B' }} interval={0} />
                <YAxis domain={[0, 4]} ticks={[0, 1, 2, 3, 4]} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="before" name="before" fill="#94A3B8" radius={[4, 4, 0, 0]} barSize={16}>
                  <LabelList dataKey="before" position="top" fontSize={11} fill="#94A3B8" />
                </Bar>
                <Bar dataKey="after" name="after" fill="#2563EB" radius={[4, 4, 0, 0]} barSize={16}>
                  <LabelList dataKey="after" position="top" fontSize={11} fill="#2563EB" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="lg:hidden space-y-6">
            {chartData.map((item, i) => (
              <div key={i}>
                <p className="text-sm font-medium text-gray-700 mb-2">{item.fullName}</p>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-400 w-12 shrink-0">Before</span>
                    <div className="flex-1 h-4 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div className="h-full rounded-full bg-gray-400" initial={{ width: 0 }} whileInView={{ width: `${(item.before / 4) * 100}%` }} viewport={{ once: true }} transition={{ duration: 0.6 }} />
                    </div>
                    <span className="text-xs font-medium text-gray-400 w-8 text-right">{item.before}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-blue-600 w-12 shrink-0">After</span>
                    <div className="flex-1 h-4 bg-blue-50 rounded-full overflow-hidden">
                      <motion.div className="h-full rounded-full bg-blue-600" initial={{ width: 0 }} whileInView={{ width: `${(item.after / 4) * 100}%` }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} />
                    </div>
                    <span className="text-xs font-bold text-blue-600 w-8 text-right">{item.after}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: <Lightbulb size={20} />, title: "What Participants Liked Most", color: "bg-blue-50", textColor: "text-blue-600", bgColor: "bg-blue-50", badgeBg: "bg-blue-50", badgeText: "text-blue-600", data: data.topFeedback.mostLiked },
            { icon: <TrendingDown size={20} />, title: "Key Challenges", color: "bg-red-50", textColor: "text-red-500", bgColor: "bg-red-50", badgeBg: "bg-red-50", badgeText: "text-red-500", data: data.topFeedback.mostChallenging },
            { icon: <Target size={20} />, title: "Planned AI Actions", color: "bg-emerald-50", textColor: "text-emerald-600", bgColor: "bg-emerald-50", badgeBg: "bg-emerald-50", badgeText: "text-emerald-600", data: data.topFeedback.planToUse },
            { icon: <MessageSquare size={20} />, title: "Suggestions for Improvement", color: "bg-orange-50", textColor: "text-orange-500", bgColor: "bg-orange-50", badgeBg: "bg-orange-50", badgeText: "text-orange-500", data: data.topFeedback.improvements },
          ].map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card-premium p-7"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl ${section.color} flex items-center justify-center ${section.textColor}`}>
                  {section.icon}
                </div>
                <h4 className="font-bold text-gray-900">{section.title}</h4>
              </div>
              <div className="space-y-2.5">
                {section.data.map((item, j) => (
                  <div key={j} className="flex items-center justify-between py-1.5">
                    <span className="text-sm text-gray-600">{item.label}</span>
                    <span className={`text-xs font-bold ${section.badgeText} ${section.badgeBg} px-3 py-1 rounded-full`}>
                      {item.count}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
