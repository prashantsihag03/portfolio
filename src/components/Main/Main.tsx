import { Box, SxProps } from "@mui/material";
import { Theme } from "@mui/system";
import React from "react";
import Blogs from "../Blogs";
import ClosingBlock from "../ClosingBlock";
import QuickBioInfo from "../QuickBioInfo";

const mainStyles: SxProps<Theme> = {
  marginLeft: "10%",
  marginRight: "10%",
  ["@media only screen and (max-width: 800px)"]: {
    marginLeft: "5%",
    marginRight: "5%",
  }
};

const Main = () => {
    return (
        <Box sx={{maxWidth: "1499px", margin: 'auto'}}>
          <Box component="main" sx={mainStyles}>
            <QuickBioInfo />
            <Blogs />
            <ClosingBlock />
          </Box>
        </Box>
    )
}

export default Main;