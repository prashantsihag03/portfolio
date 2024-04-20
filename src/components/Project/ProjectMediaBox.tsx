import { Box, Stack } from '@mui/material'
import FullscreenIcon from '@mui/icons-material/Fullscreen'
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useState } from 'react'
import { ProjectImgMap } from '../../Data/Projects'
import MediaSwitcher, { MediaCategory } from './MediaSwitcher'

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
  const [mediaCategory, setMediaCategory] = useState<MediaCategory>('product')

  const [totalImages] = useState<number>(
    productImgUrls.length +
      architectureDiagramUrls.length +
      demoVideoUrls.length
  )

  const getActiveImg = () => {
    if (activeImgIndex + 1 <= productImgUrls.length) {
      return productImgUrls[activeImgIndex].light
    }
    if (
      activeImgIndex + 1 <=
      productImgUrls.length + architectureDiagramUrls.length
    ) {
      return architectureDiagramUrls[activeImgIndex - productImgUrls.length]
        .light
    }
    if (
      activeImgIndex + 1 <=
      productImgUrls.length +
        architectureDiagramUrls.length +
        demoVideoUrls.length
    ) {
      return demoVideoUrls[
        activeImgIndex -
          (productImgUrls.length + architectureDiagramUrls.length)
      ].dark
    }
  }

  const mediaCategoryByImgIndex = (index: number): MediaCategory => {
    if (index + 1 <= productImgUrls.length) {
      return 'product'
    }
    if (index + 1 <= productImgUrls.length + architectureDiagramUrls.length) {
      return 'architecture'
    }
    if (
      index + 1 <=
      productImgUrls.length +
        architectureDiagramUrls.length +
        demoVideoUrls.length
    ) {
      return 'demo'
    }
    return 'product'
  }

  const nextMedia = () => {
    if (activeImgIndex + 1 === totalImages) {
      setActiveImgIndex(0)
      setMediaCategory('product')
    } else {
      setActiveImgIndex(activeImgIndex + 1)
      const mediaCategory = mediaCategoryByImgIndex(activeImgIndex + 1)
      setMediaCategory(mediaCategory)
    }
  }

  const prevMedia = () => {
    if (activeImgIndex === 0) {
      setActiveImgIndex(totalImages - 1)
      setMediaCategory(mediaCategoryByImgIndex(totalImages - 1))
    } else {
      setActiveImgIndex(activeImgIndex - 1)
      setMediaCategory(mediaCategoryByImgIndex(activeImgIndex - 1))
    }
  }

  const mediaSwitchClickHandler = (clickedSwitch: MediaCategory) => {
    if (clickedSwitch === 'product') {
      setMediaCategory('product')
      setActiveImgIndex(0)
    }
    if (clickedSwitch === 'architecture') {
      setMediaCategory('architecture')
      setActiveImgIndex(productImgUrls.length)
    }
    if (clickedSwitch === 'demo') {
      setMediaCategory('demo')
      setActiveImgIndex(architectureDiagramUrls.length)
    }
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
        height={'40vh'}
        sx={{ objectFit: 'contain' }}
      />
      <Stack
        direction={'row'}
        width={'40%'}
        justifyContent={'space-around'}
        alignItems={'center'}
        paddingBottom={'1rem'}
        paddingTop={'1rem'}
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
              maxHeight={'80dvh'}
              sx={{
                objectFit: 'contain',
                paddingTop: '1rem',
              }}
            />
            <Stack
              direction={'row'}
              width={'40%'}
              justifyContent={'space-around'}
              alignItems={'center'}
              paddingTop={'1rem'}
              paddingBottom={'1rem'}
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
            <MediaSwitcher
              activeMedia={mediaCategory}
              architectureDiagramsCount={architectureDiagramUrls.length}
              demoVideosCount={demoVideoUrls.length}
              productImgsCount={productImgUrls.length}
              onClick={mediaSwitchClickHandler}
            />
          </Stack>
        ) : null}
        {totalImages > 1 ? <ArrowForwardIcon onClick={nextMedia} /> : null}
      </Stack>
      <MediaSwitcher
        activeMedia={mediaCategory}
        architectureDiagramsCount={architectureDiagramUrls.length}
        demoVideosCount={demoVideoUrls.length}
        productImgsCount={productImgUrls.length}
        onClick={mediaSwitchClickHandler}
      />
    </Stack>
  )
}

export default ProjectMediaBox
