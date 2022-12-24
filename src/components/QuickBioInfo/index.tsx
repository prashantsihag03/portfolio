import { Box, Fade, Typography } from '@mui/material';
import { SxProps, Theme } from '@mui/system';
import * as React from 'react';
import MenuButton from '../MenuButton';

const containerStyles: SxProps<Theme> = {
  display: "flex",
  width: "100%",
  height: "100vh",
  flexDirection: "row",
  justifyContent: "left",
  alignItems: "center",
  textAlign: "left",
};

const subContainerStyles: SxProps<Theme> = {
  display: "flex", 
  flexDirection: "column",
  width: "70%",
  ["@media only screen and (max-width: 1000px)"]: {
    width: "100%",
  }
};

const greetingStyles: SxProps<Theme> = {
  color: "secondary.main",
  fontSize: "1.2rem",
};
 
const quickAboutStyles: SxProps<Theme> = {
  color: "text.secondary",
  fontSize: "1.2rem",

  ["@media only screen and (max-width: 1000px)"]: {
    fontSize: "1rem",
  }
};

const highlight: SxProps<Theme> = {
  color: "secondary.main",
  whiteSpace: "nowrap",
  fontSize: "1.2rem",

  ["@media only screen and (max-width: 1000px)"]: {
    fontSize: "1rem",
  }
};

const QuickBioInfo: React.FC = () => {
  return (
    <Fade in={true} appear timeout={300}>
      <Box sx={containerStyles} className="quick-bio-info" id='intro'>
        <Box sx={subContainerStyles}>
          <Box component="p">
            <Typography variant='body1' component={"span"} sx={greetingStyles}>
              Hi, I am
            </Typography> 
            <br />
            <Typography variant='body2' component={"span"}>
              Prashant Sihag.
            </Typography> 
            <br />
            <Typography variant='body1' component={"span"} sx={quickAboutStyles}>
              I am a software developer specialising in developing and occasionally architecting full stack web applications. 
              Currently, I'm helping <Typography variant='body1' component={"span"} sx={highlight}>Alex Solutions</Typography> develop exceptional Metadata Management web apps.
            </Typography>
          </Box>
          <Box sx={{marginTop: "2em"}}>
            <MenuButton value='Check out my blogs' link='#blogs'/>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
}

export default QuickBioInfo;