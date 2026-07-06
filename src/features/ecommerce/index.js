// Entry point for the e-commerce add-on. Imported lazily from App.jsx so the
// shop ships as its own chunk (and is dropped from the bundle when
// featureFlags.ecommerce is false).
export { default } from "./ShopSection";
