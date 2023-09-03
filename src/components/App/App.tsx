import { Box, SxProps, ThemeProvider } from "@mui/material";
import * as React from "react";
import Footer from "../Footer";
import useDisplayMode from "./useDisplayMode";
import Main from "../Main";
import { Theme } from "@mui/system";

const contentStyles: SxProps<Theme> = {
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  margin: "auto",
  backgroundColor: "background.default",
};

const App: React.FC = () => {
  const { theme } = useDisplayMode();
  return (
    <ThemeProvider theme={theme}>
      <Box id="content" sx={contentStyles}>
        <Main />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
