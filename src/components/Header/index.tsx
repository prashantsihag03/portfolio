import * as React from "react";
import StyledComponents from "styled-components";
import QuickIconData from "../../Data/QuickIcons";
import QuickBioIcons from "../QuickBioIcons";
import QuickBioInfo from "../QuickBioInfo";

const HeaderContainer = StyledComponents.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  margin: auto;
  margin-top: 4vh;
  margin-bottom: 4vh;
  height: auto;

  @media only screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 8vh;
    margin-bottom: 5vh;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer className="quick-bio-flexcontainer">
      <QuickBioInfo />
      <QuickBioIcons items={QuickIconData} />
    </HeaderContainer>
  );
};

export default Header;
