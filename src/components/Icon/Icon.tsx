import * as React from "react";
import StyledComponents from 'styled-components';
import IconProp from "./type";

const Li = StyledComponents.li`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  width: 3em;
  height: 3em;
`;

const Img = StyledComponents.img`
  width: 80%;
  border: 4px solid black;
  border-radius: 50%;
  transition: all 0.5s linear;
`;

const A = StyledComponents.a``;

const Icon: React.FC<IconProp> = ({ href, title, src, alt}: IconProp) => {
  return (
    <A href={href} target="_blank" title={title} rel="noopener noreferrer nofollow">
      <Li>
        <Img src={src} alt={alt} />
      </Li>
    </A>
  )
}

export default Icon;