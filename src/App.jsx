import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";

const App = () => {
  return (
    <main className="bg-gradient-to-r from-emerald-900 via-slate-900 to-cyan-800">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />

      <Footer />
    </main>
  );
};

export default App;