import styled from "styled-components";

export const PartsListContainer = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px;
  margin: 0.5%;
  margin-top: 5em;
`;

export const StyledHeading = styled.h1`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  color: blue;
  background-color: white;
`;

export const FilterContainer = styled.section`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100vw;
  top: 2em;
`;

export const FilterButtonContainer = styled.section`
  display: flex;
  white-space: nowrap;
  overflow-x: scroll;
  margin: 0.05em;
`;
