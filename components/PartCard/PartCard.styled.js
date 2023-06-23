import styled from "styled-components";

export const PartCardFlexContainer = styled.article`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  border: 1px solid blue;
  border-radius: 5px;
  margin: 0.5%;
`;

export const PartCardCategory = styled.p`
  border: 1px solid green;
  border-radius: 5px;
  background-color: green;
  margin: 0.5%;
`;
