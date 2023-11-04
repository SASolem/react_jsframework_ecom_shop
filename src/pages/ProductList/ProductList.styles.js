import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  width: calc(25% - 20px);
  margin-right: 20px;
  margin-top: 20px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  &:nth-child(4n) {
    margin-right: 0;
  }

  @media (max-width: 1200px) {
    width: calc(33.33% - 20px);

    &:nth-child(4n) {
      margin-right: 20px;
    }

    &:nth-child(3n) {
      margin-right: 0;
    }
  }

  @media (max-width: 992px) {
    width: calc(50% - 20px);

    &:nth-child(3n) {
      margin-right: 20px;
    }

    &:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media (max-width: 576px) {
    width: 100%;
    margin-right: 0;
    margin-top: 0;

    &:nth-child(n) {
      margin-right: 0;
      margin-top: 20px;
    }
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  margin-bottom: 10px;

  @media only screen and (max-width: 256px) {
    height: 80px;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;

  @media only screen and (max-width: 256px) {
    font-size: 16px;
  }
`;

export const CardPrice = styled.p`
  font-weight: bold;
  margin-bottom: 10px;

  @media only screen and (max-width: 256px) {
    font-size: 16px;
  }
`;
export const AddToCartButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 8px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f39c12;
    cursor: pointer;
    transform: scale(1.1);
    color: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 576px) {
    font-size: 16px;
    padding: 8px;
  }
`;

export const CartCount = styled.p`
  font-weight: bold;
  margin-top: 20px;
`;

export const ProductListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 992px) {
    justify-content: center
`;

export const ViewButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 8px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f39c12;
    cursor: pointer;
    transform: scale(1.1);
    color: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 576px) {
    font-size: 16px;
    padding: 8px;
  }
`;
