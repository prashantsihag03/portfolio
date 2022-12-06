import * as React from "react";
import StyledComponents from "styled-components";

const StyledFooter = StyledComponents.footer`
  display: block;
  width: 100%;
  margin: auto;
  text-align: center;
  padding: 0.1em;
  color: white;
  font-size: 1em;
  letter-spacing: 0.2em;
  padding-bottom: 1.5em;
  margin-top: 5vh;
  border-top: 1px solid white;
`;

const Footer: React.FC<{content: string}> = (props) => {
  return <StyledFooter> {props.content} </StyledFooter>;
};

export default Footer;
