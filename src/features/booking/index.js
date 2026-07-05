// Entry point for the booking add-on. Imported lazily from App.jsx so the
// section ships as its own chunk (and is dropped from the bundle when
// featureFlags.booking is false).
//
// Note: other sections' "Book Now" buttons import ./useBookingAction directly
// (not via this file) so the lazy section chunk stays separate.
export { default } from "./BookingSection";
