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