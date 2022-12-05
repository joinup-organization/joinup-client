/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react'
import { IonSkeletonText } from '@ionic/react'
import { SkeletonContainer } from '../Answers/Answers.style'

const AnswersSkeleton = () => {
  return (
        <SkeletonContainer>
            <IonSkeletonText animated={true} style={{ width: '100%', height: '110px', borderRadius: '10px', marginBottom: '10px' }}></IonSkeletonText>
            <IonSkeletonText animated={true} style={{ width: '100%', height: '110px', borderRadius: '10px', marginBottom: '10px' }}></IonSkeletonText>
            <IonSkeletonText animated={true} style={{ width: '100%', height: '110px', borderRadius: '10px', marginBottom: '10px' }}></IonSkeletonText>
            <IonSkeletonText animated={true} style={{ width: '100%', height: '110px', borderRadius: '10px', marginBottom: '10px' }}></IonSkeletonText>
            <IonSkeletonText animated={true} style={{ width: '100%', height: '110px', borderRadius: '10px', marginBottom: '10px' }}></IonSkeletonText>
            <IonSkeletonText animated={true} style={{ width: '100%', height: '110px', borderRadius: '10px', marginBottom: '10px' }}></IonSkeletonText>
            <IonSkeletonText animated={true} style={{ width: '100%', height: '110px', borderRadius: '10px', marginBottom: '10px' }}></IonSkeletonText>
            <IonSkeletonText animated={true} style={{ width: '100%', height: '110px', borderRadius: '10px', marginBottom: '10px' }}></IonSkeletonText>
            <IonSkeletonText animated={true} style={{ width: '100%', height: '110px', borderRadius: '10px', marginBottom: '10px' }}></IonSkeletonText>
        </SkeletonContainer>
  )
}

export default AnswersSkeleton
