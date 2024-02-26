import { Divider, Link, Stack, Typography } from '@mui/material'

const Footer: React.FC = () => {
  return (
    <Stack
      justifyContent={'center'}
      width={'100%'}
      direction={'column'}
      alignItems={'center'}
      paddingTop={'2rem'}
      paddingBottom={'1rem'}
    >
      <Divider sx={{ width: '50%' }} />
      <Typography
        variant="subtitle1"
        position={'relative'}
        textAlign={'center'}
      >
        built by yours truly with love using React
      </Typography>
      <Link
        borderBottom={'1px solid white'}
        borderColor={'text.secondary'}
        sx={{ '&:hover': { cursor: 'pointer', borderColor: 'white' } }}
      >
        <Typography variant="subtitle1" textAlign={'center'}>
          Version 1
        </Typography>
      </Link>
    </Stack>
  )
}

export default Footer
