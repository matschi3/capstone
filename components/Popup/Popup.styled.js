import styled from "styled-components";

export const StyledPopup = styled.section`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 30vh;
  bottom: 30vh;
  z-index: 1;
  width: 80vw;
  height: 40vh;
  background-color: grey;
  opacity: 0.75;
  border-radius: 25px;
  display: flex;
`;
