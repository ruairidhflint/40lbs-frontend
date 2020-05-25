import React from 'react';
import styled from 'styled-components';

function AddModal(props) {
  const closeModal = () => {
    props.setModalVisible(false);
  };

  const closeOnOutsideClick = (e) => {
    if (e.target.className !== 'modal') {
      closeModal();
    }
  };
  return (
    <StyledAddModal onClick={closeOnOutsideClick} visible={props.visible}>
      <div className="modal"></div>
    </StyledAddModal>
  );
}

const StyledAddModal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 5, 0.5);
  position: absolute;
  top: 0px;
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
  display: ${(props) => (props.visible ? 'display' : 'none')};

  .modal {
    width: 40vw;
    height: 50vh;
    background-color: ${(props) => props.theme.white};
    border-radius: 3px;
  }
`;

export default AddModal;
