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
            opportunity to work on{' '}
            <HighlightText>
              full spectrum of web application development
            </HighlightText>{' '}
            as well as <HighlightText>CI/CD pipeline development</HighlightText>
            .
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
            sx={{ backgroundColor: 'background.paper' }}
          >
            As a dynamic{' '}
            <HighlightText color="primary">full stack developer</HighlightText>{' '}
            with almost{' '}
            <HighlightText color="primary">
              three years of experience
            </HighlightText>
            , I specialize in{' '}
            <HighlightText color="primary">
              building robust solutions
            </HighlightText>{' '}
            for <HighlightText color="primary">React </HighlightText>
            and <HighlightText color="primary">Java </HighlightText>
            based web applications. <br />
            <br /> My expertise encompasses a wide range of technologies,
            including but not limited to{' '}
            <HighlightText color="primary">
              Play Framework, Spring Boot, Java 8, React, TypeScript, Redux,
              Postgresql, AWS, Jenkins,
            </HighlightText>{' '}
            and <HighlightText color="primary">Gitlab CI</HighlightText>.
          </Typography>
          <Typography
            variant="body1"
            flex={1}
            padding={isMobile ? '1rem' : '2rem'}
            margin={'1rem'}
            minWidth={'300px'}
            sx={{ backgroundColor: 'background.paper' }}
          >
            With{' '}
            <HighlightText color="primary">
              demonstrated track record
            </HighlightText>{' '}
            of{' '}
            <HighlightText color="primary">delivering projects </HighlightText>{' '}
            on time, I have worked on{' '}
            <HighlightText color="primary">complex projects </HighlightText>{' '}
            consisting of{' '}
            <HighlightText color="primary"> microfrontends </HighlightText> and{' '}
            <HighlightText color="primary">
              microservices, delivering new features, resolving bugs, and
              ensuring optimal performance along with rapidly adapting
            </HighlightText>{' '}
            to <HighlightText color="primary">new technologies,</HighlightText>{' '}
            and fostering{' '}
            <HighlightText color="primary">
              effective team collaboration.
            </HighlightText>
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default About
