import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2659A8", // Azul branding
    },
    secondary: {
      main: "#ED2A38", // Rojo acento
    },
    background: {
      default: "#FFFFFF", // Blanco fondo
      paper: "#FFFFFF",
    },
    text: {
      primary: "#000000", // Negro texto principal
      secondary: "#78797B", // Gris texto secundario
    },
    grey: {
      500: "#78797B", // Gris personalizado en grey[500]
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      color: "#ED2A38", // Azul
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 700,
      color: "#2659A8", // Rojo ED2A38
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 700,
      color: "#78797B", // Gris
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 500,
      color: "#000000", // Negro
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 500,
      color: "#000000",
    },
    body2: {
      fontSize: "0.9rem",
      color: "#78797B",
    },
    caption: {
      fontSize: "0.75rem",
      color: "#78797B",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 500,
        },
      },
      variants: [
        {
          props: { variant: 'gradient' },
          style: {
            position: 'relative',
            overflow: 'hidden',
            padding: '12px 24px',
            borderRadius: 8,
            fontSize: '1.1rem',
            fontWeight: 'bold',
            textTransform: 'none',
            background: 'linear-gradient(90deg, #2659A8 4.4%, #ED2A38 100%)',
            color: '#FFFFFF !important', // Forzar color blanco
            border: 'none',
            transition: 'all 0.3s ease',
            '&:hover': {
              background: 'linear-gradient(90deg, #1f4c90 4.4%, #c9202d 100%)',
            },
            // Efecto de borde animado
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '-2px',
              left: '-2px',
              width: 'calc(100% + 4px)',
              height: 'calc(100% + 4px)',
              borderRadius: 'inherit',
              background: 'linear-gradient(90deg, #2659A8, #cc1723ff, #2659A8)',
              backgroundSize: '300% 300%',
              zIndex: -1, // Cambiado a -1 para que esté detrás
              animation: 'borderGlow 3s linear infinite',
            },
            // Asegurar que todo el contenido esté visible
            '& .MuiButton-startIcon': {
              color: '#FFFFFF !important',
              zIndex: 2,
            },
            '& .MuiButton-endIcon': {
              color: '#FFFFFF !important',
              zIndex: 2,
            },
            // Keyframes para la animación
            '@keyframes borderGlow': {
              '0%': { backgroundPosition: '0% 50%' },
              '50%': { backgroundPosition: '100% 50%' },
              '100%': { backgroundPosition: '0% 50%' },
            }
          }
        },
        {
          props: { variant: 'gradient', size: 'small' },
          style: {
            position: 'relative',
            overflow: 'hidden',
            padding: '8px 16px',
            borderRadius: 6,
            fontSize: '0.85rem',
            fontWeight: 'bold',
            textTransform: 'none',
            background: 'linear-gradient(90deg, #2659A8 4.4%, #ED2A38 100%)',
            color: '#FFFFFF !important', // Forzar color blanco
            border: 'none',
            transition: 'all 0.3s ease',
            '&:hover': {
              background: 'linear-gradient(90deg, #1f4c90 4.4%, #c9202d 100%)',
            },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '-1.5px',
              left: '-1.5px',
              width: 'calc(100% + 3px)',
              height: 'calc(100% + 3px)',
              borderRadius: 'inherit',
              background: 'linear-gradient(90deg, #2659A8, #cc1723ff, #2659A8)',
              backgroundSize: '300% 300%',
              zIndex: -1, // Cambiado a -1 para que esté detrás
              animation: 'borderGlow 3s linear infinite',
            },
            '& .MuiButton-startIcon': {
              color: '#FFFFFF !important',
              zIndex: 2,
            },
            '& .MuiButton-endIcon': {
              color: '#FFFFFF !important',
              zIndex: 2,
            },
            '@keyframes borderGlow': {
              '0%': { backgroundPosition: '0% 50%' },
              '50%': { backgroundPosition: '100% 50%' },
              '100%': { backgroundPosition: '0% 50%' },
            }
          },
        }
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
        },
      },
    },
  },
});

export default theme;