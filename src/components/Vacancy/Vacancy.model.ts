
export interface IProjectVacancy {
  readonly id: string
  readonly name: string
  readonly level: TVacancyLevel
  readonly type: EVacancyType
  readonly description: string
  readonly experienceYears: number
  readonly higherEducation: boolean
  readonly salaryRange: {
    readonly min: number
    readonly max: number
  }
}

export interface IPersonalizedVacancy extends IVacancy {
  notify: any
  setIsLoading: any
}

export interface IVacancy extends IProjectVacancy {
  readonly projectId: string
}

export type TVacancyLevel = 'intern' | 'trainee' | 'junior' | 'middle' | 'senior' | 'specialist'

export enum EVacancyLevel {
  'intern' = 'intern',
  'trainee' = 'trainee',
  'junior' = 'junior',
  'middle' = 'middle',
  'senior' = 'senior',
  'specialist' = 'specialist'
}

export enum EVacancyType {
  'frontend' = 'frontend',
  'backend' = 'backend',
  'devops' = 'devops',
  'database' = 'database',
  'agile' = 'agile',
  'techlead' = 'techlead',
  'qa' = 'qa'
}
