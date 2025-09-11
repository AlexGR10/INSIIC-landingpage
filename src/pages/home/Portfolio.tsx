/**
 * @file Portfolio.tsx
 * @brief This component renders the portfolio section of the home page.
 *
 * It showcases a selection of projects in a carousel and allows users to view project details in a modal.
 */

import { Box, Typography, useTheme, IconButton } from "@mui/material";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import Slider from "react-slick";
import Turbina from "../../assets/images/aire/mecanico/extractor atmoesferico 36pulgadas.jpeg";
import Turbina2 from "../../assets/images/aire/turbina2.jpeg";
import Turbina3 from "../../assets/images/aire/turbina3.jpeg";
import Escalera from "../../assets/images/soldaduraEspecial/ProyectoEscalera1.jpeg";
import Escalera2 from "../../assets/images/soldaduraEspecial/ProyectoEscalera2.jpeg";
import Escalera3 from "../../assets/images/soldaduraEspecial/ProyectoEscalera3.jpeg";
import Escalera4 from "../../assets/images/soldaduraEspecial/ProyectoEscalera4.jpeg";
import PaileriaDpto from "../../assets/images/soldaduraEspecial/PaileriaDpto.jpeg";
import PaileriaDpto2 from "../../assets/images/soldaduraEspecial/PaileriaDpto2.jpeg";
import PaileriaDpto3 from "../../assets/images/soldaduraEspecial/PaileriaDpto3.jpeg";
import SistemaSupersion from "../../assets/images/contraIncendio/sistemaSupresion.jpeg";
import SistemaSupersion2 from "../../assets/images/contraIncendio/sistemaSupresion2.jpeg";
import SistemaSupersion3 from "../../assets/images/contraIncendio/sistemaSupresion3.jpeg";
import SistemaSupersion4 from "../../assets/images/contraIncendio/sistemaSupresion4.jpeg";
import LINKS from "../../config/links";
import { useState } from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ProjectModal from "../../components/ProjectModal";
import EmailButton from "../../components/EmailButton";

/**
 * @typedef Project
 * @brief Represents a project with its details.
 */
type Project = {
  title: string;
  image: string;
  description: string;
  images: string[];
  features: string[];
};

/**
 * @function Portfolio
 * @brief A functional component that renders the portfolio section.
 *
 * @returns {JSX.Element} The rendered portfolio section.
 */
const Portfolio = () => {
  const theme = useTheme();
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Message for the contact button
  const portfolioContactMessage = `He visto algunos de los proyectos de INSIIC en su portafolio y me interesa conocer más sobre sus servicios:

- Herrería y estructuras metálicas
- Sistemas de aire y extractores atmosféricos
- Sistemas de supresión contra incendios
- Trabajos de pailería industrial

Me gustaría discutir un proyecto similar o solicitar una cotización para mis necesidades específicas.

Quedo atento a su respuesta para coordinar una reunión.

Saludos cordiales.`;

  /**
   * @const projects
   * @brief An array of objects representing the portfolio projects.
   */
  const projects: Project[] = [
    {
      title: "Proyecto de Herrería Escalera Industrial",
      image: Escalera,
      description: "Se diseñó y se fabricó esta escalera a gusto y necesidades del cliente, con materiales de lámina calibre 18. Escalones fabricados en ángulo de 1 1/2, con lámina antiderrapante. El soporte principal es de tubo de 4 pulgadas, cédula 40. Teniendo una altura final de 12 metros.",
      images: [Escalera, Escalera2, Escalera3, Escalera4],
      features: [
        "Estructura de tubo de 4\" cédula 40 para máxima resistencia",
        "Escalones antiderrapantes con ángulo de 1 1/2\" para seguridad",
        "Fabricación personalizada en lámina calibre 18"
      ]
    },
    {
      title: "Proyecto Pailería en Edificio para Departamentos",
      image: PaileriaDpto,
      description: "Trabajo de pailería en edificio departamental. Trabajado con materiales IPR estructural, PTR estructural y soldadura 70/18",
      images: [PaileriaDpto, PaileriaDpto2, PaileriaDpto3],
      features: ["IPR estructural", "PTR estructural", "Soldadura 70/18"]
    },
    {
      title: "Sistema de Supresión Contra Incendios para Cocina",
      image: SistemaSupersion,
      description: "Sistema de supresión contra incendio para cocina marca ANSUL, certificado UL. Incluye actuadores térmicos, boquillas de descarga, mangueras, válvulas, tanque de químico extintor, palanca actuadora manual y tubería inoxidable.",
      images: [SistemaSupersion, SistemaSupersion2, SistemaSupersion3, SistemaSupersion4],
      features: ["Tanque químico extintor", "Tanque de supresión para actuador", "Boquillas rosiadoras"]
    },
    {
      title: "Extractores Atmosféricos para Extracción de Aire",
      image: Turbina,
      description: "Proyecto suministro e instalación de extractores atomosféricos para aire caliente. Fabricados en lámina galvanizada o pintro con rodamientos, balero y base.",
      images: [Turbina, Turbina2, Turbina3],
      features: ["Lámina Galvanizada", "Rodamientos", "Base de montaje"]
    },
  ];

  // Custom improved arrows
  const SampleNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <IconButton
        onClick={onClick}
        sx={{
          position: 'absolute',
          right: -40,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1,
          color: theme.palette.primary.main,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 1)'
          }
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    );
  };

  const SamplePrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <IconButton
        onClick={onClick}
        sx={{
          position: 'absolute',
          left: -40,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1,
          color: theme.palette.primary.main,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 1)'
          }
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
    );
  };

  /**
   * @const settings
   * @brief Configuration for the react-slick carousel.
   */
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(3, projects.length),
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: {
          slidesToShow: Math.min(2, projects.length),
          arrows: true
        },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          slidesToShow: 1,
          arrows: false
        },
      },
    ],
  };

  const handleCTA = () => {
    window.location.href = LINKS.CONTACTO;
  };

  /**
   * @function handleOpenModal
   * @brief Opens the project modal with the selected project.
   * @param {Project} project - The project to display in the modal.
   */
  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setOpenModal(true);
  };

  /**
   * @function handleCloseModal
   * @brief Closes the project modal.
   */
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        px: { xs: 3, md: 10 },
        py: "5%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: theme.palette.common.black,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 1200,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          mb: 6,
          gap: 4,
        }}
      >
        <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
          <Typography variant="h2" sx={{ fontWeight: "bold", mb: 1 }}>
            Nuestro trabajo
          </Typography>
          <Typography variant="body2" sx={{ fontSize: 18, fontWeight: 500 }}>
            Conoce algunos de nuestros proyectos destacados.
          </Typography>
        </Box>

        <Box sx={{ flexShrink: 0 }}>
          <WorkOutlineIcon sx={{ fontSize: 60, color: "#2659A8" }} />
        </Box>
      </Box>

      {/* Carousel */}
      <Box sx={{
        width: "100%",
        maxWidth: 1200,
        position: 'relative',
        mb: 8 // Increased bottom margin for the carousel
      }}>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <Box
              key={index}
              sx={{
                px: 2,
                textAlign: "center",
                cursor: "pointer",
                outline: 'none'
              }}
              onClick={() => handleOpenModal(project)}
            >
              <Box
                sx={{
                  height: 220,
                  overflow: "hidden",
                  borderRadius: 2,
                  boxShadow: 2,
                  mb: 2,
                  '&:hover img': {
                    transform: "scale(1.05)"
                  }
                }}
              >
                <Box
                  component="img"
                  src={project.image}
                  alt={project.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                  }}
                />
              </Box>
              <Typography variant="h6" fontWeight={600}>
                {project.title}
              </Typography>
            </Box>
          ))}
        </Slider>
      </Box>

      {/* EmailButton with more space */}
      <EmailButton
        message={portfolioContactMessage}
        subject="Consulta sobre Proyectos - Portfolio INSIIC"
        buttonText="CONTÁCTANOS"
        variant="gradient"
        size="large"
        showIcon={false}
        sx={{
          alignSelf: "center",
        }}
      />

      <ProjectModal
        open={openModal}
        onClose={handleCloseModal}
        project={selectedProject}
        onContactClick={handleCTA}
      />
    </Box>
  );
};

export default Portfolio;
