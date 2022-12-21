import { Fade } from '@mui/material';
import * as React from 'react';
import StyledComponents from 'styled-components';
import MenuButton from '../MenuButton';

const ContainerDiv = StyledComponents.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: row;
  font-family: var(--fontFamily);
  justify-content: left;
  align-items: center;
  color: var(--color);
  text-align: left;
`;

const Greeting = StyledComponents.div`
  color: var(--primary);
  font-family: var(--fontFamily);
  font-size: 1.2em;
  letter-spacing: 1pt;
`;

const Name = StyledComponents.h1`
  font-size: clamp(40px, 5vw, 60px);
`;
 
const Brief = StyledComponents.div`
  word-wrap: normal;
  font-size: clamp(40px, 5vw, 60px);;
  font-family: var(--fontFamily);
  color: grey;
  font-weight: "bolder";
`;

const QuickAbout = StyledComponents.div`
  color: var(--text);
  font-size: 1.2rem;
  font-family: var(--fontFamily);
  letter-spacing: 0.5pt;
  line-height: 1.5em;
  width: 70%;

  @media only screen and (max-width: 1000px) {
    width: 100%;
    font-size: 1rem;
  }
`;

const Highlight = StyledComponents.span`
  color: var(--primary);
  white-space: nowrap;
`;

const QuickActionContainer = StyledComponents.div`
  margin-top: 2em;
`;

const QuickAnchor = StyledComponents.a`
  &:hover {
    cursor: pointer;
  }
`;

const QuickBioInfo: React.FC = () => {
  return (
    <ContainerDiv className="quick-bio-info" id='intro'>
      <Fade in={true} style={{transitionDelay: "300ms"}}>
        <div>
          <Greeting>Hi, I am</Greeting>
          <Name>Prashant Sihag.</Name> 
          {/* <Brief> I solve problems on Web.</Brief><br/> */}
          <QuickAbout>I am a software developer specialising in developing and occasionally architecting full stack web applications. Currently, I'm helping <Highlight>Alex Solutions</Highlight> develop exceptional Metadata Management web apps.</QuickAbout>
          <QuickActionContainer>
            <QuickAnchor href='#blogs'>
              <MenuButton value='Check out my blogs' />
            </QuickAnchor>
          </QuickActionContainer>
        </div>
      </Fade>
    </ContainerDiv>
  );
}

export default QuickBioInfo;