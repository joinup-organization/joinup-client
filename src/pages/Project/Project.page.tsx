/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import HeaderNav from '../../components/HeaderNav/HeaderNav.component'
import { IProject } from '../../components/Project/Project.model'
import { Text } from '../../global.style'
import { getProject } from '../../services/project.service'
import { BenefitsComponent, ProjectContainer, ProjectSubTitle, ProjectTitle, BenefitIcon } from './Project.style'
import { homeOutline, fastFoodOutline, busOutline } from 'ionicons/icons'
import VacancyComponent from '../../components/Vacancy/Vacancy.component'
import { EnterpriseInline } from '../../components/EnterpriseInline/EnterpriseInline.component'

const ProjectPage: React.FC<RouteComponentProps<{id: string}>> = ({ match, history }) => {
  const [project, setProject] = useState<IProject | null>(null)

  useEffect(() => {
    const get = async () => {
      setProject(await getProject(match.params.id))
    }
    void get()
  }, [])

  // TODO: Passar para componente
  const benefitsComponent = (benefit: string, icon: string) => {
    return (
      <BenefitsComponent>
        <BenefitIcon icon={icon}/>
        <Text>{benefit}</Text>
      </BenefitsComponent>
    )
  }

  const projectPage = (
    <div>
      <ProjectTitle>{project?.name}</ProjectTitle>
      {project?.enterprise ? <EnterpriseInline {...project.enterprise}/> : null}
      <ProjectSubTitle>Descrição</ProjectSubTitle>
      <Text>{project?.description}</Text>
      <ProjectSubTitle>Benefícios</ProjectSubTitle>
      {project?.benefits?.homeOfficeVoucher ? benefitsComponent(`Auxílio home-office de R$ ${project?.benefits?.homeOfficeVoucher}`, homeOutline) : null}
      {project?.benefits?.mealTicket ? benefitsComponent(`Vale refeição de R$ ${project?.benefits?.mealTicket}`, fastFoodOutline) : null}
      {project?.benefits?.transportationVoucher ? benefitsComponent(`Vale transporte de R$ ${project?.benefits?.transportationVoucher}`, busOutline) : null}
      <ProjectSubTitle>Vagas</ProjectSubTitle>
      {project?.vacancies ? project.vacancies.map((vacancy, index) => <VacancyComponent projectId={project.id} {...vacancy} key={index}/>) : null}
    </div>
  )

  // TODO: Passar para componente
  const pageSkeleton = (
    <div>
      skeleton
    </div>
  )

  return (
    <ProjectContainer>
        <HeaderNav title='Projeto' goBack={history.goBack}/>
        {project ? projectPage : pageSkeleton}
    </ProjectContainer>
  )
}

export default ProjectPage
