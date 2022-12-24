import { Box, SxProps, ThemeProvider } from "@mui/material";
import * as React from "react";
import Blogs from "../Blogs";
import ClosingBlock from "../ClosingBlock";
import QuickBioInfo from "../QuickBioInfo";
import Footer from "../Footer";
import Logo from "../Logo";
import WebSocialIcons from "../WebSocialIcons";
import ScrollerGuide from "../ScrollGuide";
import { Theme } from "@mui/system";
import useDisplayMode from "./useDisplayMode";

const mainStyles: SxProps<Theme> = {
  marginLeft: "10%",
  marginRight: "10%",
  ["@media only screen and (max-width: 800px)"]: {
    marginLeft: "5%",
    marginRight: "5%",
  }
};

const App: React.FC = () => {
  const { theme, displayMode, toggleDisplayMode } = useDisplayMode();
  return (
    <ThemeProvider theme={theme}>
      <Box id="content" sx={{
        position: "relative",
        width: '100%',
        margin: "auto",
        backgroundColor: 'background.default',
      }}>
        <Logo delayInMs={500}/>
        <WebSocialIcons darkMode={displayMode==="dark"} onClick={toggleDisplayMode}/>
        <ScrollerGuide />
        <Box sx={{maxWidth: "1499px", margin: 'auto'}}>
          <Box component="main" sx={mainStyles}>
            <QuickBioInfo />
            <Blogs />
            <ClosingBlock />
          </Box>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;