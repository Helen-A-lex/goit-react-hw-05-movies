import styled from 'styled-components';

export const Input = styled.input`
  width: 300px;
  height: 25px;
  border: 1px solid black;
  outline: transparent;

  &:focus {
    border-color: #03a9f4;
  }
`;
export const Button = styled.button`
  width: 50px;
  height: 29px;
  cursor: pointer;
  background-color: #f5f5f5;
  border: 1px solid #b1aeae;
  padding: 5px;
  font-size: 12px;
  font-weight: 600;

  &:hover,
  &:focus {
    background-color: #03a9f4;
    color: white;
    border: none;
  }
`;
export const Form = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
`;
