import { IonRouterLink } from '@ionic/react'
import styled from 'styled-components'
import { Text } from '../../global.style'

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0;
  position: relative;
`

export const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Description = styled(Text)`
  margin-top: 14px;
  text-overflow: ellipsis;
  display: -webkit-box;
   -webkit-line-clamp: 7;
           line-clamp: 7; 
   -webkit-box-orient: vertical;
   overflow: hidden;
`

export const VacanciesContainer = styled.div`
  margin-top: 15px;
`

export const MoreVacanciesLinkDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  color: #007AFF;
`

export const MoreVacanciesLink = styled(IonRouterLink)`
  color: var(--ion-color-primary);
`
