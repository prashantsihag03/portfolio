import { Fade, Link } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import StyledComponents from 'styled-components';
import useIntersectionObserver from '../App/useIntersectionObserver';
import MenuButton from '../MenuButton';

const ContainerDiv = StyledComponents.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: row;
  font-family: "Roboto Slab";
  justify-content: left;
  align-items: center;
  color: white;
  text-align: left;
`;

const Greeting = StyledComponents.div`
  color: var(--primary);
  font-family: "Roboto Slab";
  font-size: 1.2em;
  letter-spacing: 1pt;
`;

const Name = StyledComponents.h1`
  font-size: clamp(40px, 5vw, 60px);
  font-weight: "bolder";
  font-family: "Roboto Slab";
`;

const Brief = StyledComponents.div`
  word-wrap: normal;
  font-size: clamp(40px, 5vw, 60px);;
  font-family: "Roboto Slab";
  color: grey;
  font-weight: "bolder";
`;

const QuickAbout = StyledComponents.div`
  color: var(--light);
  font-size: 1.2em;
  font-family: "Roboto Slab";
  letter-spacing: 0.5pt;
  line-height: 1.5em;
  width: 70%;

  @media only screen and (max-width: 800px) {
    width: 100%;
    font-size: 0.9em;
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

interface QuickBioInfoProps {
  observer: IntersectionObserver;
}

const QuickBioInfo: React.FC<QuickBioInfoProps> = ({observer}: QuickBioInfoProps) => {
  const {setElement} = useIntersectionObserver(observer);

  return (
    <ContainerDiv ref={(node) => {setElement(node)}} className="quick-bio-info" id='intro'>
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