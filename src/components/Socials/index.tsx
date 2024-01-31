import { Box, SxProps } from "@mui/material";
import { Theme } from "@mui/system";
import * as React from "react";
import IconProp from "../Icon/type";
import LinkedInIcon from "../Icon/LinkedInIcon";
import GithubIcon from "../Icon/GithubIcon";
import MediumIcon from "../Icon/MediumIcon";
import CodepenIcon from "../Icon/CodepenIcon";

const boxStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  flexWrap: "wrap",
  width: "auto",
};

interface SocialsProps {
  items: IconProp[];
}

const Socials: React.FC<SocialsProps> = () => {
  return (
    <Box sx={boxStyles}>
      <LinkedInIcon href="https://www.linkedin.com/in/prashantsihag" />
      <GithubIcon href="https://github.com/prashantsihag03" />
      <MediumIcon href="https://medium.com/@prashant-sihag" />
      <CodepenIcon href="https://codepen.io/prashantsihag" />
    </Box>
  );
};

export default Socials;
