import { SxProps } from "@mui/material";
import { Theme } from "@mui/system";

export const containerStyles: SxProps<Theme> = {
  display: "flex",
  width: "100%",
  paddingTop: "5vh",
  flexDirection: "row",
  justifyContent: "left",
  alignItems: "center",
  textAlign: "left",
};

export const subContainerStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  width: "80%",
  ["@media only screen and (max-width: 1000px)"]: {
    width: "100%",
  },
};
