import { Box, createTheme, SxProps, ThemeProvider } from "@mui/material";
import * as React from "react";
import Blogs from "../Blogs";
import ClosingBlock from "../ClosingBlock";
import QuickBioInfo from "../QuickBioInfo";
import Footer from "../Footer";
import Logo from "../Logo";
import WebSocialIcons from "../WebSocialIcons";
import ScrollerGuide from "../ScrollGuide";
import { Theme } from "@mui/system";

const mainStyles: SxProps<Theme> = {
  marginLeft: "10%",
  marginRight: "10%",
  ["@media only screen and (max-width: 800px)"]: {
    marginLeft: "5%",
    marginRight: "5%",
  }
};

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
        <Box component="main" sx={mainStyles}>
          <QuickBioInfo />
          <Blogs />
          <ClosingBlock />
        </Box>
        <Footer />
      {/* </ThemeProvider> */}
    </React.Fragment>
  );
}

export default App;