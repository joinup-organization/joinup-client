import { axiosAdapter } from '../adapters/axios/axios.adapter'
import { IAnswer } from '../model/answers.model'

export const getAnswers = async (userId: string) => {
  return await axiosAdapter.get<IAnswer[]>(`getAnswers?userId=${userId}`)
}
