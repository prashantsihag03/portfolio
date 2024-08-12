import { Chip, Stack, Typography } from '@mui/material'

const Skills: React.FC<{ values: string[] }> = ({
  values,
}: {
  values: string[]
}) => {
  return (
    <Stack
      component={'ul'}
      direction="row"
      width="100%"
      flexWrap={'wrap'}
      sx={{ paddingTop: '1rem' }}
    >
      {values.map((skill) => {
        return (
          <Chip
            key={skill}
            sx={{ margin: '0.25rem', backgroundColor: 'background.default' }}
            label={
              <Typography
                variant="subtitle1"
                fontSize="0.75rem"
                fontFamily="Inter"
                sx={{ color: 'text.primary', letterSpacing: '1pt' }}
              >
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
