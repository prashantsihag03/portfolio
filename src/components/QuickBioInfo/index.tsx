import { setRef } from '@mui/material';
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
  font-size: 4em;
  font-weight: "bolder";
  font-family: "Roboto Slab";

  @media only screen and (max-width: 800px) {
    font-size: 3em;
  }
`;

const Brief = StyledComponents.div`
  word-wrap: normal;
  font-size: 2.7em;
  font-family: "Roboto Slab";
  color: grey;
  font-weight: "bolder";

  @media only screen and (max-width: 800px) {
    font-size: 1.7em;
  }
`;

const QuickAbout = StyledComponents.div`
  color: grey;
  font-size: 1.2em;
  font-family: "Roboto Slab";
  letter-spacing: 1pt;
  line-height: 1.5em;
  width: 70%;

  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;

const Highlight = StyledComponents.span`
  color: var(--primary);
  white-space: nowrap;
`;

const QuickActionContainer = StyledComponents.div`
  margin-top: 2em;
`;

interface QuickBioInfoProps {
  observer: IntersectionObserver;
}

const QuickBioInfo: React.FC<QuickBioInfoProps> = ({observer}: QuickBioInfoProps) => {
  const {setElement} = useIntersectionObserver(observer);

  return (
    <ContainerDiv ref={(node) => {setElement(node)}} className="quick-bio-info" id='intro'>
      <div>
        <Greeting>Hi, I am</Greeting>
        <Name>Prashant Sihag.</Name> 
        {/* <Brief> I solve problems on Web.</Brief><br/> */}
        <QuickAbout>I am a software developer specialising in developing and occasionally architecting full stack web applications. Currently, I'm helping <Highlight>Alex Solutions</Highlight> develop exceptional Metadata Management web apps.</QuickAbout>
        <QuickActionContainer>
          <a href='#blogs'>
          <MenuButton value='Check out my blogs' />
          </a>
        </QuickActionContainer>
      </div>
    </ContainerDiv>
  );
}

export default QuickBioInfo;