import React from "react";
import { Box, SxProps } from "@mui/material";
import StyledComponents from "styled-components";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Theme } from "@mui/system";

const Scroller = StyledComponents(KeyboardDoubleArrowDownIcon)`
  animation-name: bounce;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
`;

const BoxStyles: SxProps<Theme> = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  right: "1%",
  top: "90vh",
  color: "primary.main",

  ["@media only screen and (max-width: 600px)"]: {
    top: "80vh",
    width: "100%",
  }
};

const ScrollerGuide = () => {
    return (
      <Box component="div" sx={BoxStyles}>
        <Scroller fontSize={"medium"}/>
      </Box>
    )
}

export default ScrollerGuide;