import { Components } from "@mui/material";
import { Theme } from "@mui/system";

export const getComponentsTheme = (): Components<Omit<Theme, "components">> => {
  return {
    MuiButton: {
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            textTransform: "none",
            padding: "0.6rem 0.8rem",
            fontSize: "15px",
            ["@media only screen and (max-width: 900px)"]: {
              fontSize: "13px",
              padding: "0.3rem 0.5rem",
            },
          },
        },
      ],
    },
    MuiLink: {
      styleOverrides: {
        root: { textDecoration: "none" },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          "&:hover": {
            cursor: "pointer",
          },
        },
      },
    },
  };
};
