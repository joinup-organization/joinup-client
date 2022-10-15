import React from 'react'
import { SubTitle, TerciaryText } from '../../global.style'
import { DefaultButton } from '../DefaultButton/DefaultButton.style'
import InlineVacancy from '../InlineVacancy/InlineVacancy.component'
import { IProjectComponent } from './Project.model'
import { Description, MoreVacanciesLinkDiv, ProjectContainer, TopContent, VacanciesContainer, MoreVacanciesLink } from './Project.style'

const Project = ({ name, enterpriseName, description, id, vacancies }: IProjectComponent) => {
  const vacanciesList = vacancies.map((vacancy, index) => {
    if (index >= 3) {
      return null
    }
    const adaptVacancie = { ...vacancy, projectId: id }
    return (<InlineVacancy { ...adaptVacancie } key={index}/>)
  })

  return (
        <ProjectContainer>
          <TopContent>
            <SubTitle>{name}</SubTitle>
            <DefaultButton routerLink={`/project/${id}`}>
              Veja mais
            </DefaultButton>
          </TopContent>
            <TerciaryText>{enterpriseName}</TerciaryText>
            <Description>{description}</Description>
            <VacanciesContainer>
              {vacanciesList}
            </VacanciesContainer>
            <MoreVacanciesLinkDiv>
              { vacancies.length > 3 ? <MoreVacanciesLink routerLink={`/project/${id}`}>Mais {vacancies.length - 3} vagas...</MoreVacanciesLink> : null }
            </MoreVacanciesLinkDiv>
        </ProjectContainer>
  )
}

export default Project
