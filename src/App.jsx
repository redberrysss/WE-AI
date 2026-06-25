import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutResearch from "./components/AboutResearch";
import ResearchObjectives from "./components/ResearchObjectives";
import Methodology from "./components/Methodology";
import Impact from "./components/Impact";
import DashboardIntro from "./components/DashboardIntro";
import Dashboard from "./components/Dashboard";
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
      <DashboardIntro />
      <div id="dashboard">
        <Dashboard />
      </div>
      <Footer />
    </>
  );
}

export default App;