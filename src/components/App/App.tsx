import {
  Box,
  Stack,
  SxProps,
  ThemeProvider,
  debounce,
  useMediaQuery,
} from '@mui/material'
import * as React from 'react'
import { Theme } from '@mui/system'
import useCreateTheme from '../../hooks/useCreateTheme'
import Project from '../Project/Project'
import Hero from '../Hero/Hero'
import Nav from '../Nav/Nav'
import About from '../About/About'
import Writings from '../Writings/Writings'
import Footer from '../Footer/Footer'
import { NavOptions } from '../commons/types'
import Contact from '../Contact/Contact'
import SmallProject from '../Project/SmallProject'

const contentStyles: SxProps<Theme> = {
  boxSizing: 'border-box',
  backgroundColor: 'background.default',
}

const App: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { theme, displayMode, toggleDisplayMode } = useCreateTheme()
  const isMobile = useMediaQuery('(max-width:1000px)')
  const [activeNav, setActiveNav] = React.useState<NavOptions>('intro')

  const updateNavValue = debounce((value: NavOptions) => {
    setActiveNav(value)
  }, 300)

  return (
    <ThemeProvider theme={theme}>
      <Stack
        direction={'column'}
        width={'100%'}
        margin={'auto'}
        height={'100dvh'}
        position={'relative'}
        overflow={'hidden'}
        justifyContent={'flex-start'}
        id="content"
        sx={contentStyles}
      >
        <Nav active={activeNav} />
        <Box
          overflow={'auto'}
          height={'90vh'}
          position="relative"
          width={'100%'}
          paddingLeft={isMobile ? '1.5rem' : '2.5rem'}
          paddingRight={isMobile ? '1.5rem' : '2.5rem'}
          paddingTop={'1rem'}
          paddingBottom={'1rem'}
          marginBottom={'2rem'}
          sx={{
            scrollBehavior: 'smooth',
          }}
        >
          <Hero
            inViewCallBack={() => {
              updateNavValue('intro')
            }}
          />
          <Project
            inViewCallBack={() => {
              updateNavValue('projects')
            }}
          />
          <Stack
            direction={'row'}
            justifyContent={'center'}
            width={'100%'}
            columnGap={2}
            flexWrap={'wrap'}
          >
            <SmallProject
              title="Github Profiler"
              description="Built using Next.js, this app takes a Github username and displays their Github profile with additional information and statistics in a visually appealing way."
              type="Personal"
              subType="Small Web App"
              overviewImgSrc="./images/githubProfiler/main.png"
              githubLink="https://github.com/prashantsihag03/github-profiler"
              liveLink="https://prashantsihag-github-profiler.vercel.app/"
              skills={[
                'Next.js',
                'TailwindCSS',
                'Chart.js',
                'NextUI',
                'Octokit.js',
              ]}
            />
            <SmallProject
              title="Portfolio Site"
              description="Built using React, Typescript and Material UI, its the very website you are seeing this on."
              type="Personal"
              subType="Small Web App"
              overviewImgSrc="./images/portfolio/main.png"
              githubLink="https://github.com/prashantsihag03/portfolio"
              liveLink="https://www.prashantsihag.com/"
              skills={[
                'React.js',
                'Typescript',
                'Material UI',
                'Axios',
                'Intersection Observer API',
              ]}
            />
          </Stack>
          <Stack
            direction={'row'}
            justifyContent={'center'}
            width={'100%'}
            columnGap={2}
            flexWrap={'wrap'}
          >
            <SmallProject
              title="Auto Wallpaper"
              description="Using Python and MacOS's LaunchCTL, this script brings a freshness to your Mac by creating schedules to randomly update your MacOS wallpaper from a list of images."
              type="Personal"
              subType="CLI Tool"
              githubLink="https://github.com/prashantsihag03/scriptarium/tree/main/auto-wallpaper"
              skills={['Command Line Tool', 'Python', 'Schedule', 'appscript']}
            />
          </Stack>

          <About
            inViewCallBack={() => {
              updateNavValue('about')
            }}
          />
          <Writings
            inViewCallBack={() => {
              updateNavValue('writings')
            }}
          />
          <Contact
            inViewCallBack={() => {
              updateNavValue('contact')
            }}
          />
          <Footer />
        </Box>
      </Stack>
    </ThemeProvider>
  )
}

export default App
