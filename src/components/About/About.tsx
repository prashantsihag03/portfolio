import { Stack, Typography, useMediaQuery } from '@mui/material'
import HighlightText from '../commons/HighlightText'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { InViewSectionProps } from '../commons/types'

const About: React.FC<InViewSectionProps> = ({
  inViewCallBack,
}: InViewSectionProps) => {
  const isMobile = useMediaQuery('(max-width:1000px)')
  const { ref, inView } = useInView({
    threshold: 0.7,
  })

  useEffect(() => {
    if (inView) inViewCallBack()
  }, [inView, inViewCallBack])

  return (
    <Stack
      id={'about'}
      ref={ref}
      width={'100%'}
      padding={isMobile ? 0 : '3rem'}
      paddingBottom={0}
      marginTop={'5rem'}
    >
      <Stack
        width={'100%'}
        height={'100%'}
        border={'1px solid white'}
        borderColor={'action.hover'}
        borderRadius={1}
      >
        <Stack
          direction={isMobile ? 'column' : 'row'}
          justifyContent={'space-between'}
          alignItems={isMobile ? 'flex-start' : 'center'}
          padding={'2rem'}
          border={'1px solid'}
          borderColor={'action.hover'}
          borderRadius={1}
          sx={{ transform: 'translate(-1rem, -1rem)' }}
        >
          <Typography
            variant="h2"
            fontSize={'1.5rem'}
            marginRight={'2rem'}
            marginLeft={!isMobile ? '1rem' : 0}
            marginBottom={isMobile ? '1rem' : 0}
          >
            {isMobile ? (
              'A bit more about me'
            ) : (
              <>
                A bit
                <br />
                more <br />
                about me
              </>
            )}
          </Typography>
          <Typography variant="body1">
            Ever since I got first introduced to programming in the year 10 of
            my school, I have been fascinated by what one can do with computers.{' '}
            <br /> <br />
            These days, I work as a
            <HighlightText> Software developer </HighlightText> at
            <HighlightText> Alex Solutions </HighlightText>where I have had the
            opportunity to work on full spectrum of web application development
            as well as CI/CD pipeline development.
          </Typography>
        </Stack>
        <Stack
          direction={'row'}
          height={'100%'}
          justifyContent={'space-around'}
          alignItems={'center'}
          padding={'2rem'}
          borderRadius={1}
          flexWrap={'wrap'}
        >
          <Typography
            variant="body1"
            flex={1}
            padding={isMobile ? '1rem' : '2rem'}
            margin={'1rem'}
            minWidth={'300px'}
            sx={{ backgroundColor: 'background.paper', letterSpacing: '2pt' }}
          >
            As a dynamic full stack developer with almost three years of
            experience,
            <HighlightText>
              I specialize in building robust solutions for React and Java based
              web applications.
            </HighlightText>
            <br />
            <br /> My expertise encompasses a wide range of technologies,
            including but not limited to <br />
            <HighlightText>
              - Play Framework, Spring Boot, Java 8, <br />
              - React, TypeScript, Redux, <br />
              - Postgresql, AWS, Gitlab CI <br />
            </HighlightText>
            and many more.
          </Typography>
          <Typography
            variant="body1"
            flex={1}
            padding={isMobile ? '1rem' : '2rem'}
            margin={'1rem'}
            minWidth={'300px'}
            sx={{ backgroundColor: 'background.paper' }}
          >
            With demonstrated track record of delivering projects on time, I
            have worked on complex projects consisting of microfrontends and
            microservices, delivering new features, resolving bugs, and ensuring
            optimal performance along with rapidly adapting to new technologies,
            and fostering effective team collaboration.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default About
