import styled from "styled-components";

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

export const FilterButton = styled.button`
  font-weight: 200;
  ${(props) => (props.isActiveFilter === true ? "font-weight: bold" : "")}
`;
