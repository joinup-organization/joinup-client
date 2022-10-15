/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect, useState } from 'react'
import Project from '../../components/Project/Project.component'
import { IProjectComponent } from '../../components/Project/Project.model'
import ProjectSkeleton from '../../components/Project/Project.skeleton'
import SearchBarComponent from '../../components/SearchBar/SearchBar.component'
import { listProjects } from '../../services/project.service'
import { HomeContainer, ProJectContainer, Title } from './Home.style'

const Home = () => {
  const [projects, setProjects] = useState<IProjectComponent[]>([])

  useEffect(() => {
    const getProjects = async () => {
      setProjects(await listProjects())
    }
    getProjects()
  }, [])

  const params = {
    placeHolder: 'Busque aqui'
  }

  return (
    <HomeContainer>
        <Title>JOIN IN</Title>
        <SearchBarComponent {...params}/>
        <ProJectContainer>
           { projects.length ? projects.map((project, index) => <Project { ...project } key={index}/>) : <ProjectSkeleton count={3}/>}
        </ProJectContainer>
    </HomeContainer>
  )
}

export default Home
