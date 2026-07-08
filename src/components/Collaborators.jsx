import { motion } from "framer-motion";
import { Building2, GraduationCap, Heart, Globe, Banknote, Cpu } from "lucide-react";

const partners = [
  {
    icon: <Building2 size={22} />,
    title: "Government Agencies",
    items: ["MDEC", "SME Corp Malaysia", "Ministry of Women, Family & Community Development"],
    color: "blue",
  },
  {
    icon: <Heart size={22} />,
    title: "NGOs & Associations",
    items: ["Women in Tech Malaysia", "BWA (Barisan Wanita Akademik)", "NAWEM (National Association of Women Entrepreneurs)"],
    color: "rose",
  },
  {
    icon: <GraduationCap size={22} />,
    title: "Academic Institutions",
    items: ["Universiti Malaya", "Universiti Teknologi Malaysia", "Polytechnic & Community Colleges"],
    color: "purple",
  },
  {
    icon: <Cpu size={22} />,
    title: "Technology Partners",
    items: ["Google Malaysia", "Microsoft Malaysia", "Local AI startups & solution providers"],
    color: "indigo",
  },
  {
    icon: <Banknote size={22} />,
    title: "Financial Institutions",
    items: ["Bank Negara Malaysia", "TEKUN Nasional", "MARA & microfinance providers"],
    color: "emerald",
  },
  {
    icon: <Globe size={22} />,
    title: "International Bodies",
    items: ["ASEAN Secretariat", "UNDP Malaysia", "Women's World Banking"],
    color: "orange",
  },
];

const colorMap = {
  blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-100" },
  rose: { bg: "bg-yellow-50", text: "text-yellow-600", border: "border-yellow-100" },
  purple: { bg: "bg-yellow-50", text: "text-yellow-600", border: "border-yellow-100" },
  indigo: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-100" },
  emerald: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-100" },
  orange: { bg: "bg-yellow-50", text: "text-yellow-600", border: "border-yellow-100" },
};

export default function Collaborators() {
  return (
    <section className="py-30 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-badge mb-5 mx-auto w-fit">Collaborators</div>
          <h2 className="section-title mb-4">Partners & Collaborators</h2>
          <p className="section-subtitle mx-auto">
            Ecosystem of partners supporting women-led MSMEs in AI adoption across Malaysia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {partners.map((partner, index) => {
            const c = colorMap[partner.color];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="card-premium p-7"
              >
                <div className={`w-11 h-11 rounded-xl ${c.bg} flex items-center justify-center ${c.text} mb-5`}>
                  {partner.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-4 text-[1.0625rem]">{partner.title}</h3>
                <ul className="space-y-2.5">
                  {partner.items.map((item, i) => (
                    <li key={i} className={`flex items-center gap-3 text-sm text-gray-500`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${c.bg} ${c.text}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
