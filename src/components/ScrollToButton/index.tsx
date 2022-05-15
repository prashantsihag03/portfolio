import * as React from "react";
import StyledComponents from "styled-components";

const Button = StyledComponents.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: var(--background);
  border-radius: 0.5em;
  border: none;
  padding: 0.5em;
  bottom: 3%;
  right: 1%;
  cursor: pointer;
  border: 1px solid var(--themeColor);

  &:hover {
    background-color: #262626;
  }
`;

const Img = StyledComponents.img`
  width: 80%;
  max-width: 5em;
`;

const P = StyledComponents.p`
  font-size: 2em;
  color: var(--themeColor);
`;

interface ScrollToButtonProps {
  onClick: any,
  img?: string,
  text: string,
}

const ScrollToButton:React.FC<ScrollToButtonProps> = (scrollToButtonProps) => {
  return (
    <Button onClick={scrollToButtonProps.onClick}>
      {scrollToButtonProps.img ? <Img src={scrollToButtonProps.img} /> : <P> {scrollToButtonProps.text} </P>}
    </Button>
  );
};

export default ScrollToButton;
