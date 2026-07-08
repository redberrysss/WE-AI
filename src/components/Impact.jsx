import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, TrendingUp, Cpu, ClipboardList } from "lucide-react";

function Counter({ end, suffix = "", duration = 2000, label, icon, color }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = Date.now();
          const step = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  const colorMap = {
    blue: { bg: "bg-blue-50", text: "text-blue-600", from: "from-blue-600" },
    purple: { bg: "bg-purple-50", text: "text-purple-600", from: "from-purple-600" },
    indigo: { bg: "bg-indigo-50", text: "text-indigo-600", from: "from-indigo-600" },
    green: { bg: "bg-emerald-50", text: "text-emerald-600", from: "from-emerald-600" },
  };
  const c = colorMap[color] || colorMap.blue;

  return (
    <div ref={ref} className="text-center p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
      <div className={`w-12 h-12 rounded-2xl ${c.bg} flex items-center justify-center ${c.text} mx-auto mb-5`}>
        {icon}
      </div>
      <span className={`stat-value bg-gradient-to-r ${c.from} to-gray-900 bg-clip-text text-transparent`}>
        {count}{suffix}
      </span>
      <p className="text-gray-500 text-sm font-medium mt-2">{label}</p>
    </div>
  );
}

export default function Impact() {
  const impacts = [
    { value: 152, suffix: "+", label: "Women Entrepreneurs Engaged", icon: <Users size={22} />, color: "blue" },
    { value: 89, suffix: "%", label: "Showing Digital Readiness", icon: <TrendingUp size={22} />, color: "purple" },
    { value: 67, suffix: "%", label: "Ready for AI Adoption", icon: <Cpu size={22} />, color: "indigo" },
    { value: 12, suffix: "", label: "Policy Recommendations", icon: <ClipboardList size={22} />, color: "green" },
  ];

  return (
    <section className="py-30 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-badge mb-5 mx-auto w-fit">Key Statistics</div>
          <h2 className="section-title mb-4">Research Impact</h2>
          <p className="section-subtitle mx-auto">
            Measurable outcomes from our research initiative driving change for women-led businesses
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Counter {...impact} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
