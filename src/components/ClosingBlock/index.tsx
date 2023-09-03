import { Box, SxProps, useMediaQuery } from "@mui/material";
import { Theme } from "@mui/system";
import * as React from "react";
import QuickIconData from "../../Data/QuickIcons";
// import About from "../About";
import Socials from "../Socials";

const containerStyle: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-around",
  alignItems: "center",
  paddingBottom: "0.5em",
  background: "transparent",
  marginTop: "10vh",
};

const socialIconContainerStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
};

const ClosingBlock: React.FC = () => {
  const isMobile = useMediaQuery("only screen and (max-width: 800px)");

  return (
    <Box id="about" className="closingBlock" sx={containerStyle}>
      {isMobile ? (
        <Box sx={socialIconContainerStyles}>
          <Box>
            <Socials items={QuickIconData} />
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};

export default ClosingBlock;
