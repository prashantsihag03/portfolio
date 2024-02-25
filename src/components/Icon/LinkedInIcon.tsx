import * as React from 'react'
import Icon from './Icon'
import { SpecialIconProps } from './type'

const LinkedInIcon: React.FC<SpecialIconProps> = ({
  href,
  size,
  color,
}: SpecialIconProps) => {
  return (
    <Icon
      key={'linkedinIcon'}
      href={href}
      title={'Linkedin'}
      alt={'Linkedin Icon'}
      size={size}
      color={color}
    >
      <svg
        fill="currentColor"
        strokeWidth={2}
        viewBox="0 0 25 20"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="100%"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    </Icon>
  )
}

export default LinkedInIcon
