import { PaletteOptions } from "@mui/material";
import { DisplayMode } from "../types";

export const getPaletteTheme = (mode: DisplayMode): PaletteOptions => {
  return {
    mode: mode,
    primary: {
      main: mode === "light" ? "#101010" : "#f9f9f9",
      light: "#101010",
      dark: "#f9f9f9",
    },
    secondary: {
      main: mode === "light" ? "#4AFFDD" : "#4AFFDD",
      light: "#4AFFDD",
      dark: "#4AFFDD",
    },
    text: {
      primary: mode === "light" ? "#000000" : "#FFF",
      secondary: mode === "light" ? "#1a1a1acc" : "#c5c5c5",
    },
    background: {
      default: mode === "light" ? "#f9f9f9" : "#000000",
      paper: mode === "light" ? "#f9f9f9" : "#4AFFDD",
    },
    action: {
      active: "#FFF",
      hover: "rgba(128, 128, 128, 0.2)",
    },
  };
};
