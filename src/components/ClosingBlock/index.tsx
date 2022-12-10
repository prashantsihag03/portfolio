import * as React from "react";
import StyledComponents from "styled-components";
import QuickIconData from "../../Data/QuickIcons";
import About from "../About";
import Footer from "../Footer";
import Socials from "../Socials";

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

const ClosingBlock: React.FC = () => {

  return (
    <ContainerDiv id="about" className="closingBlock">
      <About />
      <MobileOnly>
        <SocialIcons>
          <SocialIconsContainer>
            <Socials items={QuickIconData}/>
          </SocialIconsContainer>
        </SocialIcons>
      </MobileOnly>
    </ContainerDiv>
  );
};

export default ClosingBlock;
