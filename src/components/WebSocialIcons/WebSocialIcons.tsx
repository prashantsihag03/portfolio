import { Box, Slide, SxProps, useMediaQuery, Zoom } from "@mui/material";
import { Theme } from "@mui/system";
import React from "react";
import QuickIconData from "../../Data/QuickIcons";
import Socials from "../Socials";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { NoEncryption } from "@mui/icons-material";

const boxStyle: SxProps<Theme> = {
  position: "absolute",
  top: "20px",
  right: "0px",
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}

const displayModeBoxStyle: SxProps<Theme> = {
  height: '3em', 
  width: '3rem', 
  paddingRight: "20px", 
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center', 
  border: 'none',
  borderRightColor: 'primary.light', 
  borderRightStyle: 'solid', 
  borderRightWidth: '1px',
  ['@media only screen and (max-width: 800px)']: {
    borderRight: 'none',
  }
}

const lightModeIconStyle: SxProps<Theme> = {
  color: 'primary.light', 
  '&:hover': {
    cursor: 'pointer'
  }
}

const darkModeIconStyle: SxProps<Theme> = {
  color: 'primary.dark', 
  '&:hover': {
    cursor: 'pointer'
  }
}

const socialIconsContainerStyle: SxProps<Theme> = {
  backgroundColor: "primary.dark", 
  paddingRight: "20px", 
  borderRadius: "0.3em 0em 0em 0.3em"
};

interface IconHeaderProps {
  onClick?: () => void;
  darkMode: boolean;
}

const WebSocialIcons = ({onClick, darkMode}:IconHeaderProps) => {
    const [showSocialIcons, setShowSocialIcons] = React.useState<boolean>(false);
    const isMobile = useMediaQuery("only screen and (max-width: 800px)");
    
    React.useEffect(() => {
      setTimeout(() => {
          setShowSocialIcons(true);
      }, 500);
    }, []);

    return (
      <Slide in={showSocialIcons} direction="left">
        <Box sx={boxStyle} data-testid="social-icons">
          <Box sx={displayModeBoxStyle}>
            {darkMode ? (
              <Zoom in mountOnEnter unmountOnExit>
                  <LightModeIcon titleAccess="Switch to light mode" onClick={onClick ? onClick : ()=>{}} fontSize="medium" sx={lightModeIconStyle} />
              </Zoom>
            ) : (
              <Zoom in mountOnEnter unmountOnExit>
                <DarkModeIcon titleAccess="Switch to dark mode" onClick={onClick ? onClick : ()=>{}} fontSize="medium" color="secondary" sx={darkModeIconStyle} />
              </Zoom>
            )}
          </Box>
          <Box sx={socialIconsContainerStyle}>
            { !isMobile ? <Socials items={QuickIconData}/> : null }
          </Box>
        </Box>
      </Slide>
    );
};

export default WebSocialIcons;