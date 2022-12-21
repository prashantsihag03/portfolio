import { Box, createTheme, ThemeProvider } from "@mui/material";
import * as React from "react";
import StyledComponents from "styled-components";
import Blogs from "../Blogs";
import ClosingBlock from "../ClosingBlock";
import QuickBioInfo from "../QuickBioInfo";
import Footer from "../Footer";
import Logo from "../Logo";
import WebSocialIcons from "../WebSocialIcons";
import ScrollerGuide from "../ScrollGuide";

const Main = StyledComponents(Box)`
  margin-left: 10%;
  margin-right: 10%;
  @media only screen and (max-width: 800px) {
    margin-left: 5%;
    margin-right: 5%;
  }
`;

// const mytheme = createTheme({
//   palette: {
//     mode: 'light',
//     primary: {
//       main: '#8dafff',
//     },
//     secondary: {
//       main: '#8dafff'
//     },
//   },
// });

const App: React.FC = () => {
  return (
    <React.Fragment>
      {/* <ThemeProvider theme={mytheme}> */}
        <Logo delayInMs={500}/>
        <WebSocialIcons />
        <ScrollerGuide />
        <Main component="main">
          <QuickBioInfo />
          <Blogs />
          <ClosingBlock />
        </Main>
        <Footer />
      {/* </ThemeProvider> */}
    </React.Fragment>
  );
}

export default App;