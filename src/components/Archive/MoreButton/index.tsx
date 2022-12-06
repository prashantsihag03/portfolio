import * as React from "react";
import StyledComponents from 'styled-components';

const MoreButtonDiv = StyledComponents.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Myh4 = StyledComponents.h4`text-align: center;`;

const A = StyledComponents.a`
  padding: 0.2em;
  color: var(--secondary);
  border: 1px solid transparent;
  border-radius: 0.2em;
  border-bottom: 1px solid white;
  transition: all 0.5s linear;
  letter-spacing: 0.2em;

  &:hover {
    border: 1px solid white;
  }
`;

interface MoreButtonProps {
  link: string,
  content: string,
}

const MoreButton: React.FC<MoreButtonProps> = (props) => {
  return(
    <MoreButtonDiv>
      <Myh4>
        <A href={props.link} target="_blank" rel="noopener noreferrer nofollow">
          {props.content}
        </A>
      </Myh4>
    </MoreButtonDiv>
  );
}

export default MoreButton;