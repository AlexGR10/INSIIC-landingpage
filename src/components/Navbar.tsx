import {
  useTheme,
  useMediaQuery,
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.jpeg";
import LINKS from "../config/links";
import EmailButton from "./EmailButton";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleMenuClick = (path: string) => {
    navigate(path);
    setOpenDrawer(false);
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const generalContactMessage = `Estoy interesado en los servicios de INSIIC. Me gustaría recibir más información sobre:

- Sistemas de Aire
- Redes Contra Incendio
- Soldadura y Pailería

Por favor, contactarme para conocer más detalles sobre sus servicios y solicitar una cotización.

Quedo atento a su respuesta.

Saludos cordiales.`;

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: theme.palette.background.default,
          color: theme.palette.text.primary,
          borderBottom: "1px solid #e0e0e0",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: isMobile ? "center" : "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: isMobile ? "center" : "flex-start",
              flexGrow: isMobile ? 1 : 0,
              cursor: "pointer",
            }}
            onClick={handleLogoClick}
          >
            {isMobile && (
              <IconButton
                edge="start"
                color="inherit"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenDrawer(true);
                }}
                sx={{ position: "absolute", left: 8 }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <img src={Logo} alt="Logo" style={{ height: 60 }} />
          </Box>

          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              <Box
                onClick={() => handleMenuClick(LINKS.HOME)}
                sx={{
                  cursor: "pointer",
                  color: theme.palette.primary.main,
                  fontWeight: 400,
                  fontSize: "1rem",
                  letterSpacing: "0.15px",
                  transition: "border-bottom 0.2s ease",
                  borderBottom: "2px solid transparent",
                  "&:hover": {
                    borderBottom: `2px solid ${theme.palette.primary.main}`,
                  },
                }}
              >
                Inicio
              </Box>

              <Box
                onClick={() => handleMenuClick(LINKS.SISTEMAS_DE_AIRE)}
                sx={{
                  cursor: "pointer",
                  color: theme.palette.primary.main,
                  fontWeight: 400,
                  fontSize: "1rem",
                  letterSpacing: "0.15px",
                  transition: "border-bottom 0.2s ease",
                  borderBottom: "2px solid transparent",
                  "&:hover": {
                    borderBottom: `2px solid ${theme.palette.primary.main}`,
                  },
                }}
              >
                Sistemas de Aire
              </Box>

              <Box
                onClick={() => handleMenuClick(LINKS.REDES_CONTRA_INCENDIO)}
                sx={{
                  cursor: "pointer",
                  color: theme.palette.primary.main,
                  fontWeight: 400,
                  fontSize: "1rem",
                  letterSpacing: "0.15px",
                  transition: "border-bottom 0.2s ease",
                  borderBottom: "2px solid transparent",
                  "&:hover": {
                    borderBottom: `2px solid ${theme.palette.primary.main}`,
                  },
                }}
              >
                Sistemas Contra Incendio
              </Box>

              <Box
                onClick={() => handleMenuClick(LINKS.SOLDADURA_PAILERIA)}
                sx={{
                  cursor: "pointer",
                  color: theme.palette.primary.main,
                  fontWeight: 400,
                  fontSize: "1rem",
                  letterSpacing: "0.15px",
                  transition: "border-bottom 0.2s ease",
                  borderBottom: "2px solid transparent",
                  "&:hover": {
                    borderBottom: `2px solid ${theme.palette.primary.main}`,
                  },
                }}
              >
                Soldadura y Pailería
              </Box>

              <EmailButton
                message={generalContactMessage}
                subject="Consulta General sobre Servicios INSIIC"
                buttonText="CONTÁCTANOS"
                variant="gradient"
                size="small"
                showIcon={false}
              />
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Box
          sx={{
            width: 250,
            mt: 2,
            bgcolor: theme.palette.background.default,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            pb: 2,
          }}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleMenuClick(LINKS.HOME)}>
                <ListItemText
                  primary="Inicio"
                  primaryTypographyProps={{
                    color: theme.palette.primary.main,
                    fontSize: "1rem",
                    fontWeight: 400,
                  }}
                />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={() => handleMenuClick(LINKS.SISTEMAS_DE_AIRE)}>
                <ListItemText
                  primary="Sistemas de Aire"
                  primaryTypographyProps={{
                    color: theme.palette.primary.main,
                    fontSize: "1rem",
                    fontWeight: 400,
                  }}
                />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={() => handleMenuClick(LINKS.REDES_CONTRA_INCENDIO)}>
                <ListItemText
                  primary="Redes Contra Incendio"
                  primaryTypographyProps={{
                    color: theme.palette.primary.main,
                    fontSize: "1rem",
                    fontWeight: 400,
                  }}
                />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={() => handleMenuClick(LINKS.SOLDADURA_PAILERIA)}>
                <ListItemText
                  primary="Soldadura y Pailería"
                  primaryTypographyProps={{
                    color: theme.palette.primary.main,
                    fontSize: "1rem",
                    fontWeight: 400,
                  }}
                />
              </ListItemButton>
            </ListItem>

          </List>

          <Box sx={{ px: 2 }}>
            <EmailButton
              message={generalContactMessage}
              subject="Consulta General sobre Servicios INSIIC"
              buttonText="CONTÁCTANOS"
              variant="gradient"
              fullWidth
              showIcon={false}
              sx={{
                borderRadius: 2,
                padding: "6px 16px",
              }}
            />
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;