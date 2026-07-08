import { motion } from "framer-motion";
import { Mail, Globe, MapPin, GraduationCap } from "lucide-react";

const columns = [
  {
    title: "WE-AI Initiative",
    links: [
      { label: "About", href: "#research" },
      { label: "Objectives", href: "#objectives" },
      { label: "Methodology", href: "#methodology" },
      { label: "Feedback", href: "#feedback-insights" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Live Dashboard", href: "#dashboard" },
      { label: "Survey Results", href: "#dashboard" },
      { label: "Training Impact", href: "#skill-adoption" },
      { label: "Data Sources", href: "#dashboard" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "research@we-ai.my", href: "mailto:research@we-ai.my", icon: <Mail size={14} /> },
      { label: "www.we-ai.my", href: "https://www.we-ai.my", icon: <Globe size={14} /> },
      { label: "Malaysia", href: "#", icon: <MapPin size={14} /> },
      { label: "UMK", href: "#", icon: <GraduationCap size={14} /> },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-blue-500 to-yellow-400" />
              <span className="text-xl font-bold">WE-AI</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-xs">
              Empowering women-led MSMEs through evidence-based AI research, digital transformation, 
              and inclusive innovation across Malaysia.
            </p>
            <div className="flex gap-3">
              {["T", "F", "L", "Y"].map((letter, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-400 hover:text-white transition-all"
                  aria-label={`Social link ${letter}`}
                >
                  {letter}
                </a>
              ))}
            </div>
          </motion.div>

          {columns.map((col, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (idx + 1) }}
            >
              <h3 className="text-sm font-semibold text-slate-300 mb-5 uppercase tracking-wider">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-all flex items-center gap-2 hover:translate-x-0.5"
                    >
                      {link.icon && <span className="text-slate-500">{link.icon}</span>}
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © 2026 WE-AI Initiative. All rights reserved.
            </p>
            <p className="text-xs text-slate-600">
              Faculty of Entrepreneurship and Business, Universiti Malaysia Kelantan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
