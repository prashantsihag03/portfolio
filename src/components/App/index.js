import React, { useEffect, useRef, useState } from "react";
import Blogs from "../Blogs";
import ClosingBlock from "../ClosingBlock";
import Contact from "../Contact";
import Header from "../Header";
import NavigationMenu from "../NavigationMenu";
import ScrollToButton from "../ScrollToButton";

export default function App() {  
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  const blogsRef = useRef("BlogsSection");
  const aboutRef = useRef("AboutSection");
  const contactRef = useRef("ContsctSection");

  // This function will scroll the window to the top 
  const scrollToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth' // for smoothly scrolling
      });
  };

  useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
    }, []);

  return (
      <React.Fragment>
          {showButton && (<ScrollToButton text="&#8679;" onClick={scrollToTop} />)}
          <Header />
          <NavigationMenu blogsRef= {blogsRef} aboutRef= {aboutRef} contactRef={contactRef} />
          <Blogs passedRef={blogsRef} />
          <Contact passedRef={contactRef} />
          <ClosingBlock passedRef={aboutRef} />
      </React.Fragment>
  );
}