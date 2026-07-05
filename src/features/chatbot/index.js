// Single entry point for the chatbot add-on. Imported lazily from App.jsx so
// the whole feature lands in its own chunk (and is dropped from the bundle
// entirely when featureFlags.aiChatbot is false).
export { default } from "./ChatbotWidget";
