import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 256px) {
    padding: 10px;
  }
`;

export const ModalContainer = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  width: 90%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: scroll;

  @media (min-width: 768px) {
    max-width: 800px;
    width: 70%;
    height: 75%;
    flex-direction: row;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;

  &:hover {
    color: #007bff;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  margin-bottom: 20px;
  max-height: 250px;

  @media (min-width: 768px) {
    width: 40%;
    margin-right: 20px;
    margin-bottom: 0;
    max-height: none;
  }

  @media (max-width: 256px) {
    margin-bottom: 10px;
  }

  /* Add these styles to center the image */
  display: block;
  margin: 0 auto;
`;

export const ProductDetails = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const ProductTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 8px;

  @media (max-width: 256px) {
    font-size: 20px;
    margin-bottom: 5px;
  }
`;

export const ProductDescription = styled.p`
  margin-bottom: 6px;
`;

export const ProductPrice = styled.p`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
  background-color: yellow;
  display: inline-block;
  padding: 5px 5px;

  &::before {
    content: "$";
    color: red;
    text-decoration: line-through;
    margin-right: 5px;
  }

  @media (max-width: 256px) {
    font-size: 16px;
    padding: 5px;
  }
`;

export const ProductDiscountedPrice = styled.p`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
  display: inline-block;
  padding: 5px 10px;

  @media (max-width: 256px) {
    font-size: 114px;
    padding: 5px;
  }
`;

export const ProductDiscountedLabel = styled.span`
  background-color: yellow;
  padding: 5px;
  border-radius: 5px;
  font-size: 14px;
  margin-right: 10px;

  @media (max-width: 256px) {
    font-size: 12px;
    padding: 3px;
  }
`;

export const ProductRating = styled.p`
  font-size: 12px;
  margin-bottom: 10px;

  @media (max-width: 256px) {
    font-size: 10px;
    margin-bottom: 8px;
  }
`;

export const ReviewList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 10px;

  @media (max-width: 256px) {
    margin-top: 5px;
  }
`;

export const Review = styled.li`
  margin-bottom: 10px;

  @media (max-width: 256px) {
    margin-bottom: 8px;
  }
`;

export const ReviewUser = styled.p`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 5px;

  @media (max-width: 256px) {
    font-size: 14px;
    margin-bottom: 3px;
  }
`;

export const ReviewRating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  svg {
    color: gold;
    margin-right: 5px;
  }

  @media (max-width: 256px) {
    margin-bottom: 6px;

    svg {
      font-size: 14px;
      margin-right: 3px;
    }
  }
`;

export const ReviewDescription = styled.p`
  margin-bottom: 5px;

  @media (max-width: 256px) {
    font-size: 12px;
    margin-bottom: 3px;
  }
`;
