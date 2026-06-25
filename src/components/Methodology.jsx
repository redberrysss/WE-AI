import { motion } from "framer-motion";
// Replace with:
// import deskReviewIcon from "../assets/icons/desk-review.svg";
// import surveyIcon from "../assets/icons/survey.svg";
// import fgdIcon from "../assets/icons/fgd.svg";
// import dashboardIcon from "../assets/icons/dashboard.svg";

export default function Methodology() {
  const steps = [
    {
      title: "Desk Review",
      description: "Comprehensive literature review and analysis of existing research on AI adoption in MSMEs",
      icon: "📚", // Replace with: <img src={deskReviewIcon} alt="Desk Review" className="w-12 h-12" />
      iconPath: "src/assets/icons/desk-review.svg",
    },
    {
      title: "Quantitative Survey",
      description: "Nationwide survey targeting women-led MSMEs across various sectors and regions in Malaysia",
      icon: "📊", // Replace with: <img src={surveyIcon} alt="Survey" className="w-12 h-12" />
      iconPath: "src/assets/icons/survey.svg",
    },
    {
      title: "KII & FGD",
      description: "Key Informant Interviews and Focus Group Discussions with stakeholders and experts",
      icon: "💬", // Replace with: <img src={fgdIcon} alt="FGD" className="w-12 h-12" />
      iconPath: "src/assets/icons/fgd.svg",
    },
    {
      title: "Diagnostic Dashboard",
      description: "Advanced data analysis and development of diagnostic dashboard for insights visualisation",
      icon: "📈", // Replace with: <img src={dashboardIcon} alt="Dashboard" className="w-12 h-12" />
      iconPath: "src/assets/icons/dashboard.svg",
    },
  ];

  return (
    <section id="methodology" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Research Methodology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach combines multiple research methods for robust insights
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200 transform -translate-y-1/2" />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all relative z-10">
                  <div className="text-5xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow Indicator */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-20">
                    <motion.div
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-purple-600 text-3xl"
                    >
                      →
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
