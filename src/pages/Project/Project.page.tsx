/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import HeaderNav from '../../components/HeaderNav/HeaderNav.component'
import { IProject } from '../../components/Project/Project.model'
import { Text } from '../../global.style'
import { getProject } from '../../services/project.service'
import { BenefitsComponent, ProjectContainer, ProjectSubTitle, ProjectTitle, BenefitIcon, LoaderContainer } from './Project.style'
import { homeOutline, fastFoodOutline, busOutline } from 'ionicons/icons'
import VacancyComponent from '../../components/Vacancy/Vacancy.component'
import { EnterpriseInline } from '../../components/EnterpriseInline/EnterpriseInline.component'
import ProjectSkeleton from './Project.skeleton'
import { ToastContainer, toast, ToastOptions } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { IonLoading } from '@ionic/react'

const ProjectPage: React.FC<RouteComponentProps<{id: string}>> = ({ match, history }) => {
  const [project, setProject] = useState<IProject | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const notify = (type: 'success' | 'error', message: string, options: ToastOptions) => {
    if (type === 'success') {
      return toast.success(message, options)
    }
    return toast.error(message, options)
  }

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
      {project?.vacancies ? project.vacancies.map((vacancy, index) => <VacancyComponent setIsLoading={setIsLoading} notify={notify} projectId={project.id} {...vacancy} key={index}/>) : null}
    </div>
  )

  const loader = (
    <LoaderContainer>
      <IonLoading
        isOpen={isLoading}
        message={'Carregando...'}
        duration={600000}
      />
    </LoaderContainer>
  )

  return (
    <ProjectContainer>
        <HeaderNav title='Projeto' goBack={history.goBack}/>
        {project ? projectPage : <ProjectSkeleton/>}
        <ToastContainer/>
        {isLoading ? loader : null}
    </ProjectContainer>
  )
}

export default ProjectPage
