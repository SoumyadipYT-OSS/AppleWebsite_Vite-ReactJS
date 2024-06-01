// eslint-disable-next-line no-unused-vars
import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer";
const Highlights = React.lazy(() => import('./components/Highlights'));
const Model = React.lazy(() => import('./components/Model'));
const Features = React.lazy(() => import('./components/Features'));
const HowItWorks = React.lazy(() => import('./components/HowItWorks'));

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