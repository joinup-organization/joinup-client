import { IonSkeletonText } from '@ionic/react'
import React from 'react'
import { SkeletonContainer } from './Answer.style'

const AnswerSkeleton = () => {
  return (
        <SkeletonContainer>
            <IonSkeletonText animated={true} style={{ width: '100%', height: '60px', borderRadius: '10px', marginBottom: '20px' }}></IonSkeletonText>
            <IonSkeletonText animated={true} style={{ width: '65%', height: '38px', borderRadius: '10px', marginBottom: '28px' }}></IonSkeletonText>
            <IonSkeletonText animated={true} style={{ width: '100%', height: '450px', borderRadius: '10px', marginBottom: '1.5rem' }}></IonSkeletonText>
        </SkeletonContainer>
  )
}

export default AnswerSkeleton
