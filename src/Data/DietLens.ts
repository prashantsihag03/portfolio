import { ProjectData } from './Projects'

const PROJECT_DIET_LENS: ProjectData = {
  title: 'Diet Lens',
  href: 'https://diet-lens-4ac25c71bf32.herokuapp.com/',
  github: 'https://github.com/prashantsihag03/diet-lens',
  skills: [
    'AI',
    'LLM',
    'Spring-boot',
    'React',
    'Java',
    'JavaScript',
    'Typescript',
    'Vite.js',
    'OpenAI',
  ],
  themeColor: '',
  themeColorDark: '',
  bgColor: '#becef4',
  bgColorDark: '#192031',
  description:
    "AI powered web app, built using Java's Springboot and React, integrating LLMs to scan any food package and get health information of its ingredients in real-time.",
  features: [],
  demoVideosUrls: [],
  architectureImgMap: [],
  imgMap: [
    {
      light: './images/dietLens/analyzerResult.png',
      dark: './images/dietLens/analyzerResult.png',
      title: 'Diet Lens AI Ingredient Analyzer Result page',
    },
    {
      light: './images/dietLens/home.png',
      dark: './images/dietLens/home.png',
      title: 'Diet Lens AI Ingredient Analyzer Home page',
    },
  ],
}

export default PROJECT_DIET_LENS
