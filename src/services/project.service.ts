import { IProject } from '../components/Project/Project.model'
import { IHttpClient, IResponseData } from '../model/http.model'

export default class ProjectService {
  constructor (private readonly httpClient: IHttpClient) {}

  public listProjects = async () => {
    return await this.httpClient.get<IResponseData<IProject>>('/listProjects')
  }
}
