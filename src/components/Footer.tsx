import { Box, Typography, Link, IconButton, useTheme } from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#2659A8', // Color azul corporativo
        color: '#ffffff', // Texto blanco para mejor contraste
        py: 4, // Más padding vertical
        px: { xs: 3, md: 8 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: { xs: 3, md: 0 }, // Más espacio entre elementos en móvil
        boxShadow: '0 -2px 10px rgba(0,0,0,0.1)', // Sombra sutil para dar elevación
        position: 'relative',
        zIndex: theme.zIndex.appBar, // Asegura que esté por encima de otros elementos
      }}
    >
      {/* Marca empresa */}
      <Typography 
        variant="body1" 
        sx={{ 
          fontWeight: 600, // Más peso para mejor legibilidad
          textAlign: { xs: 'center', md: 'left' },
          order: { xs: 2, md: 1 }, // Cambio de orden en responsive
          color: '#ffffff',
        }}
      >
        © {new Date().getFullYear()} INSIIC — Sistemas Integrales para la Industria del Centro
      </Typography>

      {/* Redes sociales */}
      <Box 
        sx={{ 
          display: "flex", 
          gap: 1.5,
          order: { xs: 1, md: 2 } // Primero en móvil
        }}
      >
        <IconButton
          component="a"
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: '#ffffff',
            backgroundColor: 'rgba(255,255,255,0.1)',
            "&:hover": { 
              backgroundColor: 'rgba(255,255,255,0.2)',
              transform: 'scale(1.1)'
            },
            transition: "all 0.2s ease",
          }}
        >
          <Facebook fontSize="small" />
        </IconButton>
        <IconButton
          component="a"
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: '#ffffff',
            backgroundColor: 'rgba(255,255,255,0.1)',
            "&:hover": { 
              backgroundColor: 'rgba(255,255,255,0.2)',
              transform: 'scale(1.1)'
            },
            transition: "all 0.2s ease",
          }}
        >
          <Instagram fontSize="small" />
        </IconButton>
        <IconButton
          component="a"
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: '#ffffff',
            backgroundColor: 'rgba(255,255,255,0.1)',
            "&:hover": { 
              backgroundColor: 'rgba(255,255,255,0.2)',
              transform: 'scale(1.1)'
            },
            transition: "all 0.2s ease",
          }}
        >
          <LinkedIn fontSize="small" />
        </IconButton>
      </Box>

      {/* Firma */}
      <Typography 
        variant="body2" 
        sx={{ 
          color: 'rgba(255,255,255,0.8)',
          textAlign: { xs: 'center', md: 'right' },
          order: 3,
          mt: { xs: 1, md: 0 }
        }}
      >
        Desarrollado por{" "}
        <Link
          href="https://solvium.com"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          sx={{
            color: '#ffffff',
            fontWeight: 500,
            "&:hover": { 
              color: '#9d8fcfff',
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