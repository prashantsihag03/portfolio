import * as React from "react";
import { useEffect, useRef, useState } from "react";
import Blogs from "../Blogs";
import ClosingBlock from "../ClosingBlock";
import Contact from "../Contact";
import Header from "../Header";
import NavigationMenu from "../NavigationMenu";
import ScrollToTopIcon from "../ScrollToButton";

const App: React.FC = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);
  const blogsRef = useRef("BlogsSection");
  const aboutRef = useRef("AboutSection");
  const contactRef = useRef("ContsctSection");

  // This function will scroll the window to the top
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  const onScrollEventHandler = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onScrollEventHandler);
    return () => {
      window.removeEventListener("scroll", onScrollEventHandler);
    }
  }, []);

  return (
    <React.Fragment>
      {showButton && <ScrollToTopIcon onClick={scrollToTop} />}
      <Header />
      <NavigationMenu
        blogsRef={blogsRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />
      <Blogs passedRef={blogsRef} />
      <Contact passedRef={contactRef} />
      <ClosingBlock passedRef={aboutRef} />
    </React.Fragment>
  );
}

export default App;