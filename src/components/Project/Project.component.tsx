import React from 'react'
import { SubTitle, TerciaryText } from '../../global.style'
import { DefaultRoutingButton } from '../DefaultButton/DefaultButton.style'
import InlineVacancy from '../InlineVacancy/InlineVacancy.component'
import { IProjectComponent } from './Project.model'
import { Description, MoreVacanciesLinkDiv, ProjectContainer, TopContent, VacanciesContainer, MoreVacanciesLink } from './Project.style'

const Project = ({ name, enterprise, description, id, vacancies }: IProjectComponent) => {
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
            <DefaultRoutingButton routerLink={`/project/${id}`}>
              Veja mais
            </DefaultRoutingButton>
          </TopContent>
            <TerciaryText>{enterprise.name}</TerciaryText>
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
