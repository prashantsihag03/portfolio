import { Chip, Stack, useMediaQuery } from '@mui/material'

export type MediaCategory = 'product' | 'architecture' | 'demo'

interface MediaSwitcher {
  activeMedia: MediaCategory
  productImgsCount: number
  architectureDiagramsCount: number
  demoVideosCount: number
  onClick: (clickedSwitch: MediaCategory) => void
}

const MediaSwitcher: React.FC<MediaSwitcher> = ({
  activeMedia,
  productImgsCount,
  architectureDiagramsCount,
  demoVideosCount,
  onClick,
}: MediaSwitcher) => {
  const isMobile = useMediaQuery('(max-width:1000px)')
  return (
    <Stack
      direction={'row'}
      justifyContent={'center'}
      alignItems={'center'}
      paddingBottom={!isMobile ? '3rem' : '0.5rem'}
      paddingTop={isMobile ? '1rem' : '0'}
      columnGap={0}
    >
      {productImgsCount > 0 ? (
        <Chip
          clickable
          label="Product Images"
          sx={{ borderRadius: 0 }}
          variant={activeMedia === 'product' ? 'filled' : 'outlined'}
          onClick={() => {
            onClick('product')
          }}
        />
      ) : null}
      {architectureDiagramsCount > 0 ? (
        <Chip
          clickable
          label="Architecture Diagrams"
          sx={{ borderRadius: 0 }}
          variant={activeMedia === 'architecture' ? 'filled' : 'outlined'}
          onClick={() => {
            onClick('architecture')
          }}
        />
      ) : null}
      {demoVideosCount > 0 ? (
        <Chip
          clickable
          label="Demo videos"
          sx={{ borderRadius: 0 }}
          variant={activeMedia === 'demo' ? 'filled' : 'outlined'}
          onClick={() => {
            onClick('demo')
          }}
        />
      ) : null}
    </Stack>
  )
}

export default MediaSwitcher
