import { Box, Link, SxProps, Theme, Typography } from "@mui/material";
import * as React from "react";
import StyledComponents from "styled-components";
import QuickIconData from "../../Data/QuickIcons";
import Blogs from "../Blogs";
import ClosingBlock from "../ClosingBlock";
import Socials from "../Socials";
import QuickBioInfo from "../QuickBioInfo";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import logoSvg from "../../assets/icons/ps.svg";
import Footer from "../Footer";

const Main = StyledComponents(Box)`
  margin-left: 10%;
  margin-right: 10%;
  @media only screen and (max-width: 800px) {
    margin-left: 5%;
    margin-right: 5%;
  }
`;

const LogoContainer = StyledComponents(Link)`
  border-radius: 50%;
  border: none;
  width: 3em;
  height: 3em;
  padding: 0.1em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: all 0.5s linear;
  position: absolute;
  top: 20px;
  left: 20px;

  &:hover {
    background-color: var(--lightHover);
    cursor: pointer;
  }
`;

const Img = StyledComponents.img`
  width: 100%;
`;

const SocialIcons = StyledComponents.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const WebOnly = StyledComponents.div`
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

const Scroller = StyledComponents(KeyboardDoubleArrowDownIcon)`
  animation-name: bounce;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
`;

const BoxStyles: SxProps<Theme> = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  right: "1%",
  top: "90vh",
  color: "white",

  ["@media only screen and (max-width: 600px)"]: {
    top: "80vh",
    width: "100%",
  }
}

const StyledTypograghy = StyledComponents(Typography)`
  writing-mode: vertical-lr;
  letter-spacing: 0.5pt; 
  display: flex;
  flex-direction: row;
  justify-content: center; 
  align-items: center;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const App: React.FC = () => {
  return (
    <React.Fragment>
      <LogoContainer href="/">
        <Img src={logoSvg} />
      </LogoContainer>
      <WebOnly>
        <SocialIcons data-testid="social-icons">
          <Socials items={QuickIconData}/>
        </SocialIcons>
      </WebOnly>
      <Box component="div" sx={BoxStyles}>
        <Scroller fontSize={"medium"}/>
      </Box>
      <Main component="main">
        <QuickBioInfo />
        <Blogs />
        <ClosingBlock />
      </Main>
      <Footer />
    </React.Fragment>
  );
}

export default App;