export interface ProjectImgMap {
  light: string
  dark: string
  title?: string
}

export interface ProjectData {
  href: string
  logoUrl: string
  skills: Array<string>
  github: string
  themeColor: string
  themeColorDark: string
  bgColor: string
  bgColorDark: string
  description: string
  features: string[]
  demo: {
    media: 'video' | 'img'
    url: string
    thumbnail?: ProjectImgMap
  }
  imgMap: ProjectImgMap[]
  architectureImgMap: ProjectImgMap[]
  demoVideosUrls: ProjectImgMap[]
}

const PROJECT_DIALOGUE: ProjectData = {
  href: 'https://dialogue-083ade5b445a.herokuapp.com',
  logoUrl: './images/allThemedDialogueLogo.svg',
  github: 'https://github.com/prashantsihag03/dialogueV2',
  skills: [
    'React',
    'Typescript',
    'WebRTC',
    'WebSocket',
    'Redux',
    'AWS',
    'Dynamodb',
    'S3',
  ],
  demo: {
    media: 'video',
    url: './images/Demo-GuidedTour-LightMode.mp4',
    thumbnail: {
      light: './images/dialogue_thumbnail_light.jpg',
      dark: './images/dialogue_thumbnail_dark.jpg',
    },
  },
  themeColor: '#2B6BFF',
  themeColorDark: '#2B6BFFCF',
  bgColor: '#becef4',
  bgColorDark: '#192031',
  description:
    ' Highly sophisticated web app connecting users with each other over multiple channels such as text, voice, and video and provide media sharing platform while giving them full control of their data.',
  features: [
    'Video/Audio Calls',
    'Media Sharing with persistent storage in S3',
    'Granular Control of platform behaviour',
    'Interactive Guided Tour for efficiently onboarding new users',
  ],
  demoVideosUrls: [],
  architectureImgMap: [
    {
      dark: './images/dialogue/context_diagram.jpg',
      light: './images/dialogue/context_diagram.jpg',
    },
    {
      dark: './images/dialogue/container_diagram.jpg',
      light: './images/dialogue/container_diagram.jpg',
    },
  ],
  imgMap: [
    {
      light: './images/dialogue/chat_overview.png',
      dark: './images/dialogue/chat_overview.png',
      title: 'overview',
    },
    {
      light: './images/dialogue/tour_light.png',
      dark: './images/dialogue/tour_dark.png',
      title: 'Interactive Guided Tour for Onboarding',
    },
    // {
    //   light: './images/dialogue/message_light.png',
    //   dark: './images/dialogue/message_dark.png',
    //   title: 'Text messages',
    // },
    // {
    //   light: './images/dialogue/media_light.png',
    //   dark: './images/dialogue/media_dark.png',
    //   title: 'Media Sharing',
    // },
    // {
    //   light: './images/dialogue/settings_light.png',
    //   dark: './images/dialogue/settings_dark.png',
    //   title: 'Granular Control of app behaviour',
    // },
  ],
}

export default PROJECT_DIALOGUE
