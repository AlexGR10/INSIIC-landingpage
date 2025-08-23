import { Box, useTheme } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Service = () => {
  const theme = useTheme();

  return (
    <Box>
      <Navbar />
      <Box
        component="main"
        sx={{
          mt: {
            xs: theme.spacing(10),
            sm: theme.spacing(7),
            md: theme.spacing(5),
          },
        }}
      >
        <Outlet /> {/* Aquí se renderizan los hijos */}
      </Box>
      <Footer />
    </Box>
  );
};

export default Service;
