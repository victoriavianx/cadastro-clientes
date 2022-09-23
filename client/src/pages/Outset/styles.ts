import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #dfff89;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.2rem;
  width: 90%;

  button {
    :nth-child(1) {
      margin-right: 1rem;
    }
  }
`;
