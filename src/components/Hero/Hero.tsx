import { Stack, Typography, useMediaQuery } from '@mui/material'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'
import HighlightText from '../commons/HighlightText'
import { InViewSectionProps } from '../commons/types'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const Hero: React.FC<InViewSectionProps> = ({
  inViewCallBack,
}: InViewSectionProps) => {
  const isMobile = useMediaQuery('(max-width:600px)')
  const { ref, inView } = useInView({
    threshold: 0.7,
  })

  useEffect(() => {
    if (inView) inViewCallBack()
  }, [inView, inViewCallBack])

  return (
    <Stack
      id="hero"
      ref={ref}
      direction={isMobile ? 'column' : 'row'}
      component={'div'}
      justifyContent={'center'}
      alignItems={'center'}
      width={'100%'}
      flexWrap={'wrap'}
      margin={'auto'}
      height={isMobile ? '80vh' : '85vh'}
      sx={{ backgroundColor: 'Background.default' }}
    >
      <KeyboardDoubleArrowDownIcon
        sx={{
          fontSize: '2rem',
          color: 'text.secondary',
          position: 'absolute',
          right: '2.5rem',
          bottom: '10vh',
          '&:hover': {
            backgroundColor: 'transparent',
            cursor: 'default',
            color: 'text.secondary',
          },
        }}
      />
      <Stack
        flex={1}
        justifyContent={'center'}
        alignItems={'center'}
        paddingRight={isMobile ? 0 : '3rem'}
        flexWrap={'wrap'}
      >
        <Typography
          variant="h1"
          component={'h1'}
          fontSize={isMobile ? '4rem' : '7rem'}
        >
          Prashant
          <br />
          <Typography
            variant="h1"
            component={'span'}
            fontSize={isMobile ? '6.5rem' : '12rem'}
            textAlign={isMobile ? 'center' : undefined}
          >
            Sihag
          </Typography>
        </Typography>
      </Stack>
      <Stack
        flex={1}
        justifyContent={'center'}
        alignItems={'flex-start'}
        minWidth={!isMobile ? '500px' : 0}
        sx={
          !isMobile
            ? {
                borderLeftWidth: '2px',
                borderLeftColor: '#57575771',
                borderLeftStyle: 'solid',
              }
            : {}
        }
      >
        <Typography
          variant="body1"
          component={'p'}
          paddingLeft={!isMobile ? '3rem' : 0}
          fontSize={'1.1rem'}
        >
          Greetings 👋🏽
        </Typography>
        <Typography
          variant="body1"
          component={'p'}
          width={'100%'}
          color={'text.primary'}
          paddingLeft={!isMobile ? '3rem' : 0}
        >
          I’m a Software Engineer on the Platform Team at
          <HighlightText> Alex Solutions</HighlightText>. Currently, I’m based
          in Adelaide, Australia.
        </Typography>
      </Stack>
    </Stack>
  )
}

export default Hero
