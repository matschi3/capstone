import styled from "styled-components";
import Link from "next/link";

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: var(--color-black);
  border: var(--border-sizeButton) solid var(--color-black);
  border-radius: 5px;
  padding: 0.1rem;
  margin: 0.1rem;
`;
