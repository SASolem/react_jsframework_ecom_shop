import styled from "styled-components";

export const FormContainer = styled.div`
  margin: 2rem auto;
  margin-top: 5rem;
  margin-bottom: 5rem;
  max-width: 600px;
  padding: 2rem;
  background-color: burlywood;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const H1 = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
`;

export const Hr = styled.hr`
  border: none;
  height: 1px;
  background-color: #ccc;
  margin-bottom: 2rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 1rem;
  font-weight: bold;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;

  &:focus {
    outline: none;
    border-color: #0077cc;
  }

  &:invalid {
    border-color: #cc0000;
  }
`;

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;

  &:focus {
    outline: none;
    border-color: #0077cc;
  }

  &:invalid {
    border-color: #cc0000;
  }
`;

export const Button = styled.button`
  background-color: #0077cc;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #005fa3;
  }
`;

export const ErrorMessage = styled.div`
  color: #cc0000;
  font-size: 0.8rem;
  margin-top: 0.2rem;
`;
