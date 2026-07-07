import { motion } from "framer-motion";
import { BarChart3, Microscope, Brain } from "lucide-react";
import headerImage from "../assets/HeaderImg.png";

export default function Hero() {
  const features = [
    { icon: <BarChart3 size={24} />, title: "Live Survey Analytics" },
    { icon: <Microscope size={24} />, title: "Evidence-Based Research" },
    { icon: <Brain size={24} />, title: "AI Adoption Insights" },
  ];

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden" style={{ marginBottom: 0 }}>
      {/* Background Image */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundImage: `url(${headerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Dark Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, rgba(2,8,40,0.9), rgba(2,8,40,0.55), rgba(2,8,40,0.25))',
        }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
          >
            AI Readiness and Adoption among Women-Led MSMEs in Malaysia
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl mb-8 leading-relaxed"
            style={{ color: '#DBEAFE' }}
          >
            A diagnostic research platform to understand AI awareness, adoption patterns, barriers, risks, and support needs among women-led MSMEs.
          </motion.p>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg"
                style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)' }}
              >
                <span className="text-yellow-400">{feature.icon}</span>
                <span className="text-sm font-medium text-white">{feature.title}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#dashboard"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-shadow"
              style={{ background: '#facc15', color: '#0a1628' }}
            >
              View Live Dashboard
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
              style={{ background: 'transparent', border: '2px solid white' }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Content - AI Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            {/* Neural Network Visualization */}
            <svg className="w-full h-full" viewBox="0 0 400 400">
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#2563EB", stopOpacity: 0.8 }} />
                  <stop offset="100%" style={{ stopColor: "#1D4ED8", stopOpacity: 0.8 }} />
                </linearGradient>
              </defs>
              
              {/* Connection Lines */}
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.line
                  key={i}
                  x1={200}
                  y1={200}
                  x2={100 + Math.random() * 200}
                  y2={100 + Math.random() * 200}
                  stroke="url(#gradient1)"
                  strokeWidth="1"
                  opacity="0.3"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}

              {/* Nodes */}
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.circle
                  key={i}
                  cx={80 + Math.random() * 240}
                  cy={80 + Math.random() * 240}
                  r="8"
                  fill="#2563EB"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.15,
                  }}
                />
              ))}

              {/* Central Node */}
              <motion.circle
                cx="200"
                cy="200"
                r="20"
                fill="#FBBF24"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
            </svg>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl backdrop-blur-sm opacity-60"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: 1,
              }}
              className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl backdrop-blur-sm opacity-60"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
