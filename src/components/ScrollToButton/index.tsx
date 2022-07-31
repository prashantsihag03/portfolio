import { ArrowUpwardOutlined } from "@mui/icons-material";
import * as React from "react";

const containerStyle: React.CSSProperties = {
  position: 'fixed',
  padding: '0.5em 0.4em',
  border: '1px solid var(--highlightColor)',  
  backgroundColor: 'white',
  borderRadius: '50%',
  cursor: 'pointer', 
  bottom: '3%',
  right: '3%',
  zIndex: 100000000000,        
}

const iconStyle: React.CSSProperties = {
  color: 'var(--highlightColor)',
  fontSize: '2em',
  fontWeight: 'bold',
}

interface ScrollToTopIconProps {
  onClick: any,
}

const ScrollToTopIcon:React.FC<ScrollToTopIconProps> = ({onClick}: ScrollToTopIconProps) => {
  return (
    <div style={containerStyle} onClick={onClick}>
      <ArrowUpwardOutlined style={iconStyle} />
    </div>
  );
};

export default ScrollToTopIcon;
