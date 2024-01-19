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
      main: mode === "light" ? "#02B08F" : "#4AFFDD",
      light: "#02B08F",
      dark: "#4AFFDD",
    },
    text: {
      primary: mode === "light" ? "#000000" : "#FFF",
      secondary: mode === "light" ? "#1a1a1acc" : "#c5c5c5",
    },
    background: {
      default: mode === "light" ? "#f9f9f9" : "#000000",
      paper: mode === "light" ? "#4affdd59" : "#4affdd21",
    },
    action: {
      active: "#FFF",
      hover: "rgba(128, 128, 128, 0.2)",
    },
  };
};
