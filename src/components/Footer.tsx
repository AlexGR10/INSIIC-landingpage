/**
 * @file Footer.tsx
 * @brief This component renders the footer of the application.
 *
 * The footer includes the company's brand name, social media links, and a signature.
 * It is styled using Material-UI's Box, Typography, Link, and IconButton components.
 */

import { Box, Typography, Link, IconButton, useTheme } from "@mui/material";
import { Facebook, Storefront, WhatsApp } from "@mui/icons-material";

/**
 * @function Footer
 * @brief A functional component that renders the application footer.
 *
 * @returns {JSX.Element} The rendered footer component.
 */
const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#2659A8",
        color: "#ffffff",
        py: 4,
        px: { xs: 3, md: 8 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: { xs: 3, md: 0 },
        boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
        position: "relative",
        zIndex: theme.zIndex.appBar,
      }}
    >
      {/* Company brand */}
      <Typography
        variant="body1"
        sx={{
          fontWeight: 600,
          textAlign: { xs: "center", md: "left" },
          order: { xs: 2, md: 1 },
          color: "#ffffff",
        }}
      >
        © {new Date().getFullYear()} INSIIC — Sistemas Integrales para la Industria del Centro
      </Typography>

      {/* Social media links */}
      <Box
        sx={{
          display: "flex",
          gap: 1.5,
          order: { xs: 1, md: 2 },
        }}
      >
        {/* Facebook */}
        <IconButton
          component="a"
          href="https://www.facebook.com/profile.php?id=100063475271564"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#ffffff",
            backgroundColor: "rgba(255,255,255,0.1)",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.2)",
              transform: "scale(1.1)",
            },
            transition: "all 0.2s ease",
          }}
        >
          <Facebook fontSize="small" />
        </IconButton>

        {/* Mercado Libre */}
        <IconButton
          component="a"
          href="https://listado.mercadolibre.com.mx/_CustId_674772740?item_id=MLM2410628051&category_id=MLM124015&seller_id=674772740&client=recoview-selleritems&recos_listing=true#origin=vip&component=sellerData&typeSeller=classic"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#ffffff",
            backgroundColor: "rgba(255,255,255,0.1)",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.2)",
              transform: "scale(1.1)",
            },
            transition: "all 0.2s ease",
          }}
        >
          <Storefront fontSize="small" />
        </IconButton>

        {/* WhatsApp */}
        <IconButton
          component="a"
          href="https://wa.me/524491420645"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#ffffff",
            backgroundColor: "rgba(255,255,255,0.1)",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.2)",
              transform: "scale(1.1)",
            },
            transition: "all 0.2s ease",
          }}
        >
          <WhatsApp fontSize="small" />
        </IconButton>
      </Box>

      {/* Signature */}
      <Typography
        variant="body2"
        sx={{
          color: "rgba(255,255,255,0.8)",
          textAlign: { xs: "center", md: "right" },
          order: 3,
          mt: { xs: 1, md: 0 },
        }}
      >
        Desarrollado por{" "}
        <Link
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          sx={{
            color: "#ffffff",
            fontWeight: 500,
            "&:hover": {
              color: "#9d8fcfff",
            },
          }}
        >
          Solvium
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;