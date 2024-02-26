import { Typography } from '@mui/material'

const HighlightText: React.FC<{ children: string; color?: string }> = ({
  children,
  color,
}: {
  children: string
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
