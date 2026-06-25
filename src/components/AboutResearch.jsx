import { motion } from "framer-motion";

export default function AboutResearch() {
  const features = [
    {
      icon: "👩‍💼",
      title: "Women-Led Focus",
      description: "Specifically designed to understand and empower women entrepreneurs in Malaysia",
    },
    {
      icon: "📈",
      title: "AI for Growth",
      description: "Exploring how AI technologies can drive business growth and innovation",
    },
    {
      icon: "🌐",
      title: "Inclusive Ecosystem",
      description: "Building an inclusive digital ecosystem that supports women-led businesses",
    },
  ];

  return (
    <section id="about" className="relative py-24" style={{ background: '#fff7fb' }}>
      <div className="max-w-7xl mx-auto px-6" style={{ padding: '90px 8%' }}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0f172a' }}>
              Understanding AI Adoption among Women-Led MSMEs
            </h2>
            <p className="text-xl leading-relaxed mb-8" style={{ color: '#475569' }}>
              This study investigates AI awareness, usage, barriers, trust, risks, and ecosystem support gaps 
              among women-led MSMEs in Malaysia to provide actionable insights for policy and practice.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="rounded-xl p-6 transition-shadow"
                  style={{ 
                    background: 'white',
                    borderRadius: '18px',
                    boxShadow: '0 10px 30px rgba(15, 23, 42, 0.08)',
                  }}
                >
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#0f172a' }}>{feature.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
