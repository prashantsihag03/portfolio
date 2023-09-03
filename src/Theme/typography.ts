import { Palette } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

// eslint-disable-next-line no-unused-vars
export const getTypographyTheme = (palette: Palette): TypographyOptions => {
  return {
    allVariants: {
      color: palette.text.primary,
      letterSpacing: "0.5pt",
      fontFamily:
        palette.mode === "light"
          ? '"Roboto Slab Regular", "Helvetica", -apple-system, system-ui, serif'
          : '"Roboto Slab Light", "Helvetica", -apple-system, system-ui, serif',
    },
    h2: {
      fontSize: "20px",
      ["@media only screen and (max-width: 900px)"]: {
        fontSize: "18px",
      },
    },
    h3: {
      fontSize: "18px",
      ["@media only screen and (max-width: 900px)"]: {
        fontSize: "16px",
      },
    },
    h5: {
      fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
    },
    subtitle1: {
      fontSize: "18px",
      ["@media only screen and (max-width: 900px)"]: {
        fontSize: "16px",
      },
    },
    subtitle2: {
      color: palette.text.secondary,
      fontSize: "16px",
      lineHeight: "1.5rem",
      ["@media only screen and (max-width: 900px)"]: {
        fontSize: "14px",
      },
    },
    body1: {
      color: palette.text.secondary,
      fontSize: "1rem",
    },
    body2: {
      fontSize: "clamp(40px, 5vw, 50px)",
      fontWeight: "bold",
      fontFamily: '"Roboto Slab Bold", -apple-system, system-ui, serif',
    },
  };
};
