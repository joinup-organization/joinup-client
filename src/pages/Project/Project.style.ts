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
    margin-bottom: 20px;
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

export const SkeletonContainer = styled.div`
    margin-top: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--page-background);
`

export const LoaderContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background: none;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`
