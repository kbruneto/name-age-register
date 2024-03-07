import styled from "styled-components";
import {Link} from "react-router-dom";

export const Container = styled.div`
  background-color: #464e68;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100%;
  min-height: 100vh;

`;

export const Image = styled.img`
  margin-top: 30px;
`;

export const ContainerItens = styled.div`
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  border-radius: 61px 61px 31px 31px;

  backdrop-filter: blur(45px);

  padding: 50px 36px;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 650px;
  justify-content: center;
`;

export const H1 = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 40px;
  text-align: center;

  color: #ffffff;

  margin-bottom: 80px;
`;

export const Button = styled(Link)`
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.2);
  width: 342px;
  height: 74px;
  border: 1px solid #ffffff;

  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 28px;

  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  margin-top: 120px;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

  img{
      transform: rotateY(180deg);
  }

  text-decoration: none;
`;

export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;

  width: 342px;
  height: 58px;

  border: none;
  outline: none;

  p {
    color: #ffffff;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
  }
`;

