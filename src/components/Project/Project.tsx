import { List, ListItem, Stack, Typography, useMediaQuery } from '@mui/material'
import PROJECT_DIALOGUE from '../../Data/Projects'
import ProjectHeader from './ProjectHeader'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { InViewSectionProps } from '../commons/types'
import Skills from './Skills'
import ProjectMediaBox from './ProjectMediaBox'

const Project: React.FC<InViewSectionProps> = ({
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
      id={'projects'}
      ref={ref}
      direction={'column'}
      flex={1}
      width={'100%'}
      marginBottom={'1rem'}
      sx={{
        backgroundColor: 'rgba(12, 106, 245, 0.13)',
        minHeight: isMobile ? '100%' : undefined,
      }}
      borderRadius={'0rem'}
      paddingTop={'3rem'}
    >
      <ProjectHeader
        title="Dialogue"
        type="Personal"
        githubLink={PROJECT_DIALOGUE.github}
        liveLink={PROJECT_DIALOGUE.href}
        gutterSize={isMobile ? '1.5rem' : '3rem'}
      />
      {isMobile ? (
        <Typography variant="body1" padding={'1.5rem'} paddingTop={'1rem'}>
          Highly sophisticated web app connecting users with each other over
          multiple channels such as text, voice, and video and provide media
          sharing platform.
          <Skills values={PROJECT_DIALOGUE.skills} />
        </Typography>
      ) : null}
      <Stack
        direction={isMobile ? 'column-reverse' : 'row'}
        justifyContent={'space-between'}
        height={'100%'}
      >
        <Stack
          direction={'column'}
          justifyContent={'space-between'}
          flex={1}
          paddingLeft={isMobile ? '1.5rem' : '3rem'}
        >
          {!isMobile ? (
            <>
              <Typography
                variant="body1"
                paddingBottom={'3rem'}
                paddingTop={'1rem'}
              >
                Highly sophisticated web app connecting users with each other
                over multiple channels such as text, voice, and video and
                provide media sharing platform.
                <Skills values={PROJECT_DIALOGUE.skills} />
              </Typography>
            </>
          ) : null}
          <List
            subheader={
              <Typography variant="body2">Noteworthy Features:</Typography>
            }
            sx={{
              color: 'text.primary',
              paddingTop: '3rem',
              paddingBottom: '3rem',
            }}
          >
            {PROJECT_DIALOGUE.features.map((feature) => (
              <ListItem dense key={feature} sx={{ color: 'text.secondary' }}>
                <Typography variant="body1">- {feature}</Typography>
              </ListItem>
            ))}
          </List>
        </Stack>
        <ProjectMediaBox
          productImgUrls={PROJECT_DIALOGUE.imgMap}
          architectureDiagramUrls={PROJECT_DIALOGUE.architectureImgMap}
          demoVideoUrls={PROJECT_DIALOGUE.demoVideosUrls}
        />
      </Stack>
    </Stack>
  )
}

export default Project
