import { SxProps, Typography } from "@mui/material";
import { Theme } from "@mui/system";
import * as React from "react";

const typographyStyles: SxProps<Theme> = {
  display: "block",
  width: "100%",
  margin: "auto",
  textAlign: "center",
  padding: "0.1em",
  paddingBottom: "1.5em",
  marginTop: "5vh",
}

const Footer: React.FC = () => {
  return (
    <Typography component="p" sx={typographyStyles}>
      © 2022 Prashant Sihag. All rights reserved.
    </Typography>
  );
};

export default Footer;
