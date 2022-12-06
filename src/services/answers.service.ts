import { axiosAdapter } from '../adapters/axios/axios.adapter'
import { IAnswer } from '../model/answers.model'

export const getAnswers = async (userId: string) => {
  return await axiosAdapter.get<IAnswer[]>(`getAnswers?userId=${userId}`)
}

export const getAnswer = async (id: string) => {
  return await axiosAdapter.get<IAnswer>(`getAnswer?id=${id}`)
}
