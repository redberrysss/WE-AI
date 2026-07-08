import { motion } from "framer-motion";
import { GraduationCap, Building2, Wallet, Globe, Shield, Cpu } from "lucide-react";

const recommendations = [
  {
    number: "01",
    icon: <GraduationCap size={22} />,
    title: "AI Literacy Programs",
    description: "Develop targeted AI literacy and capacity-building programs specifically designed for women-led MSMEs across all sectors.",
  },
  {
    number: "02",
    icon: <Wallet size={22} />,
    title: "Subsidized AI Tools",
    description: "Introduce subsidized access to essential AI tools and platforms for women entrepreneurs to reduce adoption cost barriers.",
  },
  {
    number: "03",
    icon: <Building2 size={22} />,
    title: "Women-Led Innovation Hubs",
    description: "Establish innovation hubs and digital centers focused on supporting women-led businesses in AI adoption.",
  },
  {
    number: "04",
    icon: <Shield size={22} />,
    title: "Data Protection Framework",
    description: "Strengthen data protection regulations and provide clear guidelines for ethical AI use in small businesses.",
  },
  {
    number: "05",
    icon: <Globe size={22} />,
    title: "Public-Private Partnerships",
    description: "Foster collaboration between government, tech companies, and financial institutions to create an enabling ecosystem.",
  },
  {
    number: "06",
    icon: <Cpu size={22} />,
    title: "AI Readiness Assessment",
    description: "Develop a national AI readiness assessment framework to help women-led MSMEs evaluate and plan their AI journey.",
  },
];

export default function PolicyRecommendations() {
  return (
    <section className="py-30 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-badge mb-5 mx-auto w-fit">Recommendations</div>
          <h2 className="section-title mb-4">Policy Recommendations</h2>
          <p className="section-subtitle mx-auto">
            Evidence-based policy recommendations to support AI adoption among women-led MSMEs in Malaysia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {recommendations.map((rec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="card-premium p-7 relative overflow-hidden"
            >
              <span className="absolute top-3 right-4 text-5xl font-extrabold text-gray-100 leading-none select-none">
                {rec.number}
              </span>
              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-5">
                {rec.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-[1.0625rem]">{rec.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{rec.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
