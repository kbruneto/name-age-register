import styled from "styled-components";
import {Link} from "react-router-dom";

export const Container = styled.div`
  background-color: #464e68;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100vh;
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

  padding: 50px 36px;
  display: flex;
  flex-direction: column;
  height: 70%;
  justify-content: center;
`;

export const InputLabel = styled.p`
  letter-spacing: -0.408px;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;

  color: #eeeeee;

  margin-left: 25px;
  margin-bottom: 2px;
`;

export const Button = styled.button`
  border-radius: 14px;
  background: rgba(0, 0, 0, 0.8);
  width: 342px;
  height: 74px;
  border: none;
  margin-top: 60px;

  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 28px;

  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;

  width: 342px;
  height: 58px;

  border: none;
  outline: none;

  padding-left: 25px;
  margin-bottom: 34px;

  color: #ffffff;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
`;

export const DivGoTo = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: center;
`

export const GoToUsers = styled(Link)`
  text-decoration: none;
  
  color: #ffffff;
  font-weight: bold;

  &:hover{
    opacity: 0.5;
    transition: 0.3s ease;
}
`

export const H1 = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 40px;
  text-align: center;

  color: #ffffff;

  margin-bottom: 80px;
`;
