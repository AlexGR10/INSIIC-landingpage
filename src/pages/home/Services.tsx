import {
  Box,
  Typography,
  Card,
  useTheme,
  Button,
} from "@mui/material";
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import { Link as RouterLink } from "react-router-dom";
import LogoIncendio from "../../assets/images/redesContraIncendio/Logo.jpeg"
import LogoAire from "../../assets/images/aire/Logo.webp"
import LogoSoldadura from "../../assets/images/soldaduraEspecial/Logo.jpeg";
import LINKS from "../../config/links";

const Services = () => {
  const theme = useTheme();

  const features = [
    {
      title: "Sistemas Contra Incendio",
      desc: "Contamos con todo tipo de proyectos en sistemas contra incendio con marcas certificadas.",
      img: LogoIncendio,
      link: LINKS.REDES_CONTRA_INCENDIO,
    },
    {
      title: "Sistemas de Todo Tipo en Aire para Acondicionar",
      desc: "Servicios en Aire Acondicionado, Aire Lavado, Aire Mecánico en todo tipo de equipos y marcas certificadas.",
      img: LogoAire,
      link: LINKS.SISTEMAS_DE_AIRE,
    },
    {
      title: "Trabajos y Mantenimientos en Soldaduras Especiales",
      desc: "Diseñamos, instalamos y fabricamos todo tipo de estructuras en Pailería y Herrería.",
      img: LogoSoldadura,
      link: LINKS.EQUIPOS_DE_SUPRESION,
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
      {/* Background overlay con opacidad */}
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

      {/* Contenido encima del fondo */}
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
        {/* Icon box - ocupa 30% y todo el alto */}
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

        {/* Texto */}
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
            {/* Contenedor de imagen cuadrado */}
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
              {/* Para la card sin imagen, mostrar un ícono por defecto */}
              {!item.img && (
                <BuildCircleIcon
                  sx={{
                    fontSize: 80,
                    color: "#2659A8",
                  }}
                />
              )}
            </Box>
            
            {/* Contenido de texto con padding */}
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

      {/* Botón CTA */}
      <Button
        size="large"
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
        component={RouterLink}
        to={LINKS.CONTACTO}
      >
        Solicitar asesoría
      </Button>

    </Box>
  );
};

export default Services;