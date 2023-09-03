import { SxProps, Typography } from "@mui/material";
import { Theme } from "@mui/system";
import * as React from "react";

const typographyStyles: SxProps<Theme> = {
  display: "block",
  width: "100%",
  margin: "auto",
  textAlign: "center",
  paddingBottom: "1.5em",
  marginTop: "5vh",
};

const Footer: React.FC = () => {
  return (
    <Typography variant="subtitle2" component="p" sx={typographyStyles}>
      Coded in Visual Studio Code by yours truly.
      <br />
      Built with React and Typescript, deployed with Netlify.
    </Typography>
  );
};

export default Footer;
