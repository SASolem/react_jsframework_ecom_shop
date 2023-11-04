import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const SearchBar = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 18px;
`;

export const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  margin-bottom: 10px;
`;

export const CardTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const CardDescription = styled.p`
  margin-bottom: 10px;
`;

export const CardPrice = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`;
