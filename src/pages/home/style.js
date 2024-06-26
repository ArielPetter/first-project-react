import styled from "styled-components";
import background from "../../assets/background1.svg";
// import { Link } from "react-router-dom";

export const Container = styled.div`
  background: url("${background}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100vh;
  width: 100vw;
`;

export const Image = styled.img`
  margin-top: 40px;
`;

export const InputLabel = styled.p`
  color: white;
  padding-left: 25px;
  width: 47px;
  height: 22px;
  line-height: 22px;
  font-size: 20px;
  margin-bottom: 3px;
  font-weight: normal;
`;

export const Input = styled.input`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: rgba(255, 255, 255, 0.25);
  outline: none;
  border: none;
  border-radius: 14px;
  width: 342px;
  height: 58px;
  padding-left: 25px;
  margin-bottom: 10px;
  color: white;
  -moz-appearance: textfield; /* Firefox */
  appearance: textfield;
  //escrita no input:
  font-size: 20px;
  line-height: 28px;
  font-weight: normal;
`;
