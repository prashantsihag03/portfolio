import { Link, Stack, Typography } from '@mui/material'
import { useInView } from 'react-intersection-observer'
import { InViewSectionProps } from '../commons/types'
import { useEffect } from 'react'
import SocialLinks from '../Socials/SocialLinks'

const Contact: React.FC<InViewSectionProps> = ({
  inViewCallBack,
}: InViewSectionProps) => {
  const { ref, inView } = useInView({
    threshold: 0.7,
  })

  useEffect(() => {
    if (inView) inViewCallBack()
  }, [inView, inViewCallBack])

  return (
    <Stack
      id={'contact'}
      ref={ref}
      direction={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      flex={1}
      width={'100%'}
      borderRadius={'0rem'}
      paddingTop={'3rem'}
      paddingBottom={'3rem'}
    >
      <Typography
        variant="h1"
        component={'p'}
        textAlign={'center'}
        fontSize={'3rem'}
      >
        Get in touch
        <br />
        <Link href={SocialLinks.linkedIn.href}>
          <Typography
            variant="h1"
            component={'span'}
            fontSize={'4rem'}
            sx={{
              borderBottomWidth: '0.25rem',
              borderBottomStyle: 'solid',
              borderBottomColor: 'secondary.main',
            }}
          >
            Linkedin
          </Typography>
        </Link>
      </Typography>
    </Stack>
  )
}

export default Contact
