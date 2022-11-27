import * as React from "react";
import StyledComponents from "styled-components";
import QuickIconData from "../../Data/QuickIcons";
import Blogs from "../Blogs";
import ClosingBlock from "../ClosingBlock";
import NavigationMenu from "../NavigationMenu";
import QuickBioIcons from "../QuickBioIcons";
import QuickBioInfo from "../QuickBioInfo";

const SocialIcons = StyledComponents.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const WebOnly = StyledComponents.div`
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;


const App: React.FC = () => {
  const [active, setActive] = React.useState<string>("intro");
  const [intersectionObserver] = React.useState<IntersectionObserver>(
    new IntersectionObserver((entries)=>{ 
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
          console.log(entry.target.id + " is intersecting!");
        }
      })
    }, {
      threshold: 0.2
    })
  );

  return (
    <React.Fragment>
      <WebOnly>
        <NavigationMenu active={active} items={['intro', 'blogs', 'about']}/>
      </WebOnly>
      <WebOnly>
        <SocialIcons>
          <QuickBioIcons items={QuickIconData}/>
        </SocialIcons>
      </WebOnly>
      <main style={{marginLeft: "10%", marginRight: "10%"}}>
        <QuickBioInfo observer={intersectionObserver}/>
        <Blogs observer={intersectionObserver}/>
        <ClosingBlock observer={intersectionObserver}/>
      </main>
    </React.Fragment>
  );
}

export default App;