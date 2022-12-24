import { createTheme, useMediaQuery } from "@mui/material";
import * as React from "react";
import getDesignTokens from "../../theme";

const useDisplayMode = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [displayMode, setDisplayMode] = React.useState<"light" | "dark">(prefersDarkMode ? "dark" : "light");

  const toggleDisplayMode = () => {
    if (displayMode==="light") setDisplayMode("dark");
    else setDisplayMode("light");
  }

  const theme = React.useMemo(
    () => createTheme(getDesignTokens(displayMode)), 
    [displayMode, prefersDarkMode]
  );
  
  return {
    theme,
    displayMode,
    toggleDisplayMode,
  }
}

export default useDisplayMode;