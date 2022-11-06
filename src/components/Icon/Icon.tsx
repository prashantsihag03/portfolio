import * as React from "react";
import StyledComponents from 'styled-components';
import IconProp from "./type";

const Li = StyledComponents.li`
  list-style: none;
  width: 4em;
`;

const Img = StyledComponents.img`
  width: 80%;
  border: 4px solid transparent;
  border-radius: 50%;
  transition: all 0.5s linear;
`;

const A = StyledComponents.a`
  &:hover ${Img} {
    border-color: var(--primary);
  }
`;

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