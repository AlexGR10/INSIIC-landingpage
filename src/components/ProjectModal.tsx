import { Modal, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Slider from "react-slick";
import { useTheme } from "@mui/material/styles";
import EmailButton from "./EmailButton"; // Importar EmailButton

type Project = {
  title: string;
  description: string;
  images: string[];
  features: string[];
};

type ProjectModalProps = {
  open: boolean;
  onClose: () => void;
  project: Project | null;
  onContactClick: () => void;
};

const ProjectModal = ({ open, onClose, project }: ProjectModalProps) => {
  const theme = useTheme();

  // Función para generar mensaje personalizado según el proyecto
  const generateProjectMessage = (project: Project) => {
    if (!project) return "";

    const projectKeywords = {
      "Proyecto de Herrería Escalera Industrial": {
        type: "herrería y estructuras metálicas",
        details: "escaleras industriales, estructuras de acero, trabajos de herrería personalizada"
      },
      "Proyecto Pailería en Edificio para Departamentos": {
        type: "pailería y estructuras",
        details: "trabajos de pailería, estructuras IPR, soldadura especializada"
      },
      "Sistema de Supresión Contra Incendios para Cocina": {
        type: "sistemas contra incendio",
        details: "sistemas de supresión ANSUL, protección contra incendios en cocinas, equipos certificados UL"
      },
      "Extractores Atmosféricos para Extracción de Aire": {
        type: "sistemas de aire y ventilación",
        details: "extractores atmosféricos, sistemas de ventilación, equipos de extracción de aire"
      }
    };

    const projectInfo = projectKeywords[project.title as keyof typeof projectKeywords] || {
      type: "proyectos industriales",
      details: "soluciones industriales personalizadas"
    };

    return `He visto el proyecto "${project.title}" en su portafolio y me interesa conocer más sobre sus servicios de ${projectInfo.type}.

Detalles del proyecto que me llamaron la atención:
${project.features.map(feature => `- ${feature}`).join('\n')}

Me gustaría solicitar información sobre:
- Cotización para un proyecto similar
- Tiempos de fabricación e instalación  
- Garantías y certificaciones
- Servicios de mantenimiento

Descripción de mi necesidad:
[Describa aquí sus requerimientos específicos]

Quedo atento a su respuesta para coordinar una visita técnica.

Saludos cordiales.`;
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="project-modal-title"
      aria-describedby="project-modal-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Box
        sx={{
          position: "relative",
          backgroundColor: theme.palette.background.paper,
          boxShadow: theme.shadows[24],
          borderRadius: '12px',
          maxWidth: 900,
          width: "100%",
          maxHeight: "90vh",
          overflowY: 'auto',
          p: 4,
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
            borderRadius: '0 12px 12px 0',
          },
          '&::-webkit-scrollbar-thumb': {
            background: theme.palette.grey[400],
            borderRadius: '4px',
            '&:hover': {
              background: theme.palette.grey[500],
            },
          },
          scrollbarWidth: 'thin',
          scrollbarColor: `${theme.palette.grey[400]} transparent`,
        }}
      >
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>

        {project && (
          <>
            <Typography id="project-modal-title" variant="h4" component="h2" sx={{ mb: 2 }}>
              {project.title}
            </Typography>
            
            {/* Carrusel de imágenes */}
            <Box sx={{ mb: 4 }}>
              <Slider
                dots={true}
                infinite={true}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
              >
                {project.images.map((img: string, idx: number) => (
                  <Box key={idx} sx={{ px: 1 }}>
                    <Box
                      component="img"
                      src={img}
                      alt={`${project.title} - Imagen ${idx + 1}`}
                      sx={{
                        width: "100%",
                        maxHeight: 400,
                        objectFit: "contain",
                        borderRadius: theme.shape.borderRadius,
                      }}
                    />
                  </Box>
                ))}
              </Slider>
            </Box>

            <Typography id="project-modal-description" sx={{ mb: 3 }}>
              {project.description}
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Características principales:
              </Typography>
              <ul style={{ paddingLeft: 20 }}>
                {project.features.map((feature: string, idx: number) => (
                  <li key={idx}>
                    <Typography variant="body1">{feature}</Typography>
                  </li>
                ))}
              </ul>
            </Box>

            {/* EmailButton con mensaje personalizado */}
            <EmailButton
              message={generateProjectMessage(project)}
              subject={`Consulta sobre: ${project.title} - INSIIC`}
              buttonText="CONTÁCTANOS SOBRE ESTE PROYECTO"
              variant="gradient"
              size="large"
              showIcon={false}
              sx={{
                mt: 2,
                width: "100%"
              }}
            />
          </>
        )}
      </Box>
    </Modal>
  );
};

export default ProjectModal;