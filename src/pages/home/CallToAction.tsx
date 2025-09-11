/**
 * @file CallToAction.tsx
 * @brief This component renders a call to action section to encourage user engagement.
 *
 * It features a title, a descriptive text, and a prominent contact button.
 * The component uses framer-motion for animations to attract attention.
 */

import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import EmailButton from "../../components/EmailButton";

/**
 * @function CallToAction
 * @brief A functional component that renders the call to action section.
 *
 * @returns {JSX.Element} The rendered call to action section.
 */
const CallToAction = () => {
  const theme = useTheme();

  const contactMessage = `Estoy interesado en llevar mi proyecto al siguiente nivel con INSIIC.

Me gustaría recibir información sobre:
- Sistemas de Aire y Ventilación
- Redes Contra Incendio
- Soldadura y Pailería
- Mantenimiento Industrial

Por favor, contactarme para conocer más detalles y solicitar una cotización personalizada para mi proyecto.

Quedo atento a su respuesta.

Saludos cordiales.`;

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 8, md: 10 },
        background: `linear-gradient(135deg, ${theme.palette.primary.main}08 0%, ${theme.palette.secondary.main}08 100%)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background element */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "300px",
          height: "300px",
          background: `radial-gradient(circle, ${theme.palette.primary.main}15 0%, transparent 70%)`,
          borderRadius: "50%",
          transform: "translate(50%, -50%)",
          zIndex: 0,
        }}
      />
      
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        sx={{
          px: { xs: 5, md: 10 },
          maxWidth: "1400px",
          margin: "0 auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography
          component={motion.h3}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          variant="h3"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "2rem", md: "3rem" },
            mb: 2,
            color: theme.palette.primary.main,
            lineHeight: 1.2,
          }}
        >
          ¿Listo para llevar tu proyecto al siguiente nivel?
        </Typography>

        <Typography
          component={motion.p}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", md: "1.25rem" },
            maxWidth: "800px",
            mb: 5,
            color: theme.palette.text.primary,
            lineHeight: 1.6,
          }}
        >
          En INSIIC, conectamos tecnología con ambientes seguros. Da el siguiente paso con nosotros y transforma tu espacio industrial.
        </Typography>

        {/* Button container */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            maxWidth: "400px",
          }}
        >
          <EmailButton
            message={contactMessage}
            subject="Consulta - Llevar mi Proyecto al Siguiente Nivel"
            buttonText="CONTÁCTANOS"
            variant="gradient"
            size="large"
            showIcon={true}
            sx={{
              minWidth: { xs: "200px", sm: "180px" },
              flex: { sm: 1 },
            }}
          />
        </Box>

        {/* Subtle additional information */}
        <Typography
          component={motion.p}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          variant="body2"
          sx={{
            mt: 4,
            color: theme.palette.text.secondary,
            fontSize: "0.9rem",
            fontStyle: "italic",
          }}
        >
          Respuesta garantizada en menos de 48 horas
        </Typography>
      </Box>
    </Box>
  );
};

export default CallToAction;
