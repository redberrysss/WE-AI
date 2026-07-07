import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer 
      className="text-white"
      style={{
        background: 'linear-gradient(135deg, #061B54, #0B2F7A, #123C8C)',
        paddingTop: '80px',
        paddingBottom: '60px',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: WE-AI Initiative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#DBEAFE' }}>
              WE-AI Initiative
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Empowering women-led MSMEs through evidence-based AI research,
              digital transformation, and inclusive innovation.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <span className="text-lg">📍</span>
                <span>Malaysia</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <span className="text-lg">📧</span>
                <a href="mailto:research@we-ai.my" className="hover:text-white transition-colors">
                  research@we-ai.my
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <span className="text-lg">🌐</span>
                <a href="https://www.we-ai.my" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  www.we-ai.my
                </a>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Research */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6" style={{ color: '#DBEAFE' }}>
              Research
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block text-sm">
                  About Research
                </a>
              </li>
              <li>
                <a href="#objectives" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block text-sm">
                  Objectives
                </a>
              </li>
              <li>
                <a href="#methodology" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block text-sm">
                  Methodology
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block text-sm">
                  Publications
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6" style={{ color: '#DBEAFE' }}>
              Dashboard
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#dashboard" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block text-sm">
                  Live Dashboard
                </a>
              </li>
              <li>
                <a href="#dashboard" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block text-sm">
                  Survey Results
                </a>
              </li>
              <li>
                <a href="#dashboard" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block text-sm">
                  Data Sources
                </a>
              </li>
              <li>
                <a href="#dashboard" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block text-sm">
                  AI Insights
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6" style={{ color: '#DBEAFE' }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#dashboard" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block text-sm">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div 
            className="mb-8"
            style={{
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
            }}
          />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-300 text-sm mb-1">
                © 2026 WE-AI Initiative
              </p>
              <p className="text-gray-400 text-xs">
                Faculty of Entrepreneurship and Business
              </p>
              <p className="text-gray-400 text-xs">
                Universiti Malaysia Kelantan
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-xs">
                Powered by Google Forms + Google Sheets + React
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
