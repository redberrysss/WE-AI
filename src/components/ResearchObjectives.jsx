import { motion } from "framer-motion";
// Replace with:
// import awarenessIcon from "../assets/icons/awareness.svg";
// import barriersIcon from "../assets/icons/barriers.svg";
// import trustIcon from "../assets/icons/trust.svg";
// import ecosystemIcon from "../assets/icons/ecosystem.svg";

export default function ResearchObjectives() {
  const objectives = [
    {
      number: "01",
      icon: "🎯", // Replace with: <img src={awarenessIcon} alt="Awareness" className="w-12 h-12" />
      title: "Assess AI Awareness and Utilisation",
      description: "Evaluate the current level of AI awareness and utilisation among women-led MSMEs in Malaysia",
      iconPath: "src/assets/icons/awareness.svg",
    },
    {
      number: "02",
      icon: "🚧", // Replace with: <img src={barriersIcon} alt="Barriers" className="w-12 h-12" />
      title: "Identify Barriers and Enablers",
      description: "Identify key barriers and enablers affecting AI adoption in women-led businesses",
      iconPath: "src/assets/icons/barriers.svg",
    },
    {
      number: "03",
      icon: "⚖️", // Replace with: <img src={trustIcon} alt="Trust" className="w-12 h-12" />
      title: "Understand Risks and Trust Considerations",
      description: "Examine trust considerations and risk perceptions related to AI implementation",
      iconPath: "src/assets/icons/trust.svg",
    },
    {
      number: "04",
      icon: "🌍", // Replace with: <img src={ecosystemIcon} alt="Ecosystem" className="w-12 h-12" />
      title: "Identify Ecosystem and Support Gaps",
      description: "Identify ecosystem gaps and support needs for successful AI integration",
      iconPath: "src/assets/icons/ecosystem.svg",
    },
  ];

  return (
    <section id="objectives" className="py-24 bg-gradient-to-br from-blue-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Research Objectives
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our research focuses on four key areas to provide comprehensive insights into AI adoption
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-100 rounded-bl-full opacity-50" />
              <div className="relative z-10">
                <div className="flex items-start gap-6">
                  <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent opacity-20">
                    {objective.number}
                  </div>
                  <div className="flex-1">
                    <div className="text-4xl mb-3">{objective.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{objective.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{objective.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
