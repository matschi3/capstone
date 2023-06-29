import styled from "styled-components";
import Image from "next/image";

export const PartCardFlexContainer = styled.article`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  border: 1px solid ${(props) => props.border || "none"};
  border-radius: 5px;
  margin: 0.5%;
`;

export const PartCardCategory = styled.p`
  border: 1px solid black;
  border-radius: 5px;
  background-color: var(--color-category);
  padding: 0.5%;
  margin: 0.5%;
`;

export const PartCardImage = styled(Image)`
  border: 1px solid black;
  border-radius: 5px;
  object-fit: cover;
`;
