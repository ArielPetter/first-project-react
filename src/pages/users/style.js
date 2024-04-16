import styled from "styled-components";
import background from "../../assets/background.svg";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background: url("${background}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100%;
  min-height: 100vh;
  width: 100vw;
`;

export const Image = styled.img`
  margin-top: 40px;
`;

export const ContainerItems = styled.div`
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  backdrop-filter: blur(45px);
  border-radius: 61px 61px 0px 0px;
  padding: 50px 36px;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: calc(100vh - 170px);
`;

export const Button = styled(Link)`
  color: white;
  background: black;
  width: 342px;
  height: 74px;
  border-radius: 14px;
  border: none;
  outline: none;
  margin-top: 120px;
  cursor: pointer;
  //posição da seta
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  img {
    transform: rotateY(180deg);
  }

  //escrita do botão:
  font-size: 18px;

  &:hover {
    opacity: .9;
  }

  &:active {
    opacity: .8;
  }
`;

export const UserList = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  outline: none;
  border: none;
  width: 342px;
  height: 58px;
  margin: 20px 0;

    p {
      color: white;
      font-size: 20px;
      line-height: 28px;
      font-style: normal;
      font-weight: normal;
    }

    button {
      background: none;
      border: none;
      cursor: pointer;
    }
`;