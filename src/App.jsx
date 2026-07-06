import { useState, useEffect, lazy, Suspense } from "react";
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
import { TrialBanner, Partners, InstagramFeed } from "./sections/Extras";

// AI chatbot add-on — toggled via featureFlags.aiChatbot in site.config.js.
// __FEATURE_AI_CHATBOT__ is that flag inlined at build time (vite.config.js),
// so when it's off the bundler drops the import and no chatbot chunk is
// emitted; when on, the widget lazy-loads as its own chunk.
const ChatbotWidget = __FEATURE_AI_CHATBOT__
  ? lazy(() => import("./features/chatbot"))
  : null;

// Booking add-on — same pattern (featureFlags.booking in site.config.js).
// Off = no booking section, no chunk; Navbar/Contact hide their booking CTAs.
const BookingSection = __FEATURE_BOOKING__
  ? lazy(() => import("./features/booking"))
  : null;

// E-commerce add-on — product showcase with WhatsApp ordering
// (featureFlags.ecommerce). Off = no shop section, no nav link, no chunk.
const ShopSection = __FEATURE_ECOMMERCE__
  ? lazy(() => import("./features/ecommerce"))
  : null;

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
          {BookingSection && (
            <Suspense fallback={null}>
              <BookingSection />
            </Suspense>
          )}
          <Schedule />
          <Gallery />
          {ShopSection && (
            <Suspense fallback={null}>
              <ShopSection />
            </Suspense>
          )}
          <Testimonials />
          <Blog />
          <TrialBanner />
          <InstagramFeed />
          <Contact />
        </main>
        <Footer />
        <FloatingActions />
        {ChatbotWidget && (
          <Suspense fallback={null}>
            <ChatbotWidget />
          </Suspense>
        )}
      </div>
    </ThemeProvider>
  );
}
