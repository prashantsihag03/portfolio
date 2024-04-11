import { Box, Stack, Typography, useMediaQuery } from '@mui/material'
import ProjectHeader, { ProjectHeaderProps } from './ProjectHeader'
import Skills from './Skills'

interface ProjectProps extends ProjectHeaderProps {
  description: string
  skills: string[]
  overviewImgSrc: string
}

const SmallProject: React.FC<ProjectProps> = ({
  title,
  type,
  description,
  skills,
  overviewImgSrc,
  githubLink,
  liveLink,
}: ProjectProps) => {
  const isMobile = useMediaQuery('(max-width:1000px)')

  return (
    <Stack
      direction={'column'}
      flex={1}
      minWidth={'350px'}
      maxWidth={'850px'}
      marginBottom={'1rem'}
      sx={{
        backgroundColor: 'rgba(12, 106, 245, 0.13)',
        minHeight: isMobile ? '100%' : undefined,
      }}
      borderRadius={'0rem'}
      paddingTop={'3rem'}
    >
      <ProjectHeader
        title={title}
        type={type}
        githubLink={githubLink}
        liveLink={liveLink}
        gutterSize="1.5rem"
      />
      <Typography variant="body1" padding={'1.5rem'} paddingTop={'1rem'}>
        {description}
        <Skills values={skills} />
      </Typography>
      <Stack
        direction={isMobile ? 'column-reverse' : 'row'}
        justifyContent={'space-between'}
        height={'90%'}
      >
        <Stack
          direction={'column'}
          justifyContent={'space-between'}
          flex={1}
          paddingTop={'1rem'}
          height={'100%'}
        >
          <Box
            component={'img'}
            src={overviewImgSrc}
            width={'100%'}
            height={'100%'}
            sx={{ objectFit: 'contain' }}
          />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default SmallProject
