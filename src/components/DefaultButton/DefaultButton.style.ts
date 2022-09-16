import styled from 'styled-components'

export const Button = styled.button`
    background-color: ${props => props.theme.bgColor ?? '#E4EDEF'};
    border-radius: 10px;
    padding: 7px 12px;
`
