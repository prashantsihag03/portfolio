import { Stack, SxProps, Theme } from '@mui/material'
import CodepenIcon from '../Icon/CodepenIcon'
import GithubIcon from '../Icon/GithubIcon'
import LinkedInIcon from '../Icon/LinkedInIcon'
import MediumIcon from '../Icon/MediumIcon'
import SocialLinks from './SocialLinks'

interface SocialsProp {
  containerStyle?: SxProps<Theme>
  iconStyle?: SxProps<Theme>
  /**
   * numerical value of rem
   */
  size?: number
}

const Socials: React.FC<SocialsProp> = ({
  containerStyle,
  iconStyle,
  size,
}: SocialsProp) => {
  return (
    <Stack
      direction={'row'}
      justifyContent={'right'}
      alignItems={'flex-end'}
      component={'ol'}
      flex={1}
      sx={containerStyle ? containerStyle : {}}
    >
      <CodepenIcon
        href={SocialLinks.codepen.href}
        size={size ? `${size}rem` : '0.9rem'}
        color={'text.secondary'}
        style={iconStyle ? iconStyle : {}}
      />
      <LinkedInIcon
        href={SocialLinks.linkedIn.href}
        size={size ? `${size + 0.4}rem` : '1.3rem'}
        color={'text.secondary'}
        style={iconStyle ? iconStyle : {}}
      />
      <GithubIcon
        href={SocialLinks.github.href}
        size={size ? `${size}rem` : '1.1rem'}
        color={'text.secondary'}
        style={iconStyle ? iconStyle : {}}
      />
      <MediumIcon
        href={SocialLinks.medium.href}
        size={size ? `${size}rem` : '1.1rem'}
        color={'text.secondary'}
        style={iconStyle ? iconStyle : {}}
      />
    </Stack>
  )
}

export default Socials
