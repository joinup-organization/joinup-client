import styled from 'styled-components'
import { Text } from '../../global.style'

export const VacancyContainer = styled.div`
    width: 100%;
    border-radius: 15px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.05);
    background: white;
`

export const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
`

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`

export const VacancyLevel = styled.div`
    color: white;
    padding: 2px 18px;
    border-radius: 15px;
    background-color: ${(props) => props.color ?? 'none'};
    min-width: fit-content;
`

export const VacancyTitle = styled(Text)`
    font-weight: bold;
`

export const VacancyDescription = styled(Text)`
    color: #818181;
    margin-bottom: 20px;
`

export const VacancyNeeds = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 7px;
`

export const ApplyButton = styled.button`
    width: 100%;
    color: white;
    border-radius: 0 0 15px 15px;
    background-color: ${(props) => props.color ?? 'none'};
    font-size: 15px;
    padding: 8px 0;
`
