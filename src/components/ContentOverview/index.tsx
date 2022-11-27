import * as React from "react";
import StyledComponents from 'styled-components';
import truncateText from "../../Utilities/StringUtility";

const OverviewDiv = StyledComponents.div`
  font-size: 1em;
  letter-spacing: 0.1em;
  text-align: justify;
  color: grey;
`;

interface ContentOverviewProps {
  content: string,
  maxWords?: number,
}

const ContentOverview: React.FC<ContentOverviewProps> = (props) => {
  return (
    <OverviewDiv>
      <p>
        {truncateText(props.content, props.maxWords || 50)}
      </p>
    </OverviewDiv>
  );
}

export default ContentOverview;