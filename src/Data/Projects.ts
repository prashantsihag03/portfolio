export interface ProjectImgMap {
  light: string
  dark: string
  title?: string
}

export interface ProjectData {
  title: string
  href: string
  logoUrl?: string
  skills: Array<string>
  github: string
  themeColor: string
  themeColorDark: string
  bgColor: string
  bgColorDark: string
  description: string
  features: string[]
  demo?: {
    media: 'video' | 'img'
    url: string
    thumbnail?: ProjectImgMap
  }
  imgMap: ProjectImgMap[]
  architectureImgMap: ProjectImgMap[]
  demoVideosUrls: ProjectImgMap[]
}

const PROJECT_DIALOGUE: ProjectData = {
  title: 'Dialogue',
  href: 'https://dialogue-083ade5b445a.herokuapp.com',
  logoUrl: './images/allThemedDialogueLogo.svg',
  github: 'https://github.com/prashantsihag03/dialogueV2',
  skills: [
    'React',
    'Typescript',
    'Node.js',
    'Express.js',
    'WebRTC',
    'WebSocket',
    'Redux',
    'AWS Dynamodb',
    'AWS S3',
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
    ' Highly sophisticated and responsive web app connecting users with each other over multiple channels such as text, voice, and video and provide media sharing platform while giving them full control of their data.',
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
      light: './images/dialogue/login_light.png',
      dark: './images/dialogue/login_light.png',
      title: 'login page',
    },
    {
      light: './images/dialogue/signup_light.png',
      dark: './images/dialogue/signup_light.png',
      title: 'signup page',
    },
    {
      light: './images/dialogue/mobile_auth_light.png',
      dark: './images/dialogue/mobile_auth_light.png',
      title: 'mobile auth pages',
    },
    {
      light: './images/dialogue/chat_overview.png',
      dark: './images/dialogue/chat_overview.png',
      title: 'overview',
    },
    {
      light: './images/dialogue/mobile_chats_light.png',
      dark: './images/dialogue/mobile_chats_light.png',
      title: 'mobile auth pages',
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
