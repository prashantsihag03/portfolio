import * as React from "react";
import StyledComponents from "styled-components";
import QuickIconData from "../../Data/QuickIcons";
import About from "../About";
import useIntersectionObserver from "../App/useIntersectionObserver";
import Footer from "../Footer";
import QuickBioIcons from "../QuickBioIcons";

const ContainerDiv = StyledComponents.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 0.5em;
  background: "transparent";
  margin-top: 10vh;
`;

const MobileOnly = StyledComponents.div`
  @media only screen and (min-width: 800px) {
    display: none;
  }
`;

const SocialIcons = StyledComponents.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const SocialIconsContainer = StyledComponents.div``;

interface ClosingBlock {
  observer: IntersectionObserver,
}

const ClosingBlock: React.FC<ClosingBlock> = ({observer}: ClosingBlock) => {
  const {setElement} = useIntersectionObserver(observer);

  return (
    <ContainerDiv id="about" className="closingBlock" ref={(node) => {setElement(node)}}>
      <About heading="Something more about me">
        {`I have been fascinated by what one can do with computers ever since I
        got first introduced to programming in the year 10 of my school.`}
        <br /> <br />
        {`Currently, I work as a Software developer at Alex Solutions where I help
        in designing, architecting, developing, documenting, and maintaining
        efficient and performant software by effectively communicating and
        utilising tools and technologies such as Java, SpringBoot, Play
        Framework, React, Redux, ElasticSearch, Gitlab, Jenkins, RabbitMQ, AWS,
        and many more.`}
        <br /> <br />
        {`If you are a fellow software developer or anyone who is just as curious 
        about technology if not more and wants to collaborate on anything, 
        or a recruiter looking for suitable candidate, or just wants to network, please feel free to reach out to me.`}
        <br /> <br />
        {`Thank you for visiting. Have a great day !`}
      </About>
      <MobileOnly>
        <SocialIcons>
          <SocialIconsContainer>
            <QuickBioIcons items={QuickIconData}/>
          </SocialIconsContainer>
        </SocialIcons>
      </MobileOnly>
      <Footer content="© 2022 Prashant Sihag. All rights reserved." />
    </ContainerDiv>
  );
};

export default ClosingBlock;
