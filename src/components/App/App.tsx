import { Box, createTheme, SxProps, Theme, ThemeProvider } from "@mui/material";
import * as React from "react";
import StyledComponents from "styled-components";
import QuickIconData from "../../Data/QuickIcons";
import Blogs from "../Blogs";
import ClosingBlock from "../ClosingBlock";
import Socials from "../Socials";
import QuickBioInfo from "../QuickBioInfo";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Footer from "../Footer";
import Logo from "../Logo";

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

const mytheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#8dafff',
    },
    secondary: {
      main: '#8dafff'
    },
  },
});

const App: React.FC = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={mytheme}>
        <Logo />
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
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;