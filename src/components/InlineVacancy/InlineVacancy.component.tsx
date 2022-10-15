import React from 'react'
import { IVacancy } from '../Vacancy/Vacancy.model'
import { Container, Icon, NavContainer, VacancyIcon, VacancyName } from './InlineVacancy.style'
import { codeOutline } from 'ionicons/icons'
import { vacancyColor } from '../../util/Vacancy.util'

const InlineVacancy = ({ name, type, projectId }: Pick<IVacancy, 'name' | 'type' | 'projectId'>) => {
  return (
    <NavContainer routerLink={`/project/${projectId}`}>
        <Container>
            <VacancyIcon color={vacancyColor(type)}>
                <Icon icon={codeOutline}/>
            </VacancyIcon>
            <VacancyName>{name}</VacancyName>
        </Container>
    </NavContainer>
  )
}

export default InlineVacancy
