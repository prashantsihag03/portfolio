import { Box, Link, SxProps } from '@mui/material'
import { Theme } from '@mui/system'
import * as React from 'react'
import IconProp from './type'

const listStyle: SxProps<Theme> = {
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'all 0.15s linear',
}

const imgStyle: SxProps<Theme> = {
  width: '80%',
  border: '4px solid transparent',
  borderRadius: '50%',
  transition: 'all 0.5s linear',
}

const Icon: React.FC<IconProp> = ({
  href,
  title,
  src,
  alt,
  children,
  color,
  hoverColor,
  size,
  style,
}: IconProp) => {
  return (
    <Link
      href={href}
      target="_blank"
      title={title}
      rel="noopener noreferrer nofollow"
    >
      <Box
        component={'li'}
        sx={{
          ...listStyle,
          color: color ? color : 'primary.main',
          width: size ? size : '1.5rem',
          height: size ? size : '1.5rem',
          marginLeft: '1.5rem',
          ['@media only screen and (max-width: 900px)']: {
            width: size ? size : '1.2rem',
            height: size ? size : '1.2rem',
          },
          ['&:hover']: {
            color: hoverColor ? hoverColor : 'secondary.main',
          },
          ...style,
        }}
      >
        {src ? (
          <Box component={'img'} sx={imgStyle} src={src} alt={alt} />
        ) : null}
        {children}
      </Box>
    </Link>
  )
}

export default Icon
