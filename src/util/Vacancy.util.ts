import { EVacancyType } from '../components/Vacancy/Vacancy.model'

export const vacancyColor = (type: EVacancyType) => {
  const color = {
    [EVacancyType.frontend]: '#FF9500',
    [EVacancyType.backend]: '#FF001F',
    [EVacancyType.agile]: '#764aa8',
    [EVacancyType.database]: '#3c5b8a',
    [EVacancyType.devops]: '#54bd8c',
    [EVacancyType.qa]: '#eef08a',
    [EVacancyType.techlead]: '#e6b77b'
  }

  return color[type]
}
