import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.section`
  width: 100%;
  margin: auto;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3A3A3A;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  width: 100%;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3A3A3A;

    &::placeholder {
      color: #A8A8B3
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #FFF;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
    background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.ul`
  margin-top: 80px;
  max-width: 700px;

  li {
    background: #FFF;
    width: 100%;
    border-radius: 5px;
    padding: 24px;
    transition: transform 0.2s;

    & + li {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    a {
      text-decoration: none;
      display: flex;
      align-items: center;
    }

    div {
      margin-left: 16px;

      strong {
        font-size: 20px;
        color: #3D3D4D;
      }

      p {
        margin-top: 4px;
        font-size: 18px;
        color: #A8A8B3;
      }
    }

    svg {
      margin-left: auto;
      color: #CBCBD6;
      font-size: 32px;
    }
  }
`;
