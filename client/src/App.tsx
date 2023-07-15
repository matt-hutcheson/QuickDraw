import "./App.css";
import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Home from "@/components/Home";
import Search from "@/components/home/Search";
import Gallery from "@/components/Gallery";
import PageNotFoundView from "@/components/error/PageNotFoundView";
import HeaderBar from "./components/HeaderBar";

const App: React.FC = (): JSX.Element => {
  const [theme, colorMode] = useMode();

  const homeRoutes = {
    path: "/",
    element: <Home />,
    children: [
      { path: "*", element: <Navigate to="/404" /> },
      { path: "/search", element: <Search /> },
      { path: "404", element: <PageNotFoundView /> },
      { path: "gallery", element: <Navigate to="/gallery" /> },
    ],
  };

  const galleryRoutes = {
    path: "gallery",
    element: <Gallery />,
    children: [{ path: "*", element: <Navigate to="/404" /> }],
  };

  const routing = useRoutes([homeRoutes, galleryRoutes]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <HeaderBar />
            <>{routing}</>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
