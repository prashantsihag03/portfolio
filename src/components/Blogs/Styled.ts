import StyledComponents from 'styled-components';

export const BlogSection = StyledComponents.section`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  color: white;
  width: 100%;
  margin: auto;
  font-family: "Roboto Slab", serif;  
`;

export const Ul = StyledComponents.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: stretch;
  padding: 0.2em;
`;
