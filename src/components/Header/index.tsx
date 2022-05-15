import * as React from "react";
import StyledComponents from "styled-components";
import QuickBioIcons from "../QuickBioIcons";
import QuickBioInfo from "../QuickBioInfo";
// import "../../../resources/images/linkedinIcon.svg";
// import "../../../resources/images/githubIcon.svg";
// import "../../../resources/images/mediumIcon.svg";

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
  const QuickIcons = [
    {
      title: "My linkedIn Profile",
      href: "https://www.linkedin.com/in/prashantsihag",
      iconSvg: "../../../resources/images/linkedinIcon.svg",
      imgAlt: "LinkedIn Icon",
    },
    {
      title: "My GitHub Profile",
      href: "https://github.com/prashantsihag03",
      iconSvg: "../../../resources/images/githubIcon.svg",
      imgAlt: "GitHub Icon",
    },
    {
      title: "My Medium Profile",
      href: "https://medium.com/@prashant-sihag",
      iconSvg: "../../../resources/images/mediumIcon.svg",
      imgAlt: "Medium Icon",
    },
  ];

  return (
    <HeaderContainer className="quick-bio-flexcontainer">
      <QuickBioInfo />
      <QuickBioIcons items={QuickIcons} />
    </HeaderContainer>
  );
};

export default Header;
