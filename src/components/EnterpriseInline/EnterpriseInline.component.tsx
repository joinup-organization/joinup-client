import { IonRouterLink } from '@ionic/react'
import React from 'react'
import { TerciaryText } from '../../global.style'
import { IProjectEnterprise } from '../../model/enterprise.model'
import { EnterpriseDiv, EnterpriseInlineContainer, EnterprisePhoto } from './EnterpriseInline.style'

export const EnterpriseInline = ({ name, id, photo }: IProjectEnterprise) => {
  return (
        <IonRouterLink routerLink={`enterprise/${id}`}>
            <EnterpriseInlineContainer>
                <EnterpriseDiv>
                    <EnterprisePhoto src={photo} />
                </EnterpriseDiv>
                <TerciaryText color='black'>{name}</TerciaryText>
            </EnterpriseInlineContainer>
        </IonRouterLink>
  )
}
