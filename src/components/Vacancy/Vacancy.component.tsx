import { IonIcon } from '@ionic/react'
import React from 'react'
import { EVacancyLevel, IPersonalizedVacancy } from './Vacancy.model'
import { ContentContainer, TitleContainer, VacancyContainer, VacancyDescription, VacancyLevel, VacancyNeeds, VacancyTitle } from './Vacancy.style'
import { timeOutline, schoolOutline, walletOutline } from 'ionicons/icons'
import { Text } from '../../global.style'
import { vacancyColor } from '../../util/Vacancy.util'
import PopupApplyProject from '../PopupApplyProject/PopupApplyProject.component'

const VacancyComponent = ({ name, level, description, experienceYears, salaryRange, higherEducation, type, id, projectId, notify, setIsLoading }: IPersonalizedVacancy) => {
  const levelColor = () => {
    const color = {
      [EVacancyLevel.intern]: '#e4e4e4',
      [EVacancyLevel.trainee]: '#afafaf',
      [EVacancyLevel.junior]: '#8d8d8d',
      [EVacancyLevel.middle]: '#5c5c5c',
      [EVacancyLevel.senior]: '#4b4b4b',
      [EVacancyLevel.specialist]: '#272727'
    }

    return color[level]
  }

  const inlineVacancyNeeds = (text: string, icon: string) => (
        <VacancyNeeds>
            <IonIcon icon={icon} />
            <Text>{text}</Text>
        </VacancyNeeds>
  )

  return (
        <VacancyContainer>
            <ContentContainer>
                <TitleContainer>
                    <VacancyTitle>{name}</VacancyTitle>
                    <VacancyLevel color={levelColor()}>{level}</VacancyLevel>
                </TitleContainer>
                <VacancyDescription>{description}</VacancyDescription>
                {inlineVacancyNeeds(experienceYears === 0 ? 'Não é necessário' : `${experienceYears} anos de experiência`, timeOutline)}
                {inlineVacancyNeeds(higherEducation ? 'Superior completo' : 'Não é necessário', schoolOutline)}
                {inlineVacancyNeeds(`Faixa salarial: R$ ${salaryRange.min} - R$ ${salaryRange.max}`, walletOutline)}
            </ContentContainer>
            <PopupApplyProject color={vacancyColor(type)} id={id} projectId={projectId} notify={notify} setIsLoading={setIsLoading}/>
        </VacancyContainer>
  )
}

export default VacancyComponent
