/**
 * @file mui.d.ts
 * @brief This file is a TypeScript declaration file that extends the Material-UI theme.
 *
 * It adds a custom `gradient` variant to the `Button` component, allowing it to be used throughout the application.
 */

// src/theme/mui.d.ts
import "@mui/material/Button";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    gradient: true; // <-- TypeScript now recognizes this
  }
}