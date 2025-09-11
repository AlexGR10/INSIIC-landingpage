/**
 * @file Services.tsx
 * @brief This component renders the services section of the home page.
 *
 * It displays a list of services with titles, descriptions, and images in a card layout.
 * Each card links to a dedicated service page.
 */

import {
  Box,
  Typography,
  Card,
  useTheme,
} from "@mui/material";
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import { Link as RouterLink } from "react-router-dom";
import LogoIncendio from "../../assets/images/contraIncendio/Logo.jpeg"
import LogoAire from "../../assets/images/aire/Logo.webp"
import LogoSoldadura from "../../assets/images/soldaduraEspecial/Logo.jpeg";
import LINKS from "../../config/links";
import EmailButton from "../../components/EmailButton";

/**
 * @function Services
 * @brief A functional component that renders the services section.
 *
 * @returns {JSX.Element} The rendered services section.
 */
const Services = () => {
  const theme = useTheme();

  // Message for the contact button
  const servicesContactMessage = `Estoy interesado en los servicios de INSIIC. Me gustaría recibir más información sobre:

- Sistemas de Aire
- Redes Contra Incendio
- Soldadura y Pailería

Por favor, contactarme para conocer más detalles sobre sus servicios y solicitar una cotización.

Quedo atento a su respuesta.

Saludos cordiales.`;

  /**
   * @const features
   * @brief An array of objects representing the company's services.
   */
  const features = [    
    {
      title: "Sistemas de Todo Tipo en Aire para Acondicionar",
      desc: "Servicios en Aire Acondicionado, Aire Lavado, Aire Mecánico en todo tipo de equipos y marcas certificadas.",
      img: LogoAire,
      link: LINKS.SISTEMAS_DE_AIRE,
    },
    {
      title: "Sistemas Contra Incendio",
      desc: "Contamos con todo tipo de proyectos en sistemas contra incendio con marcas certificadas.",
      img: LogoIncendio,
      link: LINKS.REDES_CONTRA_INCENDIO,
    },
    {
      title: "Trabajos y Mantenimientos en Soldaduras Especiales",
      desc: "Diseñamos, instalamos y fabricamos todo tipo de estructuras en Pailería y Herrería.",
      img: LogoSoldadura,
      link: LINKS.SOLDADURA_PAILERIA,
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        px: { xs: 5, md: 10 },
        py: "5%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: theme.palette.common.white,
        overflow: "hidden",
      }}
    >
      {/* Background overlay with opacity */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          background: "#2659A8",
          pointerEvents: "none",
        }}
      />

      {/* Content on top of the background */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: 1200,
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          mb: 6,
          flexDirection: { xs: "column", md: "row" },
          gap: 0,
        }}
      >
        {/* Icon box - takes up 30% and full height */}
        <Box
          sx={{
            flexBasis: { md: "30%" },
            height: { xs: 100, md: 150 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BuildCircleIcon
            sx={{
              fontSize: { xs: 60, md: 150 },
              color: "white",
              width: "100%",
              height: "100%",
            }}
          />
        </Box>

        {/* Text */}
        <Box
          sx={{
            flex: 1,
            textAlign: "left",
            ml: 0,
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 1, color: "white" }}>
            Nuestros Servicios
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 500,
              color: "rgba(255,255,255,0.85)",
            }}
          >
            Protege tu infraestructura con servicios certificados en instalación, mantenimiento y diseño de sistemas de seguridad industrial.
          </Typography>
        </Box>
      </Box>

      {/* Feature Cards */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: 4,
          width: "100%",
          maxWidth: 1200,
        }}
      >
        {features.map((item, index) => (
          <Card
            key={index}
            component={RouterLink}
            to={item.link}
            sx={{
              width: 280,
              borderRadius: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              textAlign: "center",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
              backgroundColor: "rgba(255,255,255,1)",
              overflow: "hidden",
              textDecoration: "none",
              color: "inherit",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0px 8px 20px rgba(0,0,0,0.4)",
                textDecoration: "none",
                color: "inherit",
              },
            }}
          >
            {/* Square image container */}
            <Box
              sx={{
                width: "100%",
                height: 200,
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f5f5f5",
              }}
            >
              {item.img && (
                <Box
                  component="img"
                  alt={item.title}
                  src={item.img}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              )}
              {/* For cards without an image, display a default icon */}
              {!item.img && (
                <BuildCircleIcon
                  sx={{
                    fontSize: 80,
                    color: "#2659A8",
                  }}
                />
              )}
            </Box>
            
            {/* Text content with padding */}
            <Box sx={{ p: 3, width: "100%" }}>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 500,
                }}
              >
                {item.desc}
              </Typography>
            </Box>
          </Card>
        ))}
      </Box>

      {/* CTA Button - Replaced with EmailButton */}
      <EmailButton
        message={servicesContactMessage}
        subject="Solicitud de Asesoría - Servicios INSIIC"
        buttonText="Solicitar asesoría"
        variant="contained"
        size="large"
        showIcon={false}
        sx={{
          mt: 6,
          alignSelf: "center",
          fontSize: "1.1rem",   
          padding: "14px 32px", 
          borderRadius: 4,
          fontWeight: 600,
          backgroundColor: "#B71C1C",
          color: "white",
          borderColor: "#B71C1C",
          position: "relative",
          "&:hover": {
            color: theme.palette.primary.main,
            backgroundColor: "white",
          },
        }}
      />

    </Box>
  );
};

export default Services;
