import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const element = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(element);
