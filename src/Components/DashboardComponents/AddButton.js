import React from 'react';
import styled from 'styled-components';

function AddButton({ setModalVisible }) {
  return (
    <StyledTestButton onClick={setModalVisible}>
      <span>+</span>
    </StyledTestButton>
  );
}

const StyledTestButton = styled.div`
  width: 3.6rem;
  height: 3.6rem;
  background-color: ${(props) => props.theme.green};
  border-radius: 8%;
  position: absolute;
  z-index: 2;
  bottom: 20px !important;
  right: 15px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.07);
  opacity: 0.7;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  :hover {
    opacity: 1;
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
  }

  span {
    color: ${(props) => props.theme.white};
    font-size: 2.7rem;
    padding: 0 0 0.5rem 0;
    margin: 0;
  }
`;

export default AddButton;
