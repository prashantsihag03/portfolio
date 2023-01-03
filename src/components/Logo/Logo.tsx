import React, { useEffect, useState } from "react";
import lightBgLogo from "../../assets/icons/lightBgLogo.svg";
import darkBgLogo from "../../assets/icons/darkBgLogo.svg";
import { Link, Slide, SxProps } from "@mui/material";
import { Theme } from "@mui/system";

const linkStyles: SxProps<Theme> = {
  position: 'absolute',
  top: '20px',
  left: '20px',
  border: '2px solid transparent',
  borderRadius: '100vw',
  width: '3rem',
  height: '3rem',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'all 0.5s linear',

  "&:hover": {
    backgroundColor: 'action.hover',
    borderColor: 'secondary.main',
    cursor: 'pointer',
    padding: '0.2rem',
  },
}

interface LogoProps {
  delayInMs: number,
  darkMode: boolean,
}

const Logo: React.FC<LogoProps> = ({delayInMs, darkMode}: LogoProps) => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, delayInMs);
  }, []);
  
    return (
      <Slide in={show} direction="right">
        <Link sx={linkStyles} href="/">
          <img style={{width: "100%", backgroundColor: 'primary.dark'}} src={darkMode ? darkBgLogo : lightBgLogo} />
        </Link>
      </Slide>
    );
}

export default Logo;