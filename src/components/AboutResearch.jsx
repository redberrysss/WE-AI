import { motion } from "framer-motion";
import { BarChart3, Target, Globe } from "lucide-react";
import { ResearchIllustration } from "./Illustrations";

const features = [
  {
    icon: <BarChart3 size={24} />,
    title: "Women-Led Focus",
    description: "Specifically designed to understand and empower women entrepreneurs across Malaysia's diverse business landscape",
  },
  {
    icon: <Target size={24} />,
    title: "AI for Growth",
    description: "Exploring how AI technologies can drive business growth, efficiency, and competitive advantage",
  },
  {
    icon: <Globe size={24} />,
    title: "Inclusive Ecosystem",
    description: "Building an inclusive digital ecosystem that supports women-led businesses through policy and practice",
  },
];

export default function AboutResearch() {
  return (
    <section id="research" className="py-30 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-badge mb-5">Research Overview</div>
            <h2 className="section-title mb-6">
              Understanding AI Adoption Among Women-Led MSMEs
            </h2>
            <p className="section-subtitle mb-10" style={{ maxWidth: "100%" }}>
              This nationwide study investigates AI awareness, usage patterns, adoption barriers, trust 
              considerations, risk perceptions, and ecosystem support gaps among women-led MSMEs in 
              Malaysia, providing actionable insights for policymakers and practitioners.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="card-premium p-6"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-base">{feature.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
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
            <ResearchIllustration className="w-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
