import styled from 'styled-components'
import { DefaultButton } from '../../components/DefaultButton/DefaultButton.style'

export const LoginContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 80px;
    align-items: center;
    gap: 20px;
`
export const LoginImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
`
export const LoginImage = styled.img`
    width: 200px;
    height: 200px;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    padding: 0 37px;
    width: 100%;
    align-items: center;
    gap: 10px;
`

export const SubmitButton = styled(DefaultButton)`
    margin-top: 10px;
    min-height: 30px;
    min-width: 100px;
    font-size: 16px;
`
