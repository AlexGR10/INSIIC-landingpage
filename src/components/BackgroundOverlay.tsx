/**
 * @file BackgroundOverlay.tsx
 * @brief This component renders a background overlay with a grayscale logo.
 *
 * The overlay is fixed to the viewport and positioned behind all other content.
 * It uses Material-UI's Box component for layout and styling.
 */

import { Box } from "@mui/material";
import Logo from "../assets/logo.jpeg";

/**
 * @function BackgroundOverlay
 * @brief A functional component that renders a fixed background overlay.
 *
 * @returns {JSX.Element} The rendered background overlay component.
 */
const BackgroundOverlay = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1, // Ensures the overlay is in the background
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
          filter: "grayscale(100%)", // Applies a grayscale filter to the logo
          opacity: 0.3,
        }}
      />
    </Box>
  );
};

export default BackgroundOverlay;