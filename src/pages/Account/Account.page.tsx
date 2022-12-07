import { IonRouterLink } from '@ionic/react'
import React from 'react'
import { MainTitle } from '../../global.style'
import { AccountContainer, AccountItemContainer, ItemList } from './Account.style'

const AccountPage = () => {
  const AccountOption = ({ title, link }: { title: string, link: string }) => {
    return (
            <IonRouterLink routerLink={link}>
                <AccountItemContainer>{title}</AccountItemContainer>
            </IonRouterLink>
    )
  }

  return (
        <AccountContainer>
            <MainTitle>Minha conta</MainTitle>
            <ItemList>
                <AccountOption title="Alterar cadastro" link=''/>
                <AccountOption title="Entrar" link='login'/>
                <AccountOption title="Sair" link='login'/>
            </ItemList>
        </AccountContainer>
  )
}

export default AccountPage
