import { featureFlags, booking, BUSINESS } from "../../lib/site.config";
import { useCalendly } from "./useCalendly";

// One hook for every "Book Now" button outside the booking section
// (Hero, Services, Pricing). Resolves to the right action for the current
// booking config:
//   - booking add-on on, mode "calendly"  → Calendly popup
//   - mode "whatsapp" or add-on off       → open WhatsApp chat
export function useBookingAction() {
  const calendlyActive = featureFlags.booking && booking.mode === "calendly";
  const { openPopup } = useCalendly(calendlyActive);

  const book = () => {
    if (calendlyActive) {
      openPopup();
    } else {
      window.open(BUSINESS.whatsapp, "_blank", "noopener");
    }
  };

  return { book };
}
