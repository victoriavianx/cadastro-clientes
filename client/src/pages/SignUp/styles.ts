import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const Box = styled.div`
  display: none;

  @media (min-width: 900px) {
    visibility: visible;
    width: 50%;
    background-color: #a9eb4e;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 50%;
      height: 50%;
      max-width: 400px;
      max-height: 450px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 900px) {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Form = styled.form`
  width: 70%;
  max-width: 500px;
`;

export const FullName = styled.div`
  display: flex;
  flex-direction: row;

  div {
    :nth-child(1) {
      margin-right: 1.5rem;
    }
  }
`;

export const BoxButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export const Link = styled.a`
  margin-left: 0.3rem;
  color: #73d713;

  :hover {
    color: #a9eb4e;
  }
`;
