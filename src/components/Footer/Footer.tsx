import { Divider, Stack, Typography } from '@mui/material'
import Socials from '../Socials'

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
      <Socials
        size={1.4}
        containerStyle={{ padding: '1rem', justifyContent: 'center' }}
        iconStyle={{ marginRight: '1.5rem' }}
      />
      <Divider sx={{ width: '50%' }} />
      <Typography
        variant="subtitle1"
        position={'relative'}
        textAlign={'center'}
      >
        built by yours truly with love using React
      </Typography>
    </Stack>
  )
}

export default Footer
