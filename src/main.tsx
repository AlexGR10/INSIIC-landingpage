/**
 * @file main.tsx
 * @brief This is the entry point of the application.
 *
 * It renders the `App` component and wraps it with the `ThemeProvider` and `CssBaseline` components from Material-UI.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, CssBaseline } from "@mui/material";
import App from "./App.tsx";
import { HelmetProvider } from "react-helmet-async";
import theme from "./theme/theme";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Create the root of the React application.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Provide the custom theme to the entire application. */}
    <ThemeProvider theme={theme}>
      {/* Normalize CSS across browsers. */}
      <CssBaseline />
      {/* Render the main application component. */}
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ThemeProvider>
  </StrictMode>
)