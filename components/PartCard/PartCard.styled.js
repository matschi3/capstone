import styled from "styled-components";
import Image from "next/image";

export const PartCardFlexContainer = styled.article`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  justify-content: ${(props) => props.justify || "center"};
  ${(props) => props.align && `align-items: ${props.align};`}
  border: var(--border-size) solid ${(props) => props.border || "none"};
  border-radius: 5px;
  margin: 0.1rem;
  ${(props) => props.width && `width: ${props.width};`}
  ${(props) => props.minWidth && `min-width: ${props.minWidth};`}
  ${(props) => props.maxWidth && `max-width: ${props.maxWidth};`}
  ${(props) => props.boxShadow && `box-shadow: 5px 5px 0px var(--color-black);`}
  ${(props) => props.isCard && `margin: 0.3rem;`}
  ${(props) =>
    props.cardColor &&
    `background-image: linear-gradient(to left, var(--color-white) -15%, ${props.cardColor} 100%);`}
`;

export const PartCardCategory = styled.p`
  border: var(--border-sizeButton) solid var(--color-black);
  border-radius: 5px;
  background-color: var(--color-category);
  padding: 0.1rem;
  margin: 0.1rem;
  font-weight: 200;
`;

export const PartCardImage = styled(Image)`
  border: var(--border-size) solid var(--color-black);
  border-radius: 5px;
  object-fit: cover;
  margin: 0.1rem;
`;

export const PartCardText = styled.p`
  margin: 0.2rem;
  font-weight: 200;
`;
