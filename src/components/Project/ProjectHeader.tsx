import { Stack, Typography, useMediaQuery } from '@mui/material'
import GithubIcon from '../Icon/GithubIcon'
import Icon from '../Icon'
import AdjustIcon from '@mui/icons-material/Adjust'

export interface ProjectHeaderProps {
  title: string
  type: 'Personal'
  subType?: 'Large Web App' | 'Small Web App' | 'CLI Tool'
  githubLink?: string
  liveLink?: string
  gutterSize?: string
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({
  title,
  type,
  githubLink,
  liveLink,
  gutterSize,
}: ProjectHeaderProps) => {
  const isMobile = useMediaQuery('(max-width:1000px)')

  return (
    <Stack
      direction={isMobile ? 'column' : 'row'}
      justifyContent={'space-between'}
      alignItems={isMobile ? 'flex-start' : 'flex-end'}
      paddingLeft={gutterSize}
      paddingRight={gutterSize}
    >
      <Typography component={'h3'} variant="h3" fontSize={'2rem'}>
        <Typography variant="subtitle1" color="secondary" borderRadius={1}>
          {type} Project
        </Typography>
        {title}
      </Typography>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        paddingTop={isMobile ? '1rem' : 0}
      >
        {/* <Button variant="outlined" color="primary">
          <Typography variant="body2">Tour Video</Typography>
        </Button> */}
        {githubLink ? (
          <GithubIcon href={githubLink} size="1.5rem" color="text.primary" />
        ) : null}
        {liveLink ? (
          <Icon
            size="2.2rem"
            href={liveLink}
            title="Live website link"
            alt="Eye icon"
          >
            <AdjustIcon sx={{ width: '100%', height: '100%' }} />
          </Icon>
        ) : null}
      </Stack>
    </Stack>
  )
}

export default ProjectHeader
