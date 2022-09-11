import { SvgIcon, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import * as React from "react";
import StyledComponents from "styled-components";

const SectionHeadingDiv = StyledComponents.div`
  display: flex;
  width: 100%;
  color: var(--highlightColor);
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid white;
  margin-bottom: 1vh;
  margin-top: 5vh;
`;

const H2 = StyledComponents.h2`
  text-align: left;
  font-size: 2em;
  font-family: "Philosopher", sans-serif;
  letter-spacing: 1pt;
  width: 100%;
`;

interface SectionHeadingProps {
  heading: string,
  iconComponent: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {muiName: string;},
  iconStyle?: React.CSSProperties
}

const SectionHeading: React.FC<SectionHeadingProps> = ({heading, iconComponent, iconStyle}: SectionHeadingProps) => {
  return (
    <SectionHeadingDiv>
      <H2>{heading}</H2>
      <SvgIcon component={iconComponent} inheritViewBox fontSize="large" style={iconStyle} />
    </SectionHeadingDiv>
  );
};

export default SectionHeading;
