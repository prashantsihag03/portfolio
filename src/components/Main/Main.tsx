import { Box, Divider, SxProps } from "@mui/material";
import { Theme } from "@mui/system";
import React from "react";
import Blogs from "../Blogs";
import QuickBioInfo from "../QuickBioInfo";
import About from "../About";

const mainStyles: SxProps<Theme> = {
  marginLeft: "10%",
  marginRight: "10%",
  ["@media only screen and (max-width: 800px)"]: {
    marginLeft: "5%",
    marginRight: "5%",
  },
};

const sectionDivider: SxProps<Theme> = {
  margin: "30px 20%",
};

const Main = () => {
  return (
    <Box sx={{ maxWidth: "1499px", margin: "auto" }}>
      <Box component="main" sx={mainStyles}>
        <QuickBioInfo />
        <Divider light variant="middle" sx={sectionDivider} />
        <About />
        <Divider light variant="middle" sx={sectionDivider} />
        <Blogs />
      </Box>
    </Box>
  );
};

export default Main;
