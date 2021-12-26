import React from "react";
import propTypes from 'prop-types';
import styled from 'styled-components';
import truncateText from "../../Utilities/StringUtility";

const OverviewDiv = styled.div`
    font-size: 1em;
    letter-spacing: 0.1em;
    text-align: justify;
`;

const ContentOverview = (props) => {
    return (
        <OverviewDiv>
            <p>
                {truncateText(props.content, props.maxWords)}
            </p>
        </OverviewDiv>
    );
}

ContentOverview.propTypes = {
    content: propTypes.string,
    maxWords: propTypes.number,
}

ContentOverview.defaultProps = {
    content: "N/A",
    maxWords: 50,
}

export default ContentOverview;