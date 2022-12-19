import React from "react";
import logoSvg from "../../assets/icons/ps.svg";
import StyledComponents from "styled-components";
import { Link, SxProps } from "@mui/material";
import { Theme } from "@mui/system";

const Img = StyledComponents.img`
  width: 100%;
`;

const linkStyles: SxProps<Theme> = {
  position: 'absolute',
  top: '20px',
  left: '20px',
  border: 'none',
  borderRadius: '50%',
  width: '3rem',
  height: '3rem',
  padding: '0.1rem',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'all 0.5s linear',

  "&:hover": {
    backgroundColor: 'primary.main',
    cursor: 'pointer',
  },
}

const Logo: React.FC = () => {
    return (
      <Link sx={linkStyles} href="/">
        <Img src={logoSvg} />
      </Link>
    );
}

export default Logo;