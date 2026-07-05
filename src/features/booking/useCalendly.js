import { useEffect } from "react";
import { booking } from "../../lib/site.config";

// Injects the Calendly widget assets and exposes the booking popup.
// Pass enabled=false (e.g. whatsapp mode) to skip loading Calendly entirely.
export function useCalendly(enabled = true) {
  useEffect(() => {
    if (!enabled) return undefined;

    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [enabled]);

  const openPopup = () => {
    if (window.Calendly) {
      window.Calendly.showPopupWidget(booking.calendlyUrl);
    }
  };

  return { openPopup };
}
