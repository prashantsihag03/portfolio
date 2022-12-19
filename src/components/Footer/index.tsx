import { SxProps, Typography } from "@mui/material";
import { Theme } from "@mui/system";
import * as React from "react";

const typographyStyles: SxProps<Theme> = {
  display: "block",
  width: "100%",
  margin: "auto",
  textAlign: "center",
  padding: "0.1em",
  color: "white",
  fontSize: "1rem",
  letterSpacing: "0.5pt",
  paddingBottom: "1.5em",
  marginTop: "5vh",
  borderTop: "1px solid var(--heading)",
}

const Footer: React.FC = () => {
  return (
    <Typography component="p" sx={typographyStyles}>
      © 2022 Prashant Sihag. All rights reserved.
    </Typography>
  );
};

export default Footer;
