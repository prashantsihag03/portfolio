import * as React from "react";
import { Box, Fade, Typography, useMediaQuery } from "@mui/material";
import { containerStyles, subContainerStyles } from "./styles";
import Socials from "../Socials";
import QuickIconData from "../../Data/QuickIcons";

/**
 * Component that provides Quick Biographical Information including some quick call to actions for users.
 */
const QuickBioInfo: React.FC = () => {
  const isLightMode = useMediaQuery("(prefers-color-scheme: light)");

  return (
    <Fade in={true} appear timeout={300}>
      <Box sx={containerStyles} className="quick-bio-info" id="intro">
        <Box sx={subContainerStyles}>
          <Box component="p">
            <Typography variant="body2" component={"span"}>
              Prashant Sihag
            </Typography>
            <br />
            <Typography
              variant="subtitle1"
              component={"span"}
              sx={{
                color: isLightMode ? "white" : "secondary.main",
                backgroundColor: isLightMode ? "secondary.main" : "none",
              }}
            >
              Software engineer at Alex Solutions.
            </Typography>
            <br />
            <Typography variant="subtitle2" component={"span"}>
              Developing, maintaining, and architecting full stack web apps and
              CI/CD pipelines.
            </Typography>
          </Box>
          <Box sx={{ marginTop: "1em", display: "flex", alignItems: "center" }}>
            <Socials items={QuickIconData} />
          </Box>
        </Box>
      </Box>
    </Fade>
  );
};

export default QuickBioInfo;
