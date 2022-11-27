import * as React from "react";
import StyledComponents from "styled-components";

const DefaultButtonStyled = StyledComponents.button`
  padding: 0.8em 1em;
  font-size: 1.2em;
  font-family: "Roboto Slab", serif;
  letter-spacing: 1pt;
  border: 1px solid var(--primary);
  border-radius: 0.2em;
  background: transparent;
  color: var(--primary);
  transition-property: background-color;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;

  @media only screen and (max-width: 800px) {
    font-size: 1em;
  }

  &:hover {
    cursor: pointer;
    background-color: rgba(128, 128, 128, 0.2);
  }
`;

interface MenuButtonProps {
  onClick?: any,
  value: string,
}

const MenuButton: React.FC<MenuButtonProps> = (props) => {
  return (
    <DefaultButtonStyled onClick={props.onClick}>
      {props.value}
    </DefaultButtonStyled>
  );
};

MenuButton.defaultProps = {
  onClick: () => {},
}

export default MenuButton;
