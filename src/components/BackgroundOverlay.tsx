import { Box } from "@mui/material";
import Logo from "../assets/logo.jpeg";

const BackgroundOverlay = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        /* background: "linear-gradient(135deg, #1a237e 0%, #757575 100%)", */
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.3,
      }}
    >
      <Box
        component="img"
        src={Logo}
        alt="Logo"
        sx={{
          width: "200px",
          height: "auto",
          filter: "grayscale(100%)",
          opacity: 0.3,
        }}
      />
    </Box>
  );
};

export default BackgroundOverlay;
