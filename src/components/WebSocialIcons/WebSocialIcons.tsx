import { Slide } from "@mui/material";
import React from "react";
import StyledComponents from "styled-components";
import QuickIconData from "../../Data/QuickIcons";
import Socials from "../Socials";

const WebOnly = StyledComponents.div`
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

const SocialIcons = StyledComponents.div`
  position: absolute;
  background-color: var(--logoBg);
  top: 20px;
  right: 0px;
  padding-right: 20px;
  border-radius: 0.5em 0em 0em 0.5em;
`;

const WebSocialIcons = () => {
    const [showSocialIcons, setShowSocialIcons] = React.useState<boolean>(false);
    
    React.useEffect(() => {
        setTimeout(() => {
            setShowSocialIcons(true);
        }, 500);
    }, []);

    return (
        <WebOnly>
          <Slide in={showSocialIcons} direction={"left"}>
            <SocialIcons data-testid="social-icons">
              <Socials items={QuickIconData}/>
            </SocialIcons>
          </Slide>
        </WebOnly>
    )
};

export default WebSocialIcons;