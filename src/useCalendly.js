import { useEffect } from "react";

export function useCalendly() {
  useEffect(() => {
    // Load Calendly stylesheet
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      document.head.removeChild(link);
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const openPopup = () => {
    if (window.Calendly) {
      window.Calendly.showPopupWidget("https://calendly.com/chinterris/free-trial-class");
    }
  };

  return { openPopup };
}
