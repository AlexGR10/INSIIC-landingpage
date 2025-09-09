import { Box, Typography, Card, Button, useTheme, Tooltip } from "@mui/material";
import { Download, Verified, Business, Security, LocalFireDepartment } from "@mui/icons-material";
import LogoNFPA from "../../assets/images/certificados/NFPA.png";
import LogoREPSE from "../../assets/images/certificados/repse.jfif";
import LogoSTPS from "../../assets/images/certificados/STPS.jfif";
import LogoAnsul from "../../assets/images/certificados/ANSUL.png";

// Importa los PDFs
import NFPACertificacion from "../../assets/images/certificados/NFPA-Certificacion.pdf";
import NFPAConstancia from "../../assets/images/certificados/NFPAConstancia.pdf";

const AboutUs = () => {
  const theme = useTheme();

  const certificaciones = [
    {
      id: "nfpa",
      logo: LogoNFPA,
      title: "NFPA",
      subtitle: "Certificación Internacional",
      description: "Estándares de seguridad contra incendios",
      icon: <LocalFireDepartment />,
      pdfs: [
        { 
          name: "Certificación NFPA", 
          file: NFPACertificacion,
          description: "Certificado oficial NFPA"
        },
        { 
          name: "Constancia de Curso", 
          file: NFPAConstancia,
          description: "Constancia de capacitación especializada"
        }
      ]
    },
    {
      id: "repse",
      logo: LogoREPSE,
      title: "REPSE",
      subtitle: "Registro Oficial México",
      description: "Registro de prestadoras de servicios especializados",
      icon: <Business />,
      pdfs: []
    },
    {
      id: "stps",
      logo: LogoSTPS,
      title: "STPS",
      subtitle: "Secretaría del Trabajo",
      description: "Cumplimiento normativo laboral",
      icon: <Verified />,
      pdfs: []
    },
    {
      id: "ansul",
      logo: LogoAnsul,
      title: "ANSUL",
      subtitle: "Marca Autorizada",
      description: "Distribuidor autorizado de equipos contra incendio",
      icon: <Security />,
      pdfs: []
    }
  ];

  const handleDownloadPDF = (pdfFile: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = fileName;
    link.click();
  };

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
          maxWidth: 1400,
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

        {/* Grid de certificaciones mejorado */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)"
            },
            gap: 4,
            width: "100%",
            maxWidth: 1200,
          }}
        >
          {certificaciones.map((cert) => (
            <Card
              key={cert.id}
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 3,
                borderRadius: 3,
                boxShadow: "0px 8px 24px rgba(0,0,0,0.3)",
                backgroundColor: "rgba(255,255,255,0.98)",
                transition: "all 0.3s ease",
                minHeight: cert.pdfs.length > 0 ? 380 : 280,
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0px 12px 32px rgba(0,0,0,0.4)",
                }
              }}
            >
              {/* Ícono en esquina superior */}
              <Box
                sx={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  color: theme.palette.primary.main,
                  opacity: 0.7,
                }}
              >
                {cert.icon}
              </Box>

              {/* Logo */}
              <Box
                component="img"
                src={cert.logo}
                alt={cert.title}
                sx={{
                  width: 80,
                  height: 80,
                  objectFit: "contain",
                  mb: 2,
                }}
              />

              {/* Información */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: theme.palette.text.primary,
                  mb: 0.5,
                  textAlign: "center",
                }}
              >
                {cert.title}
              </Typography>

              <Typography
                variant="caption"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                  mb: 1,
                  textAlign: "center",
                }}
              >
                {cert.subtitle}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                  textAlign: "center",
                  mb: cert.pdfs.length > 0 ? 3 : 0,
                  lineHeight: 1.4,
                  fontSize: "0.875rem",
                }}
              >
                {cert.description}
              </Typography>

              {/* Botones de descarga para PDFs */}
              {cert.pdfs.length > 0 && (
                <Box sx={{ width: "100%", mt: "auto" }}>
                  {cert.pdfs.map((pdf, index) => (
                    <Tooltip key={index} title={pdf.description} arrow>
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<Download />}
                        onClick={() => handleDownloadPDF(pdf.file, pdf.name)}
                        sx={{
                          mb: index < cert.pdfs.length - 1 ? 1 : 0,
                          width: "100%",
                          textTransform: "none",
                          borderColor: theme.palette.primary.main,
                          color: theme.palette.primary.main,
                          fontSize: { xs: "0.8rem", md: "0.75rem" },
                          py: 0.7,
                          "&:hover": {
                            backgroundColor: theme.palette.primary.main,
                            color: "white",
                            transform: "scale(1.02)",
                          }
                        }}
                      >
                        {pdf.name}
                      </Button>
                    </Tooltip>
                  ))}
                </Box>
              )}

              {/* Elemento decorativo para cards sin PDFs */}
              {cert.pdfs.length === 0 && (
                <Box 
                  sx={{ 
                    mt: "auto", 
                    pt: 2, 
                    borderTop: `2px solid ${theme.palette.primary.main}`, 
                    width: "60%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      color: theme.palette.primary.main,
                      opacity: 0.6,
                      transform: "scale(1.2)",
                    }}
                  >
                    {cert.icon}
                  </Box>
                </Box>
              )}
            </Card>
          ))}
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

        {/* Nota sobre documentos */}
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            color: "rgba(255,255,255,0.7)",
            fontSize: "0.875rem",
            fontStyle: "italic",
          }}
        >
          * Los documentos disponibles pueden descargarse para verificar nuestras certificaciones
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutUs;