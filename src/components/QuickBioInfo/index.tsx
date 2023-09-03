import { Box, Fade, Typography } from "@mui/material";
import * as React from "react";
import MenuButton from "../MenuButton";
import { containerStyles, subContainerStyles } from "./styles";

/**
 * Component that provides Quick Biographical Information including some quick call to actions for users.
 */
const QuickBioInfo: React.FC = () => {
  return (
    <Fade in={true} appear timeout={300}>
      <Box sx={containerStyles} className="quick-bio-info" id="intro">
        <Box sx={subContainerStyles}>
          <Box component="p">
            {/* <Typography variant='subtitle2' component={"span"}>
              Hi, I&apos;m
            </Typography> 
            <br /> */}
            <Typography variant="body2" component={"span"}>
              Prashant Sihag
            </Typography>
            <br />
            {/* <Typography variant='subtitle1' component={"span"}>
              I am a software developer specialising in developing and occasionally architecting full stack web applications. 
              Currently, I&apos;m helping <Typography variant='subtitle2' component={"span"}>Alex Solutions</Typography> develop exceptional Metadata Management web apps.
            </Typography> */}
            <Typography variant="subtitle1" component={"span"}>
              Software engineer at
              <Typography variant="subtitle2" component={"span"}>
                Alex Solutions
              </Typography>
              .
              <br />
              Developing, maintaining, and architecting full stack web apps and
              CI/CD pipelines.
            </Typography>
          </Box>
          <Box sx={{ marginTop: "2em" }}>
            <MenuButton value="Check out my blogs" link="#blogs" />
          </Box>
        </Box>
      </Box>
    </Fade>
  );
};

export default QuickBioInfo;
