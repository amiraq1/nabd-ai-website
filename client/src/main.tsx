import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Apply optional runtime settings from environment
const env = import.meta.env as Record<string, string | undefined>;

// Update document title from env if provided
if (env.VITE_APP_TITLE) {
  document.title = env.VITE_APP_TITLE;
}

// Update favicon from env if provided
if (env.VITE_APP_LOGO) {
  const selector = 'link[rel="icon"]';
  const linkEl = (document.querySelector(selector) || document.createElement("link")) as HTMLLinkElement;
  linkEl.rel = "icon";
  linkEl.href = env.VITE_APP_LOGO;
  if (!linkEl.parentNode) {
    document.head.appendChild(linkEl);
  }
}

// Inject analytics script when endpoint and website id are present
const analyticsEndpoint = env.VITE_ANALYTICS_ENDPOINT;
const analyticsWebsiteId = env.VITE_ANALYTICS_WEBSITE_ID;
if (analyticsEndpoint && analyticsWebsiteId) {
  const script = document.createElement("script");
  script.defer = true;
  script.src = `${analyticsEndpoint.replace(/\/$/, "")}/umami`;
  script.setAttribute("data-website-id", analyticsWebsiteId);
  document.head.appendChild(script);
}

createRoot(document.getElementById("root")!).render(<App />);
