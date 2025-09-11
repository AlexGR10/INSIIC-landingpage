/**
 * @file Service.tsx
 * @brief This component serves as a layout for the service pages.
 *
 * It includes the navbar and footer, and uses the `Outlet` component from `react-router-dom`
 * to render the specific service page content.
 */

import { Box, useTheme } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

/**
 * @function Service
 * @brief A functional component that renders the layout for service pages.
 *
 * @returns {JSX.Element} The rendered service page layout.
 */
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
        <Outlet /> {/* Child routes are rendered here */}
      </Box>
      <Footer />
    </Box>
  );
};

export default Service;