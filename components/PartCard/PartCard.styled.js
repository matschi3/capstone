import styled from "styled-components";

export const PartCardFlexContainer = styled.article`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  border: 1px solid blue;
  border-radius: 5px;
  margin: 0.5%;
`;
