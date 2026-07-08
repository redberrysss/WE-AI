import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare, ThumbsUp, ThumbsDown, Minus, TrendingUp,
  Lightbulb, Sparkles, BarChart3, Users, Target, Download,
  RefreshCw, Clock, Filter,
} from "lucide-react";
import { processFeedback } from "../data/feedbackInsightsData";

export default function FeedbackInsights() {
  const [source, setSource] = useState("padlet");
  const data = useMemo(() => processFeedback(), []);

  const totalFeedback = data.total;
  const positivePct = totalFeedback > 0 ? Math.round((data.positive / totalFeedback) * 100) : 0;
  const neutralPct = totalFeedback > 0 ? Math.round((data.neutral / totalFeedback) * 100) : 0;
  const negativePct = totalFeedback > 0 ? Math.round((data.negative / totalFeedback) * 100) : 0;

  const summaryCards = [
    { label: "Total Feedback", value: data.total, icon: <MessageSquare size={18} />, color: "bg-blue-50", text: "text-blue-600" },
    { label: "Positive", value: data.positive, icon: <ThumbsUp size={18} />, color: "bg-emerald-50", text: "text-emerald-600", secondary: `${positivePct}%` },
    { label: "Neutral", value: data.neutral, icon: <Minus size={18} />, color: "bg-amber-50", text: "text-amber-600", secondary: `${neutralPct}%` },
    { label: "Negative", value: data.negative, icon: <ThumbsDown size={18} />, color: "bg-red-50", text: "text-red-600", secondary: `${negativePct}%` },
  ];

  const maxTopicCount = Math.max(...data.topics.map(t => t.count), 1);

  return (
    <section className="py-30 bg-white" id="feedback-insights">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-badge mb-5 mx-auto w-fit">
            <Sparkles size={14} />
            Feedback Insights
          </div>
          <h2 className="section-title mb-4">AI-Powered Feedback Analysis</h2>
          <p className="section-subtitle mx-auto">
            Automatically extracted, analyzed, and summarized from participant feedback across Padlet, Mentimeter, and survey responses
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 p-4 rounded-2xl bg-gray-50 border border-gray-100">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Clock size={14} />
            <span>Last updated: Just now</span>
            <span className="w-1 h-1 rounded-full bg-gray-300 mx-1" />
            <RefreshCw size={14} className="text-blue-500" />
            <span className="text-blue-600 font-medium">Auto-refresh active</span>
          </div>
          <div className="flex items-center gap-2">
            {["padlet", "mentimeter", "survey"].map((s) => (
              <button
                key={s}
                onClick={() => setSource(s)}
                className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all capitalize ${
                  source === s
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-white text-gray-500 border border-gray-200 hover:border-blue-200"
                }`}
              >
                {s}
              </button>
            ))}
            <button className="px-4 py-1.5 rounded-lg text-xs font-medium bg-white text-gray-500 border border-gray-200 hover:border-blue-200 flex items-center gap-1">
              <Download size={12} />
              Export
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {summaryCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card-premium p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-9 h-9 rounded-xl ${card.color} flex items-center justify-center ${card.text}`}>
                  {card.icon}
                </div>
                {card.secondary && (
                  <span className={`text-xs font-bold ${card.text} bg-gray-50 px-2 py-0.5 rounded-full`}>
                    {card.secondary}
                  </span>
                )}
              </div>
              <p className="text-2xl font-bold text-gray-900">{card.value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{card.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 card-premium p-7"
          >
            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <BarChart3 size={18} className="text-blue-600" />
              Sentiment Distribution
            </h3>
            <p className="text-sm text-gray-500 mb-6">Analysis of participant feedback sentiment across all sources</p>
            <div className="flex gap-1.5 h-3 mb-6 rounded-full overflow-hidden">
              <motion.div
                className="bg-emerald-500 h-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${positivePct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              />
              <motion.div
                className="bg-amber-400 h-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${neutralPct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              <motion.div
                className="bg-red-400 h-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${negativePct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
            </div>
            <div className="flex gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-gray-600">Positive ({positivePct}%)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="text-gray-600">Neutral ({neutralPct}%)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="text-gray-600">Negative ({negativePct}%)</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="card-premium p-7"
          >
            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <Lightbulb size={18} className="text-amber-500" />
              AI Summary
            </h3>
            <p className="text-sm text-gray-500 mb-4">Executive summary generated from feedback analysis</p>
            <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
              <Sparkles size={16} className="text-blue-600 mb-2" />
              <p className="text-sm text-gray-700 leading-relaxed">{data.summary}</p>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-premium p-7"
          >
            <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
              <TrendingUp size={18} className="text-blue-600" />
              Common Topics
            </h3>
            <div className="space-y-4">
              {data.topics.slice(0, 6).map((topic, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-medium text-gray-700">{topic.name}</span>
                    <span className="text-xs font-bold text-gray-400">{topic.count}</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(topic.count / maxTopicCount) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.05 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="card-premium p-7"
          >
            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <Filter size={18} className="text-purple-500" />
              Top Keywords
            </h3>
            <p className="text-sm text-gray-500 mb-6">Most frequently mentioned terms across all feedback</p>
            <div className="flex flex-wrap gap-2">
              {data.topKeywords.slice(0, 20).map((kw, i) => {
                const maxCount = data.topKeywords[0]?.count || 1;
                const scale = 0.7 + (kw.count / maxCount) * 0.8;
                return (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    className="inline-block px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 font-medium text-sm hover:bg-blue-100 transition-colors"
                    style={{ fontSize: `${0.75 + scale * 0.25}rem` }}
                  >
                    {kw.word}
                    <span className="text-blue-400 ml-1 text-xs">({kw.count})</span>
                  </motion.span>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-premium p-7"
          >
            <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
              <MessageSquare size={18} className="text-amber-500" />
              Participant Suggestions
            </h3>
            <div className="space-y-3">
              {data.suggestions.slice(0, 6).map((s, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                  <span className="text-sm text-gray-600">{s.suggestion}</span>
                  <span className="text-xs font-bold text-gray-400 bg-gray-50 px-2.5 py-0.5 rounded-full">{s.count}</span>
                </div>
              ))}
              {data.suggestions.length === 0 && (
                <p className="text-sm text-gray-400 text-center py-4">No specific suggestions extracted yet.</p>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="card-premium p-7"
          >
            <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Target size={18} className="text-emerald-500" />
              Recommended Future Training
            </h3>
            <div className="space-y-3">
              {data.recommendedTraining.map((rec, i) => (
                <div key={i} className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 hover:border-blue-100 transition-all">
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="font-semibold text-gray-900 text-sm">{rec.name}</h4>
                    <span className={`px-2 py-0.5 rounded-full text-[0.65rem] font-bold ${
                      rec.priority === "High" ? "bg-red-50 text-red-600" : "bg-amber-50 text-amber-600"
                    }`}>
                      {rec.priority}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{rec.reason}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${rec.confidence}%` }} />
                    </div>
                    <span className="text-[0.6rem] font-bold text-emerald-600">{rec.confidence}% match</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="p-5 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50 border border-gray-100">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Users size={14} className="text-blue-500" />
              <span>Data Sources: Padlet (2 boards), Mentimeter (1), Survey</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <div className="flex items-center gap-2">
              <RefreshCw size={14} className="text-blue-500" />
              <span>Auto-refreshes every 30s</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <div className="flex items-center gap-2">
              <Download size={14} className="text-blue-500" />
              <span className="text-blue-600 font-medium cursor-pointer hover:underline">Import CSV/Excel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
