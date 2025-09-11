/**
 * @file Home.tsx
 * @brief This component represents the home page of the application.
 *
 * It assembles all the different sections of the home page, including the navbar, hero section, services, portfolio, about us, FAQ, call to action, and footer.
 */

import { Box, useTheme } from "@mui/material";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import HeroSection from "../pages/home/HeroSection";
import Services from "../pages/home/Services";
import Portfolio from "../pages/home/Portfolio";
import AboutUs from "../pages/home/AboutUs";
import FAQ from "../pages/home/FAQ";
import CallToAction from "../pages/home/CallToAction";
import Footer from "../components/Footer";

/**
 * @function Home
 * @brief A functional component that renders the home page.
 *
 * @returns {JSX.Element} The rendered home page.
 */
const Home = () => {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>INSIIC — Expertos en proyectos y mantenimientos industriales</title>
        <meta name="description" content="Expertos en proyectos y mantenimientos industriales: aire acondicionado, ventilación, colectores, ductería, redes y detección contra incendio." />
        <meta name="keywords" content="aire acondicionado industrial, ventilación, redes contra incendio, mantenimiento industrial, INSIIC" />
        <link rel="canonical" href="https://tu-dominio.com/" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="INSIIC — Expertos en proyectos y mantenimientos industriales" />
        <meta property="og:description" content="Expertos en proyectos y mantenimientos industriales: aire acondicionado, ventilación, colectores, ductería y redes contra incendio." />
        <meta property="og:url" content="https://tu-dominio.com/" />
        <meta property="og:image" content="https://tu-dominio.com/assets/logo.webp" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Box>
        <Navbar />
        <Box
          component="main"
          sx={{
            mt: {
              xs: theme.spacing(10), // Phone → more space
              sm: theme.spacing(7),  // Tablets or medium screens
              md: theme.spacing(5),  // Large screens → less space
            },
          }}
        >
          <HeroSection />
          <Services />
          <Portfolio />
          <AboutUs />
          <FAQ />
          <CallToAction />
        </Box>
        <Footer />
      </Box>
    </>

  );
};

export default Home;