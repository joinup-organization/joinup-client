import axios from 'axios'
import { environment } from '../environment/environment'

export const enrollVacancy = async (vacancyId: string, userId: string, projectId: string) => {
  return await axios.post(`${environment.baseURL}/enrollVacancy`, {
    vacancyId,
    userId,
    projectId
  })
}
