import { Typography } from '@mui/material'
import { ReactNode } from 'react'

const HighlightText: React.FC<{
  children: ReactNode
  color?: string
  fontFamily?: string
  underline?: boolean
}> = ({
  children,
  fontFamily,
  color,
  underline = false,
}: {
  children: ReactNode
  color?: string
  fontFamily?: string
  underline?: boolean
}) => {
  return (
    <Typography
      variant="body1"
      component={'span'}
      fontFamily={fontFamily ? fontFamily : 'Inter'}
      color={color ? color : 'secondary.main'}
      sx={{
        textDecorationLine: underline ? 'underline' : undefined,
      }}
    >
      {children}
    </Typography>
  )
}

export default HighlightText
