import styled from "styled-components";
import Image from "next/image";

export const PartCardFlexContainer = styled.article`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  justify-content: ${(props) => props.justify || "center"};
  border: var(--border-size) solid ${(props) => props.border || "none"};
  border-radius: 5px;
  margin: 0.1rem;
  ${(props) => props.width && `width: ${props.width};`}
`;

export const PartCardCategory = styled.p`
  border: var(--border-sizeButton) solid var(--color-black);
  border-radius: 5px;
  background-color: var(--color-category);
  padding: 0.1rem;
  margin: 0.1rem;
`;

export const PartCardImage = styled(Image)`
  border: var(--border-size) solid var(--color-black);
  border-radius: 5px;
  object-fit: cover;
`;

export const PartCardText = styled.p`
  margin: 0.2rem;
`;
