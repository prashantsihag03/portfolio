import {
  Box,
  Button,
  List,
  ListItem,
  Stack,
  SxProps,
  ThemeProvider,
  Typography,
} from '@mui/material'
import * as React from 'react'

import { Theme } from '@mui/system'
import useCreateTheme from '../../hooks/useCreateTheme'
import GithubIcon from '../Icon/GithubIcon'
import LinkedInIcon from '../Icon/LinkedInIcon'
import MediumIcon from '../Icon/MediumIcon'
import CodepenIcon from '../Icon/CodepenIcon'
import Socials from '../../Data/Socials'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'
import PROJECT_DIALOGUE from '../../Data/Projects'

const contentStyles: SxProps<Theme> = {
  boxSizing: 'border-box',
  backgroundColor: 'background.default',
}

const App: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { theme, displayMode, toggleDisplayMode } = useCreateTheme()
  return (
    <ThemeProvider theme={theme}>
      <Stack
        direction={'column'}
        width={'100%'}
        margin={'auto'}
        height={'100vh'}
        position={'relative'}
        overflow={'hidden'}
        justifyContent={'space-between'}
        id="content"
        sx={contentStyles}
      >
        <Stack
          width={'100%'}
          direction={'row'}
          justifyContent={'space-between'}
          component={'ol'}
          marginBottom={'1rem'}
          paddingLeft="2.5rem"
          paddingRight="2.5rem"
          paddingTop={'2.5rem'}
        >
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'flex-end'}
            component={'ol'}
            flex={1}
          >
            <Typography
              component={'li'}
              variant="h1"
              position={'relative'}
              color={'text.secondary'}
              sx={{
                cursor: 'pointer',
                transition: '0.25s linear',
                '&:hover': {
                  color: 'secondary.main',
                },
              }}
            >
              PS
            </Typography>
            <Typography
              component={'li'}
              variant="body1"
              position={'relative'}
              sx={{
                cursor: 'pointer',
                '&:after': {
                  content: '""',
                  display: 'block',
                  borderBottomWidth: '0.25rem',
                  borderBottomStyle: 'solid',
                  borderBottomColor: 'secondary.main',
                  width: 0,
                  position: 'absolute',
                  right: 0,
                  marginTop: '0.25rem',
                  transition: '0.25s linear',
                  cursor: 'pointer',
                },
                '&:hover:after': {
                  width: '100%',
                },
              }}
            >
              Highlights
            </Typography>
            <Typography
              component={'li'}
              variant="body1"
              position={'relative'}
              sx={{
                cursor: 'pointer',
                '&:after': {
                  cursor: 'pointer',
                  content: '""',
                  display: 'block',
                  borderBottomWidth: '0.25rem',
                  borderBottomStyle: 'solid',
                  borderBottomColor: 'secondary.main',
                  width: 0,
                  position: 'absolute',
                  right: 0,
                  marginTop: '0.25rem',
                  transition: '0.25s linear',
                },
                '&:hover:after': {
                  width: '100%',
                },
              }}
            >
              Projects
            </Typography>
            <Typography
              component={'li'}
              variant="body1"
              position={'relative'}
              sx={{
                cursor: 'pointer',
                '&:after': {
                  content: '""',
                  cursor: 'pointer',
                  display: 'block',
                  borderBottomWidth: '0.25rem',
                  borderBottomStyle: 'solid',
                  borderBottomColor: 'secondary.main',
                  width: 0,
                  position: 'absolute',
                  right: 0,
                  marginTop: '0.25rem',
                  transition: '0.25s linear',
                },
                '&:hover:after': {
                  width: '100%',
                },
              }}
            >
              About
            </Typography>
            <Typography
              component={'li'}
              variant="body1"
              position={'relative'}
              sx={{
                cursor: 'pointer',
                '&:after': {
                  cursor: 'pointer',
                  content: '""',
                  display: 'block',
                  borderBottomWidth: '0.25rem',
                  borderBottomStyle: 'solid',
                  borderBottomColor: 'secondary.main',
                  width: 0,
                  position: 'absolute',
                  right: 0,
                  marginTop: '0.25rem',
                  transition: '0.25s linear',
                },
                '&:hover:after': {
                  width: '100%',
                },
              }}
            >
              Writings
            </Typography>
          </Stack>
          <Stack
            direction={'row'}
            justifyContent={'right'}
            alignItems={'flex-end'}
            component={'ol'}
            flex={1}
          >
            <CodepenIcon
              href={Socials.codepen.href}
              size={'1.1rem'}
              color={'text.secondary'}
            />
            <LinkedInIcon
              href={Socials.linkedIn.href}
              size={'1.5rem'}
              color={'text.secondary'}
            />
            <GithubIcon
              href={Socials.github.href}
              size={'1.3rem'}
              color={'text.secondary'}
            />
            <MediumIcon
              href={Socials.medium.href}
              size={'1.3rem'}
              color={'text.secondary'}
            />
          </Stack>
        </Stack>
        <Box
          overflow={'auto'}
          height={'90vh'}
          position="relative"
          // sx={{ backgroundColor: 'rgba(12, 106, 245, 0.13)' }}
          width={'100%'}
          paddingLeft="2.5rem"
          paddingRight="2.5rem"
          paddingTop={'1rem'}
          paddingBottom={'1rem'}
        >
          <Stack
            direction={'row'}
            justifyContent={'center'}
            alignItems={'center'}
            width={'100%'}
            flexWrap={'wrap'}
            margin={'auto'}
            height={'80vh'}
            sx={{ backgroundColor: 'Background.default' }}
          >
            <KeyboardDoubleArrowDownIcon
              sx={{
                fontSize: '3rem',
                color: 'text.secondary',
                position: 'absolute',
                right: '2.5rem',
                bottom: '10vh',
                '&:hover': {
                  backgroundColor: 'transparent',
                  cursor: 'default',
                  color: 'text.secondary',
                },
              }}
            />
            <Stack
              flex={1}
              justifyContent={'center'}
              alignItems={'center'}
              paddingRight={'3rem'}
            >
              <Typography variant="h1" component={'h1'} fontSize={'6rem'}>
                Prashant
                <br />
                <Typography variant="h1" component={'span'} fontSize={'10rem'}>
                  Sihag
                </Typography>
              </Typography>
            </Stack>
            <Stack
              flex={1}
              justifyContent={'center'}
              alignItems={'flex-start'}
              minWidth={'500px'}
              sx={{
                borderLeftWidth: '2px',
                borderLeftColor: '#57575771',
                borderLeftStyle: 'solid',
              }}
            >
              <Typography
                variant="body1"
                component={'p'}
                paddingLeft={'3rem'}
                fontSize={'1.3rem'}
              >
                Greetings 👋🏽
              </Typography>
              <Typography
                variant="body1"
                component={'p'}
                width={'100%'}
                fontSize={'1.3rem'}
                color={'text.primary'}
                paddingLeft={'3rem'}
              >
                I’m a Software Engineer on the Platform Team at{' '}
                <Typography
                  variant="body1"
                  component={'span'}
                  fontSize={'1.3rem'}
                  color={'secondary.main'}
                >
                  Alex Solutions
                </Typography>
                . Currently, I’m based in Adelaide, Australia.
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction={'column'}
            justifyContent={'space-between'}
            flex={1}
            width={'100%'}
            height={'85vh'}
            sx={{ backgroundColor: 'rgba(12, 106, 245, 0.13)' }}
            borderRadius={'0rem'}
            paddingTop={'3rem'}
          >
            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
              paddingLeft={'3rem'}
              paddingRight={'3rem'}
            >
              <Typography component={'h3'} variant="body2" fontSize={'2rem'}>
                <Typography
                  variant="subtitle1"
                  color="secondary"
                  borderRadius={1}
                >
                  Personal Project
                </Typography>
                Dialogue Web App
              </Typography>
              <Stack
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Button variant="contained" color="primary">
                  Demo Video
                </Button>
                <GithubIcon href={PROJECT_DIALOGUE.github} size="2rem" />
              </Stack>
            </Stack>
            <Stack
              direction={'row'}
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
                {/* <Stack
                    direction={'row'}
                    justifyContent={'flex-start'}
                    alignItems={'center'}
                  ></Stack> */}
                <Typography
                  variant="body1"
                  paddingBottom={'3rem'}
                  paddingTop={'1rem'}
                >
                  Highly sophisticated web app connecting users with each other
                  over multiple channels such as text, voice, and video and
                  provide media sharing platform.
                </Typography>
                <List subheader="Features" sx={{ color: 'text.primary' }}>
                  <ListItem sx={{ color: 'text.secondary' }}>
                    Video/Audio Calls
                  </ListItem>
                  <ListItem sx={{ color: 'text.secondary' }}>
                    Text Messages
                  </ListItem>
                  <ListItem sx={{ color: 'text.secondary' }}>
                    Media Sharing
                  </ListItem>
                  <ListItem sx={{ color: 'text.secondary' }}>
                    Granular control of platform behaviour
                  </ListItem>
                  <ListItem sx={{ color: 'text.secondary' }}>
                    Interactive Guided Tour for Onboarding
                  </ListItem>
                </List>
              </Stack>
              <Stack
                direction={'column'}
                justifyContent={'space-between'}
                flex={2}
                height={'100%'}
              >
                <Box
                  component={'img'}
                  src="./images/dialogue/tour_light.png"
                  width={'100%'}
                  height={'100%'}
                  sx={{ objectFit: 'cover' }}
                />
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </ThemeProvider>
  )
}

export default App
