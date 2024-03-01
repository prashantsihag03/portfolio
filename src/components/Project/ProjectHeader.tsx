import { Stack, Typography, useMediaQuery } from '@mui/material'
import PROJECT_DIALOGUE from '../../Data/Projects'
import GithubIcon from '../Icon/GithubIcon'
import Icon from '../Icon'
import VisibilityIcon from '@mui/icons-material/Visibility'

const ProjectHeader: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:1000px)')

  return (
    <Stack
      direction={isMobile ? 'column' : 'row'}
      justifyContent={'space-between'}
      alignItems={isMobile ? 'flex-start' : 'flex-end'}
      paddingLeft={isMobile ? '1.5rem' : '3rem'}
      paddingRight={isMobile ? '1.5rem' : '3rem'}
    >
      <Typography component={'h3'} variant="h3" fontSize={'2rem'}>
        <Typography variant="subtitle1" color="secondary" borderRadius={1}>
          Personal Project
        </Typography>
        Dialogue Web App
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
        <GithubIcon href={PROJECT_DIALOGUE.github} size="1.5rem" />
        <Icon
          size="2.2rem"
          href={PROJECT_DIALOGUE.href}
          title="Live website link"
          alt="Eye icon"
        >
          <VisibilityIcon sx={{ width: '100%', height: '100%' }} />
        </Icon>
      </Stack>
    </Stack>
  )
}

export default ProjectHeader
