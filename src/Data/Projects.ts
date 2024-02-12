interface ProjectImgMap {
  light: string;
  dark: string;
}

export interface ProjectData {
  href: string;
  logoUrl: string;
  github: string;
  themeColor: string;
  themeColorDark: string;
  bgColor: string;
  bgColorDark: string;
  description: string;
  features: string[];
  demo: {
    media: "video" | "img";
    url: string;
    thumbnail?: ProjectImgMap;
  };
  imgMap: {
    [index: string]: ProjectImgMap;
  };
}

const PROJECT_DIALOGUE: ProjectData = {
  href: "https://dialogue-083ade5b445a.herokuapp.com",
  logoUrl: "./images/allThemedDialogueLogo.svg",
  github: "https://github.com/prashantsihag03/dialogueV2",
  demo: {
    media: "video",
    url: "./images/Demo-GuidedTour-LightMode.mp4",
    thumbnail: {
      light: "./images/dialogue_thumbnail_light.jpg",
      dark: "./images/dialogue_thumbnail_dark.jpg",
    },
  },
  themeColor: "#2B6BFF",
  themeColorDark: "#2B6BFFCF",
  bgColor: "#becef4",
  bgColorDark: "#192031",
  description:
    " Highly sophisticated web app connecting users with each other over multiple channels such as text, voice, and video and provide media sharing platform while giving them full control of their data.",
  features: [
    "Video/Audio Calls",
    "Text messages",
    "Interactive Guided Tour for Onboarding",
    "Media Sharing",
    "Granular Control of app behaviour",
  ],
  imgMap: {
    overview: {
      light: "./images/dialogue_chat_light.png",
      dark: "./images/dialogue_chat_light.png",
    },
    "Interactive Guided Tour for Onboarding": {
      light: "./images/dialogue/tour_light.png",
      dark: "./images/dialogue/tour_dark.png",
    },
    "Text messages": {
      light: "./images/dialogue/message_light.png",
      dark: "./images/dialogue/message_dark.png",
    },
    "Media Sharing": {
      light: "./images/dialogue/media_light.png",
      dark: "./images/dialogue/media_dark.png",
    },
    "Granular Control of app behaviour": {
      light: "./images/dialogue/settings_light.png",
      dark: "./images/dialogue/settings_dark.png",
    },
  },
};

export default PROJECT_DIALOGUE;
