import { Suspense, lazy } from 'react';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer";
const Highlights = lazy(() => import('./components/Highlights'));
const Model = lazy(() => import('./components/Model'));
const Features = lazy(() => import('./components/Features'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));

const App = () => {
  return (
    <main className="bg-gradient-to-r from-emerald-900 via-slate-900 to-cyan-800">
      <Navbar />
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <Highlights />
        <Model />
        <Features />
        <HowItWorks />
      </Suspense>
      <Footer />
    </main>
  );
};

export default App;