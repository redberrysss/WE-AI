import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutResearch from "./components/AboutResearch";
import ResearchObjectives from "./components/ResearchObjectives";
import Methodology from "./components/Methodology";
import Impact from "./components/Impact";
import KeyFindings from "./components/KeyFindings";
import PolicyRecommendations from "./components/PolicyRecommendations";
import RecommendedTraining from "./components/RecommendedTraining";
import SkillAdoption from "./components/SkillAdoption";
import FeedbackInsights from "./components/FeedbackInsights";
import DashboardIntro from "./components/DashboardIntro";
import Dashboard from "./components/Dashboard";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutResearch />
      <ResearchObjectives />
      <Methodology />
      <Impact />
      <KeyFindings />
      <PolicyRecommendations />
      <RecommendedTraining />
      <SkillAdoption />
      <FeedbackInsights />
      <DashboardIntro />
      <div id="dashboard">
        <Dashboard />
      </div>
      <CTA />
      <Footer />
    </>
  );
}

export default App;
