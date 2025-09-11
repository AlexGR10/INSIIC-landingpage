/**
 * @file App.tsx
 * @brief This is the main application component.
 *
 * It sets up the routing for the entire application using `react-router-dom`.
 */

import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BackgroundOverlay from "./components/BackgroundOverlay";
import Home from "./routes/Home";
import Service from "./routes/Service";
import ServiceAire from "./pages/service/Aire";
import ServiceIncendio from "./pages/service/Incendio";
import ServiceSoldaduraPaileria from "./pages/service/SoldaduraPaileria";
import ScrollToTop from "./utils/ScrollToTop";

/**
 * @function App
 * @brief The main application component.
 *
 * @returns {JSX.Element} The rendered application.
 */
function App() {
  return (
    <Router>
      <ScrollToTop />
      <BackgroundOverlay />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/service" element={<Service />}>
          <Route path="aire" element={<ServiceAire />} />
          <Route path="incendio" element={<ServiceIncendio />} />
          <Route path="soldadura" element={<ServiceSoldaduraPaileria />} />
        </Route>

        {/* Fallback route, redirects to home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;