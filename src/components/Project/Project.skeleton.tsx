/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react'
import { IonSkeletonText } from '@ionic/react'
import { VacanciesContainer } from './Project.style'

const generateArray = (count: number) => {
  const countArray = []
  for (let i = 0; i < count; i++) {
    countArray.push(i)
  }
  return countArray
}

const ProjectSkeleton = ({ count }: { count?: number }) => {
  const countArray = generateArray(count ?? 1)
  return (
    <>
      {countArray.map((key) => (
          <VacanciesContainer key={key}>
            { key === 0 ? null : <IonSkeletonText animated={true} style={{ width: '100%', height: '1px', borderRadius: '10px', marginBottom: '1.5rem' }}></IonSkeletonText>}
            <IonSkeletonText animated={true} style={{ width: '45%', height: '26px', borderRadius: '10px', marginBottom: '10px' }}></IonSkeletonText>
            <IonSkeletonText animated={true} style={{ width: '35%', height: '22px', borderRadius: '10px', marginBottom: '30px' }}></IonSkeletonText>
            <IonSkeletonText animated={true} style={{ width: '100%', height: '240px', borderRadius: '10px', marginBottom: '1.5rem' }}></IonSkeletonText>
        </VacanciesContainer>
      ))}
    </>
  )
}

export default ProjectSkeleton
