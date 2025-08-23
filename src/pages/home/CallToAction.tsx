import { Box, Typography, Button, useTheme } from "@mui/material";
import LINKS from "../../config/links";

const CallToAction = () => {
  const theme = useTheme();

  const handleClick = () => {
    window.location.href = LINKS.CONTACTO;
  };

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 8, md: 10 },
      }}
    >
      <Box
        sx={{
          px: { xs: 5, md: 10 },
          maxWidth: "1400px",
          margin: "0 auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "2rem", md: "3rem" },
            mb: 2,
            color: theme.palette.primary.main,
          }}
        >
          ¿Listo para llevar tu proyecto al siguiente nivel?
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", md: "1.25rem" },
            maxWidth: "800px",
            mb: 4,
            color: theme.palette.text.primary,
          }}
        >
          En INSIIC, conectamos tecnología con ambientes seguros. Da el siguiente paso con nosotros y transforma tu espacio industrial.
        </Typography>

        <Button
          variant="gradient"
          size="large"
          onClick={handleClick}
        >
          <span>CONTÁCTANOS</span>
        </Button>

      </Box>
    </Box>
  );
};

export default CallToAction;
