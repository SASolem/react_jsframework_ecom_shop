import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #333;
  color: #fff;
`;

export const ScrollButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #0074d9;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #001f3f;
  }
`;
