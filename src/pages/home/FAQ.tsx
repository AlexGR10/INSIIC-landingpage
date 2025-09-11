/**
 * @file FAQ.tsx
 * @brief This component renders a Frequently Asked Questions (FAQ) section.
 *
 * It uses Material-UI's Accordion component to display a list of questions and answers.
 */

import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { red } from "@mui/material/colors";

/**
 * @const faqs
 * @brief An array of objects representing the frequently asked questions.
 */
const faqs = [
  {
    question: "¿Qué servicios ofrece INSIIC?",
    answer:
      "Brindamos soluciones integrales en aire acondicionado, ventilación, extracción, herrería, pailería y sistemas contra incendios para entornos industriales, desde el diseño hasta el mantenimiento.",
  },
  {
    question: "¿Trabajan a nivel nacional?",
    answer:
      "Sí, tenemos cobertura en todo el país y capacidad para atender proyectos industriales en cualquier ubicación.",
  },
  {
    question: "¿Atienden emergencias o paros no programados?",
    answer:
      "Así es. Nuestra prioridad es apoyar a industrias que no pueden parar, por lo que contamos con atención inmediata en situaciones críticas.",
  },
  {
    question: "¿Ofrecen mantenimiento preventivo?",
    answer:
      "Sí, desarrollamos planes de mantenimiento preventivo y correctivo adaptados a cada cliente y tipo de instalación.",
  },
];

/**
 * @function FAQ
 * @brief A functional component that renders the FAQ section.
 *
 * @returns {JSX.Element} The rendered FAQ section.
 */
const FAQ = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: 5, md: 10 },
        py: "8%",
        display: "flex",
        flexDirection: "column",
        background: "#e3e3e45b",
        alignItems: "center",
      }}
    >
      {/* Full-width header aligned to the left */}
      <Box
        sx={{
          display: "flex",
          alignItems: "left",
          width: "100%",
          mb: 6,
        }}
      >
        <Box sx={{ flex: "0 0 20%", display: "flex", justifyContent: "center" }}>
          <HelpOutlineIcon
            sx={{
              fontSize: { xs: 60, md: 100 },
              color: red[500],
            }}
          />
        </Box>

        <Box sx={{ flex: "0 0 80%" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              color: theme.palette.common.black,
              textAlign: "left",
              fontSize: { xs: "2rem", md: "3.5rem" },
              lineHeight: 1.2,
            }}
          >
            Preguntas Frecuentes
          </Typography>
        </Box>
      </Box>

      {/* Accordions - 100% width */}
      <Box
        sx={{
          width: "100%",
        }}
      >
        {faqs.map((faq, index) => (
          <Accordion key={index} sx={{ mb: 2, borderRadius: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography sx={{ fontWeight: 600 }}>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: theme.palette.text.secondary }}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FAQ;