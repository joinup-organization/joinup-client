import { IonRouterLink } from '@ionic/react'
import styled from 'styled-components'

export const DefaultRoutingButton = styled(IonRouterLink)`
    color: white;
    font-size: 15px;
    font-weight: 500;
    background-color: ${props => props.color ?? 'var(--ion-color-primary)'};
    border-radius: 100px;
    padding: 4px 16px;
    min-width: fit-content;
    max-height: 30px;
`

export const DefaultButton = styled.button`
    color: white;
    font-size: 15px;
    font-weight: 500;
    background-color: ${props => props.color ?? 'var(--ion-color-primary)'};
    border-radius: 100px;
    padding: 4px 16px;
    min-width: fit-content;
    max-width: fit-content;
    max-height: 30px;
`
