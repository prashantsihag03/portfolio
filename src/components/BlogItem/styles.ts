import { SxProps } from "@mui/material";
import { Theme } from "@mui/system";

export const BoxStyles: SxProps<Theme> = {
  margin: "1%",
  boxSizing: "border-box",
  width: "48%",

  ["@media only screen and (max-width: 600px)"]: {
    margin: "0%",
    marginBottom: "1em",
    marginTop: "1em",
    width: "100%",
  },
};

export const cardStyles: SxProps<Theme> = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  backgroundColor: "background.default",
  padding: "2em 1em",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "transparent",
  ["@media only screen and (max-width: 1350px)"]: {
    maxWidth: "100%",
  },
};

export const cardMediaStyles: SxProps<Theme> = {
  opacity: 0.1,
  position: "absolute",
  top: "0",
  left: "0",
  objectFit: "cover",
};
