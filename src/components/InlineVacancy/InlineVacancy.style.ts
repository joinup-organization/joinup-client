import { IonIcon, IonRouterLink } from '@ionic/react'
import styled from 'styled-components'

export const NavContainer = styled(IonRouterLink)`
    width: 100%;
`

export const Container = styled.div`
    display: flex;
    gap: 20px;
    padding: 8px 0;
    align-items: center;
`
export const VacancyName = styled.p`
    font-size: 19px;
    font-weight: 500;
`

export const VacancyIcon = styled.div`
    background-color:  ${props => props.color ?? 'none'};
    margin: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
`

export const Icon = styled(IonIcon)`
    color: white;
    font-size: 20px;
`
