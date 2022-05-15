import * as React from "react";
import StyledComponents from "styled-components";
import QuickBioIcons from "../QuickBioIcons";
import QuickBioInfo from "../QuickBioInfo";
import mediumIcon from "../../assets/images/mediumIcon.svg";
import gitHubIcon from "../../assets/images/githubIcon.svg";
import linkedInIcon from "../../assets/images/linkedinIcon.svg";

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
      iconSvg: linkedInIcon,
      imgAlt: "LinkedIn Icon",
    },
    {
      title: "My GitHub Profile",
      href: "https://github.com/prashantsihag03",
      iconSvg: gitHubIcon,
      imgAlt: "GitHub Icon",
    },
    {
      title: "My Medium Profile",
      href: "https://medium.com/@prashant-sihag",
      iconSvg: mediumIcon,
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
