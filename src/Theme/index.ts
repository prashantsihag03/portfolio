import { ThemeOptions } from "@mui/material";
import { getComponentsTheme } from "./components";
import { getPaletteTheme } from "./palette";
import { getTypographyTheme } from "./typography";

const getDesignTokens = (mode: "light" | "dark"): ThemeOptions => {
  const palette = getPaletteTheme(mode);
  return {
    palette: palette,
    typography: (palette) => getTypographyTheme(palette),
    components: getComponentsTheme(palette),
  };
};

export default getDesignTokens;
