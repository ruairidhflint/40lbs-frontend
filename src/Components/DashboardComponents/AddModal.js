import React, { useState } from 'react';
import styled from 'styled-components';

import Spinner from '../Reusables/Spinner';

function AddModal(props) {
  const [inputValue, setInputValue] = useState('');

  const closeModal = () => {
    props.setModalVisible(false);
    setInputValue('');
  };

  const closeOnOutsideClick = (e) => {
    if (e.target.className === 'container') {
      closeModal();
    }
  };

  const submit = (e) => {
    e.preventDefault();
    props.addNewWeight(inputValue);
  };

  if (props.modalSpinning) {
    return (
      <StyledAddModal onClick={closeOnOutsideClick} visible={props.visible}>
        <div className="container">
          <div className="modal">
            <Spinner />
          </div>
        </div>
      </StyledAddModal>
    );
  }

  return (
    <StyledAddModal
      onClick={closeOnOutsideClick}
      visible={props.visible}
      error={props.modalError}
    >
      <div className="container">
        <form onSubmit={submit} className="modal">
          <div className="title">
            <h3>Log a new weight</h3>
          </div>
          <div className="input">
            <input
              type="number"
              step="0.1"
              name="new-weight"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={
                props.modalError
                  ? 'There was an error. Please try again.'
                  : null
              }
              required
            />
          </div>
          <div className="buttons">
            <button onClick={closeModal} className="cancel">
              Cancel
            </button>
            <button className="submit">Submit</button>
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

      @media (max-width: 1000px) {
        width: 50vw;
      }

      @media (max-width: 800px) {
        width: 60vw;
      }

      @media (max-width: 650px) {
        width: 75vw;
      }

      @media (max-width: 500px) {
        width: 85vw;
      }

      @media (max-width: 400px) {
        width: 95vw;
        height: 40vh;
      }

      .title {
        width: 100%;
        height: 25%;
        display: flex;
        justify-content: center;
        align-items: center;

        h3 {
          font-size: 1.6rem;
        }
      }

      .input {
        width: 100%;
        height: 42%;
        display: flex;
        justify-content: center;
        align-items: center;

        input {
          display: block;
          width: 90%;
          height: 3em;
          border-radius: 4px;
          background-color: ${(props) => props.theme.background};
          font-size: 1.2rem;
          padding-left: 1rem;
          border: ${(props) =>
            props.error ? '2px solid red' : '2px solid white'};
          border-radius: 4px;
          transition: background-color 0.3s ease-in-out;

          ::placeholder {
            font-size: 0.9rem;
            color: ${(props) => props.theme.red};
          }

          @media (max-width: 400px) {
            width: 85%;
          }

          :focus {
            outline: none;
            border: 2px solid ${(props) => props.theme.mainBlue};
            border-radius: 4px;
          }

          :hover {
            background-color: ${(props) => props.theme.backgroundSecondary};
            transition: background-color 0.3s ease-in-out;
          }
        }
      }

      .buttons {
        width: 92%;
        height: 33%;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        button {
          border: none;
          height: 2.5rem;
          width: 7rem;
          margin-left: 0.7rem;
          cursor: pointer;
          border-radius: 4px;
          font-size: 1rem;
          color: ${(props) => props.theme.white};

          &.cancel {
            background-color: none;
            color: ${(props) => props.theme.mainText};
            transition: color 0.2s ease-in-out;

            :hover {
              color: ${(props) => props.theme.red};
              transition: color 0.2s ease-in-out;
            }
          }

          &.submit {
            background-color: ${(props) => props.theme.green};
            transition: all 0.2s ease-in-out;

            :hover {
              opacity: 0.8;
              transform: scale(1.05);
              transition: all 0.2s ease-in-out;
            }
          }
        }
      }
    }
  }
`;

export default AddModal;
