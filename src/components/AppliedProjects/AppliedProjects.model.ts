import { IProjectEnterprise } from '../../model/enterprise.model'

export interface IAppliedProjectsComponent {
  readonly id: string
  readonly name: string
  readonly enterprise: IProjectEnterprise
}
