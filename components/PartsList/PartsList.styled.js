import styled from "styled-components";

export const PartsListContainer = styled.section`
  display: flex;
  flex-direction: column;
  border: var(--border-size) solid var(--color-black);
  border-radius: 5px;
  margin: 0.1rem;
  margin-top: 5em;
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
