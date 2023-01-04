import React from "react";
import { Box, SxProps } from "@mui/material";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Theme } from "@mui/system";

const arrowDownIconStyles: SxProps<Theme> = {
  animationName: 'bounce',
  WebkitAnimationTimingFunction: 'linear',
  animationTimingFunction: 'linear',
  WebkitAnimationDuration: '1s',
  animationDuration: '1s',
  WebkitAnimationIterationCount: 'infinite',
  animationIterationCount: 'infinite',
  color: "text.primary",
}

const BoxStyles: SxProps<Theme> = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  right: "1%",
  top: "90vh",

  ["@media only screen and (max-width: 600px)"]: {
    top: "80vh",
  }
};

const ScrollerGuide = () => {
    return (
      <Box component="div" sx={BoxStyles}>
        <KeyboardDoubleArrowDownIcon sx={arrowDownIconStyles} fontSize={"medium"} />
      </Box>
    )
}

export default ScrollerGuide;