/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState } from 'react'
import { AuthService } from '../../services/auth.service'
import { enrollVacancy } from '../../services/vacancy.service'
import { ApplyButton } from '../Vacancy/Vacancy.style'
import { CancelBtn, Close, ConfirmationBtn, DivButtons, PopupTitle, StyledPopup } from './PopupApplyProject.style'

const PopupApplyProject = ({ color, projectId, id, notify, setIsLoading }: {color: string, projectId: string, id: string, notify: any, setIsLoading: any}) => {
  const [open, setOpen] = useState(false)

  // Functions
  const closeModal = () => setOpen(false)

  const onConfirmation = async () => {
    setIsLoading(true)
    closeModal()
    const authService = new AuthService()
    try {
      await enrollVacancy(id, authService.getCurrentUser?.uid!, projectId)
      setIsLoading(false)
      notify('success', 'Aplicado com sucesso', { position: 'bottom-center' })
    } catch (error) {
      console.log((error as any).response.data.message)
      setIsLoading(false)
      notify('error', (error as any).response.data.message, { position: 'bottom-center' })
    }
  }

  function onCancel () {
    closeModal()
  }

  return (
        <div>
            <ApplyButton color={color} onClick={() => setOpen((o) => !o)}>Aplicar</ApplyButton>
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
