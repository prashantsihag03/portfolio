import {
  Box,
  List,
  ListItem,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material'
import PROJECT_DIALOGUE from '../../Data/Projects'
import ProjectHeader from './ProjectHeader'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { InViewSectionProps } from '../commons/types'

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
      minHeight={'70vh'}
      sx={{
        backgroundColor: 'rgba(12, 106, 245, 0.13)',
        height: !isMobile ? '70vh' : undefined,
        minHeight: isMobile ? '100%' : undefined,
      }}
      borderRadius={'0rem'}
      paddingTop={'3rem'}
    >
      <ProjectHeader />
      {isMobile ? (
        <Typography variant="body1" padding={'3rem'} paddingTop={'1rem'}>
          Highly sophisticated web app connecting users with each other over
          multiple channels such as text, voice, and video and provide media
          sharing platform.
        </Typography>
      ) : null}
      <Stack
        direction={isMobile ? 'column-reverse' : 'row'}
        justifyContent={'space-between'}
        height={'90%'}
      >
        <Stack
          direction={'column'}
          justifyContent={'space-between'}
          height={'90%'}
          flex={1}
          paddingLeft={'3rem'}
        >
          {!isMobile ? (
            <Typography
              variant="body1"
              paddingBottom={'3rem'}
              paddingTop={'1rem'}
            >
              Highly sophisticated web app connecting users with each other over
              multiple channels such as text, voice, and video and provide media
              sharing platform.
            </Typography>
          ) : null}
          <List
            subheader={
              <Typography variant="body2">Features I am proud of:</Typography>
            }
            sx={{ color: 'text.primary', paddingBottom: '3rem' }}
          >
            {PROJECT_DIALOGUE.features.map((feature) => (
              <ListItem key={feature} sx={{ color: 'text.secondary' }}>
                <Typography variant="body1">- {feature}</Typography>
              </ListItem>
            ))}
          </List>
        </Stack>
        <Stack
          direction={'column'}
          justifyContent={'space-between'}
          flex={2}
          paddingTop={'1rem'}
          height={'100%'}
        >
          <Box
            component={'img'}
            src={PROJECT_DIALOGUE.imgMap.overview.light}
            width={'100%'}
            height={'100%'}
            sx={{ objectFit: 'cover' }}
          />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Project
