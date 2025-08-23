import { Box, Typography, useTheme, Button, IconButton } from "@mui/material";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import Slider from "react-slick";
import Logo from "../../assets/logo.jpeg";
import Turbina from "../../assets/images/aire/mecanico/extractor atmoesferico 36pulgadas.jpeg";
import Escalera from "../../assets/images/soldaduraEspecial/ProyectoEscalera1.jpeg";
import Escalera2 from "../../assets/images/soldaduraEspecial/ProyectoEscalera2.jpeg";
import Escalera3 from "../../assets/images/soldaduraEspecial/ProyectoEscalera3.jpeg";
import Escalera4 from "../../assets/images/soldaduraEspecial/ProyectoEscalera4.jpeg";
import LINKS from "../../config/links";
import { useState } from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ProjectModal from "../../components/ProjectModal";

type Project = {
  title: string;
  image: string;
  description: string;
  images: string[];
  features: string[];
};

const Portfolio = () => {
  const theme = useTheme();
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Proyecto de Herrería",
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
      title: "Proyecto 2",
      image: Logo,
      description: "Descripción detallada del proyecto 2 con todos los detalles técnicos relevantes.",
      images: [Logo, Turbina, Logo],
      features: ["Característica A", "Característica B", "Característica C"]
    },
    {
      title: "Proyecto 3",
      image: Turbina,
      description: "Descripción detallada del proyecto 1 con todos los detalles técnicos relevantes.",
      images: [Turbina, Logo, Turbina],
      features: ["Característica 1", "Característica 2", "Característica 3"]
    },
    {
      title: "Proyecto 4",
      image: Logo,
      description: "Descripción detallada del proyecto 2 con todos los detalles técnicos relevantes.",
      images: [Logo, Turbina, Logo],
      features: ["Característica A", "Característica B", "Característica C"]
    },
  ];

  // Flechas personalizadas mejoradas
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

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setOpenModal(true);
  };

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
      {/* Encabezado */}
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

      {/* Carrusel */}
      <Box sx={{
        width: "100%",
        maxWidth: 1200,
        position: 'relative'
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

      <Button
        variant="gradient"
        size="large"
        onClick={handleCTA}
      >
        <span>CONTÁCTANOS</span>
      </Button>

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