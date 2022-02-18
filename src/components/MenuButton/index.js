import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const DefaultButtonStyled = styled.button`
  padding: 0.2em 1.5em;
  margin: 0.25em 0.5em;
  font-size: 1.3em;
  font-family: "Roboto Slab", serif;
  font-weight: bold;
  border: 1px solid white;
  border-radius: 0.2em;
  background-color: var(--background);
  color: white;
  transition-property: background-color, color;
  transition-duration: 0.3s, 0.3s;
  transition-timing-function: ease-in-out;
  width: 30%;

  @media only screen and (max-width: 800px) {
    margin: 0.25em 0.5em;
    padding: 0.8em 1.5em;
    width: 100%;
    font-size: 1em;
  }

  &:hover {
    cursor: pointer;
    background-color: var(--themeColor);
    border-color: var(--themeColor);
  }
`;

const MenuButton = (props) => {
  // apply custom stylings if any
  const Button = props.customStyle
    ? styled(DefaultButtonStyled)`
        ${props.customStyle}
      `
    : DefaultButtonStyled;

  const scrollTo = () => {
    window.scrollTo({
      top: props.onClickScrollTo.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <Button onClick={props.onClickScrollTo ? scrollTo : null}>
      {props.value}
    </Button>
  );
};

MenuButton.propTypes = {
  value: propTypes.string.isRequired,
  onClickScrollTo: propTypes.object,
  customStyle: propTypes.any,
};

export default MenuButton;
