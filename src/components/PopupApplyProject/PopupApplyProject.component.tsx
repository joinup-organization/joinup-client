import React, { useState } from 'react';
import { Btn, CancelBtn, Close, ConfirmationBtn, DivButtons, PopupTitle, StyledPopup } from './PopupApplyProject.style';

const PopupApplyProject = () => {
  const [open, setOpen] = useState(false);
  
  // Functions
  const closeModal = () => setOpen(false);
  
  function onConfirmation() {
    console.log('Confirmado!');
    closeModal();
  }

  function onCancel() {
    console.log('Cancelado!');
    closeModal();
  }

  return (
    <div>
      <Btn onClick={() => setOpen(o => !o)}>
        Open Modal
      </Btn>
      <StyledPopup open={open} closeOnDocumentClick onClose={closeModal}>
        <div>
          <Close onClick={closeModal}>&times;</Close>

          <div>
            <PopupTitle>Você certeza que deseja aplicar-se para vaga?</PopupTitle>

            <DivButtons>
              <ConfirmationBtn onClick={onConfirmation}>Sim</ConfirmationBtn>
              <CancelBtn onClick={onCancel}>Cancelar</CancelBtn>
            </DivButtons>
          </div>
        </div>
      </StyledPopup>
    </div>
  )
}

export default PopupApplyProject