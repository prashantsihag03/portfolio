import { Box } from "@mui/material";
import * as React from "react";
import StyledComponents from "styled-components";
import QuickIconData from "../../Data/QuickIcons";
import Blogs from "../Blogs";
import ClosingBlock from "../ClosingBlock";
import QuickBioIcons from "../QuickBioIcons";
import QuickBioInfo from "../QuickBioInfo";

const Main = StyledComponents(Box)`
  margin-left: 10%;
  margin-right: 10%;
  @media only screen and (max-width: 800px) {
    margin-left: 3%;
    margin-right: 3%;
  }
`;

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
        }
      })
    }, {
      threshold: 0.2
    })
  );

  return (
    <React.Fragment>
      {/* <WebOnly>
        <NavigationMenu active={active} items={['intro', 'blogs', 'about']}/>
      </WebOnly> */}
      <WebOnly>
        <SocialIcons>
          <QuickBioIcons items={QuickIconData}/>
        </SocialIcons>
      </WebOnly>
      <Main component="main">
        <QuickBioInfo observer={intersectionObserver}/>
        <Blogs observer={intersectionObserver}/>
        <ClosingBlock observer={intersectionObserver}/>
      </Main>
    </React.Fragment>
  );
}

export default App;