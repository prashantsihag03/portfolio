import { Palette } from '@mui/material'
import { TypographyOptions } from '@mui/material/styles/createTypography'

// eslint-disable-next-line no-unused-vars
export const getTypographyTheme = (
  palette: Palette,
  isMobile: boolean
): TypographyOptions => {
  return {
    allVariants: {
      color: palette.text.primary,
      letterSpacing: '0.5pt',
      fontFamily:
        palette.mode === 'light'
          ? '"Michroma Regular", "Helvetica", -apple-system, system-ui, serif'
          : '"Michroma Regular", "Helvetica", -apple-system, system-ui, serif',
    },
    h1: {
      color: palette.text.primary,
      letterSpacing: '1pt',
      fontSize: isMobile ? '1.5rem' : '1.5rem',
      fontWeight: 'bold',
    },
    h2: {
      letterSpacing: '1pt',
      fontSize: isMobile ? '1.5rem' : '1.2rem',
      fontWeight: 'bold',
    },
    h3: {
      letterSpacing: '1pt',
      fontSize: '1rem',
      fontWeight: 'bold',
    },
    body1: {
      color: palette.text.secondary,
      fontSize: isMobile ? '1rem' : '1rem',
      letterSpacing: '1.2pt',
    },
    body2: {
      color: palette.text.primary,
      fontSize: isMobile ? '1rem' : '1rem',
      letterSpacing: '1.2pt',
    },
    subtitle1: {
      color: palette.text.secondary,
      fontSize: isMobile ? '0.8rem' : '0.8rem',
      letterSpacing: '1.2pt',
    },
    subtitle2: {
      color: palette.text.secondary,
      fontSize: isMobile ? '0.7rem' : '0.7rem',
      lineHeight: '1.2pt',
    },
  }
}
