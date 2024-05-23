import {
  Box,
  Button,
  Link,
  List,
  ListItem,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material'
import BlogItems from '../../Data/BlogItems'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { InViewSectionProps } from '../commons/types'
import SocialLinks from '../Socials/SocialLinks'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'

const Writings: React.FC<InViewSectionProps> = ({
  inViewCallBack,
}: InViewSectionProps) => {
  const isMobile = useMediaQuery('(max-width:1000px)')
  const { ref, inView } = useInView({
    threshold: 0.7,
  })

  useEffect(() => {
    if (inView) inViewCallBack()
  }, [inView, inViewCallBack])

  return (
    <Stack
      id={'writings'}
      ref={ref}
      width={'100%'}
      padding={isMobile ? '1rem' : '3rem'}
      marginTop={'5rem'}
    >
      <List
        sx={{ textAlign: 'center' }}
        disablePadding
        subheader={
          <Typography
            variant="h2"
            fontSize={'3rem'}
            width={'100%'}
            textAlign={'left'}
          >
            My Writings
          </Typography>
        }
      >
        {BlogItems.map((blog) => {
          return (
            <Link key={blog.heading} href={blog.link} target="_blank">
              <ListItem
                sx={{
                  marginTop: '1rem',
                  padding: '1rem',
                  '&:hover': {
                    cursor: 'pointer',
                    backgroundColor: 'action.hover',
                  },
                }}
                disableGutters
                disablePadding
              >
                <Box>
                  <Typography
                    variant="h3"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      lineHeight: '1.4rem',
                    }}
                  >
                    <LibraryBooksIcon />
                    {blog.heading}
                  </Typography>
                  <Typography
                    variant="body2"
                    fontFamily={'Inter Regular'}
                    sx={{ color: 'text.secondary' }}
                    padding={'0.5rem 1rem'}
                    paddingBottom={0}
                  >
                    {blog.desc}
                  </Typography>
                </Box>
              </ListItem>
            </Link>
          )
        })}
        <Button
          variant="outlined"
          href={SocialLinks.medium.href}
          sx={{ marginTop: '2rem' }}
        >
          More on Medium
        </Button>
      </List>
    </Stack>
  )
}

export default Writings
