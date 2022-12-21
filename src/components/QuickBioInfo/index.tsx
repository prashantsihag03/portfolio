import { Box, Fade, Link, Typography } from '@mui/material';
import { SxProps, Theme } from '@mui/system';
import * as React from 'react';
import MenuButton from '../MenuButton';

const containerStyles: SxProps<Theme> = {
  display: "flex",
  width: "100%",
  height: "100vh",
  flexDirection: "row",
  fontFamily: "var(--fontFamily)",
  justifyContent: "left",
  alignItems: "center",
  color: "var(--color)",
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
  color: "var(--primary)",
  fontFamily: "var(--fontFamily)",
  fontSize: "1.2rem",
  letterSpacing: "1pt",
};
 
const quickAboutStyles: SxProps<Theme> = {
  color: "var(--text)",
  fontSize: "1.2rem",
  fontFamily: "var(--fontFamily)",
  lineHeight: "1.5em",
  letterSpacing: "0.5pt",

  ["@media only screen and (max-width: 1000px)"]: {
    fontSize: "1rem",
  }
};

const highlight: SxProps<Theme> = {
  color: "var(--primary)",
  whiteSpace: "nowrap",
  fontFamily: "var(--fontFamily)",
  fontSize: "1.2rem",
  lineHeight: "1.5em",

  ["@media only screen and (max-width: 1000px)"]: {
    fontSize: "1rem",
  }
};

const QuickBioInfo: React.FC = () => {
  return (
    <Fade in={true} appear timeout={300}>
      <Box component="div" sx={containerStyles} className="quick-bio-info" id='intro'>
        <Box component="div" sx={subContainerStyles}>
          <Box component="p">
            <Typography component="span" sx={greetingStyles}>
              Hi, I am
            </Typography> 
            <br />
            <Typography component="span" sx={{fontSize: "clamp(40px, 5vw, 60px)", fontFamily: "Roboto Slab Bold",}}>
              Prashant Sihag.
            </Typography> 
            <br />
            <Typography component="span" sx={quickAboutStyles}>
              I am a software developer specialising in developing and occasionally architecting full stack web applications. 
              Currently, I'm helping <Typography component="span" sx={highlight}>Alex Solutions</Typography> develop exceptional Metadata Management web apps.
            </Typography>
          </Box>
          <Box component="div" sx={{marginTop: "2em"}}>
            <Link href='#blogs' sx={{"&:hover": { cursor: "pointer"}}}>
              <MenuButton value='Check out my blogs' />
            </Link>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
}

export default QuickBioInfo;