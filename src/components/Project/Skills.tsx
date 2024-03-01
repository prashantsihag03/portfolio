import { Chip, Stack, Typography } from '@mui/material'
import PROJECT_DIALOGUE from '../../Data/Projects'

const Skills: React.FC = () => {
  return (
    <Stack
      component={'ul'}
      direction="row"
      width="100%"
      flexWrap={'wrap'}
      sx={{ paddingTop: '1rem' }}
    >
      {PROJECT_DIALOGUE.skills.map((skill) => {
        return (
          <Chip
            key={skill}
            sx={{ margin: '0.25rem' }}
            label={
              <Typography variant="subtitle1" sx={{ color: 'text.primary' }}>
                {skill}
              </Typography>
            }
            variant="filled"
          />
        )
      })}
    </Stack>
  )
}

export default Skills
