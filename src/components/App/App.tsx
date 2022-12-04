import { Box, SxProps, Theme, Typography } from "@mui/material";
import * as React from "react";
import StyledComponents from "styled-components";
import QuickIconData from "../../Data/QuickIcons";
import Blogs from "../Blogs";
import ClosingBlock from "../ClosingBlock";
import QuickBioIcons from "../QuickBioIcons";
import QuickBioInfo from "../QuickBioInfo";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const Main = StyledComponents(Box)`
  margin-left: 10%;
  margin-right: 10%;
  @media only screen and (max-width: 800px) {
    margin-left: 5%;
    margin-right: 5%;
  }
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
    writing-mode: horizontal-tb;
  }
`

const App: React.FC = () => {
  const [active, setActive] = React.useState<string>("intro");
  const [intersectionObserver] = React.useState<IntersectionObserver>(
    new IntersectionObserver((entries)=>{ 
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      })
    }, {
      threshold: 0.2
    })
  );

  return (
    <React.Fragment>
      {/* <WebOnly>
        <NavigationMenu active={active} items={['intro', 'blogs', 'about']}/>
      </WebOnly> */}
      <WebOnly>
        <SocialIcons data-testid="social-icons">
          <QuickBioIcons items={QuickIconData}/>
        </SocialIcons>
      </WebOnly>
      <Box component="div" sx={BoxStyles}>
        <StyledTypograghy>scroll down</StyledTypograghy>
        <Scroller fontSize={"medium"}/>
      </Box>
      <Main component="main">
        <QuickBioInfo observer={intersectionObserver}/>
        <Blogs observer={intersectionObserver}/>
        <ClosingBlock observer={intersectionObserver}/>
      </Main>
    </React.Fragment>
  );
}

export default App;