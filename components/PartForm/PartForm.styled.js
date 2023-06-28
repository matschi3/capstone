import styled from "styled-components";

export const FormContainer = styled.form`
  display: grid;
  gap: 0.5rem;
  margin: 1rem;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 0.5rem;
  font-size: inherit;
  border: solid 1px var(--color-black);
  border-radius: 0.25rem;
`;

export const Select = styled.select`
  padding: 0.5rem;
  font-size: inherit;
  border: solid 1px var(--color-black);
  border-radius: 0.25rem;
`;
