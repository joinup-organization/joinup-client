import { axiosAdapter } from '../adapters/axios/axios.adapter'
import { IProject } from '../components/Project/Project.model'

export const listProjects = async () => {
  return await axiosAdapter.get<IProject[]>('listProjects')
}

export const getProject = async (id: string) => {
  return await axiosAdapter.get<IProject>(`getProject?id=${id}`)
}
