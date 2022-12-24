import { SxProps } from '@mui/material';
import { Theme } from '@mui/system';
import StyledComponents from 'styled-components';

export const BlogSection = StyledComponents.section`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  width: 100%;
  margin: auto;
`;

export const listStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  alignItems: "stretch",
  padding: "0.2em",
};
