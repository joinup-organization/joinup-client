import Popup from 'reactjs-popup';
import styled from 'styled-components'

export const PopupTitle = styled.h3`
  font-size: 1.15rem;
  text-align: center;
  margin: 2rem 0;
`;

export const DivButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 15px;
  padding: 2px 18px;
`;

export const ConfirmationBtn = styled(Btn)`
  background: var(--ion-color-success);
`;

export const CancelBtn = styled(Btn)`
  background: var(--ion-color-danger);
`;

export const Close = styled(Btn)`
  margin-left: auto;
`;

export const StyledPopup = styled(Popup)`
  &-content {
    margin: auto;
    background: rgb(255, 255, 255);
    width: 50%;
    padding: 1rem;
    border-radius: 15px;
    -webkit-animation: anvil 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9) forwards;

    @media (max-width: 768px) {
      width: 90%;
    }
  }

  &-arrow {
    color: rgb(255, 255, 255);
  }

  [role='tooltip']&-content {
    width: 200px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 3px;
  }

  &-overlay {
    background: rgba(0, 0, 0, 0.5);
  }

  [data-popup='tooltip']&-overlay {
    background: transparent;
  }

  @keyframes anvil {
    0% {
      transform: scale(1) translateY(0px);
      opacity: 0;
      box-shadow: 0 0 0 rgba(241, 241, 241, 0);
    }
    1% {
      transform: scale(0.96) translateY(10px);
      opacity: 0;
      box-shadow: 0 0 0 rgba(241, 241, 241, 0);
    }
    100% {
      transform: scale(1) translateY(0px);
      opacity: 1;
      box-shadow: 0 0 500px rgba(241, 241, 241, 0);
    }
  }
`;