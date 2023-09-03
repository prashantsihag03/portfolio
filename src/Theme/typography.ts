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
      fontSize: "18px",
      ["@media only screen and (max-width: 900px)"]: {
        fontSize: "16px",
      },
    },
    h3: {
      fontSize: "16px",
      ["@media only screen and (max-width: 900px)"]: {
        fontSize: "15px",
      },
    },
    h5: {
      fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
    },
    subtitle1: {
      fontSize: "16px",
      ["@media only screen and (max-width: 900px)"]: {
        fontSize: "14px",
      },
    },
    subtitle2: {
      color: palette.text.secondary,
      fontSize: "14px",
      lineHeight: "1.5rem",
      ["@media only screen and (max-width: 900px)"]: {
        fontSize: "13px",
      },
    },
    body1: {
      color: palette.text.secondary,
      fontSize: "1rem",
    },
    body2: {
      fontSize: "clamp(30px, 5vw, 50px)",
      fontFamily: '"Roboto Slab Bold", -apple-system, system-ui, serif',
    },
  };
};
