import { ArrowUpwardOutlined } from "@mui/icons-material";
import * as React from "react";

const containerStyle: React.CSSProperties = {
  position: 'fixed',
  border: '1px solid var(--primary)',  
  backgroundColor: 'var(--primary)',
  borderRadius: '0.5em',
  cursor: 'pointer', 
  bottom: '3%',
  right: '3%',
  zIndex: 100000000000,        
}

const iconStyle: React.CSSProperties = {
  color: 'white',
  fontSize: '2em',
  fontWeight: 'bold',
}

interface ScrollToTopIconProps {
  onClick: any,
}

const ScrollToTopIcon:React.FC<ScrollToTopIconProps> = ({onClick}: ScrollToTopIconProps) => {
  return (
    <div style={containerStyle} onClick={onClick}>
      <ArrowUpwardOutlined style={iconStyle} fontSize={"medium"} />
    </div>
  );
};

export default ScrollToTopIcon;
