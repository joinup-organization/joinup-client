import React from 'react'
import { TerciaryText } from '../../global.style'
import { DefaultRoutingButton } from '../DefaultButton/DefaultButton.style'
import { EnterpriseInline } from '../EnterpriseInline/EnterpriseInline.component'
import { IAppliedProjectsComponent } from './AppliedProjects.model'
import { ProjectContainer, TopContent } from './AppliedProjects.style'

const Appliedproject = ({ id, name, enterprise }: IAppliedProjectsComponent) => {
  return (
    <ProjectContainer>
      <TopContent>
        <TerciaryText color='black'>{name}</TerciaryText>
        <DefaultRoutingButton routerLink={`/project/${id}`}>
          Veja mais
        </DefaultRoutingButton>
      </TopContent>
      <EnterpriseInline {...enterprise}/>
    </ProjectContainer>
  )
}

export default Appliedproject
