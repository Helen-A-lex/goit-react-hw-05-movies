import styled from 'styled-components';
import PropTypes from 'prop-types';
export const Text = styled.div`
  font-size: 20px;
  color: black;
  font-weight:600;
  padding:10px;
  
`;
export const Message = ({children}) => {
    return <Text>{children}</Text>;
};
Message.propTypes = {
  children: PropTypes.node.isRequired,
};