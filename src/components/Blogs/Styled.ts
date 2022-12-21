import StyledComponents from 'styled-components';

export const BlogSection = StyledComponents.section`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  color: var(--color);
  width: 100%;
  margin: auto;
  font-family: var(--fontFamily), serif;  
`;

export const Ul = StyledComponents.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: stretch;
  padding: 0.2em;
`;
