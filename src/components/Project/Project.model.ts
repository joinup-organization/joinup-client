import { IProjectEnterprise } from '../../model/enterprise.model'
import { IGenericDatabase } from '../../model/generic.model'
import { IProjectVacancy } from '../Vacancy/Vacancy.model'

export interface IProjectComponent {
  readonly id: string
  readonly name: string
  readonly enterprise: IProjectEnterprise
  readonly description: string
  readonly vacancies: IProjectVacancy[]
}

export interface IProject extends IGenericDatabase, IProjectComponent {
  readonly POId: string
  readonly benefits?: {
    readonly transportationVoucher?: number
    readonly mealTicket?: number
    readonly homeOfficeVoucher?: number
  }
}
