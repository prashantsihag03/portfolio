import { SxProps, Theme } from '@mui/material'
import React from 'react'

export default interface IconProp {
  href: string
  title: string
  src?: string
  alt: string
  children?: React.ReactNode
  color?: string
  hoverColor?: string
  size?: string
  style?: SxProps<Theme>
}

export type SpecialIconProps = Omit<
  IconProp,
  'title' | 'children' | 'src' | 'alt'
>
