function App() {
  return (
    <main className="flex min-h-screen m-0 m-auto max-w-[1024px] flex-col items-start justify-center py-10 px-6 bg-white dark:bg-black">
      <h1 className="w-full text-3xl font-semibold text-black dark:text-zinc-50">
        Prashant Sihag
      </h1>
      <p className="text-zinc-700 dark:text-zinc-300 my-2">
        A full stack developer with almost 5 years experience crafting robust
        web applications. My proficiency extends into cloud computing with AWS,
        automation scripting with Python, and CI/CD development with Gitlab CI
        and buildkite.
      </p>
      <p className="font-light text-zinc-700 dark:text-zinc-300 my-2">
        Please feel free to reach out to me on{" "}
        <a
          className="text-blue-500 "
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
      <h2 className="w-full text-2xl mt-10 font-semibold text-black dark:text-zinc-50">
        Projects
      </h2>
      <div className="w-full flex flex-col gap-0 m-5">
        <h3 className="text-xl font-medium text-black mb-1">
          Nutryq - AI Powered Nutrition management mobile app
        </h3>
        <p className="text-zinc-700 dark:text-zinc-300">
          AI-Powered Mobile app built with React Native providing features to
          bring convenience and intelligent insights to daily nutrition and food
          tracking. It provides features that helps users in deciding which food
          product to buy, track and gain insights into consumed nutrients and
          ingredients, and track body changes over time.
        </p>
        <a
          className="w-auto my-2 underline underline-offset-6 hover:text-blue-500"
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download on IOS App Store
        </a>
      </div>
      <div className="w-full flex flex-col gap-0 m-5">
        <h3 className="text-xl font-medium text-black mb-1">
          Dialogue - Chat Application
        </h3>
        <p className="text-zinc-700 dark:text-zinc-300">
          A sophisticated web app connecting users with each other over multiple
          channels such as text, voice, and video and provide media sharing
          platform.
        </p>
        <a
          className="w-auto my-2 underline underline-offset-6 hover:text-blue-500"
          href="https://github.com/prashantsihag03/dialogueV2"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Github
        </a>
      </div>
      <div className="w-full flex flex-col gap-0 m-5">
        <h3 className="text-xl font-medium text-black mb-1">Github Profiler</h3>
        <p className="text-zinc-700 dark:text-zinc-300">
          Built using Next.js, it presents a user&apos;s github profile with
          additional information and statistics in a visually appealing way.
        </p>
        <a
          className="w-auto my-2 underline underline-offset-6 hover:text-blue-500"
          href="https://github.com/prashantsihag03/github-profiler"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Github
        </a>
      </div>
      <div className="w-full flex flex-col gap-0 m-5">
        <h3 className="text-xl font-medium text-black mb-1">Auto Wallpaper</h3>
        <p className="text-zinc-700 dark:text-zinc-300">
          Script that brings a freshness to your Mac by creating schedules using
          Python and LaunchCTL to randomly update your MacOS wallpaper from a
          directory of images.
        </p>
        <a
          className="w-auto my-2 underline underline-offset-6 hover:text-blue-500"
          href="https://github.com/prashantsihag03/scriptarium/tree/main/auto-wallpaper"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Github
        </a>
      </div>

      <h2 className="w-full text-2xl mt-10 font-semibold text-black dark:text-zinc-50">
        Blogs
      </h2>
      <div className="w-full flex flex-col gap-0 mx-5 my-3">
        <h3>
          <a
            className="w-auto my-2 underline underline-offset-6 hover:text-blue-500"
            href="https://prashant-sihag.medium.com/implementing-real-time-interactivity-into-your-react-app-websocket-06debc669ef1"
            target="_blank"
          >
            Implementing Real-time interactivity into your React App - WebSocket
          </a>
        </h3>
      </div>
      <div className="w-full flex flex-col gap-0 mx-5 my-3">
        <h3>
          <a
            className="w-auto my-2 underline underline-offset-6 hover:text-blue-500"
            href="https://prashant-sihag.medium.com/brief-explanation-of-webrtc-and-how-its-components-work-together-to-provide-real-time-communication-83cf4d2315da"
            target="_blank"
          >
            Simplifying WebRTC: A Web technology for Real Time Communication
          </a>
        </h3>
      </div>
      <div className="w-full flex flex-col gap-0 mx-5 my-3">
        <h3>
          <a
            className="w-auto my-2 underline underline-offset-6 hover:text-blue-500"
            href="https://medium.com/analytics-vidhya/awss-dynamodb-and-how-does-it-work-357fde5995cb"
            target="_blank"
          >
            AWS DynamoDB and How does it work?
          </a>
        </h3>
      </div>
      <div className="w-full flex flex-col gap-0 mx-5 my-3">
        <h3>
          <a
            className="w-auto my-2 underline underline-offset-6 hover:text-blue-500"
            href="https://medium.com/analytics-vidhya/scientific-method-for-data-analysis-41798626371a"
            target="_blank"
          >
            Scientific Method for Data Analysis
          </a>
        </h3>
      </div>
    </main>
  );
}

export default App;
