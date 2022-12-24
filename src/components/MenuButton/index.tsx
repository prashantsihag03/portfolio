import { Button } from "@mui/material";
import * as React from "react";

interface MenuButtonProps {
  onClick?: any,
  link?: string,
  value: string,
}

const MenuButton: React.FC<MenuButtonProps> = ({value, onClick, link}: MenuButtonProps) => {
  return (
    <Button 
      variant="outlined" 
      sx={{padding: '0.8rem 1rem', fontSize: '1.1rem'}}
      onClick={onClick}
      disableElevation
      color="secondary"
      size="large"
      href={link}
    >
      {value}
    </Button>
  );
};

MenuButton.defaultProps = {
  onClick: () => {},
}

export default MenuButton;
