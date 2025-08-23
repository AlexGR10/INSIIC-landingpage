import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BackgroundOverlay from "./components/BackgroundOverlay";
import Home from "./routes/Home";
import Service from "./routes/Service";
import ServiceAire from "./pages/service/Aire";
import ServiceSupresion from "./pages/service/Supresion";
import ServiceIncendio from "./pages/service/Incendio";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <BackgroundOverlay />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/service" element={<Service />}>
          <Route path="aire" element={<ServiceAire />} />
          <Route path="supresion" element={<ServiceSupresion />} />
          <Route path="incendio" element={<ServiceIncendio />} />
        </Route>

        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
