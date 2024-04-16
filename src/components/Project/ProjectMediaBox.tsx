import { Box, Button, Stack } from '@mui/material'
import FullscreenIcon from '@mui/icons-material/Fullscreen'
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useState } from 'react'
import { ProjectImgMap } from '../../Data/Projects'

interface ProjectMediaBoxProps {
  productImgUrls: ProjectImgMap[]
  architectureDiagramUrls: ProjectImgMap[]
  demoVideoUrls: ProjectImgMap[]
}

const ProjectMediaBox: React.FC<ProjectMediaBoxProps> = ({
  productImgUrls,
  architectureDiagramUrls,
  demoVideoUrls,
}: ProjectMediaBoxProps) => {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false)
  const [activeImgIndex, setActiveImgIndex] = useState<number>(0)
  const [totalImages] = useState<number>(
    productImgUrls.length +
      architectureDiagramUrls.length +
      demoVideoUrls.length
  )

  const getActiveImg = () => {
    if (activeImgIndex + 1 <= productImgUrls.length) {
      console.log('rendering product img')
      return productImgUrls[activeImgIndex].light
    }
    if (
      activeImgIndex + 1 <=
      productImgUrls.length + architectureDiagramUrls.length
    ) {
      console.log('rendering arch img', activeImgIndex)

      return architectureDiagramUrls[activeImgIndex - productImgUrls.length]
        .light
    }
    if (
      activeImgIndex + 1 <=
      productImgUrls.length +
        architectureDiagramUrls.length +
        demoVideoUrls.length
    ) {
      console.log('rendering demo img')

      return demoVideoUrls[
        activeImgIndex -
          (productImgUrls.length + architectureDiagramUrls.length)
      ].dark
    }
  }

  const nextMedia = () => {
    if (activeImgIndex + 1 === totalImages) {
      setActiveImgIndex(0)
    } else {
      console.log('setting img to index', activeImgIndex + 1)
      setActiveImgIndex(activeImgIndex + 1)
    }
  }

  const prevMedia = () => {
    if (activeImgIndex === 0) setActiveImgIndex(totalImages - 1)
    else setActiveImgIndex(activeImgIndex - 1)
  }

  return (
    <Stack
      direction={'column'}
      justifyContent={'space-between'}
      alignItems={'center'}
      flex={1}
      paddingTop={'1rem'}
      height={'100%'}
    >
      <Box
        component={'img'}
        src={getActiveImg()}
        width={'100%'}
        height={'100%'}
        maxHeight={'50vh'}
        sx={{ objectFit: 'contain' }}
      />
      <Stack
        direction={'row'}
        width={'40%'}
        justifyContent={'space-around'}
        alignItems={'center'}
        paddingBottom={'1rem'}
        columnGap={1}
      >
        {totalImages > 1 ? <ArrowBackIcon onClick={prevMedia} /> : null}
        <FullscreenIcon
          onClick={() => {
            setIsFullScreen(true)
          }}
        />
        {isFullScreen ? (
          <Stack
            justifyContent={'center'}
            alignItems={'center'}
            width={'100%'}
            height={'100%'}
            position={'fixed'}
            top={0}
            left={0}
            sx={{ backgroundColor: 'black', zIndex: 100 }}
          >
            <Box
              component={'img'}
              src={getActiveImg()}
              width={'80%'}
              height={'80%'}
              sx={{ objectFit: 'contain' }}
            />
            <Stack
              direction={'row'}
              width={'40%'}
              justifyContent={'space-around'}
              alignItems={'center'}
              paddingTop={'1rem'}
            >
              {totalImages > 1 ? <ArrowBackIcon onClick={prevMedia} /> : null}
              <FullscreenExitIcon
                onClick={() => {
                  setIsFullScreen(false)
                }}
              />
              {totalImages > 1 ? (
                <ArrowForwardIcon onClick={nextMedia} />
              ) : null}
            </Stack>
          </Stack>
        ) : null}
        {totalImages > 1 ? <ArrowForwardIcon onClick={nextMedia} /> : null}
      </Stack>
      <Stack
        direction={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        paddingBottom={'3rem'}
        columnGap={1}
      >
        {productImgUrls.length > 0 ? (
          <Button
            variant="text"
            sx={{ fontSize: '0.7rem' }}
            onClick={() => {
              if (productImgUrls.length > 0) {
                setActiveImgIndex(0)
              }
            }}
          >
            App Images ({productImgUrls.length})
          </Button>
        ) : null}
        {architectureDiagramUrls.length > 0 ? (
          <Button
            variant="text"
            sx={{ fontSize: '0.7rem' }}
            onClick={() => {
              if (architectureDiagramUrls.length > 0)
                setActiveImgIndex(productImgUrls.length)
            }}
          >
            Architecture Diagrams ({architectureDiagramUrls.length})
          </Button>
        ) : null}
        {demoVideoUrls.length > 0 ? (
          <Button
            variant="text"
            sx={{ fontSize: '0.7rem' }}
            onClick={() => {
              if (demoVideoUrls.length > 0)
                setActiveImgIndex(architectureDiagramUrls.length)
            }}
          >
            Demo Videos ({demoVideoUrls.length})
          </Button>
        ) : null}
      </Stack>
    </Stack>
  )
}

export default ProjectMediaBox
