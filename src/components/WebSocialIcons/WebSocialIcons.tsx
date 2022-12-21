import { Box, Slide, SxProps, useMediaQuery } from "@mui/material";
import { Theme } from "@mui/system";
import React from "react";
import QuickIconData from "../../Data/QuickIcons";
import Socials from "../Socials";

const boxStyle: SxProps<Theme> = {
  position: "absolute",
  backgroundColor: "var(--logoBg)",
  top: "20px",
  right: "0px",
  paddingRight: "20px",
  borderRadius: "0.5em 0em 0em 0.5em",

  ["@media only screen and (max-width: 800px)"]: {
    display: "none",
  }
}

const WebSocialIcons = () => {
    const [showSocialIcons, setShowSocialIcons] = React.useState<boolean>(false);
    
    React.useEffect(() => {
        setTimeout(() => {
            setShowSocialIcons(true);
        }, 500);
    }, []);

    return (
      <Slide in={showSocialIcons} direction={"left"}>
        <Box component="div" sx={boxStyle} data-testid="social-icons">
          <Socials items={QuickIconData}/>
        </Box>
      </Slide>
    );
};

export default WebSocialIcons;