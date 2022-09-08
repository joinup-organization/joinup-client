import React from 'react'
import { SubTitle, TerciaryText } from '../../global.style'
import { IProjectComponent } from './Project.model'
import { Description, ProjectContainer } from './Project.style'

const Project = ({ name, enterpriseName, description, vacancies }: IProjectComponent) => {
  return (
        <ProjectContainer>
            <SubTitle>{name}</SubTitle>
            <TerciaryText>{enterpriseName}</TerciaryText>
            <Description>{description}</Description>
        </ProjectContainer>
  )
}

export default Project
