import styled from "styled-components";

export const Button = styled.button`
  color: white;
  background: black;
  margin-top: 120px;
  width: 342px;
  height: 74px;
  border-radius: 14px;
  border: none;
  outline: none;
  cursor: pointer;
  //posição da seta
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  //escrita do botão:
  font-size: 18px;
  margin-top: ${(props) => (props.isBack ? "120px" : "none")};

  img {
    transform: ${(props) => (props.isBack && "rotateY(180deg)")}
  };

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.8;
  }
`;
