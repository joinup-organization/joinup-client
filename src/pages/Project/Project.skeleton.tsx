/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react'
import { IonSkeletonText } from '@ionic/react'
import { SkeletonContainer } from './Project.style'

const ProjectSkeleton = () => {
  return (
        <SkeletonContainer>
            <IonSkeletonText animated={true} style={{ width: '65%', height: '38px', borderRadius: '10px', marginBottom: '28px' }}></IonSkeletonText>
            <IonSkeletonText animated={true} style={{ width: '100%', height: '60px', borderRadius: '10px', marginBottom: '20px' }}></IonSkeletonText>
            <IonSkeletonText animated={true} style={{ width: '40%', height: '28px', borderRadius: '10px', marginBottom: '12px' }}></IonSkeletonText>
            <IonSkeletonText animated={true} style={{ width: '100%', height: '450px', borderRadius: '10px', marginBottom: '1.5rem' }}></IonSkeletonText>
            <IonSkeletonText animated={true} style={{ width: '40%', height: '28px', borderRadius: '10px', marginBottom: '12px' }}></IonSkeletonText>
            <IonSkeletonText animated={true} style={{ width: '100%', height: '250px', borderRadius: '10px', marginBottom: '1.5rem' }}></IonSkeletonText>
        </SkeletonContainer>
  )
}

export default ProjectSkeleton
