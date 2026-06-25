import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
// Replace with:
// import womenIcon from "../assets/icons/women.svg";
// import growthIcon from "../assets/icons/growth.svg";
// import aiIcon from "../assets/icons/ai.svg";
// import policyIcon from "../assets/icons/policy.svg";

export default function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [counters, setCounters] = useState({ women: 0, digital: 0, ai: 0, policy: 0 });

  const impacts = [
    {
      title: "Women Entrepreneurs",
      value: 152,
      suffix: "+",
      icon: "👩‍💼", // Replace with: <img src={womenIcon} alt="Women" className="w-12 h-12" />
      description: "Women-led MSMEs engaged",
      iconPath: "src/assets/icons/women.svg",
    },
    {
      title: "Digital Transformation",
      value: 89,
      suffix: "%",
      icon: "📈", // Replace with: <img src={growthIcon} alt="Growth" className="w-12 h-12" />
      description: "Showing digital readiness",
      iconPath: "src/assets/icons/growth.svg",
    },
    {
      title: "AI Readiness",
      value: 67,
      suffix: "%",
      icon: "🤖", // Replace with: <img src={aiIcon} alt="AI" className="w-12 h-12" />
      description: "Ready for AI adoption",
      iconPath: "src/assets/icons/ai.svg",
    },
    {
      title: "Policy Recommendations",
      value: 12,
      suffix: "",
      icon: "📋", // Replace with: <img src={policyIcon} alt="Policy" className="w-12 h-12" />
      description: "Key policy insights generated",
      iconPath: "src/assets/icons/policy.svg",
    },
  ];

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        if (currentStep < steps) {
          currentStep++;
          const progress = currentStep / steps;
          setCounters({
            women: Math.floor(152 * progress),
            digital: Math.floor(89 * progress),
            ai: Math.floor(67 * progress),
            policy: Math.floor(12 * progress),
          });
        } else {
          clearInterval(interval);
          setCounters({ women: 152, digital: 89, ai: 67, policy: 12 });
        }
      }, stepTime);

      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Research Impact
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Measurable outcomes from our research initiative
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all"
            >
              <div className="text-5xl mb-4">{impact.icon}</div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                className="text-5xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent"
              >
                {index === 0 ? counters.women : index === 1 ? counters.digital : index === 2 ? counters.ai : counters.policy}
                {impact.suffix}
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{impact.title}</h3>
              <p className="text-gray-300 text-sm">{impact.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
