import React from 'react'
import { SubTitle, TerciaryText } from '../../global.style'
import { Button } from '../DefaultButton/DefaultButton.style'
import { IProjectComponent } from './Project.model'
import { Description, ProjectContainer, TopContent, ViewMoreButton } from './Project.style'

const Project = ({ name, enterpriseName, description, vacancies }: IProjectComponent) => {
  return (
        <ProjectContainer>
          <TopContent>
            <SubTitle>{name}</SubTitle>
            <Button>Veja mais</Button>
            <ViewMoreButton>Veja mais</ViewMoreButton>
            {/* <IonButton>Veja mais</IonButton> */}
          </TopContent>
            <TerciaryText>{enterpriseName}</TerciaryText>
            <Description>{description}</Description>
        </ProjectContainer>
  )
}

export default Project
