import React from 'react';
import styled from 'styled-components';

function AddModal(props) {
  const closeModal = () => {
    props.setModalVisible(false);
  };

  const closeOnOutsideClick = (e) => {
    if (e.target.className === 'container') {
      closeModal();
    }
  };
  return (
    <StyledAddModal onClick={closeOnOutsideClick} visible={props.visible}>
      <div className="container">
        <form className="modal">
          <div className="title">
            <h3>Log a new weight</h3>
          </div>
          <div className="input">
            <input type="number" step="0.1" name="new-weight" required />
          </div>
          <div className="buttons">
            <button>Cancel</button>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </StyledAddModal>
  );
}

const StyledAddModal = styled.div`
.container {
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
    height: 30vh;
    background-color: ${(props) => props.theme.white};
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      width: 100%;
      height: 20%;
      display: flex;
      justify-content: center;
      align-items: center;

      h3 {
        font-size: 1.6rem;
      }
    }

    .input {
      width: 100%;
      height: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      input {
        display: block;
        width: 90%;
        margin-bottom: 0.7rem;
        height: 3em;
        border: none;
        border-radius: 4px;
        background-color: ${(props) => props.theme.background};
        font-size: 1.2rem;
        padding-left: 1rem;
        border: 2px solid ${(props) => props.theme.white};
        border-radius: 4px;
        transition: background-color 0.3s ease-in-out;

        ::placeholder {
          font-size: 0.9rem;
          color: ${(props) => props.theme.red};
        }

        @media (max-width: 400px) {
          width: 100%;
        }

        :focus {
          outline: none;
          border: 2px solid ${(props) => props.theme.mainBlue};
          border-radius: 4px;
        }

        // :valid {
        //   border: 2px solid ${(props) => props.theme.green};
        // }

        :hover {
          background-color: ${(props) => props.theme.backgroundSecondary};
          transition: background-color 0.3s ease-in-out;
        }
      }
    }

    .buttons {
      width: 95%;
      height: 30%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
}
`;

export default AddModal;
