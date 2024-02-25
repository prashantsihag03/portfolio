import * as React from 'react'
import Icon from './Icon'
import { SpecialIconProps } from './type'

const MediumIcon: React.FC<SpecialIconProps> = ({
  href,
  size,
  color,
}: SpecialIconProps) => {
  return (
    <Icon
      key={'MediumIcon'}
      href={href}
      title={'Medium'}
      alt={'Medium Icon'}
      size={size}
      color={color}
    >
      <svg
        height="100%"
        width="100%"
        viewBox="0 0 35 25"
        fill="currentColor"
        strokeWidth={2}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="MediumVector"
          d="M3.7946 5.4144C3.8343 5.004 3.6845 4.5984 3.3912 4.3222L0.40336 0.5617V0H9.6807L16.8515 16.4305L23.1559 0H32V0.5617L29.4454 3.1207C29.2251 3.296 29.1159 3.5843 29.1615 3.8696V22.672C29.1159 22.9573 29.2251 23.2456 29.4454 23.4209L31.9402 25.9799V26.5416H19.3912V25.9799L21.9757 23.3585C22.2297 23.0933 22.2297 23.0153 22.2297 22.6095V7.4116L15.0439 26.4793H14.0728L5.7068 7.4116V20.191C5.6371 20.7283 5.8079 21.2691 6.1699 21.6578L9.5313 25.9175V26.4793H0V25.9175L3.3613 21.6578C3.7208 21.2685 3.8816 20.724 3.7946 20.191V5.4144Z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  )
}

export default MediumIcon
