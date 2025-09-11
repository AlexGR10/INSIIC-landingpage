/**
 * @file HeroSection.tsx
 * @brief This component renders the hero section of the home page.
 *
 * It displays a title, a subtitle, a call-to-action button, and the company logo.
 * The component uses framer-motion for entry animations.
 */

import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import Logo from "../../assets/logo.jpeg";
import EmailButton from "../../components/EmailButton";

/**
 * @function HeroSection
 * @brief A functional component that renders the hero section.
 *
 * @returns {JSX.Element} The rendered hero section.
 */
const HeroSection = () => {
  const theme = useTheme();

  const generalContactMessage = `Estoy interesado en los servicios de INSIIC. Me gustaría recibir más información sobre:

- Sistemas de Aire
- Redes Contra Incendio
- Soldadura y Pailería

Por favor, contactarme para conocer más detalles sobre sus servicios y solicitar una cotización.

Quedo atento a su respuesta.

Saludos cordiales.`;

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        overflowX: "hidden",
        px: { xs: 5, md: 10 },
      }}
    >
      {/* Left side: Title and description */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        sx={{
          width: "100%",
          maxWidth: { md: "50%" },
          textAlign: { xs: "center", md: "left" },
          mb: { xs: theme.spacing(6), md: 0 },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "2rem", md: "3rem" },
            textAlign: { xs: "center", md: "left" },
            color: theme.palette.primary.main,
            mb: theme.spacing(2),
          }}
        >
          Expertos en proyectos y mantenimientos industriales.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.primary,
            textAlign: "left",
            fontSize: { xs: "1rem", md: "1.25rem" },
            mb: theme.spacing(4),
            maxWidth: theme.spacing(65),
            mx: { xs: "auto", md: 0 },
          }}
        >
          Diseñamos, instalamos y mantenemos sistemas de aire, ventilación y protección contra incendios, 
          garantizando seguridad y eficiencia en cada proyecto industrial.
        </Typography>

        <EmailButton
                message={generalContactMessage}
                subject="Consulta General sobre Servicios INSIIC"
                buttonText="CONTÁCTANOS"
                variant="gradient"
                size="small"
                showIcon={false}
              />

      </Box>

      {/* Right side: Logo (always rendered) */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        sx={{
          width: { xs: "100%", md: "50%" },
          maxWidth: { md: "100%" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: { xs: 4, md: 0 },
        }}
      >
        <Box
          component="img"
          src={Logo}
          alt="Logo INSIIC"
          sx={{
            width: { xs: "100%", md: theme.spacing(50) },
            height: "auto",
            borderRadius: theme.spacing(1),
            boxShadow: theme.shadows[3],
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;