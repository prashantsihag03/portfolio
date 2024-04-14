import {
  Box,
  Drawer,
  Link,
  List,
  ListItem,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material'
import React from 'react'
import { NavOptions } from '../commons/types'
import CategoryIcon from '@mui/icons-material/Category'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Socials from '../Socials'

interface NavProps {
  active: NavOptions
}

const Nav: React.FC<NavProps> = ({ active }: NavProps) => {
  const isMobile = useMediaQuery('(max-width:1000px)')
  const [open, setOpen] = React.useState<boolean>(false)

  return (
    <Stack
      width={'100%'}
      direction={'row'}
      justifyContent={'space-between'}
      component={'ol'}
      marginBottom={'1rem'}
      paddingLeft="2.5rem"
      paddingRight="2.5rem"
      paddingTop={'1rem'}
    >
      <Stack
        direction={'row'}
        justifyContent={isMobile ? 'flex-start' : 'space-between'}
        alignItems={isMobile ? 'center' : 'flex-end'}
        component={'ol'}
        flex={1}
      >
        <Link href="/">
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
        </Link>

        {!isMobile ? (
          <>
            <Link href="#projects">
              <Typography
                component={'li'}
                variant="body1"
                position={'relative'}
                color={active === 'projects' ? 'secondary' : undefined}
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
            </Link>
            <Link href="#about">
              <Typography
                component={'li'}
                variant="body1"
                position={'relative'}
                color={active === 'about' ? 'secondary' : undefined}
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
            </Link>
            <Link href="#writings">
              <Typography
                component={'li'}
                variant="body1"
                position={'relative'}
                color={active === 'writings' ? 'secondary' : undefined}
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
            </Link>
            <Link href="#contact">
              <Typography
                component={'li'}
                variant="body1"
                position={'relative'}
                color={active === 'contact' ? 'secondary' : undefined}
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
                Contact
              </Typography>
            </Link>
          </>
        ) : null}
      </Stack>
      {isMobile ? (
        <>
          <CategoryIcon
            onClick={() => {
              setOpen(true)
            }}
            sx={{
              fontSize: '3rem',
              color: 'text.secondary',
              '&:hover': { backgroundColor: 'transparent', cursor: 'pointer' },
            }}
          />

          <Drawer
            open={open}
            anchor="right"
            PaperProps={{
              sx: {
                width: '90%',
                backgroundColor: 'background.paper',
                backgroundImage: 'none',
              },
            }}
            onClose={() => {
              setOpen(false)
            }}
          >
            <Stack
              justifyContent={'space-between'}
              width={'100%'}
              height={'100%'}
            >
              <List
                subheader={
                  <Typography
                    variant="body2"
                    fontSize={'2rem'}
                    sx={{
                      backgroundColor: 'background.default',
                      padding: '1rem',
                    }}
                  >
                    Sections
                  </Typography>
                }
                sx={{ padding: '3rem' }}
              >
                <Link href="#projects">
                  <ListItem
                    onClick={() => {
                      setOpen(false)
                    }}
                    sx={{ paddingTop: '2rem' }}
                  >
                    <Typography variant="body2" fontSize={'1.2rem'}>
                      - Projects
                    </Typography>
                  </ListItem>
                </Link>
                <Link href="#about">
                  <ListItem
                    onClick={() => {
                      setOpen(false)
                    }}
                    sx={{ paddingTop: '2rem' }}
                  >
                    <Typography variant="body2" fontSize={'1.2rem'}>
                      - About
                    </Typography>
                  </ListItem>
                </Link>
                <Link href="#writings">
                  <ListItem
                    onClick={() => {
                      setOpen(false)
                    }}
                    sx={{ paddingTop: '2rem' }}
                  >
                    <Typography variant="body2" fontSize={'1.2rem'}>
                      - Writings
                    </Typography>
                  </ListItem>
                </Link>
              </List>
              <Box
                margin={'3rem'}
                padding={'0.5rem'}
                sx={{
                  backgroundColor: 'background.default',
                  '&:hover': { cursor: 'pointer' },
                }}
                onClick={() => {
                  setOpen(false)
                }}
              >
                <ChevronRightIcon
                  sx={{
                    fontSize: '5rem',
                    '&:hover': { backgroundColor: 'transparent' },
                  }}
                />
              </Box>
            </Stack>
          </Drawer>
        </>
      ) : (
        <Socials />
      )}
    </Stack>
  )
}

export default Nav
