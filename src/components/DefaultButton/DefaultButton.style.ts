import { IonRouterLink } from '@ionic/react'
import styled from 'styled-components'

export const DefaultButton = styled(IonRouterLink)`
    color: white;
    font-size: 15px;
    font-weight: 500;
    background-color: ${props => props.theme.bgColor ?? 'var(--ion-color-primary)'};
    border-radius: 100px;
    padding: 4px 16px;
    min-width: fit-content;
    max-height: 30px;
`
