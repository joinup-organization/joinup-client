import styled from 'styled-components'

export const AnswersLiContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
    box-sizing: border-box;
    height: fit-content;
    box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 2px 4px;
    padding: 15px 10px;
    border-radius: 10px;
`

export const Content = styled.div`
    flex-grow: 1;
`

export const DateContainer = styled.div`
    flex-direction: column;
`

export const EnterpriseProject = styled.p`
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 5px;
`
export const Message = styled.p`
    font-size: 14px;
    text-overflow: ellipsis;
  display: -webkit-box;
   -webkit-line-clamp: 2;
           line-clamp: 2; 
   -webkit-box-orient: vertical;
   overflow: hidden;
`

export const DateText = styled.p`
    font-size: 14px;
    color: var(--ion-color-medium);
`
