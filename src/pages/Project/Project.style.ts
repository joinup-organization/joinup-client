import styled from 'styled-components'
import { IonIcon } from '@ionic/react'
import { MainTitle, SubTitle } from '../../global.style'

export const ProjectContainer = styled.div`
    padding: 27px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--page-background);
    overflow: scroll;
`

export const ProjectTitle = styled(MainTitle)`
    margin-top: 20px;
`

export const ProjectSubTitle = styled(SubTitle)`
    margin-top: 15px;
    margin-bottom: 5px;
`

export const BenefitsComponent = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 7px;
`

export const BenefitIcon = styled(IonIcon)`
    font-size: 20px;
`
