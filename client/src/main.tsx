import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import App from "./App";

const element = (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <CssBaseline />
      <App />
    </BrowserRouter>
  </ThemeProvider>
);

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(element);
