import styled from 'styled-components'
import { TerciaryText } from '../../global.style'

export const AnswerContainer = styled.div`
    height: 100%;
    width: 100%;
    padding-top: 27px;
`

export const AnswerBox = styled.div`
    width: 100%;
    padding: 0 27px;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
`

export const VacancyName = styled(TerciaryText)`
    margin-top: 15px;
    margin-bottom: 25px;
    font-weight: bold;
`

export const MessageData = styled.p`
    margin-top: 15px;
    font-size: 14px;
    color: gray;
`

export const SkeletonContainer = styled.div`
    padding: 15px 27px;
`
