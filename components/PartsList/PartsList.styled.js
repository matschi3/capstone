import styled from "styled-components";

export const PartsListContainer = styled.section`
  display: flex;
  flex-direction: column;
  border: var(--border-size) solid
    ${(props) => props.borderColor || "var(--color-black)"};
  border-radius: 5px;
  margin: 0.1rem;
  margin-top: 5em;
  margin-bottom: 2.5em;
`;
