import React from "react";
import styled from 'styled-components';
import QuickBioIcons from "../QuickBioIcons";
import QuickBioInfo from "../QuickBioInfo";
import linkedIcon from "../../../resources/images/linkedinIcon.svg";
import GitHubIcon from "../../../resources/images/githubIcon.svg";
import MediumIcon from "../../../resources/images/mediumIcon.svg";

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 80vw;
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

const Header = () => {    
    const QuickIcons = [
        {
            title: "My linkedIn Profile",
            href: "https://www.linkedin.com/in/prashantsihag",
            iconSvg: linkedIcon,
            imgAlt: "LinkedIn Icon",
        },
        {
            title: "My GitHub Profile",
            href: "https://github.com/prashantsihag03",
            iconSvg: GitHubIcon,
            imgAlt: "GitHub Icon",
        },
        {
            title: "My Medium Profile",
            href: "https://medium.com/@prashant-sihag",
            iconSvg: MediumIcon,
            imgAlt: "Medium Icon",
        }
    ]
    return (
        <HeaderContainer className="quick-bio-flexcontainer" >
            <QuickBioInfo />
            <QuickBioIcons items={QuickIcons}/>
        </HeaderContainer>
    );
}

export default Header;