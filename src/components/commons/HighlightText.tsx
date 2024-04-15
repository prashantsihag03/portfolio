import { Typography } from '@mui/material'
import { ReactNode } from 'react'

const HighlightText: React.FC<{ children: ReactNode; color?: string }> = ({
  children,
  color,
}: {
  children: ReactNode
  color?: string
}) => {
  return (
    <Typography
      variant="body1"
      component={'span'}
      color={color ? color : 'secondary.main'}
    >
      {children}
    </Typography>
  )
}

export default HighlightText
