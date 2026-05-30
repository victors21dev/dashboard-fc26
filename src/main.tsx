import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import App from "./App.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main className="container m-auto h-screen max-w-495 bg-[#0E0E10] text-white">
      <App />
    </main>
  </StrictMode>
)
