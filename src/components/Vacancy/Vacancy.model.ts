
export interface IProjectVacancy {
  readonly id: string
  readonly name: string
  readonly level: TVacancyLevel
  readonly description: string
  readonly experienceYears: number
  readonly higherEducation: boolean
  readonly salaryRange: {
    readonly min: number
    readonly max: number
  }
}

export interface IVacancy extends IProjectVacancy {
  readonly projectId: string
}

export type TVacancyLevel = 'intern' | 'trainee' | 'junior' | 'middle' | 'senior' | 'specialist'
