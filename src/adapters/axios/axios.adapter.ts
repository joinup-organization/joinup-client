import axios from 'axios'
import { environment } from '../../environment/environment'

class AxiosAdapter {
  public readonly get = async <T>(endpoint: string) => {
    const response = (await axios.get(`${environment.baseURL}/${endpoint}`)).data
    return response.data as T
  }
}

export const axiosAdapter = new AxiosAdapter()
