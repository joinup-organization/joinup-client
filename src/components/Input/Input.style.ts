import styled from 'styled-components'

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const FormInput = styled.input`
    background: white;
    border: 1px solid gray;
    padding: 5px;
    outline: none;
    width: 100%;
    border-radius: 5px;
`
export const ErrorMessage = styled.p`
    color: red;
    font-size: 12px;
    margin-top: 2px;
`
