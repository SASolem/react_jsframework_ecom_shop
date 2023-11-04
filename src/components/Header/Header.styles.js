import styled, { keyframes } from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const LogoContainer = styled.div`
  h1 {
    margin: 0;
    font-family: "Montserrat Subrayada", sans-serif;
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    animation: ${fadeInAnimation} 1s ease-in-out;

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: burlywood;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
`;

export const CartNavLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: #333;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #000;
  }

  &.active {
    color: #000;
    font-weight: 700;
  }

  span {
    margin-left: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;

    span {
      display: none;
    }
  }
`;

export const ShoppingCartIcon = styled(FaShoppingCart)`
  font-size: 1.5rem;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
