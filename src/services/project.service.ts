/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { axiosAdapter } from '../adapters/axios/axios.adapter'
import { IProject } from '../components/Project/Project.model'

export const listProjects = async () => {
  return await axiosAdapter.get<IProject[]>('listProjects')
}

export const getProject = async (id: string) => {
  return await axiosAdapter.get<IProject>(`getProject?id=${id}`)
}

export const getUserProjectEnroll = async (userId: string) => {
  return await axiosAdapter.get<IProject[]>(`getUserProjectEnroll?id=${userId}`)
}
