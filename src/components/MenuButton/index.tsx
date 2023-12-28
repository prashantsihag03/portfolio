import { Button } from "@mui/material";
import * as React from "react";

interface MenuButtonProps {
  onClick?: any;
  link?: string;
  value: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({
  value,
  onClick,
  link,
}: MenuButtonProps) => {
  return (
    <Button
      variant="outlined"
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
};

export default MenuButton;
