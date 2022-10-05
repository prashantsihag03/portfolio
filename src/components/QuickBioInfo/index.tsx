import * as React from 'react';
import StyledComponents from 'styled-components';

const ContainerDiv = StyledComponents.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: left;

  @media only screen and (max-width: 800px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: white;
  }
`;

const Heading = StyledComponents.h1`
  @media only screen and (max-width: 800px) {
    text-align: center;
  }
`;

const Span = StyledComponents.span`
  color: var(--primary);
  word-wrap: normal;
`;

const QuickBioInfo: React.FC = () => {
  return (
    <ContainerDiv className="quick-bio-info">
      <Heading>Hi, I&apos;m <br/>
        <Span>Prashant Sihag</Span>,<br/>
        Software Developer.
      </Heading>
    </ContainerDiv>
  );
}

export default QuickBioInfo;