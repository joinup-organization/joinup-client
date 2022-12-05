/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect, useState } from 'react'
import { getUserProjectEnroll } from '../../services/project.service'
import { IAppliedProjectsComponent } from '../../components/AppliedProjects/AppliedProjects.model'
import { AppliedProjectsContainer, Title, ProjectContainer } from './AppliedProjects.style'
import Appliedproject from '../../components/AppliedProjects/AppliedProjects.component'
import AnswersSkeleton from './AppliedProjects..skeleton'

const AppliedProjects = () => {
  const [appliedProjects, setProjects] = useState<IAppliedProjectsComponent[]>([])

  useEffect(() => {
    const getProjects = async () => {
      setProjects(await getUserProjectEnroll('CZjxQBI5mSYrLW4Zn0LuZRiLXlo2'))
    }
    getProjects()
  }, [])

  return (
    <AppliedProjectsContainer>
      <Title>Seus projetos</Title>
      <ProjectContainer>
        { appliedProjects.length ? appliedProjects.map((project, index) => <Appliedproject {...project} key={index}/>) : <AnswersSkeleton />}
      </ProjectContainer>
    </AppliedProjectsContainer>
  )
}

export default AppliedProjects
