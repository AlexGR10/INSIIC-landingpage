import { Box, useTheme } from "@mui/material";
import Navbar from "../components/Navbar";
import HeroSection from "../pages/home/HeroSection";
import Services from "../pages/home/Services";
import Portfolio from "../pages/home/Portfolio";
import AboutUs from "../pages/home/AboutUs";
import FAQ from "../pages/home/FAQ";
import CallToAction from "../pages/home/CallToAction";
import Footer from "../components/Footer";

const Home = () => {
  const theme = useTheme();

  return (
    <Box>
      <Navbar />
      <Box
        component="main"
        sx={{
          mt: {
            xs: theme.spacing(10), // Teléfono → más espacio
            sm: theme.spacing(7),  // Tablets o medianos
            md: theme.spacing(5),  // Grandes → menos espacio
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
  );
};

export default Home;
