/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react'
import Project from '../../components/Project/Project.component'
import { IProjectComponent } from '../../components/Project/Project.model'
import ProjectService from '../../services/project.service'
import { HomeContainer } from './Home.style'

const [projects, setProjects] = useState<IProjectComponent[]>([])

useEffect(async (projectService = new ProjectService()) => {
  const res = await projectService.listProjects()
  setProjects(res.data)
}, [])

const Home = () => {
  return (
    <HomeContainer>
        {projects.map(project => <Project { ...project }/>)}
    </HomeContainer>
  )
}

export default Home
