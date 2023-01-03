import { ThemeOptions } from "@mui/material";

const getDesignTokens = (mode: "light" | "dark"): ThemeOptions => {
  return {
    palette: {
      mode: mode,
      primary: {
        main: mode === "light" ? '#f0f0f0': '#101010',
        light: '#f0f0f0',
        dark: '#101010',
      },
      secondary: {
        main: mode === "light" ? '#2b6bff' : '#8dafff',
        light: '#2b6bff',
        dark: '#8dafff',
      },
      text: {
        primary: mode === "light" ? '#000000' : '#FFF',
        secondary: mode === "light" ? '#1a1a1a' : '#b5b5b5',
      },
      background: {
        default: mode === "light" ? '#f0f0f0' : '#101010',
        paper: mode === "light" ? '#f0f0f0' : '#101010',
      },
      action: {
        active: '#FFF',
        hover: 'rgba(128, 128, 128, 0.2)',
      },
    },
    typography: {
      allVariants: {
        color: mode === "light" ? '#000000' : '#FFF',
        letterSpacing: '0.5pt',
        fontFamily: mode === "light" ? '"Roboto Slab Regular", "Helvetica", -apple-system, system-ui, serif' : '"Roboto Slab Light", "Helvetica", -apple-system, system-ui, serif',
      },
      h2: {
        fontSize: '1.8rem',
      },
      h5: {
        fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
      },
      subtitle1: {
        color: mode === "light" ? '#1a1a1a' : '#b5b5b5',
        fontSize: "1.2rem",
        ["@media only screen and (max-width: 1000px)"]: {
          fontSize: "1.1rem",
        }
      },
      subtitle2:{  
        color: mode === "light" ? '#2b6bff' : '#8dafff',
        fontSize: "1.2rem",
        ["@media only screen and (max-width: 1000px)"]: {
          fontSize: "1.1rem",
        }
      },
      body1: {
        color: mode === "light" ? '#1a1a1a' : '#b5b5b5',
        fontSize: "1rem",
      },
      body2: {
        fontSize: "clamp(50px, 5vw, 60px)", 
        fontWeight: 900,
        fontFamily: '"Roboto Slab Bold", -apple-system, system-ui, serif', 
      }
    },
    components: {
      MuiButton: {
        variants: [
          {
            props: {variant: 'outlined'},
            style: {
              textTransform: 'none',
              padding: '0.8rem 1rem', 
              fontSize: '1.1rem',
              ["@media only screen and (max-width: 600px)"]: {
                fontSize: "1rem",
                padding: '0.6rem 0.8rem', 
              }
            }
          }
        ]
      },
      MuiLink: {
        styleOverrides: {
          root: {textDecoration: 'none'}
        }
      },
      MuiCard: {
        styleOverrides: {
          root: {
            "&:hover": {
              cursor: mode === "dark" ? "url('./images/whiteCursor.svg'), pointer" : "url('./images/darkCursor.svg'), pointer",
            }
          }
        }
      }
    }
  }
}

export default getDesignTokens;