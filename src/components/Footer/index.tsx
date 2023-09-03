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
  fontSize: "13px",
};

const highlight: React.CSSProperties = {
  color: "whitesmoke",
};

const Footer: React.FC = () => {
  return (
    <Typography component="p" sx={typographyStyles}>
      Coded in <span style={highlight}>Visual Studio Code</span> by yours truly.
      Built with
      <span style={highlight}> React</span> and
      <span style={highlight}> Typescript</span>, deployed with
      <span style={highlight}> Netlify</span>.
    </Typography>
  );
};

export default Footer;
