import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 1024px;
  background-color: #c4f56c;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  button {
    height: 35px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
