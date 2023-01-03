import { Box, SxProps, ThemeProvider } from "@mui/material";
import * as React from "react";
import Footer from "../Footer";
import Logo from "../Logo";
import WebSocialIcons from "../WebSocialIcons";
import ScrollerGuide from "../ScrollGuide";
import useDisplayMode from "./useDisplayMode";
import Main from "../Main";
import { Theme } from "@mui/system";

const contentStyles: SxProps<Theme> = {
  position: "relative",
  width: '100%',
  margin: "auto",
  backgroundColor: 'background.default',
}

const App: React.FC = () => {
  const { theme, displayMode, toggleDisplayMode } = useDisplayMode();
  return (
    <ThemeProvider theme={theme}>
      <Box id="content" sx={contentStyles}>
        <Logo delayInMs={500} darkMode={displayMode==="dark"}/>
        <WebSocialIcons darkMode={displayMode==="dark"} onClick={toggleDisplayMode}/>
        <ScrollerGuide />
        <Main />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;