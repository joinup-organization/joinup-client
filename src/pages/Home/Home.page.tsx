/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react'
import Project from '../../components/Project/Project.component'
import { IProjectComponent } from '../../components/Project/Project.model'
import { MainTitle } from '../../global.style'
import { listProjects } from '../../services/project.service'
import { HomeContainer } from './Home.style'

const Home = () => {
  const [projects, setProjects] = useState<IProjectComponent[]>([])

  useEffect(() => {
    const getProjects = async () => {
      setProjects(await listProjects())
    }
    getProjects()
  }, [])

  return (
    <HomeContainer>
        <MainTitle>JOIN IN</MainTitle>
        { projects.length ? projects.map(project => <Project { ...project }/>) : 'Carregando'}
    </HomeContainer>
  )
}

export default Home
