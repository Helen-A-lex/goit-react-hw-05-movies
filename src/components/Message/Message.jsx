import styled from 'styled-components';

export const Text = styled.div`
  font-size: 25px;
  color: black;
  font-weight:600;
  padding:10px;
  
`;
export const Message = ({children}) => {
    return <Text>{children}</Text>;
};
