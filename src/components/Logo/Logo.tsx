import React, { useEffect, useState } from "react";
import logoSvg from "../../assets/icons/ps.svg";
import { Link, Slide, SxProps } from "@mui/material";
import { Theme } from "@mui/system";

const linkStyles: SxProps<Theme> = {
  position: 'absolute',
  top: '20px',
  left: '0px',
  border: 'none',
  borderRadius: '0em 0.5em 0.5em 0em',
  backgroundColor: 'var(--logoBg)',
  width: '5rem',
  height: '3rem',
  padding: '0.3rem',
  paddingLeft: '20px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'all 0.5s linear',

  "&:hover": {
    backgroundColor: 'var(--lightHover)',
    cursor: 'pointer',
  },
}

interface LogoProps {
  delayInMs: number
}

const Logo: React.FC<LogoProps> = ({delayInMs}: LogoProps) => {
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(()=>{
      setShow(true);
    }, delayInMs);
  }, []);
  
    return (
      <Slide in={show} direction="right">
        <Link sx={linkStyles} href="/">
          <img style={{width: "100%"}} src={logoSvg} />
        </Link>
      </Slide>
    );
}

export default Logo;