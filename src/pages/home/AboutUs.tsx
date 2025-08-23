import { Box, Typography, Card, useTheme } from "@mui/material";
import LogoNFPA from "../../assets/images/certificados/NFPA.png";
import LogoREPSE from "../../assets/images/certificados/repse.jfif";
import LogoSTPS from "../../assets/images/certificados/STPS.jfif";
import LogoAnsul from "../../assets/images/certificados/ANSUL.png";

const AboutUs = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        px: { xs: 5, md: 10 },
        py: "8%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        color: theme.palette.common.white,
      }}
    >
      {/* Background azul institucional */}
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
          borderBottom: "1px solid #ffffff",
        }}
      />

      {/* Contenido */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: 1200,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
        }}
      >
        {/* Texto principal */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 3,
              color: theme.palette.common.white,
            }}
          >
            Sobre Nosotros
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              fontWeight: 400,
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.7,
              maxWidth: 800,
              mx: "auto",
            }}
          >
            En INSIIC nos especializamos en diseñar, instalar y mantener soluciones industriales integrales
            que aseguran la eficiencia, seguridad y cumplimiento normativo. Con presencia nacional y un
            enfoque centrado en resultados, trabajamos con industrias que no pueden permitirse fallas.
          </Typography>
        </Box>

        {/* Texto de certificaciones */}
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            mb: 4,
            color: "rgba(255,255,255,0.9)",
            fontWeight: 600,
            fontSize: "1rem",
          }}
        >
          Contamos con las siguientes certificaciones, registros y marcas de calidad:
        </Typography>

        {/* Grid de logos de certificaciones */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
            flexWrap: "wrap",
            width: "100%",
            [theme.breakpoints.down("md")]: {
              flexDirection: "column",
              gap: 3,
            },
          }}
        >
          {/* Card 1 - NFPA */}
          <Card
            sx={{
              width: 150,
              height: 150,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 3,
              boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
              backgroundColor: "rgba(255,255,255,0.95)",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={LogoNFPA}
              alt="Certificación NFPA"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                padding: 1,
              }}
            />
          </Card>

          {/* Card 2 - REPSE */}
          <Card
            sx={{
              width: 150,
              height: 150,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 3,
              boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
              backgroundColor: "rgba(255,255,255,0.95)",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={LogoREPSE}
              alt="Registro REPSE"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                padding: 1,
              }}
            />
          </Card>

          {/* Card 3 - STPS */}
          <Card
            sx={{
              width: 150,
              height: 150,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 3,
              boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
              backgroundColor: "rgba(255,255,255,0.95)",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={LogoSTPS}
              alt="Secretaría del Trabajo"
              sx={{ 
                width: "100%", 
                height: "100%", 
                objectFit: "contain",
                padding: 1,
              }}
            />
          </Card>

          {/* Card 4 - ANSUL */}
          <Card
            sx={{
              width: 150,
              height: 150,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 3,
              boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
              backgroundColor: "rgba(255,255,255,0.95)",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={LogoAnsul}
              alt="ANSUL"
              sx={{ 
                width: "100%", 
                height: "100%", 
                objectFit: "contain",
                padding: 1,
              }}
            />
          </Card>
        </Box>

        {/* Texto final */}
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: "rgba(255,255,255,0.9)",
            fontWeight: 600,
            fontSize: "1rem",
            mt: 2,
          }}
        >
          Tu seguridad y cumplimiento normativo son nuestra prioridad.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutUs;