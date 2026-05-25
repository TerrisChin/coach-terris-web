import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import FloatingActions from "./components/FloatingActions";
import Loader from "./components/Loader";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Benefits from "./sections/Benefits";
import Services from "./sections/Services";
import Pricing from "./sections/Pricing";
import Schedule from "./sections/Schedule";
import Gallery from "./sections/Gallery";
import Testimonials from "./sections/Testimonials";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
// AI chatbot — disabled for now. To re-enable: uncomment the next line AND the <ChatBot /> tag below.
// import ChatBot from "./sections/ChatBot";
import { TrialBanner, Partners, InstagramFeed } from "./sections/Extras";

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <div className="bg-navy-950 text-white selection:bg-aqua-400 selection:text-navy-950">
        <Navbar />
        <main>
          <Hero />
          <Partners />
          <About />
          <Benefits />
          <Services />
          <Pricing />
          <Schedule />
          <Gallery />
          <Testimonials />
          <Blog />
          <TrialBanner />
          <InstagramFeed />
          <Contact />
        </main>
        <Footer />
        <FloatingActions />
        {/* <ChatBot /> */}
      </div>
    </ThemeProvider>
  );
}
